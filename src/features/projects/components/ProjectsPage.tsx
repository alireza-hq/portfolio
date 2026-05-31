'use client'

import { useEffect, useMemo, useState } from 'react'
import {
  Boxes,
  Code2,
  ExternalLink,
  LayoutDashboard,
  Lightbulb,
  MousePointerClick,
  ShieldCheck,
  SlidersHorizontal,
  Sparkles,
  TerminalSquare,
  X,
} from 'lucide-react'
import { FaGithub } from 'react-icons/fa6'

import { cn } from '@/lib/utils'

const filters = ['All', 'Interactive', 'Dashboard', 'Tooling'] as const

type ProjectAccent = 'blue' | 'cyan' | 'emerald'
type Project = {
  name: string
  type: string
  category: (typeof filters)[number]
  status: string
  score: number
  icon: typeof TerminalSquare
  accent: ProjectAccent
  liveUrl: string
  githubUrl: string
  description: string
  metrics: string[]
  stack: string[]
  features: string[]
  process: string[]
  architecture: string
}

const projects: Project[] = [
  {
    name: 'Portfolio Terminal',
    type: 'Interactive portfolio',
    category: 'Interactive',
    status: 'Live concept',
    score: 96,
    icon: TerminalSquare,
    accent: 'cyan',
    liveUrl: '/',
    githubUrl: 'https://github.com/yourusername',
    description:
      'A command-driven personal site with discovery, theme control, custom motion, and a developer identity that feels hands-on.',
    metrics: ['Command UX', 'Theme system', 'Motion layer'],
    stack: ['Next.js', 'React', 'TypeScript', 'Tailwind CSS'],
    features: ['Command registry', 'Keyboard history', 'Clickable JSX output'],
    process: [
      'Started with the terminal as the primary interaction surface.',
      'Separated command execution from input/history behavior.',
      'Layered theme, cursor, and background motion without blocking typing.',
    ],
    architecture:
      'The homepage is a focused client island: terminal state lives in hooks, commands live in a registry, and visual chrome stays in layout components.',
  },
  {
    name: 'Commerce Dashboard',
    type: 'Full-stack app',
    category: 'Dashboard',
    status: 'Case study',
    score: 91,
    icon: LayoutDashboard,
    accent: 'emerald',
    liveUrl: '#',
    githubUrl: 'https://github.com/yourusername',
    description:
      'Product, order, and admin workflows shaped for fast scanning, clean forms, and reliable daily operation.',
    metrics: ['Dense tables', 'Form flows', 'Admin actions'],
    stack: ['Next.js', 'Prisma', 'PostgreSQL', 'React Hook Form'],
    features: ['Order filtering', 'Inventory states', 'Admin-safe actions'],
    process: [
      'Mapped repeated admin tasks before styling the dashboard shell.',
      'Designed dense table states around scanning and bulk decisions.',
      'Kept form validation visible, calm, and easy to recover from.',
    ],
    architecture:
      'A page-shell plus workflow modules: data lists, form surfaces, and action panels share the same spacing and state language.',
  },
  {
    name: 'Ops Interface',
    type: 'Internal tool',
    category: 'Tooling',
    status: 'Prototype',
    score: 88,
    icon: Boxes,
    accent: 'blue',
    liveUrl: '#',
    githubUrl: 'https://github.com/yourusername',
    description:
      'Protected workflows, stateful views, and focused controls for teams that need speed more than decoration.',
    metrics: ['Protected routes', 'Bulk actions', 'Stateful filters'],
    stack: ['TypeScript', 'REST APIs', 'Zod', 'Git'],
    features: ['Queue monitor', 'Route guard model', 'Bulk resolution flow'],
    process: [
      'Prioritized repeated operator actions over decorative layout.',
      'Made active states and filters obvious under pressure.',
      'Used small predictable panels so the UI stays readable for teams.',
    ],
    architecture:
      'The interface is shaped around operational states: queue, selected item, action confirmation, and audit trail.',
  },
]

