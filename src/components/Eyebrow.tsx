interface EyebrowProps {
  children: React.ReactNode
  className?: string
}

export const Eyebrow: React.FC<EyebrowProps> = ({ children, className = '' }) => (
  <p className={`text-xs font-medium tracking-[0.22em] uppercase text-gray-500 dark:text-neutral-400 ${className}`}>
    {children}
  </p>
)
