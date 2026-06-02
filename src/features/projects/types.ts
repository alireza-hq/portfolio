import type { LucideIcon } from 'lucide-react'

export type ProjectCategory = 'Interactive' | 'Dashboard' | 'Tooling'
export type ProjectFilter = 'All' | ProjectCategory
export type ProjectStatus =
  | 'Live'
  | 'In development'
  | 'Case study'
  | 'Internal tool'
  | 'Real-world dashboard app'

export type ProjectDetail = {
  label: string
  value: string
}

export type ProjectInspectionTab = {
  label: string
  eyebrow: string
  items: string[]
  note?: string
}

export type Project = {
  slug: string
  title: string
  type: string
  category: ProjectCategory
  status: ProjectStatus
  statusLabels: string[]
  icon: LucideIcon
  image: string
  liveUrl: string
  githubUrl: string
  description: string
  stack: string[]
  frontendStack: string[]
  backendStack?: string[]
  features: string[]
  tabs: ProjectInspectionTab[]
  problem: string
  solution: string
  architecture: string
  learned: string[]
  mainChallenge: string
}
