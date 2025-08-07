import type { PluginDefaultTranslationsObject, PluginLanguage } from '../types.js'

export const azTranslations: PluginDefaultTranslationsObject = {
  'plugin-import-export': {
    allLocales: 'Bütün yerlər',
    exportDocumentLabel: '{{label}} ixrac edin',
    importDocumentLabel: '{{label}} idxal et',
    exportOptions: 'İxrac Variantları',
    'field-depth-label': 'Dərinlik',
    'field-drafts-label': 'Qaralamaları daxil etin',
    'field-fields-label': 'Sahələr',
    'field-format-label': 'İxrac Formatı',
    'field-limit-label': 'Hədd',
    'field-locale-label': 'Yerli',
    'field-name-label': 'Fayl adı',
    'field-selectionToUse-label': 'İstifadə etmək üçün seçim',
    'field-sort-label': 'Sırala',
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
    'selectionToUse-allDocuments': 'Bütün sənədlərdən istifadə edin',
    'selectionToUse-currentFilters': 'Cari filtrlərdən istifadə edin',
    'selectionToUse-currentSelection': 'Cari seçimi istifadə edin',
    totalDocumentsCount: '{{count}} ümumi sənəd',
  },
}

export const az: PluginLanguage = {
  dateFNSKey: 'az',
  translations: azTranslations,
}
