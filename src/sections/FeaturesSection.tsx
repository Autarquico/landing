import { useEffect, useRef, useState } from 'react'
import { motion } from 'framer-motion'
import { Clock, FileText, Users, Smartphone, BarChart3, Lock } from 'lucide-react'

export const FeaturesSection: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false)
  const sectionRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.1 }
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

  const features = [
    {
      icon: Clock,
      title: 'Fichaje Automático',
      description: 'Tablet o móvil. PIN simple. Calcula horas ordinarias, extras, nocturnas automáticamente.',
    },
    {
      icon: FileText,
      title: 'Nóminas Automáticas',
      description: 'Genera, envía, almacena. Modelo oficial español. 100% compliance RED y AEAT.',
    },
    {
      icon: Users,
      title: 'Portal del Empleado',
      description: 'Tus empleados acceden a sus nóminas 24/7. Sin llamadas, sin emails.',
    },
    {
      icon: Smartphone,
      title: 'Móvil-First',
      description: 'PWA instalable. Funciona offline. Tu negocio en el bolsillo.',
    },
    {
      icon: BarChart3,
      title: 'Analytics Tiempo Real',
      description: 'Costes laborales, tendencias, predicciones. Dashboard limpio.',
    },
    {
      icon: Lock,
      title: 'Seguro y Compliant',
      description: 'GDPR, cifrado, backups. 4 años de historial. Siempre disponible.',
    },
  ]

  return (
    <section ref={sectionRef} className="py-20 px-4 lg:px-8 bg-gray-50">
      <div className="container mx-auto max-w-6xl">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-5xl font-display text-center mb-16"
        >
          Todo lo que Necesitas
        </motion.h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              animate={isVisible ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{
                y: -4,
                borderColor: 'rgb(16, 185, 129)',
                boxShadow: '0 10px 30px rgba(16, 185, 129, 0.1)',
              }}
              className="bg-white p-8 rounded-2xl border-2 border-gray-100 transition-all duration-300 cursor-pointer"
            >
              <div className="w-14 h-14 rounded-xl bg-green/10 flex items-center justify-center mb-4">
                <feature.icon className="w-7 h-7 text-green" />
              </div>

              <h3 className="text-xl font-display mb-3">{feature.title}</h3>
              <p className="text-gray-700 leading-relaxed">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