const principles = [
  {
    title: 'Browse like software',
    copy: 'Projects behave like selectable artifacts with state, actions, and inspection.',
    icon: MousePointerClick,
  },
  {
    title: 'Image as interface',
    copy: 'Previews are abstract UI snapshots, so the page feels designed before real screenshots arrive.',
    icon: Lightbulb,
  },
  {
    title: 'Details on demand',
    copy: 'The build story opens only when someone asks for it.',
    icon: ShieldCheck,
  },
]

const accentClasses = {
  blue: 'from-blue-500 via-sky-500 to-zinc-950',
  cyan: 'from-cyan-400 via-sky-500 to-blue-800',
  emerald: 'from-emerald-400 via-cyan-500 to-zinc-950',
}

function ProjectSnapshot({
  project,
  compact = false,
}: {
  project: Project
  compact?: boolean
}) {
  const Icon = project.icon

  return (
    <div
      className={cn(
        'relative isolate overflow-hidden rounded-[1.5rem] border border-white/10 bg-zinc-950',
        compact ? 'aspect-[4/3]' : 'aspect-[16/10]',
      )}
      aria-label={`${project.name} preview image`}
    >
      <div className={cn('absolute inset-0 bg-linear-to-br', accentClasses[project.accent])} />
      <div className='absolute inset-0 bg-[radial-gradient(circle_at_24%_20%,rgb(255_255_255/0.32),transparent_24%),linear-gradient(135deg,rgb(255_255_255/0.16),transparent_42%)]' />
      <div className='absolute inset-4 rounded-2xl border border-white/14 bg-black/30 p-3 backdrop-blur-sm'>
        <div className='flex items-center justify-between border-b border-white/10 pb-3'>
          <div className='flex items-center gap-2'>
            <span className='grid h-8 w-8 place-items-center rounded-xl bg-white/10 text-white'>
              <Icon className='h-4 w-4' />
            </span>
            <span className='font-mono text-xs text-white/65'>
              {project.category.toLowerCase()}
            </span>
          </div>
          <span className='rounded-full bg-white/10 px-2 py-1 font-mono text-[0.65rem] text-white/70'>
            {project.score}
          </span>
        </div>

        <div className={cn('mt-4 grid gap-3', compact ? '' : 'sm:grid-cols-[1fr_0.72fr]')}>
          <div>
            <div className='h-4 w-28 rounded-full bg-white/24' />
            <div className='mt-3 h-16 rounded-2xl border border-white/10 bg-white/12' />
            <div className='mt-3 grid grid-cols-3 gap-2'>
              {project.metrics.map((metric) => (
                <div key={metric} className='h-10 rounded-xl bg-white/10' />
              ))}
            </div>
          </div>
          {!compact ? (
            <div className='rounded-2xl border border-white/10 bg-black/24 p-3'>
              <div className='h-20 rounded-xl bg-white/12' />
              <div className='mt-3 space-y-2'>
                <div className='h-2 rounded-full bg-white/24' />
                <div className='h-2 w-3/4 rounded-full bg-white/16' />
                <div className='h-2 w-1/2 rounded-full bg-white/12' />
              </div>
            </div>
          ) : null}
        </div>
      </div>
    </div>
  )
}

