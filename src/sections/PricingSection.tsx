import { motion } from 'framer-motion'
import { useTranslation } from 'react-i18next'

export const PricingSection: React.FC = () => {
  const { t } = useTranslation()

  return (
    <section id="pricing" className="py-12 md:py-20 px-4 md:px-6 lg:px-8 bg-white">
      <div className="container mx-auto max-w-6xl">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-3xl sm:text-4xl md:text-5xl font-display text-center mb-10 md:mb-16"
        >
          {t('pricing.headline')}
        </motion.h2>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="max-w-lg mx-auto"
        >
          <div id="asesorias" className="bg-gradient-to-br from-gray-50 to-white border border-gray-200 shadow-lg rounded-3xl p-6 sm:p-8 md:p-10 text-center relative overflow-hidden">
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
                <p className="text-lg md:text-xl text-gray-500 leading-relaxed">
                  {t('pricing.modular')}
                </p>
                <p className="text-lg md:text-xl text-gray-500 leading-relaxed">
                  {t('pricing.noSurprises')}
                </p>
              </div>

              {/* For advisors */}
              <div className="pt-6 border-t border-gray-200">
                <p className="text-lg text-gray-600 mb-3">
                  {t('pricing.advisorQuestion')}
                </p>
                <a
                  href="mailto:info@autarqui.co?subject=Consulta%20comercial%20-%20Asesoría"
                  className="inline-block text-green hover:text-green/80 font-medium transition-colors"
                >
                  {t('pricing.advisorCTA')}
                </a>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
