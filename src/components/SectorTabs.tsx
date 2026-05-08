import { useState } from 'react'
import { useTranslation } from 'react-i18next'

type Sector = 'lawyers' | 'clinics' | 'accountants' | 'insurance' | 'general'

const SECTORS: { id: Sector; mobile: boolean }[] = [
  { id: 'lawyers', mobile: true },
  { id: 'clinics', mobile: true },
  { id: 'accountants', mobile: false },
  { id: 'insurance', mobile: false },
  { id: 'general', mobile: true },
]

export const SectorTabs: React.FC = () => {
  const { t } = useTranslation()
  const [active, setActive] = useState<Sector>('lawyers')

  return (
    <div>
      <div className="flex gap-2 justify-center md:flex-wrap mb-10">
        {SECTORS.map(({ id, mobile }) => {
          const isActive = active === id
          return (
            <button
              key={id}
              onClick={() => setActive(id)}
              className={`whitespace-nowrap text-sm font-medium px-4 py-2 rounded-full border transition-colors ${
                mobile ? 'inline-flex' : 'hidden md:inline-flex'
              } ${
                isActive
                  ? 'bg-black text-white border-black dark:bg-neutral-100 dark:text-black dark:border-neutral-100'
                  : 'text-gray-600 border-gray-200 hover:text-black hover:border-gray-400 dark:text-neutral-400 dark:border-neutral-700 dark:hover:text-neutral-100 dark:hover:border-neutral-500'
              }`}
            >
              {t(`delta.sector.${id}.tab`)}
            </button>
          )
        })}
      </div>

      <div className="max-w-3xl mx-auto text-center lg:text-left">
        <h3 className="font-body font-semibold text-xl md:text-2xl lg:text-3xl tracking-tight mb-5 leading-snug">
          {t(`delta.sector.${active}.title`)}
        </h3>
        <p className="text-gray-500 dark:text-neutral-400 leading-relaxed text-base md:text-lg">
          {t(`delta.sector.${active}.body`)}
        </p>
      </div>
    </div>
  )
}
