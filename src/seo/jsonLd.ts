import { SITE_URL, type Locale } from './routes'

export const organizationJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: 'Autárquico',
  alternateName: 'autarqui.co',
  url: SITE_URL,
  logo: `${SITE_URL}/logo-circle.svg`,
  contactPoint: {
    '@type': 'ContactPoint',
    email: 'info@autarqui.co',
    contactType: 'customer support',
    availableLanguage: ['Spanish', 'English'],
  },
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
      name: 'Autárquico',
      url: SITE_URL,
    },
    inLanguage: opts.locale,
  }
}
