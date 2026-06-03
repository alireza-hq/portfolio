import type { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  const url = 'https://your-domain.com' //TODO: replace with the url later

  return [
    { url, priority: 1 },
    { url: `${url}/about`, priority: 0.8 },
    { url: `${url}/skills`, priority: 0.8 },
    { url: `${url}/projects`, priority: 0.8 },
    { url: `${url}/contact`, priority: 0.8 },
  ]
}
