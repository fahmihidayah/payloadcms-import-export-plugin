import type { PluginDefaultTranslationsObject, PluginLanguage } from '../types.js'

export const ptTranslations: PluginDefaultTranslationsObject = {
  'plugin-import-export': {
    allLocales: 'Todos os locais',
    exportDocumentLabel: 'Exportar {{label}}',
    importDocumentLabel: 'Importar {{label}}',
    exportOptions: 'Opções de Exportação',
    'field-depth-label': 'Profundidade',
    'field-drafts-label': 'Incluir rascunhos',
    'field-fields-label': 'Campos',
    'field-format-label': 'Formato de Exportação',
    'field-limit-label': 'Limite',
    'field-locale-label': 'Localização',
    'field-name-label': 'Nome do arquivo',
    'field-selectionToUse-label': 'Seleção para usar',
    'field-sort-label': 'Ordenar por',
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
    'selectionToUse-allDocuments': 'Use todos os documentos',
    'selectionToUse-currentFilters': 'Use os filtros atuais',
    'selectionToUse-currentSelection': 'Use a seleção atual',
    totalDocumentsCount: '{{count}} documentos totais',
  },
}

export const pt: PluginLanguage = {
  dateFNSKey: 'pt',
  translations: ptTranslations,
}
