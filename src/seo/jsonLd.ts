import { SITE_URL, type Locale } from './routes'

export const organizationJsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'Organization',
      '@id': `${SITE_URL}/#organization`,
      name: 'autarqui.co',
      legalName: 'Autarquico Labs S.L.U.',
      alternateName: ['Autarquico Labs', 'Autarqui'],
      url: SITE_URL,
      logo: `${SITE_URL}/logo-clear.svg`,
      email: 'info@autarqui.co',
      foundingDate: '2024',
      description: 'Consultora de inteligencia artificial con sede en Tenerife (Canarias): asesoramiento, integración y automatización para empresas.',
      areaServed: [
        { '@type': 'AdministrativeArea', name: 'Tenerife' },
        { '@type': 'AdministrativeArea', name: 'Canarias' },
        { '@type': 'Country', name: 'España' },
      ],
      knowsAbout: [
        'Inteligencia artificial aplicada',
        'Automatización de procesos',
        'Integración de sistemas y APIs',
        'Software a medida',
        'IA para pymes',
        'Transformación digital',
        'Kit Digital y ayudas a la digitalización',
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
      '@type': 'ProfessionalService',
      '@id': `${SITE_URL}/#localbusiness`,
      name: 'autarqui.co',
      url: SITE_URL,
      image: `${SITE_URL}/og/home.png`,
      email: 'info@autarqui.co',
      parentOrganization: { '@id': `${SITE_URL}/#organization` },
      address: {
        '@type': 'PostalAddress',
        addressLocality: 'Santa Úrsula',
        addressRegion: 'Santa Cruz de Tenerife',
        addressCountry: 'ES',
      },
      areaServed: [
        { '@type': 'AdministrativeArea', name: 'Tenerife' },
        { '@type': 'AdministrativeArea', name: 'Canarias' },
        { '@type': 'Country', name: 'España' },
      ],
      knowsAbout: [
        'Inteligencia artificial aplicada',
        'Automatización de procesos',
        'Integración de sistemas y APIs',
        'Kit Digital y ayudas a la digitalización',
      ],
    },
    {
      '@type': 'WebSite',
      '@id': `${SITE_URL}/#website`,
      url: SITE_URL,
      name: 'autarqui.co',
      description: 'Consultora de IA en Tenerife: asesoramiento, integración y automatización empresarial',
      publisher: { '@id': `${SITE_URL}/#organization` },
      inLanguage: 'es-ES',
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

export function breadcrumbJsonLd(items: Array<{ name: string; url: string }>) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      name: item.name,
      item: item.url,
    })),
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
    publisher: { '@id': `${SITE_URL}/#organization` },
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
