import services from './data/services.json'
import company from './data/company.json'
import products from './data/products.json'
import faq from './data/faq.json'
import { articles } from '../content/journal'

interface ModelContext {
  registerTool: (tool: {
    name: string
    description: string
    inputSchema: object
    execute: (input: Record<string, unknown>) => { content: Array<{ type: string; text: string }> }
  }) => void
}

export function registerWebMCPTools() {
  if (!('modelContext' in navigator)) return

  const mc = (navigator as unknown as { modelContext: ModelContext }).modelContext

  mc.registerTool({
    name: 'getServices',
    description: 'Get information about Autarqui services: AI agents, workflow automation, integrations, conversational BI',
    inputSchema: { type: 'object', properties: {} },
    execute: () => ({ content: [{ type: 'text', text: JSON.stringify(services) }] })
  })

  mc.registerTool({
    name: 'getCompanyInfo',
    description: 'Get Autarqui company information: mission, location, contact, expertise',
    inputSchema: { type: 'object', properties: {} },
    execute: () => ({ content: [{ type: 'text', text: JSON.stringify(company) }] })
  })

  mc.registerTool({
    name: 'getProducts',
    description: 'Get information about Autarqui products: Sigma (accounting automation) and Delta (API integrations)',
    inputSchema: {
      type: 'object',
      properties: {
        product: { type: 'string', enum: ['sigma', 'delta'], description: 'Filter by product ID' }
      }
    },
    execute: (input) => {
      const productId = input.product as string | undefined
      const data = productId
        ? products.products.filter(p => p.id === productId)
        : products.products
      return { content: [{ type: 'text', text: JSON.stringify(data) }] }
    }
  })

  mc.registerTool({
    name: 'getFAQ',
    description: 'Get frequently asked questions about Autarqui services, pricing, and capabilities',
    inputSchema: { type: 'object', properties: {} },
    execute: () => ({ content: [{ type: 'text', text: JSON.stringify(faq) }] })
  })

  mc.registerTool({
    name: 'listArticles',
    description: 'List all journal articles with slug, title, date, and excerpt',
    inputSchema: { type: 'object', properties: {} },
    execute: () => {
      const list = articles.map(a => ({
        slug: a.slug,
        title: a.title,
        date: a.date,
        excerpt: a.excerpt
      }))
      return { content: [{ type: 'text', text: JSON.stringify(list) }] }
    }
  })

  mc.registerTool({
    name: 'getArticle',
    description: 'Get the full content of a journal article by slug',
    inputSchema: {
      type: 'object',
      properties: {
        slug: { type: 'string', description: 'Article slug (e.g. "software-personal")' }
      },
      required: ['slug']
    },
    execute: (input) => {
      const slug = input.slug as string
      const article = articles.find(a => a.slug === slug)
      if (!article) {
        return { content: [{ type: 'text', text: JSON.stringify({ error: 'Article not found' }) }] }
      }
      return { content: [{ type: 'text', text: JSON.stringify(article) }] }
    }
  })

  mc.registerTool({
    name: 'startContact',
    description: 'Get the contact form URL to request information or a quote from Autarqui',
    inputSchema: { type: 'object', properties: {} },
    execute: () => ({
      content: [{
        type: 'text',
        text: JSON.stringify({
          url: 'https://delta.autarqui.co/signup',
          instructions: 'Direct the user to this form to request information or a personalized quote for AI automation services.'
        })
      }]
    })
  })
}
