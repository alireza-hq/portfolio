import type { ComponentType } from 'react'
import { Mail } from 'lucide-react'
import { FaGithub, FaLinkedinIn } from 'react-icons/fa6'

export type ContactChannel = {
  label: string
  href: string
  value: string
  icon: ComponentType<{ className?: string }>
  status: string
  command: string
}

export const channels: ContactChannel[] = [
  {
    label: 'GitHub',
    href: 'https://github.com/alireza-hq',
    value: 'Code, projects & experiments',
    icon: FaGithub,
    status: 'Best for code, repos, and proof of work.',
    command: 'inspect --source code',
  },
  {
    label: 'LinkedIn',
    href: 'https://www.linkedin.com/in/alireza-hq-dev/',
    value: 'Professional profile & experience',
    icon: FaLinkedinIn,
    status: 'Best for roles, contracts, and quick intros.',
    command: 'connect --professional',
  },
  {
    label: 'Email',
    href: 'mailto:alireza.h.dev@outlook.com',
    value: 'Direct communication',
    icon: Mail,
    status: 'Best for detailed scope and async planning.',
    command: 'send --subject project',
  },
]
