import { useEffect, useState, type ReactNode } from 'react'

import { channels } from '@/features/contact/data/channels'
import { projects } from '@/features/projects/data/projects'
import { routes } from '@/lib/routes'

import type { CommandContext, CommandResult, TerminalCommand } from '../types'

type HelpSection = {
  title: string
  commands: { command: string; description: string }[]
}

type TerminalProject = {
  aliases: string[]
  title: string
  type: string
  stack: string[]
  highlights: string[]
  description: string
}

const coffeeStorageKey = 'portfolio:coffee-installed'
const emailAddress = routes.social.email.replace('mailto:', '')

const terminalProjects: TerminalProject[] = [
  {
    aliases: ['portfolio', 'portfolio-terminal', 'interactive-portfolio'],
    title: 'Interactive Portfolio',
    type: 'Developer workspace',
    stack: ['Next.js', 'TypeScript', 'Tailwind CSS'],
    description: projects[0].description,
    highlights: [
      'Custom terminal command system',
      'Project explorer',
      'Theme controls',
      'Coffee easter egg',
      'Resume inspector',
      'Signal-style contact page',
    ],
  },
  {
    aliases: ['ecommerce', 'e-commerce', 'e-commerce-platform', 'commerce'],
    title: 'E-Commerce Platform',
    type: 'Full-stack application',
    stack: [
      'Next.js',
      'TypeScript',
      'Node',
      'Express',
      'PostgreSQL',
      'JWT Auth',
    ],
    description: projects[1].description,
    highlights: [
      'Authentication',
      'Product management',
      'Cart and checkout flow',
      'Order workflows',
      'Admin dashboard',
      'Form validation',
    ],
  },
  {
    aliases: ['dashboard', 'internal-dashboard', 'operations-dashboard'],
    title: 'Internal Operations Dashboard',
    type: 'Production internal dashboard',
    stack: [
      'Next.js',
      'TypeScript',
      'Node',
      'Express',
      'PostgreSQL',
      'LDAP Auth',
      'JWT Auth',
    ],
    description:
      'Internal dashboard for authentication, tickets, forms, contacts, monitoring, and admin workflows.',
    highlights: [
      'LDAP login with JWT authorization',
      'Ticket management',
      'Roles and admin controls',
      'Forms and contact management',
      'Monitoring tools',
    ],
  },
]

const helpSections: HelpSection[] = [
  {
    title: 'Core',
    commands: [
      { command: 'help, ?', description: 'Show available commands.' },
      { command: 'about', description: 'Show a compact developer profile.' },
      { command: 'whoami', description: 'Print the human behind the prompt.' },
      { command: 'skills', description: 'Inspect the working stack.' },
      { command: 'projects', description: 'List featured project systems.' },
      { command: 'journey', description: 'Show the short build timeline.' },
      { command: 'currently', description: 'Show the active work queue.' },
    ],
  },
  {
    title: 'Projects',
    commands: [
      { command: 'project portfolio', description: 'Inspect the portfolio.' },
      { command: 'project ecommerce', description: 'Inspect ecommerce.' },
      { command: 'project dashboard', description: 'Inspect the dashboard.' },
      { command: 'open portfolio', description: 'Open the project atlas.' },
      { command: 'open ecommerce', description: 'Open the project atlas.' },
      { command: 'open dashboard', description: 'Open the project atlas.' },
    ],
  },
  {
    title: 'Links',
    commands: [
      { command: 'contact', description: 'Show every signal route.' },
      { command: 'resume', description: 'Open the resume inspector.' },
      { command: 'github', description: 'Open the GitHub profile.' },
      { command: 'linkedin', description: 'Open the LinkedIn profile.' },
      { command: 'email', description: 'Open a new email draft.' },
    ],
  },
  {
    title: 'System',
    commands: [
      { command: 'date', description: 'Print local date and time.' },
      { command: 'theme', description: 'Toggle the workspace theme.' },
      { command: 'clear', description: 'Clear terminal output.' },
      { command: 'cls', description: 'Alias for clear.' },
    ],
  },
]

