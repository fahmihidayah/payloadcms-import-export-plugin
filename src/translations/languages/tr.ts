import type { PluginDefaultTranslationsObject, PluginLanguage } from '../types.js'

export const trTranslations: PluginDefaultTranslationsObject = {
  'plugin-import-export': {
    allLocales: 'Tüm yerler',
    exportDocumentLabel: '{{label}} dışa aktar',
    importDocumentLabel: '{{label}} içe aktar',
    exportOptions: 'İhracat Seçenekleri',
    'field-depth-label': 'Derinlik',
    'field-drafts-label': 'Taslakları dahil et',
    'field-fields-label': 'Alanlar',
    'field-format-label': 'İhracat Formatı',
    'field-limit-label': 'Sınır',
    'field-locale-label': 'Yerel',
    'field-name-label': 'Dosya adı',
    'field-selectionToUse-label': 'Kullanılacak seçim',
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
    'selectionToUse-allDocuments': 'Tüm belgeleri kullanın',
    'selectionToUse-currentFilters': 'Mevcut filtreleri kullanın',
    'selectionToUse-currentSelection': 'Mevcut seçimi kullanın',
    totalDocumentsCount: '{{count}} toplam belge',
  },
}

export const tr: PluginLanguage = {
  dateFNSKey: 'tr',
  translations: trTranslations,
}
