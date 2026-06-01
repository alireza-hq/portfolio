import type { Mission } from '../types'

export const missions: Mission[] = [
  {
    id: 'frontend',
    label: 'Frontend',
    tabId: 'frontend',
    stackName: 'React',
    softId: 'clarity',
    command: 'build --interface',
    result:
      'Responsive screens, reusable components, and polished interactions.',
  },
  {
    id: 'product-ui',
    label: 'Product UI',
    tabId: 'interface',
    stackName: 'Tailwind CSS',
    softId: 'taste',
    command: 'compose --product-ui',
    result: 'Clean layouts, clear states, and usable visual systems.',
  },
  {
    id: 'data-flow',
    label: 'Data Flow',
    tabId: 'data',
    stackName: 'React Hook Form',
    softId: 'architecture',
    command: 'trace --data-flow',
    result: 'Forms, validation, API contracts, and predictable user flows.',
  },
  {
    id: 'workflow',
    label: 'Workflow',
    tabId: 'workflow',
    stackName: 'Git',
    softId: 'consistency',
    command: 'ship --controlled',
    result: 'Small commits, clean structure, and steady progress.',
  },
]
