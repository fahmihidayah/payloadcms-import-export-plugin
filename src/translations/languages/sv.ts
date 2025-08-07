import type { PluginDefaultTranslationsObject, PluginLanguage } from '../types.js'

export const svTranslations: PluginDefaultTranslationsObject = {
  'plugin-import-export': {
    allLocales: 'Alla platser',
    exportDocumentLabel: 'Exportera {{label}}',
    importDocumentLabel: 'Importera {{label}}',
    exportOptions: 'Exportalternativ',
    'field-depth-label': 'Djup',
    'field-drafts-label': 'Inkludera utkast',
    'field-fields-label': 'Fält',
    'field-format-label': 'Exportformat',
    'field-limit-label': 'Begränsning',
    'field-locale-label': 'Lokal',
    'field-name-label': 'Filnamn',
    'field-selectionToUse-label': 'Val att använda',
    'field-sort-label': 'Sortera efter',
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
    'selectionToUse-allDocuments': 'Använd alla dokument',
    'selectionToUse-currentFilters': 'Använd aktuella filter',
    'selectionToUse-currentSelection': 'Använd nuvarande urval',
    totalDocumentsCount: '{{count}} totala dokument',
  },
}

export const sv: PluginLanguage = {
  dateFNSKey: 'sv',
  translations: svTranslations,
}
