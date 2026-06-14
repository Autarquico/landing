import { useTranslation } from 'react-i18next'

export const ProblemHero: React.FC = () => {
  const { t } = useTranslation()

  return (
    <section id="autonomos" className="snap-start relative min-h-screen flex items-center justify-center overflow-hidden bg-black">
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
            WebkitMaskImage: 'radial-gradient(ellipse at center, black 40%, transparent 85%)'
          }}
        />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 md:px-6 lg:px-12 text-center text-white pt-20 pb-16">
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-display mb-6 md:mb-8 leading-tight max-w-5xl mx-auto px-4">
          {t('hero.headline')}
        </h1>

        <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-gray-300 mb-8 md:mb-10 max-w-4xl mx-auto leading-relaxed px-4">
          {t('hero.subheadline1')}
        </p>

        <figure className="max-w-2xl mx-auto px-4">
          <blockquote className="text-sm sm:text-base md:text-lg italic text-gray-200 leading-relaxed">
            "{t('hero.quote')}"
          </blockquote>
          <figcaption className="mt-2 text-xs sm:text-sm text-gray-300 not-italic">
            — {t('hero.quoteAuthor')}
          </figcaption>
        </figure>

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