export const terminalCompletions = [
  '?',
  'about',
  'clear',
  'cls',
  'contact',
  'currently',
  'date',
  'email',
  'github',
  'help',
  'journey',
  'linkedin',
  'open dashboard',
  'open ecommerce',
  'open portfolio',
  'project dashboard',
  'project ecommerce',
  'project portfolio',
  'projects',
  'resume',
  'setup',
  'skills',
  'theme',
  'uses',
  'whoami',
]

const cardClass =
  'rounded-xl border border-zinc-900/10 bg-white/65 p-4 dark:border-white/10 dark:bg-white/5'
const labelClass =
  'font-mono text-xs font-semibold text-sky-600 dark:text-sky-300'
const mutedClass = 'text-zinc-600 dark:text-zinc-400'
const linkClass =
  'font-semibold text-sky-600 hover:underline focus-visible:ring-1 focus-visible:ring-sky-400/60 focus-visible:outline-none dark:text-sky-400'

function normalizeArgs(args: string[]) {
  return args.join(' ').trim().toLowerCase()
}

function findTerminalProject(args: string[]) {
  const query = normalizeArgs(args).replace(/\s+/g, '-')

  return terminalProjects.find((project) => project.aliases.includes(query))
}

function DefinitionList({
  rows,
}: {
  rows: [label: string, value: ReactNode][]
}) {
  return (
    <div className='grid gap-2 text-sm'>
      {rows.map(([label, value]) => (
        <div key={label} className='grid gap-1 sm:grid-cols-[8.5rem_1fr]'>
          <span className={labelClass}>{label}</span>
          <span className={mutedClass}>{value}</span>
        </div>
      ))}
    </div>
  )
}

function BulletList({ items }: { items: string[] }) {
  return (
    <div className='grid gap-1.5 text-sm'>
      {items.map((item) => (
        <p key={item} className='flex gap-2'>
          <span className='text-sky-600 dark:text-sky-300'>-</span>
          <span className={mutedClass}>{item}</span>
        </p>
      ))}
    </div>
  )
}

function renderHelp() {
  return (
    <div className='grid gap-5'>
      <p className={mutedClass}>
        Available commands. Press Tab to autocomplete.
      </p>
      {helpSections.map((section) => (
        <section key={section.title} className='grid gap-2'>
          <p className={labelClass}>{section.title}</p>
          <div className='grid gap-1'>
            {section.commands.map((item) => (
              <div
                key={item.command}
                className='grid gap-1 text-sm sm:grid-cols-[10rem_1fr]'
              >
                <code className='text-zinc-900 dark:text-zinc-100'>
                  {item.command}
                </code>
                <span className={mutedClass}>{item.description}</span>
              </div>
            ))}
          </div>
        </section>
      ))}
    </div>
  )
}

function renderProject(project: TerminalProject) {
  return (
    <div className={cardClass}>
      <p className={labelClass}>{project.type}</p>
      <h3 className='mt-1 text-lg font-semibold text-zinc-950 dark:text-white'>
        {project.title}
      </h3>
      <p className={`mt-2 text-sm leading-6 ${mutedClass}`}>
        {project.description}
      </p>
      <div className='mt-4'>
        <DefinitionList rows={[['Stack', project.stack.join(', ')]]} />
      </div>
      <p className={`mt-4 ${labelClass}`}>Highlights</p>
      <div className='mt-2'>
        <BulletList items={project.highlights} />
      </div>
    </div>
  )
}

function renderProjects() {
  return (
    <div className='grid gap-3'>
      <p className={labelClass}>Projects</p>
      {terminalProjects.map((project, index) => (
        <button
          key={project.aliases[0]}
          type='button'
          onClick={() => window.location.assign(routes.projects)}
          className={`${cardClass} group text-left transition hover:-translate-y-0.5 hover:border-sky-400/40 focus-visible:ring-1 focus-visible:ring-sky-400/70 focus-visible:outline-none`}
        >
          <p className='font-mono text-xs text-sky-600 dark:text-sky-300'>
            {index + 1}. {project.type}
          </p>
          <p className='mt-1 font-semibold text-zinc-950 group-hover:text-sky-700 dark:text-white dark:group-hover:text-sky-200'>
            {project.title}
          </p>
          <p className={`mt-2 text-sm leading-6 ${mutedClass}`}>
            {project.description}
          </p>
        </button>
      ))}
      <p className={`text-sm ${mutedClass}`}>
        Run <code>&apos;project portfolio&apos;</code>,{' '}
        <code>&apos;project ecommerce&apos;</code>, or{' '}
        <code>&apos;project dashboard&apos;</code> for details.
      </p>
    </div>
  )
}

