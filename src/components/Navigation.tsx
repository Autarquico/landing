import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'

export const Navigation: React.FC = () => {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollToWaitlist = () => {
    const element = document.getElementById('waitlist-final')
    element?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5, ease: 'easeOut' }}
      className={`fixed top-0 left-0 right-0 z-50 bg-white transition-all duration-300 ${
        scrolled ? 'shadow-sm' : ''
      }`}
    >
      <div className="container mx-auto px-4 md:px-6 lg:px-12 py-4 flex items-center justify-between">
        {/* Logo + Brand */}
        <div className="flex items-center gap-1.5">
          <img
            src="/logo.jpeg"
            alt="Autárquico"
            className="h-10 md:h-12 lg:h-14"
          />
          <span className="text-lg md:text-xl lg:text-2xl font-semibold text-black">
            autarqui.co
          </span>
        </div>

        {/* Menu Items */}
        <div className="hidden md:flex items-center gap-8 lg:gap-12">
          <a
            href="#autonomos"
            className="text-gray-700 hover:text-black transition-colors font-medium"
          >
            Autónomos y Pymes
          </a>
          <a
            href="#asesorias"
            className="text-gray-700 hover:text-black transition-colors font-medium"
          >
            Asesorías
          </a>
          <motion.button
            onClick={scrollToWaitlist}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="bg-black text-white px-6 py-2.5 lg:px-8 lg:py-3 rounded-full font-medium transition-all duration-200"
          >
            Apúntate Ya
          </motion.button>
        </div>

        {/* Mobile CTA */}
        <motion.button
          onClick={scrollToWaitlist}
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          className="md:hidden bg-black text-white px-5 py-2 rounded-full font-medium text-sm"
        >
          Apúntate
        </motion.button>
      </div>
    </motion.nav>
  )
}
