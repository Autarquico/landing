import { useId, useState } from 'react'
import { useTranslation } from 'react-i18next'

const ENDPOINT = import.meta.env.VITE_NEWSLETTER_ENDPOINT ?? 'https://newsletter.autarqui.co/subscribe'

type Status = 'idle' | 'sending' | 'ok' | 'error'

const TONES = {
  dark: {
    label: 'text-white/70',
    input: 'bg-white/5 border-white/20 text-white placeholder:text-white/30 focus:border-white/50',
    button: 'border-white/20 text-white/80 hover:border-white/50 hover:text-white',
    message: 'text-white/50',
  },
  light: {
    label: 'text-muted',
    input:
      'bg-transparent border-hairline dark:border-white/20 text-ink dark:text-white placeholder:text-muted/60 focus:border-ink dark:focus:border-white/60',
    button:
      'border-hairline dark:border-white/20 text-ink dark:text-white hover:border-ink dark:hover:border-white/60',
    message: 'text-muted',
  },
  // La barra superior es blanca también en modo oscuro: aquí no se invierte nada.
  bar: {
    label: 'text-ink/60',
    input:
      'bg-transparent border-ink/20 text-black placeholder:text-ink/40 focus:border-ink/60',
    button: 'bg-black text-white border-black hover:bg-ink/80 hover:border-ink/80',
    message: 'text-ink/50',
  },
} as const

interface Props {
  variant?: keyof typeof TONES
  autoFocus?: boolean
}

export const NewsletterForm: React.FC<Props> = ({ variant = 'light', autoFocus = false }) => {
  const { t, i18n } = useTranslation()
  const tone = TONES[variant]

  const inputId = useId()
  const [email, setEmail] = useState('')
  const [website, setWebsite] = useState('')
  const [status, setStatus] = useState<Status>('idle')

  const submit = async (event: React.FormEvent) => {
    event.preventDefault()
    setStatus('sending')

    try {
      const response = await fetch(ENDPOINT, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          email,
          locale: i18n.language === 'en' ? 'en' : 'es',
          website,
        }),
      })
      if (!response.ok) throw new Error(String(response.status))
      setStatus('ok')
      setEmail('')
    } catch {
      setStatus('error')
    }
  }

  if (status === 'ok') {
    return (
      <p className={`text-sm ${tone.message}`} aria-live="polite">
        {t('newsletter.confirmation')}
      </p>
    )
  }

  return (
    <form onSubmit={submit} className="space-y-3">
      <label htmlFor={inputId} className={`block text-sm ${tone.label}`}>
        {t('newsletter.label')}
      </label>

      <div className="flex flex-col sm:flex-row gap-2">
        <input
          id={inputId}
          type="email"
          name="email"
          required
          autoComplete="email"
          value={email}
          onChange={(event) => setEmail(event.target.value)}
          placeholder={t('newsletter.placeholder')}
          autoFocus={autoFocus}
          className={`flex-1 min-w-0 px-3 py-2 text-sm border rounded-sm outline-none transition-colors ${tone.input}`}
        />
        <button
          type="submit"
          disabled={status === 'sending'}
          className={`px-4 py-2 text-sm border rounded-sm transition-colors disabled:opacity-50 ${tone.button}`}
        >
          {t(status === 'sending' ? 'newsletter.sending' : 'newsletter.submit')}
        </button>
      </div>

      {/* Señuelo: invisible para una persona, irresistible para un bot. */}
      <input
        type="text"
        name="website"
        tabIndex={-1}
        autoComplete="off"
        aria-hidden="true"
        value={website}
        onChange={(event) => setWebsite(event.target.value)}
        className="hidden"
      />

      <p className={`text-xs ${tone.message}`} aria-live="polite">
        {status === 'error' ? t('newsletter.error') : t('newsletter.note')}
      </p>
    </form>
  )
}
