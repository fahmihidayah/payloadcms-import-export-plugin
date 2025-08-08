import { type FlattenedField, traverseFields, type TraverseFieldsCallback } from 'payload'

import type { ToCSVFunction } from '../types.js'

type Args = {
  fields: FlattenedField[]
}

export const getCustomFieldFunctions = ({ fields }: Args): Record<string, ToCSVFunction> => {
  const result: Record<string, ToCSVFunction> = {}

  const buildCustomFunctions: TraverseFieldsCallback = ({ field, parentRef, ref }) => {
    // @ts-expect-error ref is untyped
    ref.prefix = parentRef.prefix || ''
    if (field.type === 'group' || field.type === 'tab') {
      // @ts-expect-error ref is untyped
      const parentPrefix = parentRef?.prefix ? `${parentRef.prefix}_` : ''
      // @ts-expect-error ref is untyped
      ref.prefix = `${parentPrefix}${field.name}_`
    }


    if (typeof field.custom?.['plugin-import-export']?.toCSV === 'function') {
      // @ts-expect-error ref is untyped
      result[`${ref.prefix}${field.name}`] = field.custom['plugin-import-export']?.toCSV
    } else if (field.type === 'richText') {
      // @ts-expect-error ref is untyped
      result[`${ref.prefix}${field.name}`] = ({ value }) => {
        if (value && (typeof value === 'object' || Array.isArray(value))) {
          return JSON.stringify(value)
        }
        return value
      }
    } else if (field.type === 'relationship' || field.type === 'upload') {
      // @ts-expect-error ref is untyped
      result[`${ref.prefix}${field.name}`] = ({ value }) => {
        if (value && (typeof value === 'object' || Array.isArray(value))) {
          return JSON.stringify(value)
        }
        return value
      }
    }
  }

  traverseFields({ callback: buildCustomFunctions, fields })

  return result
}
