import { useEffect, useRef, useState } from 'react'
import { motion } from 'framer-motion'
import { useTranslation } from 'react-i18next'

export const PricingSection: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false)
  const sectionRef = useRef<HTMLDivElement>(null)
  const { t } = useTranslation()

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.3 }
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current)
      }
    }
  }, [])

  return (
    <section ref={sectionRef} className="py-12 md:py-20 px-4 md:px-6 lg:px-8 bg-white">
      <div className="container mx-auto max-w-6xl">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-3xl sm:text-4xl md:text-5xl font-display text-center mb-10 md:mb-16"
        >
          {t('pricing.headline')}
        </motion.h2>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={isVisible ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="max-w-lg mx-auto"
        >
          <div className="bg-gradient-to-br from-gray-50 to-white border-2 border-black rounded-3xl p-6 sm:p-8 md:p-10 text-center relative overflow-hidden">
            {/* Subtle background pattern */}
            <div className="absolute inset-0 opacity-5">
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_120%,rgba(16,185,129,0.4),transparent)]" />
            </div>

            <div className="relative z-10">
              {/* Main message */}
              <div className="mb-8 md:mb-10">
                <div className="text-3xl sm:text-4xl md:text-5xl font-display mb-4 md:mb-6">
                  {t('pricing.payForNeeds')}
                </div>
                <p className="text-lg md:text-xl text-gray-600 leading-relaxed">
                  {t('pricing.modular')}
                </p>
                <p className="text-lg md:text-xl text-gray-600 leading-relaxed">
                  {t('pricing.noSurprises')}
                </p>
              </div>
            </div>
          </div>

          {/* For advisors */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isVisible ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="mt-8 text-center"
          >
            <p className="text-lg text-gray-700 mb-3">
              {t('pricing.advisorQuestion')}
            </p>
            <a
              href="mailto:info@autarqui.co?subject=Consulta%20comercial%20-%20Asesoría"
              className="inline-block text-green hover:text-green/80 font-medium transition-colors"
            >
              {t('pricing.advisorCTA')}
            </a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
