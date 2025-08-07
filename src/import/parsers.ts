import { parse } from 'csv-parse/sync'

export interface ParsedData {
  data: Record<string, unknown>[]
  errors: string[]
}

export const parseCSV = async (fileBuffer: Buffer): Promise<ParsedData> => {
  const errors: string[] = []
  let data: Record<string, unknown>[] = []

  try {
    const content = fileBuffer.toString('utf-8')
    data = parse(content, {
      columns: true,
      skip_empty_lines: true,
      trim: true,
      auto_parse: true,
      auto_parse_date: true,
    })
  } catch (error) {
    errors.push(`CSV parsing error: ${error instanceof Error ? error.message : 'Unknown error'}`)
  }

  return { data, errors }
}

export const parseJSON = async (fileBuffer: Buffer): Promise<ParsedData> => {
  const errors: string[] = []
  let data: Record<string, unknown>[] = []

  try {
    const content = fileBuffer.toString('utf-8')
    const parsed = JSON.parse(content)
    
    if (Array.isArray(parsed)) {
      data = parsed
    } else if (parsed && typeof parsed === 'object') {
      data = [parsed]
    } else {
      errors.push('JSON must be an object or array of objects')
    }
  } catch (error) {
    errors.push(`JSON parsing error: ${error instanceof Error ? error.message : 'Unknown error'}`)
  }

  return { data, errors }
}

export const detectFileFormat = (filename: string): 'csv' | 'json' | 'unknown' => {
  const ext = filename.toLowerCase().split('.').pop()
  switch (ext) {
    case 'csv':
      return 'csv'
    case 'json':
      return 'json'
    default:
      return 'unknown'
  }
}