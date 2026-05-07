import { Link, useLocation } from 'react-router-dom'
import { localeFromPath, mirrorPath } from '../seo/mirrorPath'

interface LanguageSwitcherProps {
  dark?: boolean
}

export const LanguageSwitcher: React.FC<LanguageSwitcherProps> = ({ dark = false }) => {
  const { pathname } = useLocation()
  const current = localeFromPath(pathname)
  const target = current === 'es' ? 'en' : 'es'
  const to = mirrorPath(pathname, target) ?? (target === 'en' ? '/en' : '/')
  const label = current === 'es' ? 'EN' : 'ES'
  const ariaLabel = current === 'es' ? 'Switch to English' : 'Cambiar a Español'

  return (
    <Link
      to={to}
      className={`text-sm font-medium transition-colors duration-300 px-2 py-1 rounded border ${
        dark
          ? 'text-white/80 border-white/30 hover:text-white hover:border-white/60'
          : 'text-gray-600 border-gray-200 hover:text-black hover:border-gray-400'
      }`}
      aria-label={ariaLabel}
    >
      {label}
    </Link>
  )
}
