import type { PluginDefaultTranslationsObject, PluginLanguage } from '../types.js'

export const hrTranslations: PluginDefaultTranslationsObject = {
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
    'field-name-label': 'Naziv datoteke',
    'field-selectionToUse-label': 'Odabir za upotrebu',
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
    'selectionToUse-currentFilters': 'Koristite trenutne filtre',
    'selectionToUse-currentSelection': 'Koristite trenutni odabir',
    totalDocumentsCount: '{{count}} ukupno dokumenata',
  },
}

export const hr: PluginLanguage = {
  dateFNSKey: 'hr',
  translations: hrTranslations,
}
