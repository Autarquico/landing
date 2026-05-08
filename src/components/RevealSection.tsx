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
    initial={{ opacity: 0 }}
    whileInView={{ opacity: 1 }}
    viewport={{ once: true, amount: 0.3 }}
    transition={{ duration: 0.6, ease: 'easeOut' }}
  >
    {children}
  </motion.section>
)
