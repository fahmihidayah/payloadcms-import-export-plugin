import type { PluginDefaultTranslationsObject, PluginLanguage } from '../types.js'

export const roTranslations: PluginDefaultTranslationsObject = {
  'plugin-import-export': {
    allLocales: 'Toate locațiile',
    exportDocumentLabel: 'Export {{label}}',
    importDocumentLabel: 'Importă {{label}}',
    exportOptions: 'Opțiuni de export',
    'field-depth-label': 'Adâncime',
    'field-drafts-label': 'Includează schițe',
    'field-fields-label': 'Campuri',
    'field-format-label': 'Format de export',
    'field-limit-label': 'Limită',
    'field-locale-label': 'Localizare',
    'field-name-label': 'Numele fișierului',
    'field-selectionToUse-label': 'Selectarea pentru utilizare',
    'field-sort-label': 'Sortează după',
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
    'selectionToUse-allDocuments': 'Utilizați toate documentele.',
    'selectionToUse-currentFilters': 'Utilizați filtrele curente',
    'selectionToUse-currentSelection': 'Utilizați selecția curentă',
    totalDocumentsCount: '{{count}} documente totale',
  },
}

export const ro: PluginLanguage = {
  dateFNSKey: 'ro',
  translations: roTranslations,
}
