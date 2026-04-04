import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'
import { motion, AnimatePresence } from 'framer-motion'
import { Check, Loader2 } from 'lucide-react'
import { useTranslation } from 'react-i18next'

type EmailFormData = { email: string }

interface EmailCaptureProps {
  variant?: 'hero' | 'final'
  source?: string
}

export const EmailCapture: React.FC<EmailCaptureProps> = ({
  variant = 'hero',
  source = 'hero'
}) => {
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const { t } = useTranslation()

  const emailSchema = z.object({
    email: z
      .string()
      .min(5, t('email.validationShort'))
      .email(t('email.validationInvalid'))
  })

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<EmailFormData>({
    resolver: zodResolver(emailSchema),
  })

  const onSubmit = async (data: EmailFormData) => {
    setIsLoading(true)
    setError(null)

    try {
      // TODO: Replace with actual API call to MongoDB + Resend
      await new Promise(resolve => setTimeout(resolve, 1000))

      console.log('Email submitted:', {
        email: data.email,
        source,
        timestamp: new Date().toISOString(),
      })

      setIsSubmitted(true)
      reset()

      setTimeout(() => setIsSubmitted(false), 5000)
    } catch (err) {
      setError(t('email.error'))
    } finally {
      setIsLoading(false)
    }
  }

  const isFinalCTA = variant === 'final'

  return (
    <div className="w-full max-w-md mx-auto">
      <AnimatePresence mode="wait">
        {isSubmitted ? (
          <motion.div
            key="success"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className={`flex items-center justify-center gap-2 ${
              isFinalCTA ? 'text-white' : 'text-green'
            }`}
          >
            <Check className="w-6 h-6" />
            <p className="text-lg font-medium">
              {t('email.success')}
            </p>
          </motion.div>
        ) : (
          <motion.form
            key="form"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onSubmit={handleSubmit(onSubmit)}
            className="space-y-3"
          >
            <div className={`flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-0 ${
              isFinalCTA
                ? 'sm:bg-white/10 sm:border sm:border-white/30 sm:rounded-full sm:p-1.5'
                : 'sm:bg-gray-100 sm:border sm:border-gray-200 sm:rounded-full sm:p-1.5'
            }`}>
              <div className="flex-1">
                <input
                  {...register('email')}
                  type="email"
                  placeholder={t('email.placeholder')}
                  disabled={isLoading}
                  className={`w-full px-5 py-3 sm:py-2.5 rounded-full sm:rounded-full sm:bg-transparent sm:border-none ${
                    errors.email
                      ? 'border border-red focus:ring-red'
                      : isFinalCTA
                      ? 'border border-white/30 bg-white/10 text-white placeholder:text-white/60 sm:border-none sm:bg-transparent'
                      : 'border border-gray-200 sm:border-none sm:bg-transparent'
                  } focus:outline-none focus:ring-0 transition-all duration-200 disabled:opacity-50`}
                />
              </div>

              <motion.button
                type="submit"
                disabled={isLoading}
                whileHover={{ scale: isLoading ? 1 : 1.02 }}
                whileTap={{ scale: 0.98 }}
                className={`${
                  isFinalCTA
                    ? 'bg-white text-black hover:bg-gray-50'
                    : 'bg-black text-white hover:bg-gray-800'
                } px-6 py-3 sm:py-2.5 rounded-full font-medium transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2 whitespace-nowrap`}
              >
                {isLoading ? (
                  <>
                    <Loader2 className="w-5 h-5 animate-spin" />
                    <span>{t('email.submitting')}</span>
                  </>
                ) : (
                  <span>{t('email.submit')}</span>
                )}
              </motion.button>
            </div>

            {(errors.email || error) && (
              <p className={`text-sm ${isFinalCTA ? 'text-red-300' : 'text-red'}`}>
                {errors.email?.message || error}
              </p>
            )}

            <p className={`text-sm ${isFinalCTA ? 'text-white/70' : 'text-gray-500'} flex items-center gap-1`}>
              <Check className="w-4 h-4 text-green" />
              {t('email.noSpam')}
            </p>
          </motion.form>
        )}
      </AnimatePresence>
    </div>
  )
}
