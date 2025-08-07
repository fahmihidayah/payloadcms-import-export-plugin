import type { PluginDefaultTranslationsObject, PluginLanguage } from '../types.js'

export const itTranslations: PluginDefaultTranslationsObject = {
  'plugin-import-export': {
    allLocales: 'Tutte le località',
    exportDocumentLabel: 'Esporta {{label}}',
    importDocumentLabel: 'Importa {{label}}',
    exportOptions: 'Opzioni di Esportazione',
    'field-depth-label': 'Profondità',
    'field-drafts-label': 'Includi bozze',
    'field-fields-label': 'Campi',
    'field-format-label': 'Formato di Esportazione',
    'field-limit-label': 'Limite',
    'field-locale-label': 'Locale',
    'field-name-label': 'Nome del file',
    'field-selectionToUse-label': 'Selezione da utilizzare',
    'field-sort-label': 'Ordina per',
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
    'selectionToUse-allDocuments': 'Utilizza tutti i documenti',
    'selectionToUse-currentFilters': 'Utilizza i filtri correnti',
    'selectionToUse-currentSelection': 'Utilizza la selezione corrente',
    totalDocumentsCount: '{{count}} documenti totali',
  },
}

export const it: PluginLanguage = {
  dateFNSKey: 'it',
  translations: itTranslations,
}
