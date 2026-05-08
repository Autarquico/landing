import { useTranslation } from 'react-i18next'

export type Audience = 'businesses' | 'advisors'

interface AudienceTabsProps {
  value: Audience
  onChange: (a: Audience) => void
  className?: string
}

const AUDIENCES: Audience[] = ['businesses', 'advisors']

export const AudienceTabs: React.FC<AudienceTabsProps> = ({ value, onChange, className = '' }) => {
  const { t } = useTranslation()
  return (
    <div className={`flex gap-2 justify-center ${className}`}>
      {AUDIENCES.map((id) => {
        const isActive = value === id
        return (
          <button
            key={id}
            onClick={() => onChange(id)}
            className={`whitespace-nowrap text-sm font-medium px-4 py-2 rounded-full border transition-colors ${
              isActive
                ? 'bg-black text-white border-black dark:bg-neutral-100 dark:text-black dark:border-neutral-100'
                : 'text-gray-600 border-gray-200 hover:text-black hover:border-gray-400 dark:text-neutral-400 dark:border-neutral-700 dark:hover:text-neutral-100 dark:hover:border-neutral-500'
            }`}
          >
            {t(`sigma.audience.${id}`)}
          </button>
        )
      })}
    </div>
  )
}
