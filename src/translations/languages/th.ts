import type { PluginDefaultTranslationsObject, PluginLanguage } from '../types.js'

export const thTranslations: PluginDefaultTranslationsObject = {
  'plugin-import-export': {
    allLocales: 'ทุกสถานที่',
    exportDocumentLabel: 'ส่งออก {{label}}',
    importDocumentLabel: 'นำเข้า {{label}}',
    exportOptions: 'ตัวเลือกการส่งออก',
    'field-depth-label': 'ความลึก',
    'field-drafts-label': 'รวมฉบับร่าง',
    'field-fields-label': 'สนาม',
    'field-format-label': 'รูปแบบการส่งออก',
    'field-limit-label': 'จำกัด',
    'field-locale-label': 'ที่ตั้ง',
    'field-name-label': 'ชื่อไฟล์',
    'field-selectionToUse-label': 'การเลือกใช้',
    'field-sort-label': 'เรียงตาม',
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
    'selectionToUse-allDocuments': 'ใช้เอกสารทั้งหมด',
    'selectionToUse-currentFilters': 'ใช้ตัวกรองปัจจุบัน',
    'selectionToUse-currentSelection': 'ใช้การเลือกปัจจุบัน',
    totalDocumentsCount: '{{count}} เอกสารทั้งหมด',
  },
}

export const th: PluginLanguage = {
  dateFNSKey: 'th',
  translations: thTranslations,
}
