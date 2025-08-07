import type { PluginDefaultTranslationsObject, PluginLanguage } from '../types.js'

export const ruTranslations: PluginDefaultTranslationsObject = {
  'plugin-import-export': {
    allLocales: 'Все локали',
    exportDocumentLabel: 'Экспорт {{label}}',
    importDocumentLabel: 'Импорт {{label}}',
    exportOptions: 'Опции экспорта',
    'field-depth-label': 'Глубина',
    'field-drafts-label': 'Включить черновики',
    'field-fields-label': 'Поля',
    'field-format-label': 'Формат экспорта',
    'field-limit-label': 'Лимит',
    'field-locale-label': 'Локаль',
    'field-name-label': 'Имя файла',
    'field-selectionToUse-label': 'Выбор использования',
    'field-sort-label': 'Сортировать по',
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
    'selectionToUse-allDocuments': 'Используйте все документы',
    'selectionToUse-currentFilters': 'Использовать текущие фильтры',
    'selectionToUse-currentSelection': 'Использовать текущий выбор',
    totalDocumentsCount: '{{count}} общее количество документов',
  },
}

export const ru: PluginLanguage = {
  dateFNSKey: 'ru',
  translations: ruTranslations,
}
