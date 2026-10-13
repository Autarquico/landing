import { useTranslation } from 'react-i18next'

const scrollTo = (id: string) => () => {
  document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
}

export const Hero: React.FC = () => {
  const { t } = useTranslation()

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-black">
      {/* Video loop background */}
      <div className="absolute inset-0 flex items-center justify-center">
        <video
          src="/hero-video.mp4"
          autoPlay
          muted
          loop
          playsInline
          className="w-full h-full object-cover opacity-25"
          style={{
            maskImage: 'radial-gradient(ellipse at center, black 40%, transparent 85%)',
            WebkitMaskImage: 'radial-gradient(ellipse at center, black 40%, transparent 85%)',
          }}
        />
      </div>

      <div className="relative z-10 container mx-auto px-4 md:px-6 lg:px-12 text-center text-white pt-20 pb-16">
        <h1 className="font-display text-3xl sm:text-4xl md:text-5xl lg:text-6xl leading-[1.1] tracking-tight mb-8 max-w-[18ch] mx-auto">
          {t('home.hero.h1')}
        </h1>

        <p className="text-base sm:text-lg md:text-xl text-gray-300 mb-10 max-w-2xl mx-auto leading-relaxed">
          {t('home.hero.body')}
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-5">
          <button
            onClick={scrollTo('work')}
            className="text-base font-medium border-b border-white pb-1 hover:opacity-60 transition-opacity"
          >
            {t('home.hero.ctaPrimary')} →
          </button>
          <button
            onClick={scrollTo('contacto')}
            className="text-base font-medium text-white/70 border-b border-white/40 pb-1 hover:text-white hover:border-white transition-colors"
          >
            {t('home.hero.ctaSecondary')} →
          </button>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce-slow text-gray-500">
          <svg
            className="w-6 h-6 mx-auto"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path d="M6 9l6 6 6-6" />
          </svg>
        </div>
      </div>
    </section>
  )
}
