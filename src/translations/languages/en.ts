import type { PluginLanguage } from '../types.js'
export const enTranslations = {
  'plugin-import-export': {
    allLocales: 'All locales',
    exportDocumentLabel: 'Export {{label}}',
    importDocumentLabel: 'Import {{label}}',
    exportOptions: 'Export Options',
    importOptions: 'Import Options',
    'field-depth-label': 'Depth',
    'field-drafts-label': 'Include drafts',
    'field-fields-label': 'Fields',
    'field-file-label': 'File to import',
    'field-format-label': 'Export Format',
    'field-limit-label': 'Limit',
    'field-locale-label': 'Locale',
    'field-name-label': 'File name',
    'field-onDuplicateAction-label': 'When data already exists',
    'field-selectionToUse-label': 'Selection to use',
    'field-sort-label': 'Sort by',
    'importOptions-replace': 'Replace existing data',
    'importOptions-skip': 'Skip existing data',
    'importResult': 'Import Results',
    'importResult-errors': 'Errors',
    'importResult-imported': 'Imported',
    'importResult-processedAt': 'Processed At',
    'importResult-skipped': 'Skipped',
    'importResult-success': 'Success',
    'importResult-updated': 'Updated',
    'selectionToUse-allDocuments': 'Use all documents',
    'selectionToUse-currentFilters': 'Use current filters',
    'selectionToUse-currentSelection': 'Use current selection',
    totalDocumentsCount: '{{count}} total documents',
  },
}

export const en: PluginLanguage = {
  dateFNSKey: 'en-US',
  translations: enTranslations,
}
