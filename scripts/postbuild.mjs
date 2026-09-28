import fs from 'node:fs/promises'
import path from 'node:path'
import { fileURLToPath } from 'node:url'

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const ROOT = path.resolve(__dirname, '..')
const DIST = path.join(ROOT, 'dist')

async function* walk(dir) {
  for (const entry of await fs.readdir(dir, { withFileTypes: true })) {
    const full = path.join(dir, entry.name)
    if (entry.isDirectory()) yield* walk(full)
    else if (entry.isFile() && entry.name.endsWith('.html')) yield full
  }
}

let fixed = 0
for await (const file of walk(DIST)) {
  const rel = path.relative(DIST, file)
  const isEnglish = rel === 'en.html' || rel.startsWith('en/')
  const expectedLang = isEnglish ? 'en' : 'es'
  const html = await fs.readFile(file, 'utf8')
  const next = html.replace(/<html lang="(es|en)"/, `<html lang="${expectedLang}"`)
  if (next !== html) {
    await fs.writeFile(file, next)
    fixed++
  }
}
console.log(`[postbuild] adjusted html lang on ${fixed} file(s)`)

// Create trailing-slash redirects
const SITE_URL = 'https://autarqui.co'
const redirectTemplate = (target) => `<!DOCTYPE html>
<html><head><meta charset="utf-8"><meta http-equiv="refresh" content="0;url=${target}"><link rel="canonical" href="${SITE_URL}${target}"></head></html>`

let redirects = 0
for await (const file of walk(DIST)) {
  if (!file.endsWith('.html')) continue
  const rel = path.relative(DIST, file)
  if (rel === 'index.html' || rel.endsWith('/index.html')) continue

  // e.g. journal.html → journal/index.html redirecting to /journal
  const name = path.basename(rel, '.html')
  const dir = path.dirname(rel)
  const targetDir = dir === '.' ? name : path.join(dir, name)
  const targetPath = '/' + (dir === '.' ? name : path.join(dir, name).replace(/\\/g, '/'))

  const redirectDir = path.join(DIST, targetDir)
  const redirectFile = path.join(redirectDir, 'index.html')

  try {
    await fs.access(redirectFile)
  } catch {
    await fs.mkdir(redirectDir, { recursive: true })
    await fs.writeFile(redirectFile, redirectTemplate(targetPath))
    redirects++
  }
}
console.log(`[postbuild] created ${redirects} trailing-slash redirect(s)`)

// Explicit route redirects (old URLs → new). GH Pages has no server-side 301,
// so we emit static meta-refresh + canonical stubs (same pattern as above).
const ROUTE_REDIRECTS = {
  canarias: '/ayudas',
  'en/canarias': '/en/ayudas',
}
let routeRedirects = 0
for (const [from, to] of Object.entries(ROUTE_REDIRECTS)) {
  const dir = path.join(DIST, from)
  await fs.mkdir(dir, { recursive: true })
  await fs.writeFile(path.join(dir, 'index.html'), redirectTemplate(to))
  routeRedirects++
}
console.log(`[postbuild] created ${routeRedirects} route redirect(s)`)

// Vía A del newsletter: no-op salvo NEWSLETTER_AUTOSEND=1. Nunca rompe el build.
const broadcaster = path.join(ROOT, '../newsletter/bin/ci-broadcast.ts')
try {
  await fs.access(broadcaster)
  const { execFileSync } = await import('node:child_process')
  execFileSync(process.execPath, [broadcaster], { stdio: 'inherit' })
} catch (error) {
  console.log('[postbuild] newsletter omitido:', error.message)
}
