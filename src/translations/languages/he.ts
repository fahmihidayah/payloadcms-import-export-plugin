import type { PluginDefaultTranslationsObject, PluginLanguage } from '../types.js'

export const heTranslations: PluginDefaultTranslationsObject = {
  'plugin-import-export': {
    allLocales: 'כל המיקומים',
    exportDocumentLabel: 'ייצוא {{label}}',
    importDocumentLabel: 'יבוא {{label}}',
    exportOptions: 'אפשרויות ייצוא',
    'field-depth-label': 'עומק',
    'field-drafts-label': 'כלול טיוטות',
    'field-fields-label': 'שדות',
    'field-format-label': 'פורמט יצוא',
    'field-limit-label': 'הגבלה',
    'field-locale-label': 'מקום',
    'field-name-label': 'שם הקובץ',
    'field-selectionToUse-label': 'בחירה לשימוש',
    'field-sort-label': 'מיין לפי',
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
    'selectionToUse-allDocuments': 'השתמש בכל המסמכים',
    'selectionToUse-currentFilters': 'השתמש במסננים הנוכחיים',
    'selectionToUse-currentSelection': 'השתמש בבחירה הנוכחית',
    totalDocumentsCount: '{{count}} מסמכים כולל',
  },
}

export const he: PluginLanguage = {
  dateFNSKey: 'he',
  translations: heTranslations,
}
