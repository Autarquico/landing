import { motion } from 'framer-motion'
import { Check } from 'lucide-react'

export const SolutionHero: React.FC = () => {
  const benefits = [
    { stat: 'IA', label: 'Automátizado.' },
    { stat: '24/7', label: 'Siempre disponible.' },
    { stat: '<1 día', label: 'Configuración simple.' },
  ]

  const features = [
    'Nóminas automáticas',
    'Integración con bancos',
    'Fichaje ilimitado, 4 años de almacenamiento',
    'Portal para tus empleados',
    'Gestion automática de subvenciones',
    'Altas y bajas en la seguridad social',
    'Analíticas de tu negocio en tiempo real',
    'Cumplimiento normativo garantizado',
    'Sin esperas, a tu ritmo',
  ]

    // const features = [
  //   'Fichaje ilimitado, 4 años de almacenamiento',
  //   'Nóminas automáticas',
  //   'Integración con bancos',
  //   'Altas y bajas en la seguridad social',
  //   'Portal del empleado',
  //   'Gestion automática de subvenciones',
  //   'Agente IA especializado',
  //   'Notificaciones automáticas',
  //   'Soporte por email/chat',
  //   'y mucho más...',
  // ]

  return (
    <section className="relative min-h-screen bg-white flex items-center justify-center overflow-hidden">
      {/* Color Video Background (right side on desktop) */}
      <div className="absolute right-0 top-0 bottom-0 w-full md:w-1/2 overflow-hidden">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover opacity-20 md:opacity-30"
        >
          <source src="/guy-hammock.mp4" type="video/mp4" />
        </video>
        {/* Gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-white via-white/80 to-transparent" />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 md:px-6 lg:px-12 py-16 md:py-20">
        <div className="grid md:grid-cols-2 gap-8 md:gap-12 lg:gap-16 items-start">
          {/* Left: Headline, Description, Stats, CTA */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            {/* Headline */}
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-display mb-6 md:mb-8 leading-tight">
              GESTIONA
              <br />
              <span className="text-green">TU NEGOCIO</span>
            </h2>

            {/* Description */}
            <p className="text-lg sm:text-xl md:text-2xl text-gray-700 mb-8 md:mb-10 leading-relaxed">
              Automatiza la gestión de tu empresa.
              <br />
              Control total desde tu móvil.
            </p>

            {/* Stats */}
            <div className="flex flex-wrap gap-6 sm:gap-8 mb-8 md:mb-10">
              {benefits.map((benefit, index) => (
                <motion.div
                  key={benefit.label}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                >
                  <div className="text-3xl sm:text-4xl md:text-5xl font-display text-black mb-1">
                    {benefit.stat}
                  </div>
                  <div className="text-gray-600 text-sm md:text-base">{benefit.label}</div>
                </motion.div>
              ))}
            </div>

            {/* CTA */}
            {/* <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <a
                href="#waitlist-final"
                className="inline-block bg-black text-white px-8 sm:px-10 py-3 sm:py-4 rounded-full font-medium text-base sm:text-lg hover:bg-gray-800 transition-all duration-200 shadow-lg hover:shadow-xl hover:-translate-y-1"
              >
                Apúntate a la Lista →
              </a>
              <p className="text-xs sm:text-sm text-gray-600 mt-3 sm:mt-4">
                Lanzamiento en 2026.
              </p>
            </motion.div> */}
          </motion.div>

          {/* Right: Features List */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-3 md:space-y-4"
          >
            {features.map((feature, index) => (
              <motion.div
                key={feature}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
                className="flex items-center gap-3"
              >
                <div className="w-5 h-5 md:w-6 md:h-6 rounded-full bg-green flex items-center justify-center flex-shrink-0">
                  <Check className="w-3 h-3 md:w-4 md:h-4 text-white" />
                </div>
                <span className="text-base md:text-lg text-gray-700">{feature}</span>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  )
}
