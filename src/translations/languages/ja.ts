import type { PluginDefaultTranslationsObject, PluginLanguage } from '../types.js'

export const jaTranslations: PluginDefaultTranslationsObject = {
  'plugin-import-export': {
    allLocales: 'すべてのロケール',
    exportDocumentLabel: '{{label}}をエクスポートする',
    importDocumentLabel: '{{label}}をインポート',
    exportOptions: 'エクスポートオプション',
    'field-depth-label': '深さ',
    'field-drafts-label': 'ドラフトを含めます',
    'field-fields-label': 'フィールド',
    'field-format-label': 'エクスポート形式',
    'field-limit-label': '制限',
    'field-locale-label': 'ロケール',
    'field-name-label': 'ファイル名',
    'field-selectionToUse-label': '使用する選択',
    'field-sort-label': '並び替える',
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
    'selectionToUse-allDocuments': 'すべての文書を使用してください。',
    'selectionToUse-currentFilters': '現在のフィルターを使用してください',
    'selectionToUse-currentSelection': '現在の選択を使用する',
    totalDocumentsCount: '{{count}}合計の文書',
  },
}

export const ja: PluginLanguage = {
  dateFNSKey: 'ja',
  translations: jaTranslations,
}
