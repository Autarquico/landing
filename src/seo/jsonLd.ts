import { SITE_URL, type Locale } from './routes'

export const organizationJsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'Organization',
      '@id': `${SITE_URL}/#org`,
      name: 'Autarqui',
      alternateName: 'autarqui.co',
      url: SITE_URL,
      logo: `${SITE_URL}/android-chrome-512x512.png`,
      email: 'info@autarqui.co',
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
