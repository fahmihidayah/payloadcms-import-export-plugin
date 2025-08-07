'use client'

import React from 'react'
import { useFormFields } from '@payloadcms/ui'

import { detectFileFormat } from '../../import/parsers.js'

const baseClass = 'file-format-info'

export const FileFormatInfo: React.FC = () => {
  const file = useFormFields(([fields]) => fields?.file?.value)
  const filename = (file as any)?.filename || ''
  
  if (!filename) {
    return null
  }
  
  const format = detectFileFormat(filename)
  
  return (
    <div className={baseClass}>
      <div className={`${baseClass}__format`}>
        <strong>Detected format:</strong>{' '}
        {format === 'unknown' ? (
          <span style={{ color: 'red' }}>
            Unsupported format. Please upload a .csv or .json file.
          </span>
        ) : (
          <span style={{ color: 'green' }}>
            {format.toUpperCase()}
          </span>
        )}
      </div>
      
      {format !== 'unknown' && (
        <div className={`${baseClass}__info`}>
          <small>
            {format === 'csv' && (
              <>
                Expected CSV format: First row should contain column headers that match your collection field names.
              </>
            )}
            {format === 'json' && (
              <>
                Expected JSON format: Array of objects or single object. Object keys should match your collection field names.
              </>
            )}
          </small>
        </div>
      )}
    </div>
  )
}