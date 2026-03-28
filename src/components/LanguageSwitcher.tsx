import { useTranslation } from 'react-i18next'

export const LanguageSwitcher: React.FC = () => {
  const { i18n } = useTranslation()
  const isSpanish = i18n.language.startsWith('es')

  const toggle = () => {
    i18n.changeLanguage(isSpanish ? 'en' : 'es')
  }

  return (
    <button
      onClick={toggle}
      className="text-sm font-medium text-gray-700 hover:text-black transition-colors px-2 py-1 rounded border border-gray-100"
      aria-label={isSpanish ? 'Switch to English' : 'Cambiar a Español'}
    >
      {isSpanish ? 'EN' : 'ES'}
    </button>
  )
}
