import {
  BrainCircuit,
  Compass,
  MessagesSquare,
  Network,
  Sparkles,
  Workflow,
} from 'lucide-react'

import type { SoftSkill } from '../types'

export const softSkills: SoftSkill[] = [
  {
    id: 'clarity',
    label: 'Clarity',
    icon: MessagesSquare,
    signal: 'I turn vague ideas into screens, states, and clear next steps.',
  },
  {
    id: 'ownership',
    label: 'Ownership',
    icon: Compass,
    signal:
      'I keep the work moving and try to leave the code easier to continue.',
  },
  {
    id: 'taste',
    label: 'Taste',
    icon: Sparkles,
    signal:
      'I care about spacing, hierarchy, motion, and how the interface feels.',
  },
  {
    id: 'learning-speed',
    label: 'Learning speed',
    icon: BrainCircuit,
    signal:
      'I learn by building, breaking things, and improving the next version.',
  },
  {
    id: 'consistency',
    label: 'Consistency',
    icon: Workflow,
    signal: 'I prefer small working steps over waiting for perfect conditions.',
  },
  {
    id: 'architecture',
    label: 'Architecture',
    icon: Network,
    signal:
      'I think in structure, boundaries, reusable patterns, and maintainable flows.',
  },
]
