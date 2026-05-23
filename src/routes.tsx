import type { RouteRecord } from 'vite-react-ssg'
import App from './App'
import { DeltaPage } from './pages/DeltaPage'
import { CanariasPage } from './pages/CanariasPage'
import { SigmaPage } from './pages/SigmaPage'
import { SigmaSelectorPage } from './pages/SigmaSelectorPage'
import { TerminosPage } from './pages/legal/TerminosPage'
import { PrivacidadPage } from './pages/legal/PrivacidadPage'
import { GdprPage } from './pages/legal/GdprPage'

export const routes: RouteRecord[] = [
  { path: '/',                       element: <App locale="es" /> },
  { path: '/en',                     element: <App locale="en" /> },
  { path: '/sigma',                  element: <SigmaSelectorPage locale="es" /> },
  { path: '/en/sigma',               element: <SigmaSelectorPage locale="en" /> },
  { path: '/sigma/negocios',         element: <SigmaPage locale="es" audience="businesses" /> },
  { path: '/en/sigma/negocios',      element: <SigmaPage locale="en" audience="businesses" /> },
  { path: '/sigma/asesorias',        element: <SigmaPage locale="es" audience="advisors" /> },
  { path: '/en/sigma/asesorias',     element: <SigmaPage locale="en" audience="advisors" /> },
  { path: '/delta',                  element: <DeltaPage locale="es" /> },
  { path: '/en/delta',               element: <DeltaPage locale="en" /> },
  { path: '/canarias',               element: <CanariasPage locale="es" /> },
  { path: '/en/canarias',            element: <CanariasPage locale="en" /> },
  { path: '/legal/terminos',         element: <TerminosPage /> },
  { path: '/legal/privacidad',       element: <PrivacidadPage /> },
  { path: '/legal/gdpr',             element: <GdprPage /> },
]
