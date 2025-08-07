import type { PluginDefaultTranslationsObject, PluginLanguage } from '../types.js'

export const huTranslations: PluginDefaultTranslationsObject = {
  'plugin-import-export': {
    allLocales: 'Minden helyszín',
    exportDocumentLabel: '{{label}} exportálása',
    importDocumentLabel: '{{label}} importálása',
    exportOptions: 'Exportálási lehetőségek',
    'field-depth-label': 'Mélység',
    'field-drafts-label': 'Tartalmazza a vázlatokat',
    'field-fields-label': 'Mezők',
    'field-format-label': 'Export formátum',
    'field-limit-label': 'Korlát',
    'field-locale-label': 'Helyszín',
    'field-name-label': 'Fájlnév',
    'field-selectionToUse-label': 'Használatra kiválasztva',
    'field-sort-label': 'Rendezés szerint',
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
    'selectionToUse-allDocuments': 'Használjon minden dokumentumot',
    'selectionToUse-currentFilters': 'Használja az aktuális szűrőket',
    'selectionToUse-currentSelection': 'Használja a jelenlegi kiválasztást',
    totalDocumentsCount: '{{count}} összes dokumentum',
  },
}

export const hu: PluginLanguage = {
  dateFNSKey: 'hu',
  translations: huTranslations,
}
