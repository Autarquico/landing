import { Head } from 'vite-react-ssg'
import { useTranslation } from 'react-i18next'
import { routes, ogImageFor, SITE_URL, type Locale } from './routes'
import { organizationJsonLd, softwareAppJsonLd } from './jsonLd'

interface SEOProps {
  routeId: string
  locale: Locale
}

const stripSuffix = (s: string) => s.replace(/\s·\sautarqui\.co$/, '')

export const SEO: React.FC<SEOProps> = ({ routeId, locale }) => {
  const { i18n } = useTranslation()
  const route = routes.find(r => r.id === routeId)
  if (!route) return null

  const path = route.paths[locale] ?? route.paths.es
  const t = i18n.getFixedT(locale, undefined, `seo.${routeId}`)
  const title = t('title')
  const description = t('description')
  const ogAlt = t('ogAlt', { defaultValue: stripSuffix(title) })
  const ogTitle = stripSuffix(title)
  const url = `${SITE_URL}${path}`
  const ogImg = `${SITE_URL}/og/${ogImageFor(routeId, locale)}`

  const esPath = route.paths.es
  const enPath = route.paths.en

  const jsonLd: object[] = []
  if (route.jsonLd === 'organization') jsonLd.push(organizationJsonLd)
  if (route.jsonLd === 'softwareApp' && route.productName) {
    jsonLd.push(
      softwareAppJsonLd({
        name: route.productName,
        description,
        path,
        locale,
      })
    )
  }

  return (
    <Head>
      <html lang={locale} />
      <title>{title}</title>
      <meta name="description" content={description} />
      <link rel="canonical" href={url} />

      <link rel="alternate" hrefLang="es" href={`${SITE_URL}${esPath}`} />
      {enPath && <link rel="alternate" hrefLang="en" href={`${SITE_URL}${enPath}`} />}
      <link rel="alternate" hrefLang="x-default" href={`${SITE_URL}${esPath}`} />

      <meta property="og:type" content="website" />
      <meta property="og:site_name" content="autarqui.co" />
      <meta property="og:title" content={ogTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={url} />
      <meta property="og:locale" content={locale === 'es' ? 'es_ES' : 'en_US'} />
      {locale === 'es' && enPath && <meta property="og:locale:alternate" content="en_US" />}
      {locale === 'en' && <meta property="og:locale:alternate" content="es_ES" />}
      <meta property="og:image" content={ogImg} />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
      <meta property="og:image:alt" content={ogAlt} />

      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={ogTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={ogImg} />

      {jsonLd.map((j, i) => (
        <script key={i} type="application/ld+json">
          {JSON.stringify(j)}
        </script>
      ))}
    </Head>
  )
}
