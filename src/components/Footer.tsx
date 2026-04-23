import { Mail, Instagram } from 'lucide-react'
import { useTranslation } from 'react-i18next'

export const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear()
  const { t } = useTranslation()

  return (
    <footer className="bg-black text-white py-12 md:py-16 px-4 md:px-6 lg:px-8">
      <div className="container mx-auto max-w-4xl">
        <div className="flex flex-col md:flex-row justify-center gap-16 md:gap-24 mb-8 md:mb-12">
          {/* Legal */}
          <div className="text-center md:text-left">
            <h4 className="font-display text-lg mb-4">{t('footer.legal')}</h4>
            <ul className="space-y-2 text-sm text-white/70">
              <li>
                <a href="/legal/terminos" className="hover:text-white transition-colors">
                  {t('footer.terms')}
                </a>
              </li>
              <li>
                <a href="/legal/privacidad" className="hover:text-white transition-colors">
                  {t('footer.privacy')}
                </a>
              </li>
              <li>
                <a href="/legal/gdpr" className="hover:text-white transition-colors">
                  GDPR
                </a>
              </li>
            </ul>
          </div>

          {/* Contacto */}
          <div className="text-center md:text-left">
            <h4 className="font-display text-lg mb-4">{t('footer.contact')}</h4>
            <ul className="space-y-3">
              <li>
                <a
                  href="mailto:info@autarqui.co"
                  className="inline-flex items-center gap-2 text-sm text-white/70 hover:text-white transition-colors"
                >
                  <Mail className="w-4 h-4" />
                  info@autarqui.co
                </a>
              </li>
              <li>
                <a
                  href="https://instagram.com/autarqui.co"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-sm text-white/70 hover:text-white transition-colors"
                >
                  <Instagram className="w-4 h-4" />
                  @autarqui.co
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="pt-8 border-t border-white/10">
          <p className="text-center text-sm text-white/50">
            {t('footer.copyright', { year: currentYear })}
          </p>
        </div>
      </div>
    </footer>
  )
}
