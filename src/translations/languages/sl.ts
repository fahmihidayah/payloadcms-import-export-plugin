import type { PluginDefaultTranslationsObject, PluginLanguage } from '../types.js'

export const slTranslations: PluginDefaultTranslationsObject = {
  'plugin-import-export': {
    allLocales: 'Vse lokacije',
    exportDocumentLabel: 'Izvozi {{label}}',
    importDocumentLabel: 'Uvozi {{label}}',
    exportOptions: 'Možnosti izvoza',
    'field-depth-label': 'Globina',
    'field-drafts-label': 'Vključi osnutke',
    'field-fields-label': 'Polja',
    'field-format-label': 'Format izvoza',
    'field-limit-label': 'Omejitev',
    'field-locale-label': 'Lokalno',
    'field-name-label': 'Ime datoteke',
    'field-selectionToUse-label': 'Izbor za uporabo',
    'field-sort-label': 'Razvrsti po',
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
    'selectionToUse-allDocuments': 'Uporabite vse dokumente',
    'selectionToUse-currentFilters': 'Uporabite trenutne filtre.',
    'selectionToUse-currentSelection': 'Uporabi trenutno izbiro',
    totalDocumentsCount: '{{count}} skupno dokumentov',
  },
}

export const sl: PluginLanguage = {
  dateFNSKey: 'sl-SI',
  translations: slTranslations,
}
