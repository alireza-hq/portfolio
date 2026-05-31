import { developerProfile, socials } from '@/data/socials'
import { projects } from '@/data/projects'
import { skillGroups, toolbox } from '@/data/skills'
import { TerminalCommand, CommandContext, CommandResult } from '../types'

const cardClass =
  'rounded-2xl border border-slate-900/10 bg-white/70 p-4 shadow-sm shadow-slate-900/5 dark:border-white/10 dark:bg-white/6'
const chipClass =
  'rounded-full border border-slate-900/10 bg-slate-50/90 px-2.5 py-1 text-xs font-medium text-slate-700 dark:border-white/10 dark:bg-zinc-950/45 dark:text-zinc-300'
const linkClass =
  'font-semibold text-sky-600 hover:underline focus-visible:ring-2 focus-visible:ring-sky-400/60 focus-visible:outline-none dark:text-sky-400'

const helpSections = [
  { title: 'Explore', commands: ['about', 'whoami', 'skills', 'projects', 'journey'] },
  { title: 'Projects', commands: ['project [name]', 'open [project]'] },
  { title: 'System', commands: ['currently', 'setup', 'uses', 'date', 'theme'] },
  { title: 'Contact', commands: ['contact', 'resume', 'sudo hire-me', 'secret'] },
] as const

function findProject(args: string[]) {
  const query = args.join(' ').toLowerCase()

  return projects.find((project) => {
    return (
      project.slug.includes(query.replace(/\s+/g, '-')) ||
      project.name.toLowerCase().includes(query)
    )
  })
}

function projectCard(project: (typeof projects)[number]) {
  return (
    <div className={cardClass}>
      <div className='flex flex-wrap items-start justify-between gap-3'>
        <div>
          <p className='text-sm font-semibold text-sky-600 dark:text-sky-300'>
            {project.type}
          </p>
          <h3 className='mt-1 text-lg font-semibold text-slate-950 dark:text-white'>
            {project.name}
          </h3>
        </div>
        <span className='rounded-full bg-sky-500/10 px-3 py-1 font-mono text-xs text-sky-700 dark:text-sky-200'>
          {project.status}
        </span>
      </div>
      <p className='mt-3 leading-7 text-slate-600 dark:text-zinc-400'>
        {project.description}
      </p>
      <div className='mt-4 flex flex-wrap gap-2'>
        {project.stack.map((item) => (
          <span key={item} className={chipClass}>
            {item}
          </span>
        ))}
      </div>
      <div className='mt-4 flex flex-wrap gap-3 text-sm'>
        <a className={linkClass} href='/projects'>
          Inspect project
        </a>
        <a className={linkClass} href={project.links.github} target='_blank'>
          GitHub
        </a>
      </div>
    </div>
  )
}

