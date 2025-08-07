import type { PluginDefaultTranslationsObject, PluginLanguage } from '../types.js'

export const plTranslations: PluginDefaultTranslationsObject = {
  'plugin-import-export': {
    allLocales: 'Wszystkie lokalizacje',
    exportDocumentLabel: 'Eksportuj {{label}}',
    importDocumentLabel: 'Importuj {{label}}',
    exportOptions: 'Opcje eksportu',
    'field-depth-label': 'Głębokość',
    'field-drafts-label': 'Dołącz szkice',
    'field-fields-label': 'Pola',
    'field-format-label': 'Format eksportu',
    'field-limit-label': 'Limit',
    'field-locale-label': 'Lokalizacja',
    'field-name-label': 'Nazwa pliku',
    'field-selectionToUse-label': 'Wybór do użycia',
    'field-sort-label': 'Sortuj według',
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
    'selectionToUse-allDocuments': 'Użyj wszystkich dokumentów.',
    'selectionToUse-currentFilters': 'Użyj aktualnych filtrów',
    'selectionToUse-currentSelection': 'Użyj aktualnego wyboru',
    totalDocumentsCount: '{{count}} łączna liczba dokumentów',
  },
}

export const pl: PluginLanguage = {
  dateFNSKey: 'pl',
  translations: plTranslations,
}
