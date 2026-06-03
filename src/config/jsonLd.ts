import { siteConfig } from './site'

export const personJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Person',
  name: 'Alireza',
  url: siteConfig.url,
  jobTitle: 'Software Developer',
  knowsAbout: [
    'Next.js',
    'React',
    'TypeScript',
    'Tailwind CSS',
    'Node.js',
    'Express',
    'PostgreSQL',
  ],
  sameAs: [
    'https://github.com/alireza-hq',
    'https://www.linkedin.com/in/alireza-hq-dev',
  ],
}

export const websiteJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'WebSite',
  name: siteConfig.name,
  url: siteConfig.url,
  description: siteConfig.description,
}
