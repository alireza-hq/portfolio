import type { MetadataRoute } from 'next'

import { routes } from '@/lib/routes'

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'Alireza',
    short_name: 'Alireza',
    start_url: routes.home,
    display: 'standalone',
    background_color: '#09090b',
    theme_color: '#09090b',
    icons: [
      {
        src: '/android-chrome-192x192.png',
        sizes: '192x192',
        type: 'image/png',
      },
      {
        src: '/android-chrome-512x512.png',
        sizes: '512x512',
        type: 'image/png',
      },
    ],
  }
}
