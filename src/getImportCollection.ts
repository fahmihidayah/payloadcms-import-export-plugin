import type {
  CollectionAfterChangeHook,
  CollectionBeforeOperationHook,
  CollectionConfig,
  Config,
} from 'payload'

import type { CollectionOverride, ImportExportPluginConfig } from './types.js'

import { getImportFields } from './import/getImportFields.js'
import { processImport } from './import/processImport.js'

export const getImportCollection = ({
  config,
  pluginConfig,
}: {
  config: Config
  pluginConfig: ImportExportPluginConfig
}): CollectionConfig => {
  const { overrideImportCollection } = pluginConfig

  const beforeOperation: CollectionBeforeOperationHook[] = []
  const afterChange: CollectionAfterChangeHook[] = []

  let collection: CollectionOverride = {
    slug: 'imports',
    access: {
      update: () => false,
    },
    admin: {
      components: {
        edit: {
          SaveButton: 'import-plugin/rsc#ImportSaveButton',
        },
      },
      group: false,
      useAsTitle: 'filename',
    },
    disableDuplicate: true,
    fields: getImportFields(),
    hooks: {
      afterChange,
      beforeOperation,
    },
    upload: {
      filesRequiredOnCreate: true,
    },
  }

  if (typeof overrideImportCollection === 'function') {
    collection = overrideImportCollection(collection)
  }

  // Add import processing logic
  afterChange.push(async ({ doc, operation, req }) => {

    console.log('create operation : ', operation)
    if (operation !== 'create') {
      return
    }

    // Process import asynchronously to avoid blocking the response
    setImmediate(async () => {
      try {
        
        const { importOptions, targetCollection, url, filename } = doc

        console.log("doc : ", JSON.stringify(doc))

        if (!url || !targetCollection) {
          console.error('Import failed: Missing file URL or target collection')
          return
        }

        console.log(`Processing import for collection: ${targetCollection}`)
        console.log('File info:', { filename, url, id: doc.id })

        // Get file buffer using Payload's file system
        let fileBuffer: Buffer

        try {
          // Read file directly from the URL
          const fs = await import('fs/promises')
          const path = await import('path')
          
          // The URL is like "/api/imports/file/filename.csv"
          // The actual file is stored in import-plugin/imports/filename.csv
          const fileNameFromUrl = decodeURIComponent(url.split('/').pop() || filename)
          const filePath = path.join(process.cwd(), 'imports', fileNameFromUrl)
          
          console.log(`Reading file from: ${filePath}`)
          fileBuffer = await fs.readFile(filePath)
        } catch (fileError) {
          console.error('Error reading uploaded file:', fileError)
          throw new Error(`Failed to read uploaded file: ${fileError instanceof Error ? fileError.message : 'Unknown error'}`)
        }

        // Process the import
        const result = await processImport({
          req,
          targetCollection,
          fileBuffer,
          filename: filename || 'unknown',
          options: {
            onDuplicateAction: importOptions?.onDuplicateAction || 'skip',
          },
        })

        // Update the import document with results
        await req.payload.update({
          collection: 'imports',
          id: doc.id,
          data: {
            importResult: {
              success: result.success,
              imported: result.imported,
              skipped: result.skipped,
              updated: result.updated,
              errors: result.errors.join('\n'),
              processedAt: new Date().toISOString(),
            },
          },
          req,
          overrideAccess: true,
        })

        console.log('Import completed:', result)

      } catch (error) {
        console.error('Import processing error:', error)
        
        // Update document with error
        try {
          await req.payload.update({
            collection: 'imports',
            id: doc.id,
            data: {
              importResult: {
                success: false,
                imported: 0,
                skipped: 0,
                updated: 0,
                errors: error instanceof Error ? error.message : 'Unknown error',
                processedAt: new Date().toISOString(),
              },
            },
            req,
            overrideAccess: true,
          })
        } catch (updateError) {
          console.error('Failed to update import document with error:', updateError)
        }
      }
    })
  })

  return collection
}