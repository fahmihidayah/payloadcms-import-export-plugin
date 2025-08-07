import type { PluginDefaultTranslationsObject, PluginLanguage } from '../types.js'

export const faTranslations: PluginDefaultTranslationsObject = {
  'plugin-import-export': {
    allLocales: 'تمام مکان ها',
    exportDocumentLabel: 'صادر کردن {{label}}',
    importDocumentLabel: 'وارد کردن {{label}}',
    exportOptions: 'گزینه های صادرات',
    'field-depth-label': 'عمق',
    'field-drafts-label': 'شامل پیش نویس ها',
    'field-fields-label': 'مزارع',
    'field-format-label': 'فرمت صادرات',
    'field-limit-label': 'محدودیت',
    'field-locale-label': 'محلی',
    'field-name-label': 'نام فایل',
    'field-selectionToUse-label': 'انتخاب برای استفاده',
    'field-sort-label': 'مرتب سازی بر اساس',
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
    'selectionToUse-allDocuments': 'از تمام مستندات استفاده کنید',
    'selectionToUse-currentFilters': 'از فیلترهای فعلی استفاده کنید',
    'selectionToUse-currentSelection': 'از انتخاب فعلی استفاده کنید',
    totalDocumentsCount: '{{count}} سند کل',
  },
}

export const fa: PluginLanguage = {
  dateFNSKey: 'fa-IR',
  translations: faTranslations,
}
