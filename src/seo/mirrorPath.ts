import { routes, type Locale } from './routes'

export function localeFromPath(pathname: string): Locale {
  return pathname === '/en' || pathname.startsWith('/en/') ? 'en' : 'es'
}

function normalize(p: string): string {
  if (p.length > 1 && p.endsWith('/')) return p.slice(0, -1)
  return p
}

export function findRouteIdByPath(pathname: string): string | undefined {
  const p = normalize(pathname)
  return routes.find(r => r.paths.es === p || r.paths.en === p)?.id
}

export function mirrorPath(pathname: string, target: Locale): string | null {
  const id = findRouteIdByPath(pathname)
  if (!id) return null
  const route = routes.find(r => r.id === id)!
  return route.paths[target] ?? null
}
