'use client'
import type React from 'react'

import { useDocumentInfo, useField } from '@payloadcms/ui'
import { useEffect } from 'react'

import { useImportExport } from '../ImportExportProvider/index.js'

export const ImportCollectionField: React.FC = () => {
  const { id } = useDocumentInfo()
  const { setValue } = useField({ path: 'targetCollection' })
  const { collection } = useImportExport()

  useEffect(() => {
    if (collection && !id) {
      setValue(collection)
    }
  }, [collection, id, setValue])

  return null // This is a hidden field that just sets the value
}