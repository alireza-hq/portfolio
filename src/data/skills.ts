export const skillModes = [
  {
    id: 'launch',
    label: 'Launch UI',
    tagline: 'Portfolio, dashboard, landing, product shell.',
    score: 94,
    output: ['next build', 'typecheck passed', 'interaction polish applied'],
    stack: ['Next.js', 'React', 'TypeScript', 'Tailwind CSS'],
  },
  {
    id: 'system',
    label: 'Design System',
    tagline: 'Reusable primitives, states, tokens, and layout rules.',
    score: 89,
    output: ['component map generated', 'states normalized', 'visual QA ready'],
    stack: ['Accessibility', 'Tailwind CSS', 'State modeling', 'Git'],
  },
  {
    id: 'fullstack',
    label: 'Full Flow',
    tagline: 'Forms, validation, API contracts, and data-backed screens.',
    score: 86,
    output: ['schema connected', 'form validation active', 'API path traced'],
    stack: ['React Hook Form', 'Zod', 'Prisma', 'PostgreSQL'],
  },
] as const

export const skillGroups = [
  {
    title: 'Interface Engineering',
    description: 'Responsive product UI with strong state boundaries.',
    icon: 'layers',
    items: ['React', 'Next.js', 'TypeScript', 'Tailwind CSS', 'Accessibility'],
  },
  {
    title: 'Application Logic',
    description: 'Forms, commands, data flow, and client-side architecture.',
    icon: 'braces',
    items: ['State modeling', 'React Hook Form', 'Zod', 'REST APIs', 'Prisma'],
  },
  {
    title: 'Backend Adjacent',
    description: 'Backend fluency for complete web experiences.',
    icon: 'database',
    items: ['Node.js', 'Express', 'PostgreSQL', 'Auth flows', 'API contracts'],
  },
] as const

export const toolbox = [
  {
    name: 'Next.js App Router',
    use: 'Routing, page composition, static pages, and production builds.',
    level: 92,
    projects: ['Portfolio Terminal', 'Commerce Dashboard'],
  },
  {
    name: 'React Server Components',
    use: 'Keeping pages lean while preserving interactive client islands.',
    level: 82,
    projects: ['Portfolio Terminal'],
  },
  {
    name: 'Tailwind CSS v4',
    use: 'Fast UI systems, responsive layouts, and consistent surface styling.',
    level: 90,
    projects: ['Portfolio Terminal', 'Ops Interface'],
  },
  {
    name: 'TypeScript',
    use: 'Typed data models, command contracts, and safer component props.',
    level: 88,
    projects: ['Portfolio Terminal', 'Ops Interface'],
  },
  {
    name: 'React Hook Form',
    use: 'Performant forms with controlled validation and clear error states.',
    level: 84,
    projects: ['Commerce Dashboard'],
  },
  {
    name: 'Zod',
    use: 'Schema validation for forms, command args, and API boundaries.',
    level: 82,
    projects: ['Commerce Dashboard', 'Ops Interface'],
  },
  {
    name: 'pnpm',
    use: 'Fast package management and reproducible local workflows.',
    level: 86,
    projects: ['Portfolio Terminal'],
  },
  {
    name: 'Git',
    use: 'Small commits, clear history, and safe iteration.',
    level: 88,
    projects: ['Portfolio Terminal', 'Ops Interface'],
  },
] as const

export type SkillMode = (typeof skillModes)[number]
export type SkillGroup = (typeof skillGroups)[number]
export type Tool = (typeof toolbox)[number]
