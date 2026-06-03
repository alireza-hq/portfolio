import { AboutPage } from '@/features/about/components/AboutPage'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'About',
}

export default function About() {
  return <AboutPage />
}
