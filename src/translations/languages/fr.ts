import type { PluginDefaultTranslationsObject, PluginLanguage } from '../types.js'

export const frTranslations: PluginDefaultTranslationsObject = {
  'plugin-import-export': {
    allLocales: 'Tous les paramètres régionaux',
    exportDocumentLabel: 'Exporter {{label}}',
    importDocumentLabel: 'Importer {{label}}',
    exportOptions: "Options d'exportation",
    'field-depth-label': 'Profondeur',
    'field-drafts-label': 'Inclure les ébauches',
    'field-fields-label': 'Champs',
    'field-format-label': "Format d'exportation",
    'field-limit-label': 'Limite',
    'field-locale-label': 'Localisation',
    'field-name-label': 'Nom de fichier',
    'field-selectionToUse-label': 'Sélection à utiliser',
    'field-sort-label': 'Trier par',
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
    'selectionToUse-allDocuments': 'Utilisez tous les documents',
    'selectionToUse-currentFilters': 'Utilisez les filtres actuels',
    'selectionToUse-currentSelection': 'Utilisez la sélection actuelle',
    totalDocumentsCount: '{{count}} documents au total',
  },
}

export const fr: PluginLanguage = {
  dateFNSKey: 'fr',
  translations: frTranslations,
}
