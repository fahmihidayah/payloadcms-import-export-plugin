import type { PluginDefaultTranslationsObject, PluginLanguage } from '../types.js'

export const rsTranslations: PluginDefaultTranslationsObject = {
  'plugin-import-export': {
    allLocales: 'Sve lokacije',
    exportDocumentLabel: 'Извоз {{label}}',
    importDocumentLabel: 'Увези {{label}}',
    exportOptions: 'Опције извоза',
    'field-depth-label': 'Dubina',
    'field-drafts-label': 'Uključite nacrte',
    'field-fields-label': 'Polja',
    'field-format-label': 'Format izvoza',
    'field-limit-label': 'Ograničenje',
    'field-locale-label': 'Локалитет',
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
    'selectionToUse-currentSelection': 'Koristite trenutni izbor',
    totalDocumentsCount: '{{count}} ukupno dokumenata',
  },
}

export const rs: PluginLanguage = {
  dateFNSKey: 'rs',
  translations: rsTranslations,
}