function renderContact() {
  return (
    <div className='grid gap-2'>
      {channels.map((channel) => {
        const href =
          channel.label === 'Email' ? routes.social.email : channel.href

        return (
          <a
            key={channel.label}
            href={href}
            target={href.startsWith('http') ? '_blank' : undefined}
            rel={href.startsWith('http') ? 'noreferrer' : undefined}
            className={`${cardClass} group flex items-center justify-between gap-4 transition hover:border-sky-400/40 focus-visible:ring-1 focus-visible:ring-sky-400/70 focus-visible:outline-none`}
          >
            <span>
              <span className={labelClass}>{channel.command}</span>
              <span className='mt-1 block font-semibold text-zinc-950 group-hover:text-sky-700 dark:text-white dark:group-hover:text-sky-200'>
                {channel.label}
              </span>
            </span>
            <span className={`text-xs ${mutedClass}`}>open</span>
          </a>
        )
      })}
      <a href={routes.contact} className={linkClass}>
        Open portfolio contact page
      </a>
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
  window.localStorage.setItem(coffeeStorageKey, 'true')
}

function uninstallCoffee() {
  window.localStorage.removeItem(coffeeStorageKey)
}

function CoffeeProgress() {
  const [progress, setProgress] = useState(0)

  useEffect(() => {
    const startedAt = performance.now()
    let frame = 0

    function update(now: number) {
      const nextProgress = Math.min(
        100,
        Math.round(((now - startedAt) / 5000) * 100),
      )
      setProgress(nextProgress)
      if (nextProgress < 100) frame = requestAnimationFrame(update)
    }

    frame = requestAnimationFrame(update)
    return () => cancelAnimationFrame(frame)
  }, [])

  return (
    <div className='grid gap-1 font-mono text-sm text-zinc-700 dark:text-zinc-300'>
      <p>Installing coffee... {progress}%</p>
      <span className='relative inline-block'>
        <span className='text-zinc-300 dark:text-zinc-700'>
          ████████████████
        </span>
        <span
          className='absolute inset-0 overflow-hidden text-sky-600 dark:text-sky-300'
          style={{ clipPath: `inset(0 ${100 - progress}% 0 0)` }}
        >
          ████████████████
        </span>
      </span>
    </div>
  )
}

function renderCoffeeInstall() {
  return (
    <div className='grid gap-2'>
      <CoffeeProgress />
      <DefinitionList
        rows={[
          ['Status', 'Installed'],
          ['Version', 'Fresh'],
          ['Role', 'Runtime dependency for late-night debugging sessions.'],
          [
            'Warning',
            'Removing this package may reduce developer performance.',
          ],
        ]}
      />
    </div>
  )
}

function renderCoffeeActive() {
  return (
    <div className='grid gap-2'>
      <p className='font-semibold text-zinc-950 dark:text-white'>
        Coffee is already installed.
      </p>
      <DefinitionList
        rows={[
          ['Version', 'Fresh'],
          ['Status', 'Active'],
          ['Tip', 'Stay hydrated too.'],
        ]}
      />
    </div>
  )
}

const commandRegistry: Record<string, TerminalCommand> = {
  help: {
    name: 'help',
    description: 'Show available commands',
    execute: () => ({ type: 'output', content: renderHelp() }),
  },
  '?': {
    name: '?',
    description: 'Alias for help',
    execute: () => ({ type: 'output', content: renderHelp() }),
  },
  about: {
    name: 'about',
    description: 'Show a compact developer profile',
    execute: () => ({
      type: 'output',
      content: (
        <div className={cardClass}>
          <DefinitionList
            rows={[
              ['Name', 'Alireza Haghighi'],
              ['Role', 'Software Developer'],
              ['Focus', 'React, Next.js, TypeScript'],
              [
                'Current direction',
                'Building practical web applications with clean structure and maintainable UI.',
              ],
            ]}
          />
        </div>
      ),
    }),
  },
  whoami: {
    name: 'whoami',
    description: 'Show the human behind the prompt',
    execute: () => ({
      type: 'output',
      content: (
        <div className='grid gap-3'>
          <p className='font-semibold text-zinc-950 dark:text-white'>alireza</p>
          <BulletList
            items={[
              'Software developer who enjoys building things.',
              'Frontend is the main focus.',
              'Architecture and maintainability are the obsession.',
            ]}
          />
        </div>
      ),
    }),
  },
  skills: {
    name: 'skills',
    description: 'Inspect the working stack',
    execute: () => ({
      type: 'output',
      content: (
        <div className='grid gap-4'>
          <DefinitionList
            rows={[
              ['Frontend', 'React, Next.js, TypeScript, Tailwind CSS'],
              ['Backend-adjacent', 'Node, Express, PostgreSQL, JWT Auth'],
              [
                'Workflow',
                'Git, GitHub, Docker, Vercel, Postman, ChatGPT, Codex',
              ],
            ]}
          />
          <p className={`text-sm ${mutedClass}`}>
            Run <code>&apos;projects&apos;</code> to see where these tools are
            used.
          </p>
        </div>
      ),
    }),
  },
  projects: {
    name: 'projects',
    description: 'List featured project systems',
    execute: () => ({ type: 'output', content: renderProjects() }),
  },
  project: {
    name: 'project',
    description: 'Inspect one project',
    execute: (args) => {
      const project = findTerminalProject(args)

      return project
        ? { type: 'output', content: renderProject(project) }
        : {
            type: 'output',
            content:
              "Project not found. Try 'project portfolio', 'project ecommerce', or 'project dashboard'.",
          }
    },
  },
  open: {
    name: 'open',
    description: 'Open a project in the atlas',
    execute: (args) => {
      const project = findTerminalProject(args)

      if (project) {
        return {
          type: 'external',
          url: routes.projects,
          message: `Opening ${project.title} in the project atlas...`,
        }
      }

      return {
        type: 'output',
        content:
          "Project not found. Try 'open portfolio', 'open ecommerce', or 'open dashboard'.",
      }
    },
  },
  journey: {
    name: 'journey',
    description: 'Show the short build timeline',
    execute: () => ({
      type: 'output',
      content: (
        <DefinitionList
          rows={[
            [
              '2022',
              'Started deeper software development with Python and Django.',
            ],
            [
              '2023',
              'Built real web apps and learned from messy architecture.',
            ],
            [
              '2024',
              'Started Computer Engineering and built the first internal dashboard.',
            ],
            [
              '2025',
              'Moved deeper into JavaScript, TypeScript, React, and the PERN stack.',
            ],
            [
              '2026',
              'Focused on Next.js, frontend architecture, and production-style projects.',
            ],
          ]}
        />
      ),
    }),
  },
  currently: {
    name: 'currently',
    description: 'Show the active work queue',
    execute: () => ({
      type: 'output',
      content: (
        <div className='grid gap-4'>
          {[
            [
              'Learning',
              [
                'Docker',
                'Advanced Git',
                'Better frontend architecture',
                'CI/CD basics',
              ],
            ],
            [
              'Improving',
              [
                'Clean code',
                'UI polish',
                'Project structure',
                'Real-world product thinking',
              ],
            ],
          ].map(([title, items]) => (
            <section key={title as string}>
              <p className={labelClass}>{title as string}</p>
              <div className='mt-2'>
                <BulletList items={items as string[]} />
              </div>
            </section>
          ))}
        </div>
      ),
    }),
  },
  setup: {
    name: 'setup',
    description: 'Show the development environment',
    execute: () => ({
      type: 'output',
      content: (
        <DefinitionList
          rows={[
            ['Editor', 'VS Code'],
            ['Framework', 'Next.js'],
            ['Language', 'TypeScript'],
            ['Styling', 'Tailwind CSS'],
            ['Package Manager', 'pnpm'],
            ['Version Control', 'Git + GitHub'],
            ['AI tools', 'ChatGPT, Codex, Copilot'],
          ]}
        />
      ),
    }),
  },
  uses: {
    name: 'uses',
    description: 'Show the daily workflow',
    execute: () => ({
      type: 'output',
      content: (
        <div>
          <p className={labelClass}>Daily workflow</p>
          <div className='mt-2'>
            <BulletList
              items={[
                'Plan structure before building',
                'Build in small commits',
                'Use AI tools for debugging, refactoring, and exploring tradeoffs',
                'Keep UI fast, clean, and usable',
              ]}
            />
          </div>
        </div>
      ),
    }),
  },
  contact: {
    name: 'contact',
    description: 'Show every signal route',
    execute: () => ({ type: 'output', content: renderContact() }),
  },
  resume: {
    name: 'resume',
    description: 'Open the resume inspector',
    execute: () => ({
      type: 'external',
      url: routes.resume,
      message: 'Opening resume inspector...',
    }),
  },
  github: {
    name: 'github',
    description: 'Open the GitHub profile',
    execute: () => ({
      type: 'external',
      url: routes.social.github,
      message: 'Opening GitHub profile...',
    }),
  },
  linkedin: {
    name: 'linkedin',
    description: 'Open the LinkedIn profile',
    execute: () => ({
      type: 'external',
      url: routes.social.linkedin,
      message: 'Opening LinkedIn profile...',
    }),
  },
  email: {
    name: 'email',
    description: 'Open a new email draft',
    execute: () => ({
      type: 'external',
      url: routes.social.email,
      message: `Opening email draft for ${emailAddress}...`,
    }),
  },
  date: {
    name: 'date',
    description: 'Print local date and time',
    execute: () => ({
      type: 'output',
      content: new Intl.DateTimeFormat(undefined, {
        dateStyle: 'full',
        timeStyle: 'medium',
      }).format(new Date()),
    }),
  },
  theme: {
    name: 'theme',
    description: 'Toggle the workspace theme',
    execute: (_args: string[], context: CommandContext): CommandResult => {
      context.toggleTheme()
      return { type: 'output', content: 'Theme switched.' }
    },
  },
  clear: {
    name: 'clear',
    description: 'Clear terminal output',
    execute: () => ({ type: 'clear' }),
  },
  cls: {
    name: 'cls',
    description: 'Alias for clear',
    execute: () => ({ type: 'clear' }),
  },
  secret: {
    name: 'secret',
    description: 'Hidden command',
    hidden: true,
    execute: () => ({
      type: 'output',
      content: (
        <div className='grid gap-1'>
          <p>You found nothing.</p>
          <p className={mutedClass}>Which means you found something.</p>
        </div>
      ),
    }),
  },
  coffee: {
    name: 'coffee',
    description: 'Hidden runtime dependency',
    hidden: true,
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
    hidden: true,
    execute: (args) =>
      normalizeArgs(args) === 'coffee'
        ? {
            type: 'output',
            content: (
              <div className='grid gap-1'>
                <p className='font-semibold text-red-500 dark:text-red-400'>
                  Error:
                </p>
                <p className={mutedClass}>
                  Package &quot;coffee&quot; is marked as a critical dependency
                  and cannot be removed.
                </p>
              </div>
            ),
          }
        : { type: 'output', content: 'Nothing to uninstall.' },
  },
  sudo: {
    name: 'sudo',
    description: 'Hidden elevated commands',
    hidden: true,
    execute: (args) => {
      const command = normalizeArgs(args)

      if (command === 'uninstall coffee') {
        uninstallCoffee()
        return {
          type: 'output',
          content: (
            <div className='grid gap-2'>
              <p className='font-semibold text-zinc-950 dark:text-white'>
                Coffee removed.
              </p>
              <DefinitionList
                rows={[['Warning', 'System stability may be affected.']]}
              />
            </div>
          ),
        }
      }

      if (command === 'hire-me') {
        return {
          type: 'output',
          content: (
            <div className='grid gap-4'>
              <p className='font-semibold text-emerald-600 dark:text-emerald-400'>
                Permission granted.
              </p>
              <section>
                <p className={labelClass}>Candidate summary</p>
                <div className='mt-2'>
                  <BulletList
                    items={[
                      'Real production experience',
                      'Built and maintained a production internal dashboard',
                      'Strong frontend focus',
                      'Comfortable across backend-adjacent work',
                      'Learns fast and cares about maintainable code',
                    ]}
                  />
                </div>
              </section>
              <DefinitionList
                rows={[['Recommendation', 'Proceed to interview. 🗿']]}
              />
            </div>
          ),
        }
      }

      return { type: 'output', content: 'Permission denied.' }
    },
  },
}

export { commandRegistry }
