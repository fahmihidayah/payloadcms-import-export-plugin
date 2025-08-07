import type { PluginDefaultTranslationsObject, PluginLanguage } from '../types.js'

export const lvTranslations: PluginDefaultTranslationsObject = {
  'plugin-import-export': {
    allLocales: 'Visas lokalitātes',
    exportDocumentLabel: 'Eksportēt {{label}}',
    importDocumentLabel: 'Importēt {{label}}',
    exportOptions: 'Eksportēšanas opcijas',
    'field-depth-label': 'Dziļums',
    'field-drafts-label': 'Iekļaut melnrakstus',
    'field-fields-label': 'Lauki',
    'field-format-label': 'Eksporta formāts',
    'field-limit-label': 'Limits',
    'field-locale-label': 'Lokalizācija',
    'field-name-label': 'Faila nosaukums',
    'field-selectionToUse-label': 'Izvēles lietošana',
    'field-sort-label': 'Kārtot pēc',
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
    'selectionToUse-allDocuments': 'Izmantojiet visus dokumentus',
    'selectionToUse-currentFilters': 'Izmantot pašreizējos filtrus',
    'selectionToUse-currentSelection': 'Izmantot pašreizējo izvēli',
    totalDocumentsCount: '{{count}} kopā dokumenti',
  },
}

export const lv: PluginLanguage = {
  dateFNSKey: 'lt',
  translations: lvTranslations,
}
