import { Link } from 'react-router'

interface LegalLayoutProps {
  title: string
  lastUpdated: string
  children: React.ReactNode
}

export const LegalLayout: React.FC<LegalLayoutProps> = ({ title, lastUpdated, children }) => {
  return (
    <div className="min-h-screen bg-white">
      <nav className="bg-white border-b border-gray-100 px-4 md:px-6 lg:px-12 py-4">
        <div className="container mx-auto flex items-center justify-between">
          <Link to="/" className="flex items-center gap-1.5">
            <img src="/logo-clear.svg" alt="α" className="h-10 md:h-12" />
            <span className="text-lg md:text-xl font-semibold">
              utarqui<span className="text-emerald-500">.co</span>
            </span>
          </Link>
          <Link
            to="/"
            className="text-sm text-gray-500 hover:text-black transition-colors"
          >
            ← Volver
          </Link>
        </div>
      </nav>

      <main className="container mx-auto max-w-3xl px-4 md:px-6 py-12 md:py-20">
        <h1 className="text-3xl md:text-4xl font-display mb-2">{title}</h1>
        <p className="text-sm text-gray-400 mb-10">Última actualización: {lastUpdated}</p>

        <div className="prose prose-gray max-w-none [&_h2]:text-xl [&_h2]:font-display [&_h2]:mt-10 [&_h2]:mb-4 [&_p]:text-gray-600 [&_p]:leading-relaxed [&_p]:mb-4 [&_ul]:text-gray-600 [&_ul]:mb-4 [&_li]:mb-1">
          {children}
        </div>
      </main>

      <footer className="border-t border-gray-100 py-8 px-4">
        <p className="text-center text-sm text-gray-400">
          © {new Date().getFullYear()} (R) Autárquico. Todos los derechos reservados.
        </p>
      </footer>
    </div>
  )
}
