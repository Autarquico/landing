export interface Product {
  id: 'bisne'
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
    id: 'bisne',
    name: 'bisne',
    typeKey: 'work.type.product',
    domainKey: 'work.domain.business',
    descKey: 'home.work.bisne.desc',
    href: () => 'https://bisne.es',
    external: true,
  },
]
