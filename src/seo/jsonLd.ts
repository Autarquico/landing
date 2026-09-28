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

export function ayudasJsonLd(locale: Locale) {
  const path = locale === 'en' ? '/en/ayudas' : '/ayudas'
  const url = `${SITE_URL}${path}`

  const faq = locale === 'en'
    ? [
        {
          q: 'Does the Kit Digital grant fund artificial intelligence solutions?',
          a: 'Yes. Since 2026 the Kit Digital catalogue includes an Artificial Intelligence category (virtual assistants, automation, data analysis) with a voucher of up to €6,000, on top of the existing BI, ERP, CRM and cybersecurity solutions.',
        },
        {
          q: 'What is the AI Voucher (Plan IA360)?',
          a: 'A €600M Spanish government aid announced in September 2026 for around 25,000 SMEs and freelancers to adopt AI services — development, integration and process redesign, not mere software licences. A pilot runs in late 2026 and the general call is expected in the first half of 2027.',
        },
        {
          q: 'Are there digitalization grants in the Canary Islands?',
          a: 'Yes. A regional non-refundable grant of up to €25,000 for AI, BI, ERP, CRM and cybersecurity projects, for companies over 3 years old with a registered office in the Canary Islands. The 2026 call has closed; the next call is expected in 2027.',
        },
        {
          q: "Are autarqui.co's solutions eligible for these grants?",
          a: 'Yes. delta (Business Intelligence), sigma and our custom AI projects fit the fundable categories of Kit Digital, the AI Voucher and the Canary Islands grant. We help you understand which aid matches your project.',
        },
      ]
    : [
        {
          q: '¿Financia el Kit Digital soluciones de inteligencia artificial?',
          a: 'Sí. Desde 2026 el catálogo del Kit Digital incluye una categoría de Inteligencia Artificial (asistentes virtuales, automatización, análisis de datos) con un bono de hasta 6.000 €, además de las soluciones ya existentes de BI, ERP, CRM y ciberseguridad.',
        },
        {
          q: '¿Qué es el Bono de IA (Plan IA360)?',
          a: 'Una ayuda estatal de 600 M€ anunciada en septiembre de 2026 para que unas 25.000 pymes y autónomos incorporen servicios de IA —desarrollo, integración y rediseño de procesos, no la mera suscripción a licencias—. Hay un piloto a finales de 2026 y la convocatoria general se espera en el primer semestre de 2027.',
        },
        {
          q: '¿Hay ayudas para digitalización en Canarias?',
          a: 'Sí. Una subvención regional a fondo perdido de hasta 25.000 € para proyectos de IA, BI, ERP, CRM y ciberseguridad, para empresas con más de 3 años y domicilio fiscal en Canarias. La convocatoria de 2026 ya está cerrada; la próxima se espera en 2027.',
        },
        {
          q: '¿Las soluciones de autarqui.co son elegibles para estas ayudas?',
          a: 'Sí. delta (Business Intelligence), sigma y los proyectos de IA a medida encajan en las categorías subvencionables del Kit Digital, el Bono de IA y la subvención de Canarias. Te orientamos sobre qué ayuda encaja con tu proyecto.',
        },
      ]

  return {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'Service',
        '@id': `${url}#service`,
        name: locale === 'en'
          ? 'AI digitalization eligible for grants (Kit Digital, AI Voucher)'
          : 'Digitalización con IA elegible para ayudas (Kit Digital, Bono IA)',
        serviceType: locale === 'en'
          ? 'Artificial intelligence and digitalization for businesses'
          : 'Inteligencia artificial y digitalización para empresas',
        description: locale === 'en'
          ? 'Custom AI, business intelligence and automation solutions eligible for Spanish public grants: Kit Digital (AI), the AI Voucher (Plan IA360) and Canary Islands digitalization grants.'
          : 'Soluciones de IA a medida, business intelligence y automatización elegibles para ayudas públicas: Kit Digital (IA), Bono de IA (Plan IA360) y subvenciones de digitalización de Canarias.',
        provider: { '@id': `${SITE_URL}/#organization` },
        areaServed: [
          { '@type': 'AdministrativeArea', name: 'Canarias' },
          { '@type': 'Country', name: 'España' },
        ],
        url,
      },
      {
        '@type': 'FAQPage',
        '@id': `${url}#faq`,
        mainEntity: faq.map(({ q, a }) => ({
          '@type': 'Question',
          name: q,
          acceptedAnswer: { '@type': 'Answer', text: a },
        })),
      },
    ],
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
