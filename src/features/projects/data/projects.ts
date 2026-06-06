import { Boxes, LayoutDashboard, TerminalSquare } from 'lucide-react'

import { routes } from '@/lib/routes'

import type { Project, ProjectFilter } from '../types'

export const projectFilters: ProjectFilter[] = [
  'All',
  'Interactive',
  'Dashboard',
  'Tooling',
]

export const projects: Project[] = [
  {
    slug: 'portfolio-terminal',
    title: 'Portfolio Terminal',
    type: 'Interactive portfolio',
    category: 'Interactive',
    status: 'Live',
    statusLabels: ['Live', 'Interactive'],
    icon: TerminalSquare,
    image: '/projects/portfolio.png',
    liveUrl: routes.home,
    githubUrl: routes.social.github,
    description:
      'A terminal-first developer portfolio built to feel like an interactive workspace instead of a static personal website.',
    stack: [
      'Next.js',
      'React',
      'TypeScript',
      'Tailwind CSS',
      'React Hook Form',
      'Zod',
    ],
    frontendStack: [
      'Next.js',
      'React',
      'TypeScript',
      'Tailwind CSS',
      'React Hook Form',
      'Zod',
    ],
    features: [
      'Terminal command system',
      'Command history',
      'Hidden easter eggs',
      'Developer workspace intro',
      'Custom cursor',
      'Animated background',
      'Contact signal system',
      'Interactive skills and projects pages',
    ],
    tabs: [
      {
        label: 'Console',
        eyebrow: 'runtime notes',
        items: [
          'Terminal-first navigation',
          'Interactive workspace UI',
          'Motion and micro-interactions',
        ],
      },
      {
        label: 'Commands',
        eyebrow: 'examples',
        items: [
          'help',
          'skills',
          'projects',
          'whoami',
          'coffee',
          'sudo hire-me',
        ],
        note: 'The command layer is meant to reward exploration without turning the page into a toy.',
      },
      {
        label: 'Architecture',
        eyebrow: 'structure',
        items: [
          'Command registry owns terminal behavior.',
          'Input and history logic stay in terminal hooks.',
          'Feature pages and shared data keep output rendering reusable.',
        ],
        note: 'Terminal behavior is separated into command registry, input/history logic, and reusable output rendering.',
      },
      {
        label: 'Links',
        eyebrow: 'open surfaces',
        items: ['Live workspace', 'Source repository'],
      },
    ],
    problem:
      'Most portfolio homepages are passive. They ask visitors to read instead of interact.',
    solution:
      'The terminal became the first-class navigation surface, with real commands, focused output, and motion that supports the workspace mood.',
    architecture:
      'Terminal behavior is separated into command registry, input/history logic, and reusable output rendering. UI sections are split into feature components and shared data.',
    learned: [
      'Building command-driven UI',
      'Managing terminal history and command outputs',
      'Making a portfolio feel interactive without becoming gimmicky',
      'Keeping motion lightweight and useful',
    ],
    mainChallenge:
      'Making a portfolio feel interactive without slowing typing.',
  },
  {
    slug: 'e-commerce-platform',
    title: 'E-Commerce Platform',
    type: 'Full-stack commerce app',
    category: 'Dashboard',
    status: 'In development',
    statusLabels: ['In development', 'Case study'],
    icon: LayoutDashboard,
    image: '/projects/e-commerce.png',
    liveUrl: routes.projects,
    githubUrl: routes.social.github,
    description:
      'A production-style e-commerce application with customer-facing shopping flows and admin-side management tools.',
    stack: [
      'Next.js',
      'React',
      'TypeScript',
      'Tailwind CSS',
      'Node.js',
      'Express',
      'PostgreSQL',
      'JWT Auth',
      'React Hook Form',
      'Zod',
      'Axios',
    ],
    frontendStack: [
      'Next.js',
      'React',
      'TypeScript',
      'Tailwind CSS',
      'React Hook Form',
      'Zod',
      'Axios',
    ],
    backendStack: ['Node.js', 'Express', 'PostgreSQL', 'JWT Auth'],
    features: [
      'Authentication',
      'Product listing',
      'Product details',
      'Search',
      'Filtering',
      'Cart',
      'Checkout flow',
      'Reviews',
      'Admin dashboard',
      'Product management',
      'Order management',
    ],
    tabs: [
      {
        label: 'Catalog',
        eyebrow: 'shop flow',
        items: [
          'Products',
          'Search',
          'Filtering',
          'Cart',
          'Checkout',
          'Reviews',
        ],
      },
      {
        label: 'Admin',
        eyebrow: 'operator flow',
        items: [
          'Product CRUD',
          'Order management',
          'Admin actions',
          'Validation',
          'Dashboard workflows',
        ],
      },
      {
        label: 'Architecture',
        eyebrow: 'request path',
        items: [
          'Frontend -> API -> PostgreSQL',
          'Auth -> JWT session -> protected routes',
          'Forms -> Zod validation -> API request',
        ],
      },
      {
        label: 'Links',
        eyebrow: 'open surfaces',
        items: ['Live case study', 'Source repository'],
      },
    ],
    problem:
      'Commerce interfaces need to support both customers moving quickly and admins managing real operational details.',
    solution:
      'The app separates customer flows from admin workflows while keeping validation, state, and API boundaries clear.',
    architecture:
      'Frontend -> API -> PostgreSQL. Auth -> JWT session -> protected routes. Forms -> Zod validation -> API request.',
    learned: [
      'Connecting frontend and backend cleanly',
      'Designing admin workflows',
      'Handling forms and validation',
      'Structuring a larger application',
      'Thinking about real product flows instead of isolated pages',
    ],
    mainChallenge: 'Balancing customer-facing flow with admin-side density.',
  },
  {
    slug: 'internal-operations-dashboard',
    title: 'Internal Operations Dashboard',
    type: 'Internal dashboard app',
    category: 'Tooling',
    status: 'Real-world dashboard app',
    statusLabels: ['Internal tool', 'Real-world dashboard app'],
    icon: Boxes,
    image: '/projects/internal-panel.png',
    description:
      'An internal dashboard for operational workflows, user management, tickets, roles, contact lists, forms, and monitoring.',
    stack: [
      'React',
      'TypeScript',
      'Tailwind CSS',
      'Node.js',
      'Express',
      'PostgreSQL',
      'JWT Auth',
      'Axios',
    ],
    frontendStack: ['React', 'TypeScript', 'Tailwind CSS', 'Axios'],
    backendStack: ['Node.js', 'Express', 'PostgreSQL', 'JWT Auth', 'LDAP'],
    features: [
      'LDAP login with JWT session',
      'Users management',
      'Tickets management',
      'Roles management',
      'Contact list',
      'Admin CUD operations',
      'Forms list',
      'Monitoring dashboard',
      'Protected internal workflows',
    ],
    tabs: [
      {
        label: 'Users',
        eyebrow: 'access layer',
        items: [
          'LDAP login',
          'JWT session',
          'Protected routes',
          'Role-based access',
        ],
      },
      {
        label: 'Tickets',
        eyebrow: 'workflow layer',
        items: [
          'Ticket list',
          'Ticket details',
          'Ticket responses',
          'Status workflows',
          'Technician/admin actions',
        ],
      },
      {
        label: 'Admin',
        eyebrow: 'control layer',
        items: ['Users', 'Roles', 'Contacts', 'Forms', 'Monitoring'],
      },
      {
        label: 'Architecture',
        eyebrow: 'protected flow',
        items: [
          'Dashboard shell -> protected routes -> API services -> backend -> PostgreSQL',
          'Authentication -> LDAP login -> JWT token -> role-based access',
        ],
      },
      {
        label: 'Links',
        eyebrow: 'open surfaces',
        items: ['Internal app notes', 'Source repository'],
      },
    ],
    problem:
      'Internal tools often need dense actions, protected views, and fast scanning without becoming visually noisy.',
    solution:
      'The dashboard organizes repeated work around protected routes, clear role boundaries, and focused admin surfaces.',
    architecture:
      'Dashboard shell -> protected routes -> API services -> backend -> PostgreSQL. Authentication -> LDAP login -> JWT token -> role-based access.',
    learned: [
      'Building dashboard-style workflows',
      'Handling protected routes and role-based UI',
      'Designing interfaces for repeated internal tasks',
      'Making dense admin screens readable and usable',
    ],
    mainChallenge:
      'Keeping dense internal workflows readable under repeated use.',
  },
]
