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
