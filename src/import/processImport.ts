import type { CollectionSlug, PayloadRequest } from 'payload'

import { detectFileFormat, parseCSV, parseJSON } from './parsers.js'

export interface ImportResult {
  success: boolean
  imported: number
  skipped: number
  errors: string[]
  updated: number
}

export interface ImportOptions {
  onDuplicateAction: 'skip' | 'replace'
}

export const processImport = async ({
  req,
  targetCollection,
  fileBuffer,
  filename,
  options,
}: {
  req: PayloadRequest
  targetCollection: CollectionSlug
  fileBuffer: Buffer
  filename: string
  options: ImportOptions
}): Promise<ImportResult> => {
  const result: ImportResult = {
    success: false,
    imported: 0,
    skipped: 0,
    errors: [],
    updated: 0,
  }

  try {
    // Detect file format
    const format = detectFileFormat(filename)
    if (format === 'unknown') {
      result.errors.push(`Unsupported file format. Expected .csv or .json, got: ${filename}`)
      return result
    }

    // Parse file based on format
    const parseResult = format === 'csv' 
      ? await parseCSV(fileBuffer)
      : await parseJSON(fileBuffer)

    if (parseResult.errors.length > 0) {
      result.errors.push(...parseResult.errors)
      return result
    }

    if (parseResult.data.length === 0) {
      result.errors.push('No data found in file')
      return result
    }

    // Get collection config to validate target collection exists
    const collection = req.payload.collections[targetCollection]
    if (!collection) {
      result.errors.push(`Target collection '${targetCollection}' not found`)
      return result
    }

    // Process each record
    for (const record of parseResult.data) {
      try {
        // Check for duplicates based on unique fields (usually id or slug)
        let existingDoc = null
        
        // Try to find existing document by id first
        if (record.id) {
          try {
            existingDoc = await req.payload.findByID({
              collection: targetCollection,
              id: record.id as string,
              req,
              overrideAccess: true,
            })
          } catch (error) {
            // Document doesn't exist, which is fine
          }
        }

        // If no id, try to find by slug if it exists
        if (!existingDoc && record.slug) {
          try {
            const existingDocs = await req.payload.find({
              collection: targetCollection,
              where: { slug: { equals: record.slug } },
              limit: 1,
              req,
              overrideAccess: true,
            })
            if (existingDocs.docs.length > 0) {
              existingDoc = existingDocs.docs[0]
            }
          } catch (error) {
            // Continue if query fails
          }
        }

        // Handle duplicates based on onDuplicateAction
        if (existingDoc) {
          if (options.onDuplicateAction === 'skip') {
            result.skipped++
            continue
          } else if (options.onDuplicateAction === 'replace') {
            // Update existing document
            const cleanRecord = { ...record }
            delete cleanRecord.id // Remove id to prevent conflicts during update
            
            await req.payload.update({
              collection: targetCollection,
              id: existingDoc.id,
              data: cleanRecord,
              req,
              overrideAccess: true,
            })
            result.updated++
            continue
          }
        }

        // Create new document
        const cleanRecord = { ...record }
        delete cleanRecord.id // Let Payload generate new ID
        
        await req.payload.create({
          collection: targetCollection,
          data: cleanRecord,
          req,
          overrideAccess: true,
        })
        result.imported++

      } catch (error) {
        result.errors.push(
          `Error processing record: ${error instanceof Error ? error.message : 'Unknown error'}`
        )
      }
    }

    result.success = result.errors.length === 0 || (result.imported + result.updated) > 0

  } catch (error) {
    result.errors.push(`Import failed: ${error instanceof Error ? error.message : 'Unknown error'}`)
  }

  return result
}