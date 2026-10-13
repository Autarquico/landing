import { AnimatePresence, motion } from 'framer-motion'
import { useEffect, useState } from 'react'
import { useTranslation } from 'react-i18next'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import { LanguageSwitcher } from './LanguageSwitcher'
import { NewsletterForm } from './NewsletterForm'
import { ThemeSwitcher } from './ThemeSwitcher'

const PANEL_ID = 'newsletter-panel'

interface NavigationProps {
  lightBackground?: boolean
}

export const Navigation: React.FC<NavigationProps> = ({ lightBackground: _lightBackground = false }) => {
  const scrolled = true
  const { t } = useTranslation()
  const { pathname } = useLocation()
  const navigate = useNavigate()
  const prefix = pathname.startsWith('/en') ? '/en' : ''

  // La barra es un índice del continuo de la home: cada ítem salta a su sección.
  // Si la sección está en la página actual, baja a ella; si no, va a la home al ancla.
  const goSection = (id: string) => {
    if (typeof document !== 'undefined' && document.getElementById(id)) {
      document.getElementById(id)!.scrollIntoView({ behavior: 'smooth' })
    } else {
      navigate(`${prefix}/#${id}`)
    }
  }

  const isDelta = pathname === '/delta' || pathname === '/en/delta'
  const isSigma = pathname === '/sigma' || pathname === '/en/sigma' || pathname.startsWith('/sigma/') || pathname.startsWith('/en/sigma/')
  const isJournalIndex = pathname === '/journal' || pathname === '/en/journal'
  const productSignupUrl = isDelta
    ? 'https://delta.autarqui.co/signup'
    : isSigma
      ? 'https://sigma.autarqui.co/signup'
      : null

  const [subscribeOpen, setSubscribeOpen] = useState(false)

  // El panel pertenece al índice del Journal; al navegar fuera, se cierra.
  useEffect(() => {
    setSubscribeOpen(false)
  }, [pathname])

  useEffect(() => {
    if (!subscribeOpen) return
    const close = (event: KeyboardEvent) => {
      if (event.key === 'Escape') setSubscribeOpen(false)
    }
    window.addEventListener('keydown', close)
    return () => window.removeEventListener('keydown', close)
  }, [subscribeOpen])

  const subscribeButton = (className: string, label: string) => (
    <motion.button
      type="button"
      onClick={() => setSubscribeOpen((open) => !open)}
      aria-expanded={subscribeOpen}
      aria-controls={PANEL_ID}
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      className={className}
    >
      {label}
    </motion.button>
  )

  // La barra es un índice del continuo de la home: cada ítem salta a su sección.
  const sections = [
    { id: 'work', label: t('nav.work') },
    { id: 'journal', label: t('nav.journal') },
    { id: 'contacto', label: t('nav.contact') },
  ]

  const linkClass = 'text-sm font-medium text-ink/60 hover:text-ink transition-colors duration-300'

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5, ease: 'easeOut' }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-white/95 backdrop-blur-md shadow-sm' : 'bg-transparent'
      }`}
    >
      <div className="container mx-auto px-4 md:px-6 lg:px-12 py-2 flex items-center justify-between gap-4">
        {/* Logo + Brand */}
        <Link to={prefix || '/'} className="flex items-center gap-1.5 shrink-0">
          <img
            src="/logo-clear.svg"
            alt="α"
            width={40}
            height={40}
            className="h-8 md:h-9 lg:h-10 transition-all duration-300"
          />
          <span className="font-display text-lg md:text-xl text-black hidden sm:inline">
            autarqui.co
          </span>
        </Link>

        <div className="flex items-center gap-4 md:gap-8 lg:gap-12">
          <div className="flex items-center gap-4 md:gap-8">
            {sections.map((s) => (
              <button key={s.id} type="button" onClick={() => goSection(s.id)} className={linkClass}>
                {s.label}
              </button>
            ))}
          </div>

          <div className="flex items-center gap-2">
            <LanguageSwitcher dark={false} />
            <ThemeSwitcher dark={false} />
          </div>

          {isJournalIndex ? (
            subscribeButton(
              'bg-black text-white px-4 py-1.5 lg:px-6 rounded-full text-sm font-medium transition-all duration-200',
              t('nav.subscribe'),
            )
          ) : productSignupUrl ? (
            <motion.a
              href={productSignupUrl}
              target="_blank"
              rel="noopener"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="bg-black text-white px-4 py-1.5 lg:px-6 rounded-full text-sm font-medium transition-all duration-200"
            >
              {t('nav.cta')}
            </motion.a>
          ) : null}
        </div>
      </div>

      <AnimatePresence initial={false}>
        {subscribeOpen && (
          <motion.div
            id={PANEL_ID}
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.2, ease: 'easeOut' }}
            className="overflow-hidden border-t border-hairline bg-white/95 backdrop-blur-md"
          >
            <div className="container mx-auto px-4 md:px-6 lg:px-12 py-5">
              <div className="max-w-md">
                <NewsletterForm variant="bar" autoFocus />
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  )
}
