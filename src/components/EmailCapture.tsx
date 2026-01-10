import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'
import { motion, AnimatePresence } from 'framer-motion'
import { Check, Loader2 } from 'lucide-react'

const emailSchema = z.object({
  email: z
    .string()
    .min(5, 'Email muy corto')
    .email('Email no válido')
})

type EmailFormData = z.infer<typeof emailSchema>

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
      // For now, simulate API call
      await new Promise(resolve => setTimeout(resolve, 1000))

      console.log('Email submitted:', {
        email: data.email,
        source,
        timestamp: new Date().toISOString(),
      })

      setIsSubmitted(true)
      reset()

      // Reset success message after 5 seconds
      setTimeout(() => setIsSubmitted(false), 5000)
    } catch (err) {
      setError('Error. Intenta de nuevo')
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
            className={`flex items-center gap-2 ${
              isFinalCTA ? 'text-white' : 'text-green'
            }`}
          >
            <Check className="w-6 h-6" />
            <p className="text-lg font-medium">
              ¡Apuntado! 🎉 Revisa tu email
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
            <div className="flex flex-col sm:flex-row gap-2">
              <div className="flex-1">
                <input
                  {...register('email')}
                  type="email"
                  placeholder="tu@email.com"
                  disabled={isLoading}
                  className={`w-full px-4 py-3 rounded-md border ${
                    errors.email
                      ? 'border-red focus:border-red focus:ring-red'
                      : isFinalCTA
                      ? 'border-white/30 bg-white/10 text-white placeholder:text-white/60 focus:border-white focus:ring-white'
                      : 'border-gray-100 focus:border-green focus:ring-green'
                  } focus:outline-none focus:ring-2 focus:ring-offset-2 ${
                    isFinalCTA ? 'focus:ring-offset-black' : ''
                  } transition-all duration-200 disabled:opacity-50`}
                />
                {errors.email && (
                  <p className={`text-sm mt-1 ${isFinalCTA ? 'text-red-300' : 'text-red'}`}>
                    {errors.email.message}
                  </p>
                )}
                {error && (
                  <p className={`text-sm mt-1 ${isFinalCTA ? 'text-red-300' : 'text-red'}`}>
                    {error}
                  </p>
                )}
              </div>

              <motion.button
                type="submit"
                disabled={isLoading}
                whileHover={{ scale: isLoading ? 1 : 1.02, y: isLoading ? 0 : -2 }}
                whileTap={{ scale: 0.98 }}
                className={`${
                  isFinalCTA
                    ? 'bg-white text-black hover:bg-gray-50'
                    : 'bg-black text-white hover:bg-gray-700'
                } px-6 py-3 rounded-md font-medium transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2 whitespace-nowrap`}
              >
                {isLoading ? (
                  <>
                    <Loader2 className="w-5 h-5 animate-spin" />
                    <span>Apuntando...</span>
                  </>
                ) : (
                  <span>Apuntarme →</span>
                )}
              </motion.button>
            </div>

            <p className={`text-sm ${isFinalCTA ? 'text-white/70' : 'text-gray-700'} flex items-center gap-1`}>
              <Check className="w-4 h-4 text-green" />
              Sin spam. Solo noticias importantes
            </p>
          </motion.form>
        )}
      </AnimatePresence>
    </div>
  )
}
