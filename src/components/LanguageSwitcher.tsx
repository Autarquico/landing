import { useTranslation } from 'react-i18next'

interface LanguageSwitcherProps {
  dark?: boolean
}

export const LanguageSwitcher: React.FC<LanguageSwitcherProps> = ({ dark = false }) => {
  const { i18n } = useTranslation()
  const isSpanish = i18n.language.startsWith('es')

  const toggle = () => {
    i18n.changeLanguage(isSpanish ? 'en' : 'es')
  }

  return (
    <button
      onClick={toggle}
      className={`text-sm font-medium transition-colors duration-300 px-2 py-1 rounded border ${
        dark
          ? 'text-white/80 border-white/30 hover:text-white hover:border-white/60'
          : 'text-gray-600 border-gray-200 hover:text-black hover:border-gray-400'
      }`}
      aria-label={isSpanish ? 'Switch to English' : 'Cambiar a Español'}
    >
      {isSpanish ? 'EN' : 'ES'}
    </button>
  )
}
