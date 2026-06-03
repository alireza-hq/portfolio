import { ProjectsPage } from '@/features/projects/page/ProjectsPage'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Projects',
}

export default function Projects() {
  return <ProjectsPage />
}
