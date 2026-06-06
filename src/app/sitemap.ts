import type { MetadataRoute } from 'next'

import { siteConfig } from '@/config/site'
import { routes } from '@/lib/routes'

export default function sitemap(): MetadataRoute.Sitemap {
  const pages = [
    [routes.home, 1],
    [routes.about, 0.8],
    [routes.skills, 0.8],
    [routes.projects, 0.8],
    [routes.contact, 0.8],
    [routes.resume, 0.7],
  ] as const

  return pages.map(([path, priority]) => ({
    url: new URL(path, siteConfig.url).toString(),
    priority,
  }))
}
