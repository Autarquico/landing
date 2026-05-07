import i18n from '../i18n'
import type { Locale } from './routes'

export function useLocale(locale: Locale): void {
  if (i18n.language !== locale) {
    i18n.changeLanguage(locale)
  }
}
