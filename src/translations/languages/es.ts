import type { PluginDefaultTranslationsObject, PluginLanguage } from '../types.js'

export const esTranslations: PluginDefaultTranslationsObject = {
  'plugin-import-export': {
    allLocales: 'Todas las ubicaciones',
    exportDocumentLabel: 'Exportar {{label}}',
    importDocumentLabel: 'Importar {{label}}',
    exportOptions: 'Opciones de Exportación',
    'field-depth-label': 'Profundidad',
    'field-drafts-label': 'Incluir borradores',
    'field-fields-label': 'Campos',
    'field-format-label': 'Formato de Exportación',
    'field-limit-label': 'Límite',
    'field-locale-label': 'Localidad',
    'field-name-label': 'Nombre del archivo',
    'field-selectionToUse-label': 'Selección para usar',
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
    'selectionToUse-allDocuments': 'Utilice todos los documentos',
    'selectionToUse-currentFilters': 'Utilice los filtros actuales',
    'selectionToUse-currentSelection': 'Usar selección actual',
    totalDocumentsCount: '{{count}} documentos totales',
  },
}

export const es: PluginLanguage = {
  dateFNSKey: 'es',
  translations: esTranslations,
}
