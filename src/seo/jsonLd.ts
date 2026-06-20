import { SITE_URL, type Locale } from './routes'

export const organizationJsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'Organization',
      '@id': `${SITE_URL}/#org`,
      name: 'Autarquico Labs',
      legalName: 'Autarquico Labs S.L.U.',
      alternateName: ['autarqui.co', 'Autarqui'],
      url: SITE_URL,
      logo: `${SITE_URL}/android-chrome-512x512.png`,
      email: 'info@autarqui.co',
      foundingDate: '2024',
      areaServed: ['ES', 'Canarias', 'Tenerife'],
      knowsAbout: [
        'inteligencia artificial empresarial',
        'IA para pymes',
        'automatización de procesos',
        'software a medida',
        'software personalizado',
        'transformación digital',
        'gestión laboral',
        'gestión fiscal',
        'business intelligence',
      ],
      sameAs: ['https://instagram.com/autarqui.co'],
      contactPoint: {
        '@type': 'ContactPoint',
        email: 'info@autarqui.co',
        contactType: 'customer support',
        availableLanguage: ['Spanish', 'English'],
      },
    },
    {
      '@type': 'WebSite',
      '@id': `${SITE_URL}/#website`,
      url: SITE_URL,
      name: 'autarqui.co',
      description: 'IA, integraciones y automatización empresarial',
      publisher: { '@id': `${SITE_URL}/#org` },
      inLanguage: ['es-ES', 'en-US'],
    },
  ],
}

export function softwareAppJsonLd(opts: {
  name: string
  description: string
  path: string
  locale: Locale
}) {
  return {
    '@context': 'https://schema.org',
    '@type': 'SoftwareApplication',
    name: opts.name,
    applicationCategory: 'BusinessApplication',
    operatingSystem: 'Web',
    description: opts.description,
    url: `${SITE_URL}${opts.path}`,
    publisher: {
      '@type': 'Organization',
      name: 'Autarqui',
      url: SITE_URL,
    },
    inLanguage: opts.locale,
  }
}

export function articleJsonLd(opts: {
  title: string
  description: string
  slug: string
  date: string
  author: string
  locale: Locale
}) {
  const path = opts.locale === 'en' ? `/en/journal/${opts.slug}` : `/journal/${opts.slug}`
  return {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: opts.title,
    description: opts.description,
    url: `${SITE_URL}${path}`,
    datePublished: opts.date,
    dateModified: opts.date,
    inLanguage: opts.locale === 'es' ? 'es-ES' : 'en-US',
    author: {
      '@type': 'Person',
      name: opts.author,
      url: SITE_URL,
    },
    publisher: {
      '@type': 'Organization',
      '@id': `${SITE_URL}/#org`,
      name: 'Autarquico Labs',
      logo: {
        '@type': 'ImageObject',
        url: `${SITE_URL}/android-chrome-512x512.png`,
      },
    },
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': `${SITE_URL}${path}`,
    },
    keywords: [
      'software a medida',
      'inteligencia artificial',
      'automatización empresarial',
      'desarrollo software personalizado',
      'IA y programación',
    ],
  }
}
