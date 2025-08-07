import type { PluginDefaultTranslationsObject, PluginLanguage } from '../types.js'

export const etTranslations: PluginDefaultTranslationsObject = {
  'plugin-import-export': {
    allLocales: 'Kõik kohalikud seaded',
    exportDocumentLabel: 'Ekspordi {{label}}',
    importDocumentLabel: 'Impordi {{label}}',
    exportOptions: 'Ekspordi valikud',
    'field-depth-label': 'Sügavus',
    'field-drafts-label': 'Kaasa arvatud mustandid',
    'field-fields-label': 'Väljad',
    'field-format-label': 'Ekspordi formaat',
    'field-limit-label': 'Piirang',
    'field-locale-label': 'Lokaal',
    'field-name-label': 'Faili nimi',
    'field-selectionToUse-label': 'Valiku kasutamine',
    'field-sort-label': 'Sorteeri järgi',
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
    'selectionToUse-allDocuments': 'Kasutage kõiki dokumente',
    'selectionToUse-currentFilters': 'Kasuta praeguseid filtreid',
    'selectionToUse-currentSelection': 'Kasuta praegust valikut',
    totalDocumentsCount: '{{count}} dokumendi koguarv',
  },
}

export const et: PluginLanguage = {
  dateFNSKey: 'et',
  translations: etTranslations,
}
