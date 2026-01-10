import { useEffect, useRef, useState } from 'react'
import { motion } from 'framer-motion'
import { Euro, Clock, FileText } from 'lucide-react'

export const ProblemSection: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false)
  const sectionRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.2 }
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current)
      }
    }
  }, [])

  const problems = [
    {
      icon: Euro,
      title: 'Pagas Demasiado',
      description: '150€/mes por un servicio que podrías gestionar tú mismo',
      color: 'text-red',
    },
    {
      icon: Clock,
      title: 'Pierdes Tiempo',
      description: 'Desplazamientos, llamadas, esperas. Y solo abren de 9 a 14h.',
      color: 'text-red',
    },
    {
      icon: FileText,
      title: 'Dependes de Terceros',
      description: 'Tus nóminas, tus datos, tu negocio... pero no tienes control.',
      color: 'text-red',
    },
  ]

  return (
    <section ref={sectionRef} className="py-20 px-4 lg:px-8 bg-white">
      <div className="container mx-auto max-w-6xl">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-5xl font-display text-center mb-16"
        >
          ¿Te Suena Familiar?
        </motion.h2>

        <div className="grid md:grid-cols-3 gap-8">
          {problems.map((problem, index) => (
            <motion.div
              key={problem.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isVisible ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 + index * 0.1 }}
              className="text-center group"
            >
              <motion.div
                initial={{ scale: 0 }}
                animate={isVisible ? { scale: 1 } : {}}
                transition={{ duration: 0.5, delay: 0.3 + index * 0.1, type: 'spring' }}
                className="w-20 h-20 mx-auto mb-6 rounded-2xl bg-red/10 flex items-center justify-center group-hover:bg-red/20 transition-colors duration-300"
              >
                <problem.icon className={`w-10 h-10 ${problem.color}`} />
              </motion.div>

              <h3 className="text-2xl font-display mb-4">{problem.title}</h3>
              <p className="text-gray-700 leading-relaxed">{problem.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
