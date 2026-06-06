import { siteConfig } from './site'
import { routes } from '@/lib/routes'

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
  sameAs: [routes.social.github, routes.social.linkedin],
}

export const websiteJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'WebSite',
  name: siteConfig.name,
  url: siteConfig.url,
  description: siteConfig.description,
}
