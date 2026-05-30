import { TerminalCommand, CommandContext, CommandResult } from '../types'

const developer = {
  name: 'Alireza',
  role: 'React / Next.js Developer',
  email: 'your.email@example.com',
  github: 'https://github.com/yourusername',
  linkedin: 'https://linkedin.com/in/yourusername',
  resume: '/resume.pdf',
}

export const commandRegistry: Record<string, TerminalCommand> = {
  help: {
    name: 'help',
    description: 'Display all available commands',
    execute: () => ({
      type: 'output',
      content: (
        <div className='space-y-2'>
          <p className='text-slate-500 dark:text-zinc-400'>
            Available commands:
          </p>
          <div className='grid gap-1'>
            {Object.values(commandRegistry).map((command) => (
              <div key={command.name} className='flex gap-3'>
                <span className='min-w-20 font-semibold text-violet-600 dark:text-violet-400'>
                  {command.name}
                </span>
                <span className='text-slate-500 dark:text-zinc-400'>
                  {command.description}
                </span>
              </div>
            ))}
          </div>
        </div>
      ),
    }),
  },

  about: {
    name: 'about',
    description: 'Show information about the developer',
    execute: () => ({
      type: 'output',
      content: (
        <p>
          I&apos;m{' '}
          <span className='text-sky-600 dark:text-sky-400'>
            {developer.name}
          </span>
          , a frontend developer focused on building fast, clean, modern web
          apps with React, Next.js, TypeScript, and polished UI.
        </p>
      ),
    }),
  },

  skills: {
    name: 'skills',
    description: 'Display tech stack and skills',
    execute: () => ({
      type: 'output',
      content: (
        <div className='space-y-2'>
          <p className='text-slate-700 dark:text-zinc-300'>Tech stack:</p>
          <div className='flex flex-wrap gap-2'>
            {[
              'React',
              'Next.js',
              'TypeScript',
              'Tailwind CSS',
              'Node.js',
              'Express',
              'PostgreSQL',
              'Prisma',
              'Git',
              'Docker',
            ].map((skill) => (
              <span
                key={skill}
                className='rounded-md border border-slate-200 bg-slate-50 px-2 py-1 text-xs text-slate-700 dark:border-zinc-700 dark:bg-zinc-900 dark:text-zinc-300'
              >
                {skill}
              </span>
            ))}
          </div>
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
          {[
            {
              name: 'E-Commerce Platform',
              description:
                'Full-stack shopping platform with product management and admin panel.',
            },
            {
              name: 'Internal Dashboard',
              description:
                'Clean admin dashboard with data tables, filters, and protected routes.',
            },
            {
              name: 'Portfolio Terminal',
              description:
                'Interactive command-line inspired portfolio experience.',
            },
          ].map((project) => (
            <div key={project.name}>
              <p className='font-semibold text-sky-600 dark:text-sky-400'>
                {project.name}
              </p>
              <p className='text-slate-500 dark:text-zinc-400'>
                {project.description}
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
            <a
              className='text-sky-600 hover:underline dark:text-sky-400'
              href={developer.github}
              target='_blank'
            >
              {developer.github}
            </a>
          </p>
          <p>
            LinkedIn:{' '}
            <a
              className='text-sky-600 hover:underline dark:text-sky-400'
              href={developer.linkedin}
              target='_blank'
            >
              {developer.linkedin}
            </a>
          </p>
          <p>
            Email:{' '}
            <a
              className='text-sky-600 hover:underline dark:text-sky-400'
              href={`mailto:${developer.email}`}
            >
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
    execute: () => ({
      type: 'external',
      url: developer.resume,
    }),
  },

  clear: {
    name: 'clear',
    description: 'Clear terminal output',
    execute: () => ({ type: 'clear' }),
  },

  theme: {
    name: 'theme',
    description: 'Toggle site theme',
    execute: (_args: string[], context: CommandContext): CommandResult => {
      context.toggleTheme()

      return {
        type: 'output',
        content: 'Site theme toggled.',
      }
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

  whoami: {
    name: 'whoami',
    description: 'Display short intro',
    execute: () => ({
      type: 'output',
      content: `${developer.name} - ${developer.role}`,
    }),
  },
}
