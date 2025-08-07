import type { PluginDefaultTranslationsObject, PluginLanguage } from '../types.js'

export const nbTranslations: PluginDefaultTranslationsObject = {
  'plugin-import-export': {
    allLocales: 'Alle steder',
    exportDocumentLabel: 'Eksporter {{label}}',
    importDocumentLabel: 'Importer {{label}}',
    exportOptions: 'Eksportalternativer',
    'field-depth-label': 'Dybde',
    'field-drafts-label': 'Inkluder utkast',
    'field-fields-label': 'Felt',
    'field-format-label': 'Eksportformat',
    'field-limit-label': 'Begrensning',
    'field-locale-label': 'Lokal',
    'field-name-label': 'Filnavn',
    'field-selectionToUse-label': 'Valg til bruk',
    'field-sort-label': 'Sorter etter',
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
    'selectionToUse-allDocuments': 'Bruk alle dokumentene',
    'selectionToUse-currentFilters': 'Bruk gjeldende filtre',
    'selectionToUse-currentSelection': 'Bruk gjeldende utvalg',
    totalDocumentsCount: '{{count}} totalt dokumenter',
  },
}

export const nb: PluginLanguage = {
  dateFNSKey: 'nb',
  translations: nbTranslations,
}
