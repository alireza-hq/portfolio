import { TerminalCommand, CommandContext, CommandResult } from '../types'

const developer = {
  name: 'Alireza',
  role: 'React / Next.js Developer',
  email: 'your.email@example.com',
  github: 'https://github.com/yourusername',
  linkedin: 'https://linkedin.com/in/yourusername',
  resume: '/resume.pdf',
}

const terminalProjects = [
  {
    slug: 'portfolio-terminal',
    name: 'Portfolio Terminal',
    type: 'Interactive portfolio',
    url: '/',
    github: developer.github,
    stack: ['Next.js', 'React', 'TypeScript', 'Tailwind CSS'],
    description:
      'A terminal-first portfolio with command discovery, theme control, custom cursor, and animated workspace atmosphere.',
    build: [
      'Command registry maps typed input to JSX output.',
      'Terminal history and focus behavior live in small hooks.',
      'Layout chrome, motion, and theme stay outside the command surface.',
    ],
  },
  {
    slug: 'commerce-dashboard',
    name: 'Commerce Dashboard',
    type: 'Full-stack app',
    url: '/projects',
    github: developer.github,
    stack: ['Next.js', 'Prisma', 'PostgreSQL', 'React Hook Form'],
    description:
      'A dashboard shape for product, order, and admin workflows with scanning-first screens.',
    build: [
      'Admin actions are grouped by workflow, not decoration.',
      'Forms use clear validation states and calm recovery paths.',
      'Dense UI is designed around repeated daily use.',
    ],
  },
  {
    slug: 'ops-interface',
    name: 'Ops Interface',
    type: 'Internal tool',
    url: '/projects',
    github: developer.github,
    stack: ['TypeScript', 'REST APIs', 'Zod', 'Git'],
    description:
      'A focused internal-tool prototype for protected flows, queues, filters, and bulk decisions.',
    build: [
      'Stateful views make active filters obvious.',
      'Bulk actions are separated from destructive confirmations.',
      'Panels stay compact for fast operational scanning.',
    ],
  },
]

export const terminalCompletions = [
  '?',
  'about',
  'clear',
  'cls',
  'contact',
  'coffee',
  'date',
  'help',
  'journey',
  'open contact',
  'open home',
  'open portfolio',
  'open projects',
  'open skills',
  'project commerce-dashboard',
  'project ops-interface',
  'project portfolio-terminal',
  'projects',
  'resume',
  'secret',
  'setup',
  'skills',
  'sudo hire-me',
  'sudo uninstall coffee',
  'theme',
  'uninstall coffee',
  'uses',
  'whoami',
]

const cardClass =
  'rounded-2xl border border-zinc-900/10 bg-white/70 p-4 shadow-sm shadow-zinc-900/5 dark:border-white/10 dark:bg-white/6'
const chipClass =
  'rounded-full border border-zinc-900/10 bg-zinc-50/90 px-2.5 py-1 text-xs font-medium text-zinc-700 dark:border-white/10 dark:bg-zinc-950/45 dark:text-zinc-300'
const linkClass =
  'font-semibold text-sky-600 hover:underline focus-visible:ring-2 focus-visible:ring-sky-400/60 focus-visible:outline-none dark:text-sky-400'
const coffeeStorageKey = 'portfolio:coffee-installed'

function findProject(args: string[]) {
  const query = args.join(' ').toLowerCase().trim()

  return terminalProjects.find((project) => {
    return (
      project.slug.includes(query.replace(/\s+/g, '-')) ||
      project.name.toLowerCase().includes(query)
    )
  })
}

function projectCard(project: (typeof terminalProjects)[number]) {
  return (
    <div className={cardClass}>
      <div className='flex flex-wrap items-start justify-between gap-3'>
        <div>
          <p className='text-sm font-semibold text-sky-600 dark:text-sky-300'>
            {project.type}
          </p>
          <h3 className='mt-1 text-lg font-semibold text-zinc-950 dark:text-white'>
            {project.name}
          </h3>
        </div>
        <a href={project.url} className={linkClass}>
          open
        </a>
      </div>
      <p className='mt-3 leading-7 text-zinc-600 dark:text-zinc-400'>
        {project.description}
      </p>
      <div className='mt-4 flex flex-wrap gap-2'>
        {project.stack.map((item) => (
          <span key={item} className={chipClass}>
            {item}
          </span>
        ))}
      </div>
    </div>
  )
}

