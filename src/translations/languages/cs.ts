import type { PluginDefaultTranslationsObject, PluginLanguage } from '../types.js'

export const csTranslations: PluginDefaultTranslationsObject = {
  'plugin-import-export': {
    allLocales: 'Všechny lokalizace',
    exportDocumentLabel: 'Export {{label}}',
    importDocumentLabel: 'Importovat {{label}}',
    exportOptions: 'Možnosti exportu',
    'field-depth-label': 'Hloubka',
    'field-drafts-label': 'Zahrnout návrhy',
    'field-fields-label': 'Pole',
    'field-format-label': 'Formát exportu',
    'field-limit-label': 'Limita',
    'field-locale-label': 'Místní',
    'field-name-label': 'Název souboru',
    'field-selectionToUse-label': 'Výběr k použití',
    'field-sort-label': 'Seřadit podle',
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
    'selectionToUse-allDocuments': 'Použijte všechny dokumenty',
    'selectionToUse-currentFilters': 'Použijte aktuální filtry',
    'selectionToUse-currentSelection': 'Použijte aktuální výběr',
    totalDocumentsCount: '{{count}} celkem dokumentů',
  },
}

export const cs: PluginLanguage = {
  dateFNSKey: 'cs',
  translations: csTranslations,
}
