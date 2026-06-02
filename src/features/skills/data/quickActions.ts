import { routes } from '@/lib/routes'

import type { QuickAction } from '../types'

export const quickActions: QuickAction[] = [
  {
    label: 'Review build recipe',
    href: routes.skillsAnchors.buildRecipe,
  },
  {
    label: 'Open stack inspector',
    href: routes.skillsAnchors.stackInspector,
  },
  {
    label: 'Tune soft-skill modules',
    href: routes.skillsAnchors.softSkills,
  },
  {
    label: 'Use the terminal',
    href: routes.skillsAnchors.terminalShortcut,
  },
]