function isCoffeeInstalled() {
  return (
    typeof window !== 'undefined' &&
    window.localStorage.getItem(coffeeStorageKey) === 'true'
  )
}

function installCoffee() {
  if (typeof window !== 'undefined') {
    window.localStorage.setItem(coffeeStorageKey, 'true')
  }
}

function uninstallCoffee() {
  if (typeof window !== 'undefined') {
    window.localStorage.removeItem(coffeeStorageKey)
  }
}

function CoffeeProgress() {
  return (
    <p className='font-mono text-sm text-zinc-700 dark:text-zinc-300'>
      <span className='relative inline-block'>
        <span className='text-zinc-300 dark:text-zinc-700'>
          ████████████████
        </span>
        <span className='coffee-progress absolute inset-0 overflow-hidden text-sky-600 dark:text-sky-300'>
          ████████████████
        </span>
      </span>{' '}
      100%
    </p>
  )
}

function renderCoffeeInstall() {
  return (
    <div className='grid gap-2'>
      <p className='font-mono text-sm text-sky-600 dark:text-sky-300'>
        Installing coffee...
      </p>
      <CoffeeProgress />
      <div className='mt-2 grid gap-2'>
        <p>
          <span className='font-semibold text-zinc-950 dark:text-white'>
            Status:
          </span>{' '}
          <span className='text-zinc-600 dark:text-zinc-400'>Installed</span>
        </p>
        <p>
          <span className='font-semibold text-zinc-950 dark:text-white'>
            Version:
          </span>{' '}
          <span className='text-zinc-600 dark:text-zinc-400'>Fresh</span>
        </p>
        <p>
          <span className='font-semibold text-zinc-950 dark:text-white'>
            Role:
          </span>{' '}
          <span className='text-zinc-600 dark:text-zinc-400'>
            Runtime dependency for late-night debugging sessions.
          </span>
        </p>
        <p>
          <span className='font-semibold text-zinc-950 dark:text-white'>
            Warning:
          </span>{' '}
          <span className='text-zinc-600 dark:text-zinc-400'>
            Removing this package may reduce developer performance.
          </span>
        </p>
      </div>
    </div>
  )
}

function renderCoffeeActive() {
  return (
    <div className='grid gap-2'>
      <p className='font-semibold text-zinc-950 dark:text-white'>
        Coffee is already installed.
      </p>
      <div className='grid gap-2'>
        <p>
          <span className='font-semibold text-zinc-950 dark:text-white'>
            Version:
          </span>{' '}
          <span className='text-zinc-600 dark:text-zinc-400'>Fresh</span>
        </p>
        <p>
          <span className='font-semibold text-zinc-950 dark:text-white'>
            Status:
          </span>{' '}
          <span className='text-zinc-600 dark:text-zinc-400'>Active</span>
        </p>
        <p>
          <span className='font-semibold text-zinc-950 dark:text-white'>
            Tip:
          </span>{' '}
          <span className='text-zinc-600 dark:text-zinc-400'>
            Stay hydrated too.
          </span>
        </p>
      </div>
    </div>
  )
}

function renderCoffeeUninstallError() {
  return (
    <div className='grid gap-2'>
      <p className='font-mono text-sm text-sky-600 dark:text-sky-300'>
        Uninstalling coffee...
      </p>
      <p>
        <span className='font-semibold text-red-500 dark:text-red-400'>
          Error:
        </span>{' '}
        <span className='text-zinc-600 dark:text-zinc-400'>
          Package &quot;coffee&quot; is marked as a critical dependency and
          cannot be removed.
        </span>
      </p>
    </div>
  )
}

