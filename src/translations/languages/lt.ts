import type { PluginDefaultTranslationsObject, PluginLanguage } from '../types.js'

export const ltTranslations: PluginDefaultTranslationsObject = {
  'plugin-import-export': {
    allLocales: 'Visos vietovės',
    exportDocumentLabel: 'Eksportuoti {{label}}',
    importDocumentLabel: 'Importuoti {{label}}',
    exportOptions: 'Eksporto parinktys',
    'field-depth-label': 'Gylis',
    'field-drafts-label': 'Įtraukite juodraščius',
    'field-fields-label': 'Laukai',
    'field-format-label': 'Eksporto formatas',
    'field-limit-label': 'Ribos',
    'field-locale-label': 'Lokalė',
    'field-name-label': 'Failo pavadinimas',
    'field-selectionToUse-label': 'Naudojimo pasirinkimas',
    'field-sort-label': 'Rūšiuoti pagal',
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
    'selectionToUse-allDocuments': 'Naudokite visus dokumentus.',
    'selectionToUse-currentFilters': 'Naudoti esamus filtrus',
    'selectionToUse-currentSelection': 'Naudoti dabartinį pasirinkimą',
    totalDocumentsCount: '{{count}} viso dokumentų',
  },
}

export const lt: PluginLanguage = {
  dateFNSKey: 'lt',
  translations: ltTranslations,
}
