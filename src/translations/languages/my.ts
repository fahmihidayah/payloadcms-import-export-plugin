import type { PluginDefaultTranslationsObject, PluginLanguage } from '../types.js'

export const myTranslations: PluginDefaultTranslationsObject = {
  'plugin-import-export': {
    allLocales: 'အားလုံးနေရာတွင်',
    exportDocumentLabel: 'Eksport {{label}}',
    importDocumentLabel: '{{label}} တင်သွင်းရန်',
    exportOptions: 'Pilihan Eksport',
    'field-depth-label': 'အန္တိုင်း',
    'field-drafts-label': 'မူကြမ်းများပါဝင်ပါ',
    'field-fields-label': 'ကွင်းပျိုးရန်ကွက်များ',
    'field-format-label': 'တင်ပို့နည်းအစီအစဉ်',
    'field-limit-label': 'ကန့်သတ်ချက်',
    'field-locale-label': 'Tempatan',
    'field-name-label': 'ဖိုင်နာမည်',
    'field-selectionToUse-label': 'Pilihan untuk digunakan',
    'field-sort-label': 'စီမံအလိုက်',
    importOptions: 'Import Options',
    'field-file-label': 'File to import',
    'field-onDuplicateAction-label': 'When data already exists',
    'importOptions-replace': 'Replace existing data',
    'importOptions-skip': 'Skip existing data',
    importResult: 'Import Results',
    'importResult-errors': 'Errors',
    'importResult-imported': 'Imported',
    'importResult-processedAt': 'Processed At',
    'importResult-skipped': 'Skipped',
    'importResult-success': 'Success',
    'importResult-updated': 'Updated',
    'selectionToUse-allDocuments': 'Gunakan semua dokumen',
    'selectionToUse-currentFilters': 'Gunakan penapis semasa',
    'selectionToUse-currentSelection': 'Gunakan pilihan semasa',
    totalDocumentsCount: '{{count}} keseluruhan dokumen',
  },
}

export const my: PluginLanguage = {
  dateFNSKey: 'en-US',
  translations: myTranslations,
}