function renderCoffeeSudoUninstall() {
  return (
    <div className='grid gap-2'>
      <p className='font-mono text-sm text-sky-600 dark:text-sky-300'>
        sudo uninstall coffee
      </p>
      <p className='font-mono text-sm text-zinc-700 dark:text-zinc-300'>
        Uninstalling coffee...
      </p>
      <p>
        <span className='font-semibold text-zinc-950 dark:text-white'>
          Status:
        </span>{' '}
        <span className='text-zinc-600 dark:text-zinc-400'>Removed</span>
      </p>
    </div>
  )
}

const helpSections: {
  title: string
  commands: { command: string; description: string }[]
}[] = [
  {
    title: 'Explore',
    commands: [
      { command: 'about', description: 'Show the short developer profile.' },
      { command: 'whoami', description: 'Print a one-line identity.' },
      { command: 'skills', description: 'Open the interactive stack summary.' },
      { command: 'projects', description: 'List featured project artifacts.' },
      { command: 'journey', description: 'Show the learning and build path.' },
    ],
  },
  {
    title: 'Projects',
    commands: [
      {
        command: 'project [name]',
        description: 'Inspect one project with build notes.',
      },
      {
        command: 'open [project]',
        description: 'Navigate to a project or page in this tab.',
      },
    ],
  },
  {
    title: 'System',
    commands: [
      { command: 'setup', description: 'Show workspace and workflow tools.' },
      { command: 'uses', description: 'Show the stack and working style.' },
      { command: 'date', description: 'Print the current date and time.' },
      { command: 'theme', description: 'Toggle light and dark mode.' },
      { command: 'secret', description: 'Reveal a tiny hidden note.' },
      { command: 'clear', description: 'Clear the terminal output.' },
    ],
  },
  {
    title: 'Contact',
    commands: [
      { command: 'contact', description: 'Show GitHub, LinkedIn, and email.' },
      { command: 'resume', description: 'Open the resume file.' },
      {
        command: 'sudo hire-me',
        description: 'Run the highly scientific hiring protocol.',
      },
    ],
  },
] as const

function renderHelp() {
  return (
    <div className='space-y-3'>
      <p className='text-zinc-500 dark:text-zinc-400'>
        Available commands. Press Tab to autocomplete.
      </p>
      <div className='grid gap-3'>
        {helpSections.map((section) => (
          <section key={section.title} className='grid gap-2'>
            <p className='font-semibold text-sky-600 dark:text-sky-400'>
              {section.title}
            </p>
            <div className='grid gap-1'>
              {section.commands.map((item) => (
                <div
                  key={item.command}
                  className='grid gap-1 sm:grid-cols-[9.5rem_1fr]'
                >
                  <code className='font-mono text-sm text-zinc-800 dark:text-zinc-200'>
                    {item.command}
                  </code>
                  <span className='text-zinc-500 dark:text-zinc-400'>
                    {item.description}
                  </span>
                </div>
              ))}
            </div>
          </section>
        ))}
        <div className='grid gap-1 sm:grid-cols-[9.5rem_1fr]'>
          <code className='font-mono text-sm text-zinc-800 dark:text-zinc-200'>
            ?
          </code>
          <span className='text-zinc-500 dark:text-zinc-400'>
            Alias for help.
          </span>
        </div>
      </div>
    </div>
  )
}

