import type { PluginDefaultTranslationsObject, PluginLanguage } from '../types.js'

export const deTranslations: PluginDefaultTranslationsObject = {
  'plugin-import-export': {
    allLocales: 'Alle Gebietsschemata',
    exportDocumentLabel: 'Export {{label}}',
    importDocumentLabel: '{{label}} importieren',
    exportOptions: 'Exportoptionen',
    'field-depth-label': 'Tiefe',
    'field-drafts-label': 'Fügen Sie Entwürfe hinzu',
    'field-fields-label': 'Felder',
    'field-format-label': 'Exportformat',
    'field-limit-label': 'Grenze',
    'field-locale-label': 'Ort',
    'field-name-label': 'Dateiname',
    'field-selectionToUse-label': 'Auswahl zur Verwendung',
    'field-sort-label': 'Sortieren nach',
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
    'selectionToUse-allDocuments': 'Verwenden Sie alle Dokumente.',
    'selectionToUse-currentFilters': 'Verwenden Sie aktuelle Filter',
    'selectionToUse-currentSelection': 'Verwenden Sie die aktuelle Auswahl',
    totalDocumentsCount: '{{count}} gesamte Dokumente',
  },
}

export const de: PluginLanguage = {
  dateFNSKey: 'de',
  translations: deTranslations,
}
