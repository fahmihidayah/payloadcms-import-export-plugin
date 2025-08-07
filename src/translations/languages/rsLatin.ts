import type { PluginDefaultTranslationsObject, PluginLanguage } from '../types.js'

export const rsLatinTranslations: PluginDefaultTranslationsObject = {
  'plugin-import-export': {
    allLocales: 'Sve lokalne postavke',
    exportDocumentLabel: 'Izvoz {{label}}',
    importDocumentLabel: 'Uvezi {{label}}',
    exportOptions: 'Opcije izvoza',
    'field-depth-label': 'Dubina',
    'field-drafts-label': 'Uključite nacrte',
    'field-fields-label': 'Polja',
    'field-format-label': 'Format izvoza',
    'field-limit-label': 'Ograničenje',
    'field-locale-label': 'Lokalitet',
    'field-name-label': 'Ime datoteke',
    'field-selectionToUse-label': 'Izbor za upotrebu',
    'field-sort-label': 'Sortiraj po',
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
    'selectionToUse-allDocuments': 'Koristite sve dokumente',
    'selectionToUse-currentFilters': 'Koristite trenutne filtere',
    'selectionToUse-currentSelection': 'Koristi trenutni izbor',
    totalDocumentsCount: '{{count}} ukupno dokumenata',
  },
}

export const rsLatin: PluginLanguage = {
  dateFNSKey: 'rs-Latin',
  translations: rsLatinTranslations,
}
