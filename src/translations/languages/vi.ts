import type { PluginDefaultTranslationsObject, PluginLanguage } from '../types.js'

export const viTranslations: PluginDefaultTranslationsObject = {
  'plugin-import-export': {
    allLocales: 'Tất cả địa điểm',
    exportDocumentLabel: 'Xuất {{label}}',
    importDocumentLabel: 'Nhập {{label}}',
    exportOptions: 'Tùy chọn xuất',
    'field-depth-label': 'Độ sâu',
    'field-drafts-label': 'Bao gồm bản thảo',
    'field-fields-label': 'Cánh đồng',
    'field-format-label': 'Định dạng Xuất khẩu',
    'field-limit-label': 'Giới hạn',
    'field-locale-label': 'Địa phương',
    'field-name-label': 'Tên tệp',
    'field-selectionToUse-label': 'Lựa chọn để sử dụng',
    'field-sort-label': 'Sắp xếp theo',
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
    'selectionToUse-allDocuments': 'Sử dụng tất cả các tài liệu',
    'selectionToUse-currentFilters': 'Sử dụng bộ lọc hiện tại',
    'selectionToUse-currentSelection': 'Sử dụng lựa chọn hiện tại',
    totalDocumentsCount: '{{count}} tổng số tài liệu',
  },
}

export const vi: PluginLanguage = {
  dateFNSKey: 'vi',
  translations: viTranslations,
}
