import type { Field } from 'payload'

export const getImportFields = (): Field[] => {
  return [
    {
      name: 'fileFormatInfo',
      type: 'ui',
      admin: {
        components: {
          Field: 'payloadcms-import-export-plugin/rsc#FileFormatInfo',
        },
      },
    },
    {
      name: 'targetCollection',
      type: 'text',
      admin: {
        components: {
          Field: 'payloadcms-import-export-plugin/rsc#ImportCollectionField',
        },
        hidden: true,
      },
      required: true,
    },
    {
      name: 'importOptions',
      type: 'group',
      fields: [
        {
          name: 'onDuplicateAction',
          type: 'radio',
          options: [
            {
              // @ts-expect-error - this is not correctly typed in plugins right now
              label: ({ t }) => t('plugin-import-export:importOptions-skip'),
              value: 'skip',
            },
            {
              // @ts-expect-error - this is not correctly typed in plugins right now
              label: ({ t }) => t('plugin-import-export:importOptions-replace'),
              value: 'replace',
            },
          ],
          defaultValue: 'skip',
          required: true,
          // @ts-expect-error - this is not correctly typed in plugins right now
          label: ({ t }) => t('plugin-import-export:field-onDuplicateAction-label'),
        },
      ],
      // @ts-expect-error - this is not correctly typed in plugins right now
      label: ({ t }) => t('plugin-import-export:importOptions'),
    },
    {
      name: 'importResult',
      type: 'group',
      admin: {
        condition: (data) => Boolean(data?.importResult),
        readOnly: true,
      },
      fields: [
        {
          name: 'success',
          type: 'checkbox',
          admin: {
            readOnly: true,
          },
          // @ts-expect-error - this is not correctly typed in plugins right now
          label: ({ t }) => t('plugin-import-export:importResult-success'),
        },
        {
          name: 'imported',
          type: 'number',
          admin: {
            readOnly: true,
          },
          // @ts-expect-error - this is not correctly typed in plugins right now
          label: ({ t }) => t('plugin-import-export:importResult-imported'),
        },
        {
          name: 'updated',
          type: 'number',
          admin: {
            readOnly: true,
          },
          // @ts-expect-error - this is not correctly typed in plugins right now
          label: ({ t }) => t('plugin-import-export:importResult-updated'),
        },
        {
          name: 'skipped',
          type: 'number',
          admin: {
            readOnly: true,
          },
          // @ts-expect-error - this is not correctly typed in plugins right now
          label: ({ t }) => t('plugin-import-export:importResult-skipped'),
        },
        {
          name: 'errors',
          type: 'textarea',
          admin: {
            readOnly: true,
            condition: (_, siblingData) => siblingData?.errors?.length > 0,
          },
          // @ts-expect-error - this is not correctly typed in plugins right now
          label: ({ t }) => t('plugin-import-export:importResult-errors'),
        },
        {
          name: 'processedAt',
          type: 'date',
          admin: {
            readOnly: true,
          },
          // @ts-expect-error - this is not correctly typed in plugins right now
          label: ({ t }) => t('plugin-import-export:importResult-processedAt'),
        },
      ],
      // @ts-expect-error - this is not correctly typed in plugins right now
      label: ({ t }) => t('plugin-import-export:importResult'),
    },
  ]
}
