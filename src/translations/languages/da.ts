import type { PluginDefaultTranslationsObject, PluginLanguage } from '../types.js'

export const daTranslations: PluginDefaultTranslationsObject = {
  'plugin-import-export': {
    allLocales: 'Alle lokaliteter',
    exportDocumentLabel: 'Eksport {{label}}',
    importDocumentLabel: 'Importer {{label}}',
    exportOptions: 'Eksportmuligheder',
    'field-depth-label': 'Dybde',
    'field-drafts-label': 'Inkluder udkast',
    'field-fields-label': 'Felter',
    'field-format-label': 'Eksportformat',
    'field-limit-label': 'Begrænsning',
    'field-locale-label': 'Lokale',
    'field-name-label': 'Filnavn',
    'field-selectionToUse-label': 'Valg til brug',
    'field-sort-label': 'Sorter efter',
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
    'selectionToUse-allDocuments': 'Brug alle dokumenter',
    'selectionToUse-currentFilters': 'Brug nuværende filtre',
    'selectionToUse-currentSelection': 'Brug nuværende valg',
    totalDocumentsCount: '{{count}} samlede dokumenter',
  },
}

export const da: PluginLanguage = {
  dateFNSKey: 'da',
  translations: daTranslations,
}
