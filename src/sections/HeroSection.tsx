import { motion } from 'framer-motion'
import { EmailCapture } from '../components/EmailCapture'
import { Clock, Car, Folder, Euro } from 'lucide-react'

export const HeroSection: React.FC = () => {
  return (
    <section className="min-h-screen pt-24 pb-12 px-4 lg:px-8 relative overflow-hidden">
      <div className="container mx-auto">
        {/* Main Headline */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-center mb-8"
        >

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-2xl md:text-3xl text-gray-700 mb-2"
          >
          </motion.p>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="text-xl md:text-2xl text-green font-semibold mb-8"
          >
          </motion.p>
        </motion.div>

        {/* Email Capture */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mb-6"
        >
          <EmailCapture variant="hero" source="hero" />
        </motion.div>

        {/* Fine Print */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="text-center text-sm text-gray-700 mb-12"
        >
          Sé de los primeros en liberarte. Lanzamiento Marzo 2026.
        </motion.p>

        {/* Split Screen Visual */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 1 }}
          className="grid md:grid-cols-2 gap-4 md:gap-8 max-w-6xl mx-auto mt-12"
        >
          {/* LEFT SIDE - Traditional Method (Before) */}
          <motion.div
            initial={{ x: -50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 1.2 }}
            className="bg-gray-50 rounded-2xl p-8 border border-gray-100 relative overflow-hidden"
          >
            {/* Video/GIF background */}
            <div className="absolute inset-0 opacity-20">
              <img
                src="/busy-freelancer.gif"
                alt="Busy freelancer"
                className="w-full h-full object-cover"
              />
            </div>

            <div className="relative z-10">
              <h3 className="text-2xl font-display mb-6 text-gray-700">
                El Método Tradicional
              </h3>

              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 rounded-full bg-red/10 flex items-center justify-center flex-shrink-0">
                    <Euro className="w-5 h-5 text-red" />
                  </div>
                  <div>
                    <p className="font-semibold text-gray-700">150€/mes</p>
                    <p className="text-sm text-gray-700">Precio fijo mensual</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 rounded-full bg-red/10 flex items-center justify-center flex-shrink-0">
                    <Clock className="w-5 h-5 text-red" />
                  </div>
                  <div>
                    <p className="font-semibold text-gray-700">9-14h, 16-19h</p>
                    <p className="text-sm text-gray-700">Horario limitado</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 rounded-full bg-red/10 flex items-center justify-center flex-shrink-0">
                    <Car className="w-5 h-5 text-red" />
                  </div>
                  <div>
                    <p className="font-semibold text-gray-700">Desplazamientos</p>
                    <p className="text-sm text-gray-700">Pérdida de tiempo</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 rounded-full bg-red/10 flex items-center justify-center flex-shrink-0">
                    <Folder className="w-5 h-5 text-red" />
                  </div>
                  <div>
                    <p className="font-semibold text-gray-700">Espera 5 días</p>
                    <p className="text-sm text-gray-700">Para tus nóminas</p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* RIGHT SIDE - Autárquico (After) */}
          <motion.div
            initial={{ x: 50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 1.4 }}
            className="bg-gradient-to-br from-green/5 to-green/10 rounded-2xl p-8 border-2 border-green relative overflow-hidden"
          >
            {/* Video/GIF background */}
            <div className="absolute inset-0 opacity-20">
              <img
                src="/guy-hammock_nologo.gif"
                alt="Relaxed person in hammock"
                className="w-full h-full object-cover"
              />
            </div>

            <div className="relative z-10">
              <h3 className="text-2xl font-display mb-6 text-black">
                Con Autárquico
              </h3>

              <div className="space-y-4">
                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: 1.6 }}
                  className="flex items-start gap-3"
                >
                  <div className="w-10 h-10 rounded-full bg-green/20 flex items-center justify-center flex-shrink-0">
                    <span className="text-2xl">✓</span>
                  </div>
                  <div>
                    <p className="font-semibold text-black">39€/mes</p>
                    <p className="text-sm text-gray-700">Todo incluido</p>
                  </div>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: 1.7 }}
                  className="flex items-start gap-3"
                >
                  <div className="w-10 h-10 rounded-full bg-green/20 flex items-center justify-center flex-shrink-0">
                    <span className="text-2xl">✓</span>
                  </div>
                  <div>
                    <p className="font-semibold text-black">24/7</p>
                    <p className="text-sm text-gray-700">Siempre disponible</p>
                  </div>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: 1.8 }}
                  className="flex items-start gap-3"
                >
                  <div className="w-10 h-10 rounded-full bg-green/20 flex items-center justify-center flex-shrink-0">
                    <span className="text-2xl">✓</span>
                  </div>
                  <div>
                    <p className="font-semibold text-black">En tu móvil</p>
                    <p className="text-sm text-gray-700">Cero desplazamientos</p>
                  </div>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: 1.9 }}
                  className="flex items-start gap-3"
                >
                  <div className="w-10 h-10 rounded-full bg-green/20 flex items-center justify-center flex-shrink-0">
                    <span className="text-2xl">✓</span>
                  </div>
                  <div>
                    <p className="font-semibold text-black">Nóminas en minutos</p>
                    <p className="text-sm text-gray-700">Email automático</p>
                  </div>
                </motion.div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