export const commandRegistry: Record<string, TerminalCommand> = {
  help: {
    name: 'help',
    description: 'Display all available commands',
    execute: () => ({
      type: 'output',
      content: renderHelp(),
    }),
  },

  '?': {
    name: '?',
    description: 'Alias for help',
    execute: () => ({
      type: 'output',
      content: renderHelp(),
    }),
  },

  about: {
    name: 'about',
    description: 'Show information about the developer',
    execute: () => ({
      type: 'output',
      content: (
        <div className={cardClass}>
          <p className='text-sm font-semibold text-sky-600 dark:text-sky-300'>
            {developer.role}
          </p>
          <h3 className='mt-2 text-xl font-semibold text-zinc-950 dark:text-white'>
            {developer.name}
          </h3>
          <p className='mt-3 leading-7 text-zinc-600 dark:text-zinc-400'>
            I build fast, app-like interfaces with React, Next.js, TypeScript,
            and interaction details that make a portfolio feel like software.
          </p>
        </div>
      ),
    }),
  },

  whoami: {
    name: 'whoami',
    description: 'Display short intro',
    execute: () => ({
      type: 'output',
      content: `${developer.name} - ${developer.role}`,
    }),
  },

  skills: {
    name: 'skills',
    description: 'Display tech stack and skills',
    execute: () => ({
      type: 'output',
      content: (
        <div className={cardClass}>
          <p className='font-semibold text-zinc-950 dark:text-white'>
            Stack explorer
          </p>
          <p className='mt-2 text-zinc-500 dark:text-zinc-400'>
            The skills page is now interactive: tabs, mission presets, icons,
            soft-skill modules, and live readouts.
          </p>
          <a href='/skills' className={`mt-3 inline-block ${linkClass}`}>
            Open skills page
          </a>
        </div>
      ),
    }),
  },

  projects: {
    name: 'projects',
    description: 'List featured projects',
    execute: () => ({
      type: 'output',
      content: (
        <div className='space-y-3'>
          {terminalProjects.map((project) => (
            <div key={project.slug}>{projectCard(project)}</div>
          ))}
        </div>
      ),
    }),
  },

  project: {
    name: 'project',
    description: 'Show project details',
    execute: (args) => {
      const project = findProject(args)

      if (!project) {
        return {
          type: 'output',
          content: "Project not found. Try 'projects' first.",
        }
      }

      return {
        type: 'output',
        content: (
          <div className={cardClass}>
            <p className='text-sm font-semibold text-sky-600 dark:text-sky-300'>
              {project.type}
            </p>
            <h3 className='mt-1 text-lg font-semibold text-zinc-950 dark:text-white'>
              {project.name}
            </h3>
            <p className='mt-3 leading-7 text-zinc-600 dark:text-zinc-400'>
              {project.description}
            </p>
            <div className='mt-4 grid gap-2'>
              {project.build.map((step, index) => (
                <div key={step} className='flex gap-3 text-sm'>
                  <span className='font-mono text-sky-600 dark:text-sky-300'>
                    0{index + 1}
                  </span>
                  <span className='text-zinc-600 dark:text-zinc-400'>
                    {step}
                  </span>
                </div>
              ))}
            </div>
          </div>
        ),
      }
    },
  },

  open: {
    name: 'open',
    description: 'Open a project or page',
    execute: (args) => {
      const target = args.join(' ').toLowerCase()
      const project = findProject(args)

      if (project) return { type: 'external', url: project.url }
      if (target === 'projects') return { type: 'external', url: '/projects' }
      if (target === 'skills') return { type: 'external', url: '/skills' }
      if (target === 'contact') return { type: 'external', url: '/contact' }
      if (target === 'home' || target === 'portfolio') {
        return { type: 'external', url: '/' }
      }

      return {
        type: 'output',
        content:
          "Try 'open projects', 'open skills', or 'open portfolio terminal'.",
      }
    },
  },

  journey: {
    name: 'journey',
    description: 'Show learning/building path',
    execute: () => ({
      type: 'output',
      content: (
        <div className='space-y-3'>
          {[
            'Foundation: HTML, CSS, JavaScript, and browser behavior.',
            'Frontend depth: React, TypeScript, state, forms, and component architecture.',
            'Product polish: motion, accessibility, responsive layout, and app-like interactions.',
            'Current direction: Developer OS portfolio with terminal, atlas, and inspectable pages.',
          ].map((item, index) => (
            <div key={item} className={cardClass}>
              <span className='font-mono text-sm text-sky-600 dark:text-sky-300'>
                0{index + 1}
              </span>
              <p className='mt-1 text-zinc-700 dark:text-zinc-300'>{item}</p>
            </div>
          ))}
        </div>
      ),
    }),
  },

  setup: {
    name: 'setup',
    description: 'Show development environment',
    execute: () => ({
      type: 'output',
      content: (
        <div className={cardClass}>
          <p className='font-semibold text-zinc-950 dark:text-white'>
            Workspace setup
          </p>
          <div className='mt-3 flex flex-wrap gap-2'>
            {[
              'VS Code',
              'pnpm',
              'Git',
              'Next.js',
              'TypeScript',
              'Tailwind CSS',
            ].map((item) => (
              <span key={item} className={chipClass}>
                {item}
              </span>
            ))}
          </div>
          <p className='mt-3 text-sm text-zinc-500 dark:text-zinc-400'>
            Bias: fast feedback loops, small commits, readable structure.
          </p>
        </div>
      ),
    }),
  },

  uses: {
    name: 'uses',
    description: 'Show tools and workflow',
    execute: () => ({
      type: 'output',
      content: (
        <div className='grid gap-3 sm:grid-cols-2'>
          {[
            ['Editor', 'VS Code, terminal, browser devtools'],
            ['Frontend', 'React, Next.js, TypeScript, Tailwind CSS'],
            ['Workflow', 'pnpm, Git, lint/build checks'],
            ['Thinking', 'Break UI into states, flows, and inspectable panels'],
          ].map(([title, value]) => (
            <div key={title} className={cardClass}>
              <p className='font-semibold text-zinc-950 dark:text-white'>
                {title}
              </p>
              <p className='mt-2 text-sm leading-6 text-zinc-500 dark:text-zinc-400'>
                {value}
              </p>
            </div>
          ))}
        </div>
      ),
    }),
  },

  contact: {
    name: 'contact',
    description: 'Show contact links',
    execute: () => ({
      type: 'output',
      content: (
        <div className='space-y-1'>
          <p>
            GitHub:{' '}
            <a className={linkClass} href={developer.github} target='_blank'>
              {developer.github}
            </a>
          </p>
          <p>
            LinkedIn:{' '}
            <a className={linkClass} href={developer.linkedin} target='_blank'>
              {developer.linkedin}
            </a>
          </p>
          <p>
            Email:{' '}
            <a className={linkClass} href={`mailto:${developer.email}`}>
              {developer.email}
            </a>
          </p>
        </div>
      ),
    }),
  },

  resume: {
    name: 'resume',
    description: 'Open resume in a new tab',
    execute: () => ({ type: 'external', url: developer.resume }),
  },

  clear: {
    name: 'clear',
    description: 'Clear terminal output',
    execute: () => ({ type: 'clear' }),
  },

  cls: {
    name: 'cls',
    description: 'Clear terminal output',
    execute: () => ({ type: 'clear' }),
  },

  theme: {
    name: 'theme',
    description: 'Toggle site theme',
    execute: (_args: string[], context: CommandContext): CommandResult => {
      context.toggleTheme()
      return { type: 'output', content: 'Site theme toggled.' }
    },
  },

  date: {
    name: 'date',
    description: 'Show current date and time',
    execute: () => ({
      type: 'output',
      content: new Intl.DateTimeFormat('en', {
        dateStyle: 'full',
        timeStyle: 'medium',
      }).format(new Date()),
    }),
  },

  coffee: {
    name: 'coffee',
    description: 'Hidden runtime dependency',
    execute: () => {
      if (isCoffeeInstalled()) {
        return { type: 'output', content: renderCoffeeActive() }
      }

      installCoffee()
      return { type: 'output', content: renderCoffeeInstall() }
    },
  },

  uninstall: {
    name: 'uninstall',
    description: 'Hidden package command',
    execute: (args) => {
      if (args.join(' ').toLowerCase() !== 'coffee') {
        return {
          type: 'output',
          content: 'Nothing to uninstall.',
        }
      }

      return { type: 'output', content: renderCoffeeUninstallError() }
    },
  },

  secret: {
    name: 'secret',
    description: 'Reveal a small hidden note',
    execute: () => ({
      type: 'output',
      content:
        'Hidden note: the best UI feels obvious after it exists, but impossible before someone cares enough to shape it.',
    }),
  },

  sudo: {
    name: 'sudo',
    description: 'Try sudo hire-me',
    execute: (args) => {
      const command = args.join(' ').toLowerCase()

      if (command === 'uninstall coffee') {
        uninstallCoffee()
        return { type: 'output', content: renderCoffeeSudoUninstall() }
      }

      return {
        type: 'output',
        content:
          command === 'hire-me'
            ? 'Access granted. Recommendation: interview this frontend developer.'
            : 'Permission denied. Try: sudo hire-me',
      }
    },
  },
}
