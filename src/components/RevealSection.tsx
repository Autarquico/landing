import { motion } from 'framer-motion'

interface RevealSectionProps {
  id?: string
  className?: string
  children: React.ReactNode
}

export const RevealSection: React.FC<RevealSectionProps> = ({ id, className, children }) => (
  <motion.section
    id={id}
    className={className}
    initial={{ opacity: 0, y: 24 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, amount: 0.15 }}
    transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
  >
    {children}
  </motion.section>
)
