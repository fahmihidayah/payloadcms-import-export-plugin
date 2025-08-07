import type { PluginDefaultTranslationsObject, PluginLanguage } from '../types.js'

export const ukTranslations: PluginDefaultTranslationsObject = {
  'plugin-import-export': {
    allLocales: 'Всі локалі',
    exportDocumentLabel: 'Експорт {{label}}',
    importDocumentLabel: 'Імпорт {{label}}',
    exportOptions: 'Опції експорту',
    'field-depth-label': 'Глибина',
    'field-drafts-label': 'Включити чернетки',
    'field-fields-label': 'Поля',
    'field-format-label': 'Формат експорту',
    'field-limit-label': 'Обмеження',
    'field-locale-label': 'Локалізація',
    'field-name-label': 'Назва файлу',
    'field-selectionToUse-label': 'Вибір для використання',
    'field-sort-label': 'Сортувати за',
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
    'selectionToUse-allDocuments': 'Використовуйте всі документи',
    'selectionToUse-currentFilters': 'Використовувати поточні фільтри',
    'selectionToUse-currentSelection': 'Використовуйте поточний вибір',
    totalDocumentsCount: '{{count}} всього документів',
  },
}

export const uk: PluginLanguage = {
  dateFNSKey: 'uk',
  translations: ukTranslations,
}
