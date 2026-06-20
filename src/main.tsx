import './i18n'
import { ViteReactSSG } from 'vite-react-ssg'
import { routes } from './routes'
import { registerWebMCPTools } from './webmcp/register'
import './index.css'

if (typeof window !== 'undefined') {
  registerWebMCPTools()
  const isStaleDeployError = (msg: string) =>
    /Unexpected token '<'|<!doctype|Failed to fetch dynamically imported module|Importing a module script failed/i.test(msg)
  const reloadKey = '__autarqui_stale_reload'
  const reloadOnce = () => {
    if (sessionStorage.getItem(reloadKey)) return
    sessionStorage.setItem(reloadKey, '1')
    window.location.reload()
  }
  window.addEventListener('error', (e) => {
    if (e.message && isStaleDeployError(e.message)) reloadOnce()
  })
  window.addEventListener('unhandledrejection', (e) => {
    const msg = String(e.reason?.message ?? e.reason ?? '')
    if (isStaleDeployError(msg)) reloadOnce()
  })
}

export const createRoot = ViteReactSSG({ routes })
