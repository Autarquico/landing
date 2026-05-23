import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'
import { motion, AnimatePresence } from 'framer-motion'
import { Check, Loader2 } from 'lucide-react'
import { useTranslation } from 'react-i18next'

const contactSchema = z.object({
  name: z.string().min(2),
  email: z.string().email(),
  company: z.string().min(2),
})

type ContactFormData = z.infer<typeof contactSchema>

interface ContactFormProps {
  source: string
  endpoint?: string
}

export const ContactForm: React.FC<ContactFormProps> = ({
  source,
  endpoint = 'https://sigma.autarqui.co/api/public/contact',
}) => {
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const { t } = useTranslation()

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
  })

  const onSubmit = async (data: ContactFormData) => {
    setIsLoading(true)
    setError(null)

    try {
      const response = await fetch(endpoint, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ ...data, source }),
      })

      if (!response.ok) throw new Error('Request failed')

      setIsSubmitted(true)
      reset()
      setTimeout(() => setIsSubmitted(false), 8000)
    } catch {
      setError(t('contact.error'))
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <div className="w-full max-w-md mx-auto">
      <AnimatePresence mode="wait">
        {isSubmitted ? (
          <motion.div
            key="success"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="flex flex-col items-center gap-2 text-emerald-500"
          >
            <Check className="w-8 h-8" />
            <p className="text-lg font-medium text-center">{t('contact.success')}</p>
          </motion.div>
        ) : (
          <motion.form
            key="form"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onSubmit={handleSubmit(onSubmit)}
            className="space-y-4"
          >
            <div>
              <input
                {...register('name')}
                type="text"
                placeholder={t('contact.name')}
                disabled={isLoading}
                className={`w-full px-4 py-3 rounded-lg border ${
                  errors.name ? 'border-red-500' : 'border-gray-200 dark:border-neutral-700'
                } bg-white dark:bg-neutral-900 focus:outline-none focus:ring-2 focus:ring-emerald-500 disabled:opacity-50`}
              />
            </div>

            <div>
              <input
                {...register('email')}
                type="email"
                placeholder={t('contact.email')}
                disabled={isLoading}
                className={`w-full px-4 py-3 rounded-lg border ${
                  errors.email ? 'border-red-500' : 'border-gray-200 dark:border-neutral-700'
                } bg-white dark:bg-neutral-900 focus:outline-none focus:ring-2 focus:ring-emerald-500 disabled:opacity-50`}
              />
            </div>

            <div>
              <input
                {...register('company')}
                type="text"
                placeholder={t('contact.company')}
                disabled={isLoading}
                className={`w-full px-4 py-3 rounded-lg border ${
                  errors.company ? 'border-red-500' : 'border-gray-200 dark:border-neutral-700'
                } bg-white dark:bg-neutral-900 focus:outline-none focus:ring-2 focus:ring-emerald-500 disabled:opacity-50`}
              />
            </div>

            <motion.button
              type="submit"
              disabled={isLoading}
              whileHover={{ scale: isLoading ? 1 : 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="w-full bg-emerald-500 text-white px-6 py-3 rounded-lg font-medium hover:bg-emerald-600 transition-colors disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
            >
              {isLoading ? (
                <>
                  <Loader2 className="w-5 h-5 animate-spin" />
                  <span>{t('contact.sending')}</span>
                </>
              ) : (
                <span>{t('contact.submit')}</span>
              )}
            </motion.button>

            {error && <p className="text-sm text-red-500 text-center">{error}</p>}
          </motion.form>
        )}
      </AnimatePresence>
    </div>
  )
}
