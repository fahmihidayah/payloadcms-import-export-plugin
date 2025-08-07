import type { PluginDefaultTranslationsObject, PluginLanguage } from '../types.js'

export const skTranslations: PluginDefaultTranslationsObject = {
  'plugin-import-export': {
    allLocales: 'Všetky miestne nastavenia',
    exportDocumentLabel: 'Export {{label}}',
    importDocumentLabel: 'Importovať {{label}}',
    exportOptions: 'Možnosti exportu',
    'field-depth-label': 'Hĺbka',
    'field-drafts-label': 'Zahrnúť návrhy',
    'field-fields-label': 'Polia',
    'field-format-label': 'Formát exportu',
    'field-limit-label': 'Limit',
    'field-locale-label': 'Lokalita',
    'field-name-label': 'Názov súboru',
    'field-selectionToUse-label': 'Výber na použitie',
    'field-sort-label': 'Triediť podľa',
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
    'selectionToUse-allDocuments': 'Použite všetky dokumenty',
    'selectionToUse-currentFilters': 'Použiť aktuálne filtre',
    'selectionToUse-currentSelection': 'Použiť aktuálny výber',
    totalDocumentsCount: '{{count}} celkový počet dokumentov',
  },
}

export const sk: PluginLanguage = {
  dateFNSKey: 'sk',
  translations: skTranslations,
}
