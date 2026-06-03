import { SkillsPage } from '@/features/skills/page/SkillsPage'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Skills',
}

export default function Skills() {
  return <SkillsPage />
}
