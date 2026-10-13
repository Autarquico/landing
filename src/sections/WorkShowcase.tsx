import { useTranslation } from 'react-i18next'
import { Link } from 'react-router-dom'
import { Eyebrow } from '../components/Eyebrow'
import { RevealSection } from '../components/RevealSection'
import { products } from '../content/products'

export const WorkShowcase: React.FC = () => {
  const { t, i18n } = useTranslation()
  const prefix = i18n.language === 'en' ? '/en' : ''

  return (
    <RevealSection
      id="work"
      className="border-t border-gray-100 dark:border-neutral-800 py-20 md:py-28 scroll-mt-24"
    >
      <div className="container mx-auto px-4 md:px-6 lg:px-12">
        <div className="max-w-2xl mb-14">
          <Eyebrow className="mb-6">{t('home.work.eyebrow')}</Eyebrow>
          <h2 className="font-display text-3xl md:text-5xl leading-[1.1] tracking-tight mb-6">
            {t('home.work.heading')}
          </h2>
          <p className="text-base md:text-lg text-gray-600 dark:text-neutral-300 leading-relaxed">
            {t('home.work.intro')}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {products.map((p) => {
            const content = (
              <>
                <span className="text-[0.7rem] font-medium tracking-[0.2em] text-gray-400 dark:text-neutral-500">
                  {t(p.typeKey)} · {t(p.domainKey)}
                </span>
                <h3 className="font-display text-2xl md:text-3xl tracking-tight mt-4 mb-3">{p.name}</h3>
                <p className="text-sm text-gray-500 dark:text-neutral-400 leading-relaxed">
                  {t(p.descKey)}
                </p>
              </>
            )
            const className =
              'group flex flex-col border border-gray-200 dark:border-neutral-800 rounded-lg p-8 hover:border-black dark:hover:border-neutral-100 transition-colors'
            return p.external ? (
              <a key={p.id} href={p.href(prefix)} target="_blank" rel="noopener noreferrer" className={className}>
                {content}
              </a>
            ) : (
              <Link key={p.id} to={p.href(prefix)} className={className}>
                {content}
              </Link>
            )
          })}
        </div>

        <div className="mt-12">
          <Link
            to={`${prefix}/work`}
            className="text-base font-medium border-b border-black dark:border-neutral-100 pb-1 hover:opacity-60 transition-opacity"
          >
            {t('home.work.cta')} →
          </Link>
        </div>
      </div>
    </RevealSection>
  )
}
