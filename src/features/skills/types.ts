import type { ComponentType } from 'react'
import type { IconType } from 'react-icons'

export type ComfortLabel =
  | 'Primary'
  | 'Comfortable'
  | 'Working knowledge'
  | 'Learning'

export type StackCategoryId = 'frontend' | 'interface' | 'data' | 'workflow'

export type StackItem = {
  name: string
  icon: IconType
  comfort: ComfortLabel
  tone: string
  use: string
}

export type StackCategory = {
  id: StackCategoryId
  label: string
  summary: string
  items: StackItem[]
}

export type Mission = {
  id: string
  label: string
  tabId: StackCategoryId
  stackName: string
  softId: string
  command: string
  result: string
}

export type SoftSkill = {
  id: string
  label: string
  icon: ComponentType<{ className?: string }>
  signal: string
}