export const commandRegistry: Record<string, TerminalCommand> = {
  help: {
    name: 'help',
    description: 'Display categorized commands',
    execute: () => ({
      type: 'output',
      content: (
        <div className='grid gap-3 sm:grid-cols-2'>
          {helpSections.map((section) => (
            <div key={section.title} className={cardClass}>
              <p className='font-semibold text-slate-950 dark:text-white'>
                {section.title}
              </p>
              <div className='mt-3 flex flex-wrap gap-2'>
                {section.commands.map((command) => (
                  <span key={command} className={chipClass}>
                    {command}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      ),
    }),
  },

  about: {
    name: 'about',
    description: 'Show compact profile card',
    execute: () => ({
      type: 'output',
      content: (
        <div className={cardClass}>
          <p className='text-sm font-semibold text-sky-600 dark:text-sky-300'>
            {developerProfile.role}
          </p>
          <h3 className='mt-2 text-xl font-semibold text-slate-950 dark:text-white'>
            {developerProfile.name}
          </h3>
          <p className='mt-3 leading-7 text-slate-600 dark:text-zinc-400'>
            I build fast, app-like portfolio and product interfaces with React,
            Next.js, TypeScript, and calm interaction design.
          </p>
        </div>
      ),
    }),
  },

  whoami: {
    name: 'whoami',
    description: 'Display terminal identity card',
    execute: () => ({
      type: 'output',
      content: (
        <div className={cardClass}>
          <p className='font-mono text-sm text-sky-600 dark:text-sky-300'>
            user: alireza
          </p>
          <p className='mt-2 text-slate-600 dark:text-zinc-400'>
            frontend-minded builder, terminal enjoyer, interface detail person.
          </p>
        </div>
      ),
    }),
  },

  skills: {
    name: 'skills',
    description: 'Render skill categories',
    execute: () => ({
      type: 'output',
      content: (
        <div className='grid gap-3 sm:grid-cols-3'>
          {skillGroups.map((group) => (
            <div key={group.title} className={cardClass}>
              <p className='font-semibold text-slate-950 dark:text-white'>
                {group.title}
              </p>
              <p className='mt-2 text-sm leading-6 text-slate-500 dark:text-zinc-400'>
                {group.description}
              </p>
              <div className='mt-3 flex flex-wrap gap-2'>
                {group.items.slice(0, 4).map((item) => (
                  <span key={item} className={chipClass}>
                    {item}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      ),
    }),
  },

  projects: {
    name: 'projects',
    description: 'Render project list',
    execute: () => ({
      type: 'output',
      content: (
        <div className='space-y-3'>
          {projects.map((project) => projectCard(project))}
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
          content: "Project not found. Try 'projects' to list them.",
        }
      }

      return {
        type: 'output',
        content: (
          <div className={cardClass}>
            <h3 className='text-lg font-semibold text-slate-950 dark:text-white'>
              {project.name}
            </h3>
            <p className='mt-2 leading-7 text-slate-600 dark:text-zinc-400'>
              {project.description}
            </p>
            <div className='mt-4 grid gap-2 sm:grid-cols-2'>
              {project.features.map((feature) => (
                <span key={feature} className={chipClass}>
                  {feature}
                </span>
              ))}
              {project.challenges.map((challenge) => (
                <span key={challenge} className={chipClass}>
                  {challenge}
                </span>
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
      const target = args[0]?.toLowerCase()
      const project = findProject(args)

      if (project) return { type: 'external', url: project.links.demo }
      if (target === 'portfolio' || target === 'home') {
        return { type: 'external', url: '/' }
      }
      if (target === 'projects') return { type: 'external', url: '/projects' }
      if (target === 'skills') return { type: 'external', url: '/skills' }
      if (target === 'contact') return { type: 'external', url: '/contact' }

      return {
        type: 'output',
        content: "Try 'open projects', 'open skills', or 'open portfolio'.",
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
          {['Foundations: HTML, CSS, JavaScript', 'React + TypeScript product UI', 'Next.js, forms, data, and interactive systems'].map(
            (item, index) => (
              <div key={item} className={cardClass}>
                <span className='font-mono text-sm text-sky-600 dark:text-sky-300'>
                  0{index + 1}
                </span>
                <p className='mt-1 text-slate-700 dark:text-zinc-300'>{item}</p>
              </div>
            ),
          )}
        </div>
      ),
    }),
  },

  currently: {
    name: 'currently',
    description: 'Show current focus',
    execute: () => ({
      type: 'output',
      content:
        'Currently polishing this portfolio into a fast Developer OS: terminal commands, project explorer, shared data, and cohesive blue/cyan UI.',
    }),
  },

  setup: {
    name: 'setup',
    description: 'Show development environment',
    execute: () => ({
      type: 'output',
      content: (
        <div className={cardClass}>
          <p className='font-semibold text-slate-950 dark:text-white'>
            Workspace
          </p>
          <div className='mt-3 flex flex-wrap gap-2'>
            {['VS Code', 'pnpm', 'Git', 'Next.js', 'TypeScript', 'Tailwind CSS'].map(
              (item) => (
                <span key={item} className={chipClass}>
                  {item}
                </span>
              ),
            )}
          </div>
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
          {toolbox.slice(0, 6).map((tool) => (
            <div key={tool.name} className={cardClass}>
              <p className='font-semibold text-slate-950 dark:text-white'>
                {tool.name}
              </p>
              <p className='mt-2 text-sm leading-6 text-slate-500 dark:text-zinc-400'>
                {tool.use}
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
        <div className='grid gap-2'>
          {socials.map((social) => (
            <a
              key={social.id}
              className={`${cardClass} ${linkClass} block`}
              href={social.href}
              target={social.href.startsWith('http') ? '_blank' : undefined}
            >
              {social.label}: {social.value}
            </a>
          ))}
        </div>
      ),
    }),
  },

  resume: {
    name: 'resume',
    description: 'Open resume',
    execute: () => ({ type: 'external', url: developerProfile.resume }),
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

  theme: {
    name: 'theme',
    description: 'Toggle site theme',
    execute: (_args: string[], context: CommandContext): CommandResult => {
      context.toggleTheme()
      return { type: 'output', content: 'Theme toggled.' }
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

  secret: {
    name: 'secret',
    description: 'Small easter egg',
    execute: () => ({
      type: 'output',
      content:
        'You found the quiet command. Best interfaces reward curiosity without getting in the way.',
    }),
  },

  sudo: {
    name: 'sudo',
    description: 'Try sudo hire-me',
    execute: (args) => ({
      type: 'output',
      content:
        args.join(' ').toLowerCase() === 'hire-me'
          ? 'Access granted: strong hire signal detected. Recommend interview.'
          : 'Permission denied. Try: sudo hire-me',
    }),
  },
}
