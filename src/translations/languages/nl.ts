import type { PluginDefaultTranslationsObject, PluginLanguage } from '../types.js'

export const nlTranslations: PluginDefaultTranslationsObject = {
  'plugin-import-export': {
    allLocales: 'Alle locaties',
    exportDocumentLabel: 'Exporteer {{label}}',
    importDocumentLabel: '{{label}} importeren',
    exportOptions: 'Exportmogelijkheden',
    'field-depth-label': 'Diepte',
    'field-drafts-label': 'Voeg ontwerpen toe',
    'field-fields-label': 'Velden',
    'field-format-label': 'Exportformaat',
    'field-limit-label': 'Limiet',
    'field-locale-label': 'Lokale',
    'field-name-label': 'Bestandsnaam',
    'field-selectionToUse-label': 'Selectie om te gebruiken',
    'field-sort-label': 'Sorteer op',
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
    'selectionToUse-allDocuments': 'Gebruik alle documenten',
    'selectionToUse-currentFilters': 'Gebruik huidige filters',
    'selectionToUse-currentSelection': 'Gebruik huidige selectie',
    totalDocumentsCount: '{{count}} totaal aantal documenten',
  },
}

export const nl: PluginLanguage = {
  dateFNSKey: 'nl',
  translations: nlTranslations,
}
