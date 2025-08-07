import type { PluginDefaultTranslationsObject, PluginLanguage } from '../types.js'

export const bgTranslations: PluginDefaultTranslationsObject = {
  'plugin-import-export': {
    allLocales: 'Всички локации',
    exportDocumentLabel: 'Експортиране {{label}}',
    importDocumentLabel: 'Импортиране на {{label}}',
    exportOptions: 'Опции за експортиране',
    'field-depth-label': 'Дълбочина',
    'field-drafts-label': 'Включете чернови',
    'field-fields-label': 'Полета',
    'field-format-label': 'Формат за експортиране',
    'field-limit-label': 'Лимит',
    'field-locale-label': 'Регион',
    'field-name-label': 'Име на файла',
    'field-selectionToUse-label': 'Избор за използване',
    'field-sort-label': 'Сортирай по',
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
    'selectionToUse-allDocuments': 'Използвайте всички документи',
    'selectionToUse-currentFilters': 'Използвайте текущите филтри',
    'selectionToUse-currentSelection': 'Използвайте текущия избор',
    totalDocumentsCount: '{{count}} общо документа',
  },
}

export const bg: PluginLanguage = {
  dateFNSKey: 'bg',
  translations: bgTranslations,
}
