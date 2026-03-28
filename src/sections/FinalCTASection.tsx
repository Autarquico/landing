import { motion } from 'framer-motion'
import { EmailCapture } from '../components/EmailCapture'
import { Check } from 'lucide-react'
import { useTranslation } from 'react-i18next'

export const FinalCTASection: React.FC = () => {
  const { t } = useTranslation()

  return (
    <section
      id="waitlist-final"
      className="py-16 md:py-24 px-4 md:px-6 lg:px-8 bg-black text-white relative overflow-hidden"
    >
      {/* Animated gradient background */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(16,185,129,0.8),transparent_50%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_50%,rgba(16,185,129,0.6),transparent_50%)]" />
      </div>

      <div className="container mx-auto max-w-4xl relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          {/* Headlines */}
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-display mb-4 md:mb-6 leading-tight px-4">
            {t('cta.headline1')}
            <br />
            {t('cta.headline2')}
          </h2>

          <p className="text-2xl sm:text-3xl md:text-4xl font-display mb-3 md:mb-4 text-green">
            {t('cta.signUp')}
          </p>

          <p className="text-lg sm:text-xl md:text-2xl text-white/80 mb-8 md:mb-12 px-4">
            {t('cta.earlyAccess')}
          </p>

          {/* Email Capture */}
          <div className="mb-12">
            <EmailCapture variant="final" source="final-cta" />
          </div>

          {/* Benefits */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="space-y-3 md:space-y-4 mb-8 md:mb-10 px-4"
          >
            <div className="flex items-center justify-center gap-2">
              <Check className="w-4 h-4 md:w-5 md:h-5 text-green flex-shrink-0" />
              <span className="text-base md:text-lg">{t('cta.benefit1')}</span>
            </div>
            <div className="flex items-center justify-center gap-2">
              <Check className="w-4 h-4 md:w-5 md:h-5 text-green flex-shrink-0" />
              <span className="text-base md:text-lg">{t('cta.benefit2')}</span>
            </div>
            <div className="flex items-center justify-center gap-2">
              <Check className="w-4 h-4 md:w-5 md:h-5 text-green flex-shrink-0" />
              <span className="text-base md:text-lg">{t('cta.benefit3')}</span>
            </div>
          </motion.div>

          {/* Social proof counter */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="inline-flex flex-col sm:flex-row items-center gap-2 bg-white/10 backdrop-blur-sm px-4 sm:px-6 py-3 rounded-full border border-white/20"
          >
            <span className="text-white/90 text-sm md:text-base text-center sm:text-left">
              <span className="font-bold text-green">{t('cta.socialProofCount')}</span> {t('cta.socialProofText')}
            </span>
          </motion.div>
        </motion.div>
      </div>

      {/* Decorative elements */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent" />
    </section>
  )
}
