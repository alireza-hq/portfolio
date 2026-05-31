export const projectFilters = ['All', 'Interactive', 'Dashboard', 'Tooling'] as const

export const projects = [
  {
    slug: 'portfolio-terminal',
    name: 'Portfolio Terminal',
    type: 'Interactive portfolio',
    category: 'Interactive',
    status: 'Live concept',
    score: 96,
    description:
      'A command-driven personal site with discovery, theme control, custom motion, and a developer identity that feels hands-on.',
    metrics: ['Command UX', 'Theme system', 'Motion layer'],
    stack: ['Next.js', 'React', 'TypeScript', 'Tailwind CSS'],
    features: ['Command registry', 'Keyboard history', 'Clickable output cards'],
    challenges: ['Keeping motion subtle', 'Making terminal UX responsive'],
    links: {
      demo: '/',
      github: 'https://github.com/yourusername',
    },
    preview: ['help', 'skills --interactive', 'contact --socials'],
  },
  {
    slug: 'commerce-dashboard',
    name: 'Commerce Dashboard',
    type: 'Full-stack app',
    category: 'Dashboard',
    status: 'Case study',
    score: 91,
    description:
      'Product, order, and admin workflows shaped for fast scanning, clean forms, and reliable daily operation.',
    metrics: ['Dense tables', 'Form flows', 'Admin actions'],
    stack: ['Next.js', 'Prisma', 'PostgreSQL', 'React Hook Form'],
    features: ['Order filters', 'Admin actions', 'Validation flows'],
    challenges: ['Dense layouts', 'Predictable form states'],
    links: {
      demo: '#',
      github: 'https://github.com/yourusername',
    },
    preview: ['orders.filter(active)', 'inventory.sync()', 'admin.audit()'],
  },
  {
    slug: 'ops-interface',
    name: 'Ops Interface',
    type: 'Internal tool',
    category: 'Tooling',
    status: 'Prototype',
    score: 88,
    description:
      'Protected workflows, stateful views, and focused controls for teams that need speed more than decoration.',
    metrics: ['Protected routes', 'Bulk actions', 'Stateful filters'],
    stack: ['TypeScript', 'REST APIs', 'Zod', 'Git'],
    features: ['Queue monitor', 'Route guards', 'Bulk resolution'],
    challenges: ['Fast repeated actions', 'Clear active states'],
    links: {
      demo: '#',
      github: 'https://github.com/yourusername',
    },
    preview: ['queue.watch()', 'route.guard()', 'batch.resolve()'],
  },
] as const

export type Project = (typeof projects)[number]
