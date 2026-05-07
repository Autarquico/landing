import fs from 'node:fs/promises'
import path from 'node:path'
import { fileURLToPath } from 'node:url'
import { Resvg } from '@resvg/resvg-js'

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const ROOT = path.resolve(__dirname, '..')
const PUBLIC = path.join(ROOT, 'public')
const OUT = path.join(PUBLIC, 'og')
const FONTS = path.join(ROOT, 'fonts')

await fs.mkdir(OUT, { recursive: true })

const W = 1200
const H = 630
const ACCENT = '#000000'

async function readSvg(rel) {
  const raw = await fs.readFile(path.join(PUBLIC, rel), 'utf8')
  return raw
    .replace(/<\?xml[^>]*\?>\s*/, '')
    .replace(/<!DOCTYPE[^>]*>\s*/i, '')
    .replace(/<!--[\s\S]*?-->/g, '')
    .trim()
}

function extractViewBox(svg) {
  const vb = svg.match(/viewBox="([^"]+)"/)
  if (vb) return vb[1]
  const w = svg.match(/<svg[^>]*\bwidth="(\d+(?:\.\d+)?)"/)
  const h = svg.match(/<svg[^>]*\bheight="(\d+(?:\.\d+)?)"/)
  if (w && h) return `0 0 ${w[1]} ${h[1]}`
  return '0 0 100 100'
}

function inlineMark(svg, { x, y, size, color = '#000' }) {
  const viewBox = extractViewBox(svg)
  const inner = svg
    .replace(/^<svg[^>]*>/, '')
    .replace(/<\/svg>\s*$/, '')
    .replace(/currentColor/g, color)
  return `<svg x="${x}" y="${y}" width="${size}" height="${size}" viewBox="${viewBox}" xmlns="http://www.w3.org/2000/svg">${inner}</svg>`
}

function escapeXml(s) {
  return s
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
}

function buildSvg({ markSvg, brand, headlineBefore, headlineKw, headlineAfter, footerLeft, footerRight }) {
  const markSize = 200
  const markX = 80
  const markY = (H - markSize) / 2
  const textX = markX + markSize + 60
  const textTop = 200
  const lineH = 80
  const before = escapeXml(headlineBefore)
  const kw = escapeXml(headlineKw)
  const after = escapeXml(headlineAfter)
  const fl = escapeXml(footerLeft)
  const fr = escapeXml(footerRight)
  const b = escapeXml(brand)

  return `<?xml version="1.0" encoding="UTF-8"?>
<svg width="${W}" height="${H}" viewBox="0 0 ${W} ${H}" xmlns="http://www.w3.org/2000/svg">
  <rect width="${W}" height="${H}" fill="#ffffff"/>
  ${inlineMark(markSvg, { x: markX, y: markY, size: markSize, color: '#000' })}
  <g font-family="Inter, system-ui, sans-serif" fill="#000">
    <text x="${textX}" y="${textTop}" font-size="34" font-weight="600" letter-spacing="2">${b}</text>
    <text x="${textX}" y="${textTop + lineH}" font-size="60" font-weight="700">${before}</text>
    <text x="${textX}" y="${textTop + lineH * 2}" font-size="60" font-weight="700" font-style="italic" fill="${ACCENT}">${kw}</text>
    ${after ? `<text x="${textX}" y="${textTop + lineH * 3}" font-size="60" font-weight="700">${after}</text>` : ''}
    <text x="${textX}" y="${H - 80}" font-size="22" font-weight="500" fill="#737373" letter-spacing="3">${fl}</text>
    <text x="${W - 80}" y="${H - 80}" font-size="22" font-weight="500" fill="#737373" letter-spacing="3" text-anchor="end">${fr}</text>
  </g>
</svg>`
}

const slots = [
  {
    name: 'home',
    mark: 'logo-circle.svg',
    brand: 'AUTARQUI.CO',
    before: 'IA, integraciones',
    kw: 'y automatización',
    after: 'empresarial.',
    footerLeft: 'AUTARQUI.CO',
    footerRight: '',
  },
  {
    name: 'sigma',
    mark: 'sigma-logo.svg',
    brand: 'SIGMA · AUTARQUI.CO',
    before: 'Asesoría laboral',
    kw: 'y fiscal asistida por IA.',
    after: '',
    footerLeft: 'SIGMA',
    footerRight: 'AUTARQUI.CO',
  },
  {
    name: 'sigma-en',
    mark: 'sigma-logo.svg',
    brand: 'SIGMA · AUTARQUI.CO',
    before: 'Labor and tax advisory,',
    kw: 'AI-assisted.',
    after: '',
    footerLeft: 'SIGMA',
    footerRight: 'AUTARQUI.CO',
  },
  {
    name: 'delta',
    mark: 'delta-mark.svg',
    brand: 'DELTA · AUTARQUI.CO',
    before: 'Integración de sistemas',
    kw: 'con IA.',
    after: '',
    footerLeft: 'DELTA',
    footerRight: 'AUTARQUI.CO',
  },
  {
    name: 'delta-en',
    mark: 'delta-mark.svg',
    brand: 'DELTA · AUTARQUI.CO',
    before: 'System integration',
    kw: 'with AI.',
    after: '',
    footerLeft: 'DELTA',
    footerRight: 'AUTARQUI.CO',
  },
]

async function loadFonts() {
  const files = ['Inter-Regular.ttf', 'Inter-Bold.ttf', 'Inter-Italic.ttf']
  return Promise.all(
    files.map(async (f) => ({
      name: 'Inter',
      data: await fs.readFile(path.join(FONTS, f)),
    }))
  )
}

async function main() {
  const fontFiles = await loadFonts()
  const fontBuffers = fontFiles.map((f) => f.data)

  for (const slot of slots) {
    const markSvg = await readSvg(slot.mark)
    const svg = buildSvg({
      markSvg,
      brand: slot.brand,
      headlineBefore: slot.before,
      headlineKw: slot.kw,
      headlineAfter: slot.after,
      footerLeft: slot.footerLeft,
      footerRight: slot.footerRight,
    })

    const resvg = new Resvg(svg, {
      background: '#ffffff',
      font: {
        fontFiles: fontBuffers.map((_, i) =>
          path.join(FONTS, ['Inter-Regular.ttf', 'Inter-Bold.ttf', 'Inter-Italic.ttf'][i])
        ),
        loadSystemFonts: false,
        defaultFontFamily: 'Inter',
      },
      fitTo: { mode: 'width', value: W },
    })
    const png = resvg.render().asPng()
    const outPath = path.join(OUT, `${slot.name}.png`)
    await fs.writeFile(outPath, png)
    console.log(`[og] wrote ${path.relative(ROOT, outPath)} (${(png.length / 1024).toFixed(1)} KB)`)
  }
}

main().catch((err) => {
  console.error('[og] generation failed:', err)
  process.exit(1)
})
