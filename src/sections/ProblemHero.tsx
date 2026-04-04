import { useEffect, useRef } from 'react'
import { useTranslation } from 'react-i18next'

export const ProblemHero: React.FC = () => {
  const { t } = useTranslation()
  const turbulenceRef = useRef<SVGFETurbulenceElement>(null)

  useEffect(() => {
    let frame: number
    let seed = 0

    const animate = () => {
      seed += 0.3
      if (turbulenceRef.current) {
        turbulenceRef.current.setAttribute(
          'baseFrequency',
          `${0.01 + Math.sin(seed * 0.05) * 0.003} ${0.015 + Math.cos(seed * 0.03) * 0.005}`
        )
        turbulenceRef.current.setAttribute('seed', String(Math.floor(seed) % 100))
      }
      frame = requestAnimationFrame(animate)
    }

    frame = requestAnimationFrame(animate)
    return () => cancelAnimationFrame(frame)
  }, [])

  return (
    <section id="autonomos" className="relative min-h-screen flex items-center justify-center overflow-hidden bg-black">
      {/* SVG filter for wave displacement */}
      <svg className="absolute w-0 h-0" aria-hidden="true">
        <defs>
          <filter id="wave-flag" x="-20%" y="-20%" width="140%" height="140%">
            <feTurbulence
              ref={turbulenceRef}
              type="fractalNoise"
              baseFrequency="0.01 0.015"
              numOctaves={3}
              seed={0}
              result="noise"
            />
            <feDisplacementMap
              in="SourceGraphic"
              in2="noise"
              scale={35}
              xChannelSelector="R"
              yChannelSelector="G"
            />
          </filter>
        </defs>
      </svg>

      {/* Logo as waving flag */}
      <div className="absolute inset-0 flex items-center justify-center">
        <img
          src="/logo.jpeg"
          alt=""
          className="w-[60vw] md:w-[40vw] lg:w-[30vw] max-w-lg opacity-15"
          style={{
            filter: 'url(#wave-flag)',
            maskImage: 'radial-gradient(ellipse at center, black 30%, transparent 75%)',
            WebkitMaskImage: 'radial-gradient(ellipse at center, black 30%, transparent 75%)'
          }}
        />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 md:px-6 lg:px-12 text-center text-white pt-20 pb-16">
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-display mb-6 md:mb-8 leading-tight max-w-5xl mx-auto px-4">
          {t('hero.headline')}
        </h1>

        <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-gray-300 mb-6 md:mb-8 max-w-4xl mx-auto leading-relaxed px-4">
          {t('hero.subheadline1')}
          <br />
          {t('hero.subheadline2')}
        </p>

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

      {/* Section transition fade */}
      <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-b from-transparent to-white" />
    </section>
  )
}
