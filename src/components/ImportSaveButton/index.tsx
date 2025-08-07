'use client'

import { useFormSubmitted, useFormProcessing, Translation, useTranslation, Button, useForm } from '@payloadcms/ui'
import React from 'react'

import type {
  PluginImportExportTranslationKeys,
  PluginImportExportTranslations,
} from '../../translations/index.js'

export const ImportSaveButton: React.FC = () => {
  const processing = useFormProcessing()
  const submitted = useFormSubmitted()
  const { submit } = useForm()
  const { t } = useTranslation<
    PluginImportExportTranslations,
    PluginImportExportTranslationKeys
  >()

  const handleClick = React.useCallback(() => {
    submit()
  }, [submit])

  const isLoading = processing || submitted

  return (
    <Button
      onClick={handleClick}
      type="button"
      disabled={isLoading}
    >
      {isLoading ? (
        <Translation
          // eslint-disable-next-line @typescript-eslint/ban-ts-comment
          // @ts-expect-error
          i18nKey="general:processing"
          t={t}
        />
      ) : (
        <Translation
          // eslint-disable-next-line @typescript-eslint/ban-ts-comment
          // @ts-expect-error
          i18nKey="general:import"
          t={t}
        />
      )}
    </Button>
  )
}