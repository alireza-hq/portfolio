import type { ComponentType } from 'react'
import { Mail } from 'lucide-react'
import { FaGithub, FaLinkedinIn } from 'react-icons/fa6'

import { routes } from '@/lib/routes'

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
    href: routes.social.github,
    value: 'Code, projects & experiments',
    icon: FaGithub,
    status: 'Best for code, repos, and proof of work.',
    command: 'inspect --source code',
  },
  {
    label: 'LinkedIn',
    href: routes.social.linkedin,
    value: 'Professional profile & experience',
    icon: FaLinkedinIn,
    status: 'Best for roles, contracts, and quick intros.',
    command: 'connect --professional',
  },
  {
    label: 'Email',
    href: routes.social.email,
    value: 'Direct communication',
    icon: Mail,
    status: 'Best for detailed scope and async planning.',
    command: 'send --subject project',
  },
]
