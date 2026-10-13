import { useTranslation } from 'react-i18next'
import { Eyebrow } from '../components/Eyebrow'
import { RevealSection } from '../components/RevealSection'

export const Thesis: React.FC = () => {
  const { t } = useTranslation()

  return (
    <RevealSection className="border-t border-gray-100 dark:border-neutral-800 py-20 md:py-28">
      <div className="container mx-auto px-4 md:px-6 lg:px-12">
        <div className="max-w-3xl">
          <Eyebrow className="mb-8">{t('home.thesis.eyebrow')}</Eyebrow>
          <h2 className="font-display text-3xl md:text-5xl lg:text-6xl leading-[1.1] tracking-tight mb-10 max-w-[20ch]">
            {t('home.thesis.heading')}
          </h2>
          <div className="space-y-6 text-base md:text-lg text-gray-600 dark:text-neutral-300 leading-relaxed">
            <p>{t('home.thesis.p1')}</p>
            <p>{t('home.thesis.p2')}</p>
            <p>{t('home.thesis.p3')}</p>
            <p className="text-black dark:text-neutral-100 font-medium">{t('home.thesis.p4')}</p>
          </div>
        </div>
      </div>
    </RevealSection>
  )
}
