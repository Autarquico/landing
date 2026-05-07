import type { RouteRecord } from 'vite-react-ssg'
import App from './App'
import { DeltaPage } from './pages/DeltaPage'
import { SigmaPage } from './pages/SigmaPage'
import { TerminosPage } from './pages/legal/TerminosPage'
import { PrivacidadPage } from './pages/legal/PrivacidadPage'
import { GdprPage } from './pages/legal/GdprPage'

export const routes: RouteRecord[] = [
  { path: '/',                 element: <App locale="es" /> },
  { path: '/en',               element: <App locale="en" /> },
  { path: '/sigma',            element: <SigmaPage locale="es" /> },
  { path: '/en/sigma',         element: <SigmaPage locale="en" /> },
  { path: '/delta',            element: <DeltaPage locale="es" /> },
  { path: '/en/delta',         element: <DeltaPage locale="en" /> },
  { path: '/legal/terminos',   element: <TerminosPage /> },
  { path: '/legal/privacidad', element: <PrivacidadPage /> },
  { path: '/legal/gdpr',       element: <GdprPage /> },
]
