import type { PluginDefaultTranslationsObject, PluginLanguage } from '../types.js'

export const arTranslations: PluginDefaultTranslationsObject = {
  'plugin-import-export': {
    allLocales: 'جميع المواقع',
    exportDocumentLabel: 'تصدير {{label}}',
    importDocumentLabel: 'استيراد {{label}}',
    exportOptions: 'خيارات التصدير',
    'field-depth-label': 'عمق',
    'field-drafts-label': 'تضمن المسودات',
    'field-fields-label': 'حقول',
    'field-format-label': 'تنسيق التصدير',
    'field-limit-label': 'حد',
    'field-locale-label': 'موقع',
    'field-name-label': 'اسم الملف',
    'field-selectionToUse-label': 'اختيار للاستخدام',
    'field-sort-label': 'ترتيب حسب',
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
    'selectionToUse-allDocuments': 'استخدم جميع الوثائق',
    'selectionToUse-currentFilters': 'استخدم الفلاتر الحالية',
    'selectionToUse-currentSelection': 'استخدم الاختيار الحالي',
    totalDocumentsCount: '{{count}} مستنداً إجمالياً',
  },
}

export const ar: PluginLanguage = {
  dateFNSKey: 'ar',
  translations: arTranslations,
}
