export interface Product {
  id: 'delta' | 'sigma' | 'reservit'
  name: string
  typeKey: string
  domainKey: string
  descKey: string
  href: (prefix: string) => string
  external?: boolean
}

// Taxonomía pública (§9 del spec), localizada vía i18n para no mezclar idiomas.
export const products: Product[] = [
  {
    id: 'delta',
    name: 'delta',
    typeKey: 'work.type.product',
    domainKey: 'work.domain.businessIntelligence',
    descKey: 'home.work.delta.desc',
    href: (prefix) => `${prefix}/delta`,
  },
  {
    id: 'sigma',
    name: 'sigma',
    typeKey: 'work.type.product',
    domainKey: 'work.domain.professionalSoftware',
    descKey: 'home.work.sigma.desc',
    href: (prefix) => `${prefix}/sigma`,
  },
  {
    id: 'reservit',
    name: 'reservit',
    typeKey: 'work.type.product',
    domainKey: 'work.domain.operations',
    descKey: 'home.work.reservit.desc',
    href: () => 'https://reservit.co',
    external: true,
  },
]
