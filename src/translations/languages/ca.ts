import type { PluginDefaultTranslationsObject, PluginLanguage } from '../types.js'

export const caTranslations: PluginDefaultTranslationsObject = {
  'plugin-import-export': {
    allLocales: 'Totes les localitzacions',
    exportDocumentLabel: 'Exporta {{label}}',
    importDocumentLabel: 'Importar {{label}}',
    exportOptions: "Opcions d'exportació",
    'field-depth-label': 'Profunditat',
    'field-drafts-label': 'Inclou esborranys',
    'field-fields-label': 'Camps',
    'field-format-label': "Format d'exportació",
    'field-limit-label': 'Límit',
    'field-locale-label': 'Local',
    'field-name-label': 'Nom del fitxer',
    'field-selectionToUse-label': 'Selecció per utilitzar',
    'field-sort-label': 'Ordena per',
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
    'selectionToUse-allDocuments': 'Utilitzeu tots els documents',
    'selectionToUse-currentFilters': 'Utilitza els filtres actuals',
    'selectionToUse-currentSelection': 'Utilitza la selecció actual',
    totalDocumentsCount: '{{count}} documents totals',
  },
}

export const ca: PluginLanguage = {
  dateFNSKey: 'ca',
  translations: caTranslations,
}
