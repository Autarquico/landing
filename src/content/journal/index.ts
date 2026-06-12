import manifiesto from './manifiesto.json'
import softwareAMedida from './software-a-medida.json'

export interface JournalArticle {
  slug: string
  date: string
  author: string
  readingTime: number
  title: { es: string; en: string }
  subtitle: { es: string; en: string }
  excerpt: { es: string; en: string }
  body: { es: string[]; en: string[] }
}

export const articles: JournalArticle[] = [
  softwareAMedida as JournalArticle,
  manifiesto as JournalArticle,
]

export function getArticle(slug: string): JournalArticle | undefined {
  return articles.find((a) => a.slug === slug)
}

export function getArticlesByLocale(locale: 'es' | 'en') {
  return articles.map((a) => ({
    slug: a.slug,
    date: a.date,
    author: a.author,
    readingTime: a.readingTime,
    title: a.title[locale],
    subtitle: a.subtitle[locale],
    excerpt: a.excerpt[locale],
  }))
}