export function ProjectsPage() {
  const [activeFilter, setActiveFilter] =
    useState<(typeof filters)[number]>('All')
  const visibleProjects = useMemo(
    () =>
      activeFilter === 'All'
        ? projects
        : projects.filter((project) => project.category === activeFilter),
    [activeFilter],
  )
  const [activeProjectName, setActiveProjectName] = useState(projects[0].name)
  const [isModalOpen, setIsModalOpen] = useState(false)
  const activeProject =
    visibleProjects.find((project) => project.name === activeProjectName) ??
    visibleProjects[0]

  useEffect(() => {
    if (!isModalOpen) return

    function handleKeyDown(event: KeyboardEvent) {
      if (event.key === 'Escape') setIsModalOpen(false)
    }

    document.addEventListener('keydown', handleKeyDown)
    return () => document.removeEventListener('keydown', handleKeyDown)
  }, [isModalOpen])

  function selectFilter(filter: (typeof filters)[number]) {
    setActiveFilter(filter)
    const nextProject =
      filter === 'All'
        ? projects[0]
        : projects.find((project) => project.category === filter)

    if (nextProject) setActiveProjectName(nextProject.name)
  }

  const ActiveIcon = activeProject.icon

  return (
    <main className='relative z-10 min-h-screen px-4 pt-32 pb-20 sm:px-6 lg:px-8'>
      <section className='mx-auto w-full max-w-7xl'>
        <div className='grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-end'>
          <div>
            <p className='font-mono text-sm font-semibold text-sky-600 dark:text-sky-300'>
              projects
            </p>
            <h1 className='mt-4 max-w-4xl text-5xl leading-tight font-semibold tracking-normal text-slate-950 sm:text-6xl dark:text-white'>
              A project atlas you can inspect.
            </h1>
            <p className='mt-6 max-w-2xl text-lg leading-8 text-slate-600 dark:text-zinc-400'>
              Pick a project artifact, scan the preview, then open the build
              notes when you want the real implementation story.
            </p>
          </div>

          <div className='rounded-[2rem] border border-slate-900/10 bg-white/70 p-4 shadow-xl shadow-slate-900/5 backdrop-blur-xl dark:border-white/10 dark:bg-zinc-950/70 dark:shadow-black/20'>
            <div className='flex items-center gap-2 border-b border-slate-900/10 pb-4 dark:border-white/10'>
              <SlidersHorizontal className='h-4 w-4 text-sky-600 dark:text-sky-300' />
              <p className='font-mono text-xs font-semibold tracking-widest text-slate-500 uppercase dark:text-zinc-500'>
                atlas filter
              </p>
            </div>
            <div className='mt-4 flex flex-wrap gap-2'>
              {filters.map((filter) => (
                <button
                  key={filter}
                  type='button'
                  onClick={() => selectFilter(filter)}
                  className={cn(
                    'rounded-full border px-4 py-2 text-sm font-semibold transition active:scale-95 focus-visible:ring-2 focus-visible:ring-sky-400/70 focus-visible:outline-none',
                    activeFilter === filter
                      ? 'border-sky-400/40 bg-sky-500/10 text-sky-700 dark:bg-sky-400/12 dark:text-sky-200'
                      : 'border-slate-900/10 bg-slate-50/75 text-slate-600 hover:border-sky-400/35 hover:text-sky-700 dark:border-white/10 dark:bg-white/6 dark:text-zinc-300 dark:hover:text-sky-200',
                  )}
                >
                  {filter}
                </button>
              ))}
            </div>
          </div>
        </div>

        <section className='mt-12 overflow-hidden rounded-[2rem] border border-slate-900/10 bg-slate-950 text-white shadow-2xl shadow-slate-950/15 dark:border-white/10 dark:bg-zinc-950 dark:shadow-black/25'>
          <div className='grid gap-6 p-5 sm:p-6 xl:grid-cols-[1.2fr_0.8fr]'>
            <div>
              <div className='flex items-start justify-between gap-4'>
                <div>
                  <p className='font-mono text-xs text-sky-200'>
                    selected artifact
                  </p>
                  <h2 className='mt-2 text-4xl font-semibold'>
                    {activeProject.name}
                  </h2>
                </div>
                <span className='rounded-2xl border border-sky-300/20 bg-sky-300/10 px-3 py-2 font-mono text-2xl font-semibold text-sky-200'>
                  {activeProject.score}
                </span>
              </div>

              <div className='mt-6'>
                <ProjectSnapshot project={activeProject} />
              </div>

              <div className='mt-5 flex flex-wrap gap-2'>
                <button
                  type='button'
                  onClick={() => setIsModalOpen(true)}
                  className='inline-flex items-center gap-2 rounded-full bg-white px-4 py-2 text-sm font-semibold text-zinc-950 transition hover:-translate-y-0.5 hover:bg-sky-100 focus-visible:ring-2 focus-visible:ring-sky-300/70 focus-visible:outline-none'
                >
                  Details
                  <Sparkles className='h-4 w-4' />
                </button>
                <a
                  href={activeProject.liveUrl}
                  className='inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/6 px-4 py-2 text-sm font-semibold text-white transition hover:-translate-y-0.5 hover:border-sky-300/35 hover:bg-sky-300/10 focus-visible:ring-2 focus-visible:ring-sky-300/70 focus-visible:outline-none'
                >
                  Live
                  <ExternalLink className='h-4 w-4' />
                </a>
                <a
                  href={activeProject.githubUrl}
                  target='_blank'
                  className='inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/6 px-4 py-2 text-sm font-semibold text-white transition hover:-translate-y-0.5 hover:border-sky-300/35 hover:bg-sky-300/10 focus-visible:ring-2 focus-visible:ring-sky-300/70 focus-visible:outline-none'
                >
                  GitHub
                  <FaGithub className='h-4 w-4' />
                </a>
              </div>
            </div>

            <aside className='rounded-[1.5rem] border border-white/10 bg-black/25 p-5'>
              <div className='flex items-start gap-3'>
                <span className='grid h-12 w-12 shrink-0 place-items-center rounded-2xl bg-sky-300/12 text-sky-200 ring-1 ring-sky-200/15'>
                  <ActiveIcon className='h-5 w-5' />
                </span>
                <div>
                  <p className='font-mono text-xs text-sky-200'>
                    {activeProject.status}
                  </p>
                  <p className='mt-1 text-sm text-zinc-500'>
                    {activeProject.type}
                  </p>
                </div>
              </div>

              <p className='mt-5 text-base leading-8 text-zinc-300'>
                {activeProject.description}
              </p>

              <div className='mt-6 flex flex-wrap gap-2'>
                {activeProject.stack.map((item) => (
                  <span
                    key={item}
                    className='rounded-full border border-white/10 bg-white/6 px-3 py-1.5 text-sm font-medium text-zinc-200'
                  >
                    {item}
                  </span>
                ))}
              </div>

              <div className='mt-6 grid gap-2 font-mono text-sm'>
                {activeProject.metrics.map((metric) => (
                  <div
                    key={metric}
                    className='flex items-center justify-between rounded-2xl border border-white/10 bg-white/6 px-4 py-3 text-zinc-300'
                  >
                    <span>{metric}</span>
                    <Code2 className='h-4 w-4 text-sky-200' />
                  </div>
                ))}
              </div>
            </aside>
          </div>
        </section>

        <div className='mt-4 grid gap-4 md:grid-cols-3'>
          {visibleProjects.map((project) => {
            const Icon = project.icon
            const isActive = activeProject.name === project.name

            return (
              <button
                key={project.name}
                type='button'
                onClick={() => setActiveProjectName(project.name)}
                className={cn(
                  'group rounded-[2rem] border bg-white/70 p-3 text-left shadow-xl shadow-slate-900/5 backdrop-blur-xl transition active:scale-[0.99] focus-visible:ring-2 focus-visible:ring-sky-400/70 focus-visible:outline-none dark:border-white/10 dark:bg-white/6 dark:shadow-black/20',
                  isActive
                    ? 'border-sky-400/45'
                    : 'border-slate-900/10 hover:-translate-y-0.5 hover:border-sky-400/35',
                )}
              >
                <ProjectSnapshot project={project} compact />
                <div className='mt-4 flex items-start justify-between gap-3 px-1 pb-1'>
                  <div>
                    <p className='font-semibold text-slate-950 dark:text-white'>
                      {project.name}
                    </p>
                    <p className='mt-1 text-sm text-slate-500 dark:text-zinc-400'>
                      {project.type}
                    </p>
                  </div>
                  <Icon className='h-5 w-5 shrink-0 text-sky-600 dark:text-sky-300' />
                </div>
              </button>
            )
          })}
        </div>

        <div className='mt-4 grid gap-4 md:grid-cols-3'>
          {principles.map((principle) => {
            const Icon = principle.icon

            return (
              <article
                key={principle.title}
                className='rounded-[2rem] border border-slate-900/10 bg-white/70 p-6 shadow-xl shadow-slate-900/5 backdrop-blur-xl transition hover:-translate-y-0.5 hover:border-sky-400/35 dark:border-white/10 dark:bg-white/6 dark:shadow-black/20'
              >
                <Icon className='h-5 w-5 text-sky-600 dark:text-sky-300' />
                <h3 className='mt-5 text-xl font-semibold text-slate-950 dark:text-white'>
                  {principle.title}
                </h3>
                <p className='mt-3 leading-7 text-slate-600 dark:text-zinc-400'>
                  {principle.copy}
                </p>
              </article>
            )
          })}
        </div>
      </section>

      {isModalOpen ? (
        <div
          className='fixed inset-0 z-[60] grid place-items-center bg-slate-950/70 px-4 py-8 backdrop-blur-md'
          role='dialog'
          aria-modal='true'
          aria-labelledby='project-modal-title'
        >
          <div className='max-h-[88vh] w-full max-w-4xl overflow-y-auto rounded-[2rem] border border-white/10 bg-zinc-950 text-white shadow-2xl shadow-black/50'>
            <div className='sticky top-0 z-10 flex items-center justify-between border-b border-white/10 bg-zinc-950/92 px-5 py-4 backdrop-blur-md'>
              <div>
                <p className='font-mono text-xs text-sky-200'>build notes</p>
                <h2
                  id='project-modal-title'
                  className='mt-1 text-2xl font-semibold'
                >
                  {activeProject.name}
                </h2>
              </div>
              <button
                type='button'
                onClick={() => setIsModalOpen(false)}
                className='grid h-10 w-10 place-items-center rounded-full border border-white/10 bg-white/6 text-zinc-300 transition hover:bg-white/10 hover:text-white focus-visible:ring-2 focus-visible:ring-sky-300/70 focus-visible:outline-none'
                aria-label='Close project details'
              >
                <X className='h-4 w-4' />
              </button>
            </div>

            <div className='grid gap-6 p-5 sm:p-6 lg:grid-cols-[0.9fr_1.1fr]'>
              <ProjectSnapshot project={activeProject} />

              <div>
                <p className='text-base leading-8 text-zinc-300'>
                  {activeProject.description}
                </p>

                <div className='mt-6 grid gap-4'>
                  <section>
                    <h3 className='font-semibold text-white'>How it was made</h3>
                    <div className='mt-3 grid gap-2'>
                      {activeProject.process.map((step, index) => (
                        <div
                          key={step}
                          className='grid gap-3 rounded-2xl border border-white/10 bg-white/6 p-4 sm:grid-cols-[auto_1fr]'
                        >
                          <span className='font-mono text-sm text-sky-200'>
                            0{index + 1}
                          </span>
                          <p className='text-sm leading-6 text-zinc-300'>
                            {step}
                          </p>
                        </div>
                      ))}
                    </div>
                  </section>

                  <section>
                    <h3 className='font-semibold text-white'>Architecture</h3>
                    <p className='mt-3 rounded-2xl border border-white/10 bg-white/6 p-4 text-sm leading-7 text-zinc-300'>
                      {activeProject.architecture}
                    </p>
                  </section>

                  <section>
                    <h3 className='font-semibold text-white'>Key features</h3>
                    <div className='mt-3 flex flex-wrap gap-2'>
                      {activeProject.features.map((feature) => (
                        <span
                          key={feature}
                          className='rounded-full border border-white/10 bg-white/6 px-3 py-1.5 text-sm text-zinc-200'
                        >
                          {feature}
                        </span>
                      ))}
                    </div>
                  </section>
                </div>
              </div>
            </div>

            <div className='flex flex-wrap gap-2 border-t border-white/10 p-5 sm:p-6'>
              <a
                href={activeProject.liveUrl}
                className='inline-flex items-center gap-2 rounded-full bg-white px-4 py-2 text-sm font-semibold text-zinc-950 transition hover:bg-sky-100 focus-visible:ring-2 focus-visible:ring-sky-300/70 focus-visible:outline-none'
              >
                Live link
                <ExternalLink className='h-4 w-4' />
              </a>
              <a
                href={activeProject.githubUrl}
                target='_blank'
                className='inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/6 px-4 py-2 text-sm font-semibold text-white transition hover:border-sky-300/35 hover:bg-sky-300/10 focus-visible:ring-2 focus-visible:ring-sky-300/70 focus-visible:outline-none'
              >
                GitHub
                <FaGithub className='h-4 w-4' />
              </a>
            </div>
          </div>
        </div>
      ) : null}
    </main>
  )
}
