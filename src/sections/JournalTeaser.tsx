import { useTranslation } from 'react-i18next'
import { Link } from 'react-router-dom'
import { Eyebrow } from '../components/Eyebrow'
import { RevealSection } from '../components/RevealSection'
import { NewsletterForm } from '../components/NewsletterForm'
import { getLatestArticles } from '../content/journal'

export const JournalTeaser: React.FC = () => {
  const { t, i18n } = useTranslation()
  const locale = i18n.language === 'en' ? 'en' : 'es'
  const prefix = locale === 'en' ? '/en' : ''
  const latest = getLatestArticles(locale, 3)
  const formatDate = (iso: string) =>
    new Date(`${iso}T00:00:00`).toLocaleDateString(locale === 'en' ? 'en-US' : 'es-ES', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    })

  return (
    <RevealSection id="journal" className="border-t border-gray-100 dark:border-neutral-800 py-20 md:py-28 scroll-mt-24">
      <div className="container mx-auto px-4 md:px-6 lg:px-12">
        <div className="max-w-2xl mb-12">
          <Eyebrow className="mb-6">Journal</Eyebrow>
          <h2 className="font-display text-3xl md:text-5xl leading-[1.1] tracking-tight mb-6">
            {t('home.journal.heading')}
          </h2>
          <p className="text-base md:text-lg text-gray-600 dark:text-neutral-300 leading-relaxed">
            {t('home.journal.intro')}
          </p>
        </div>

        <div className="flex flex-col lg:flex-row lg:gap-16">
          {/* Artículos */}
          <div className="flex-1">
            <ul className="divide-y divide-gray-100 dark:divide-neutral-800 border-y border-gray-100 dark:border-neutral-800">
              {latest.map((a) => (
                <li key={a.slug}>
                  <Link
                    to={`${prefix}/journal/${a.slug}`}
                    className="group flex flex-col sm:flex-row sm:items-baseline gap-1 sm:gap-6 py-6 hover:opacity-70 transition-opacity"
                  >
                    <span className="text-xs text-gray-400 dark:text-neutral-500 sm:w-40 shrink-0 pt-1">
                      <time dateTime={a.date}>{formatDate(a.date)}</time>
                      <span className="mx-2 opacity-50">·</span>
                      {a.readingTime} min
                    </span>
                    <span className="font-display text-xl md:text-2xl tracking-tight">{a.title}</span>
                  </Link>
                </li>
              ))}
            </ul>

            <div className="mt-10">
              <Link
                to={`${prefix}/journal`}
                className="text-base font-medium border-b border-black dark:border-neutral-100 pb-1 hover:opacity-60 transition-opacity"
              >
                {t('home.journal.cta')} →
              </Link>
            </div>
          </div>

          {/* Suscripción — el mismo formulario del desplegable del Journal */}
          <aside className="mt-12 lg:mt-0 lg:w-80 lg:shrink-0">
            <div className="lg:border-l lg:border-gray-100 lg:dark:border-neutral-800 lg:pl-10">
              <NewsletterForm variant="bar" />
            </div>
          </aside>
        </div>
      </div>
    </RevealSection>
  )
}
