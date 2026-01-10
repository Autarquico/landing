import { Mail, Instagram } from 'lucide-react'

export const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-black text-white py-12 md:py-16 px-4 md:px-6 lg:px-8">
      <div className="container mx-auto max-w-4xl">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12 mb-8 md:mb-12">
          {/* Producto */}
          <div className="text-center">
            <h4 className="font-display text-lg mb-4">Producto</h4>
            <ul className="space-y-2 text-sm text-white/70">
              <li>
                <a href="#features" className="hover:text-white transition-colors">
                  Fichaje
                </a>
              </li>
              <li>
                <a href="#features" className="hover:text-white transition-colors">
                  Nóminas
                </a>
              </li>
              <li>
                <a href="#features" className="hover:text-white transition-colors">
                  Portal Empleado
                </a>
              </li>
              <li>
                <a href="#pricing" className="hover:text-white transition-colors">
                  Precios
                </a>
              </li>
            </ul>
          </div>

          {/* Legal */}
          <div className="text-center">
            <h4 className="font-display text-lg mb-4">Legal</h4>
            <ul className="space-y-2 text-sm text-white/70">
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Términos de Uso
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Privacidad
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  GDPR
                </a>
              </li>
            </ul>
          </div>

          {/* Contacto */}
          <div className="text-center">
            <h4 className="font-display text-lg mb-4">Contacto</h4>
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
            © {currentYear} (R) Autárquico. Todos los derechos reservados.
          </p>
        </div>
      </div>
    </footer>
  )
}
