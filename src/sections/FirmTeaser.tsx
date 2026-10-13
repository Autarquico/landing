import { useTranslation } from 'react-i18next'
import { Link } from 'react-router-dom'
import { Eyebrow } from '../components/Eyebrow'
import { RevealSection } from '../components/RevealSection'

const CAPABILITIES = ['build', 'adapt', 'connect', 'automate']

export const FirmTeaser: React.FC = () => {
  const { t, i18n } = useTranslation()
  const prefix = i18n.language === 'en' ? '/en' : ''

  return (
    <RevealSection id="firm" className="border-t border-gray-100 dark:border-neutral-800 py-20 md:py-28 scroll-mt-24">
      <div className="container mx-auto px-4 md:px-6 lg:px-12">
        <div className="max-w-3xl">
          <Eyebrow className="mb-8">{t('home.firm.eyebrow')}</Eyebrow>
          <h2 className="font-display text-3xl md:text-5xl lg:text-6xl leading-[1.1] tracking-tight mb-8 max-w-[16ch]">
            {t('home.firm.heading')}
          </h2>
          <p className="text-base md:text-lg text-gray-600 dark:text-neutral-300 leading-relaxed mb-10">
            {t('home.firm.body')}
          </p>

          <ul className="flex flex-wrap gap-x-8 gap-y-3 mb-12">
            {CAPABILITIES.map((c) => (
              <li
                key={c}
                className="text-sm font-medium tracking-[0.2em] uppercase text-gray-500 dark:text-neutral-400"
              >
                {t(`firm.${c}.title`)}
              </li>
            ))}
          </ul>

          <Link
            to={`${prefix}/firm`}
            className="text-base font-medium border-b border-black dark:border-neutral-100 pb-1 hover:opacity-60 transition-opacity"
          >
            {t('home.firm.cta')} →
          </Link>
        </div>
      </div>
    </RevealSection>
  )
}
