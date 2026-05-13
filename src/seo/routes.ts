export type Locale = 'es' | 'en'

export const SITE_URL = 'https://autarqui.co'

export interface RouteEntry {
  id: string
  paths: { es: string; en?: string }
  ogImage: string
  jsonLd?: 'organization' | 'softwareApp'
  productName?: string
}

export const routes: RouteEntry[] = [
  { id: 'home',    paths: { es: '/',                 en: '/en' },        ogImage: 'home.png',  jsonLd: 'organization' },
  { id: 'sigma',             paths: { es: '/sigma',             en: '/en/sigma' },             ogImage: 'sigma.png', jsonLd: 'softwareApp', productName: 'sigma' },
  { id: 'sigma-negocios',    paths: { es: '/sigma/negocios',    en: '/en/sigma/negocios' },    ogImage: 'sigma.png', jsonLd: 'softwareApp', productName: 'sigma' },
  { id: 'sigma-asesorias',   paths: { es: '/sigma/asesorias',   en: '/en/sigma/asesorias' },   ogImage: 'sigma.png', jsonLd: 'softwareApp', productName: 'sigma' },
  { id: 'delta',   paths: { es: '/delta',            en: '/en/delta' },  ogImage: 'delta.png', jsonLd: 'softwareApp', productName: 'delta' },
  { id: 'terms',   paths: { es: '/legal/terminos' },                     ogImage: 'home.png' },
  { id: 'privacy', paths: { es: '/legal/privacidad' },                   ogImage: 'home.png' },
  { id: 'gdpr',    paths: { es: '/legal/gdpr' },                         ogImage: 'home.png' },
]

export function ogImageFor(routeId: string, locale: Locale): string {
  const r = routes.find(x => x.id === routeId)
  if (!r) return 'home.png'
  if (locale === 'en' && (routeId.startsWith('sigma') || routeId === 'delta')) {
    const base = routeId.startsWith('sigma') ? 'sigma' : routeId
    return `${base}-en.png`
  }
  return r.ogImage
}
