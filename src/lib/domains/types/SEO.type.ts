export interface SEOGenerate {
    language: string
    audience: 'all'
    keywords?: string
    title: string
    description: string
    author: string
    copyright: string
    image: string
    type: 'website'
    category: string
    company: IntoCompany
    icon?: string
}

export interface IntoCompany {
    name: string
    address: string[]
    telephone: string[]
}