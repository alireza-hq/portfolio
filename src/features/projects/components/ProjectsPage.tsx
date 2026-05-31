'use client'

import { useMemo, useState } from 'react'
import {
  ArrowUpRight,
  Boxes,
  Gauge,
  LayoutDashboard,
  MousePointerClick,
  ShieldCheck,
  SlidersHorizontal,
  Sparkles,
  TerminalSquare,
} from 'lucide-react'

import { cn } from '@/lib/utils'
import { projectFilters, projects } from '@/data/projects'

const projectIcons = {
  'Portfolio Terminal': TerminalSquare,
  'Commerce Dashboard': LayoutDashboard,
  'Ops Interface': Boxes,
}

const principles = [
  {
    title: 'Feels usable fast',
    copy: 'The first screen gives people something to do, not just something to read.',
    icon: MousePointerClick,
  },
  {
    title: 'Built for real content',
    copy: 'Cards, controls, and tables survive imperfect data and long labels.',
    icon: ShieldCheck,
  },
  {
    title: 'Polished where it counts',
    copy: 'Motion supports interaction instead of becoming visual noise.',
    icon: Sparkles,
  },
]

export function ProjectsPage() {
  const [activeFilter, setActiveFilter] =
    useState<(typeof projectFilters)[number]>('All')
  const visibleProjects = useMemo(
    () =>
      activeFilter === 'All'
        ? projects
        : projects.filter((project) => project.category === activeFilter),
    [activeFilter],
  )
  const [activeProjectName, setActiveProjectName] = useState<string>(
    projects[0].name,
  )
  const activeProject =
    visibleProjects.find((project) => project.name === activeProjectName) ??
    visibleProjects[0]

  function selectFilter(filter: (typeof projectFilters)[number]) {
    setActiveFilter(filter)
    const nextProject =
      filter === 'All'
        ? projects[0]
        : projects.find((project) => project.category === filter)

    if (nextProject) setActiveProjectName(nextProject.name)
  }

  const ActiveIcon = projectIcons[activeProject.name]

  return (
    <main className='relative z-10 min-h-screen px-4 pt-32 pb-20 sm:px-6 lg:px-8'>
      <section className='mx-auto w-full max-w-7xl'>
        <div className='grid gap-8 lg:grid-cols-[0.86fr_1.14fr] lg:items-end'>
          <div>
            <p className='font-mono text-sm font-semibold text-sky-600 dark:text-sky-300'>
              projects
            </p>
            <h1 className='mt-4 max-w-4xl text-5xl leading-tight font-semibold tracking-normal text-slate-950 sm:text-6xl dark:text-white'>
              Click through the kind of work I like building.
            </h1>
            <p className='mt-6 max-w-2xl text-lg leading-8 text-slate-600 dark:text-zinc-400'>
              Pick a category, inspect a project shape, and see the stack,
              intent, and interaction model change with it.
            </p>
          </div>

          <div className='rounded-[2rem] border border-slate-900/10 bg-white/70 p-4 shadow-xl shadow-slate-900/5 backdrop-blur-xl dark:border-white/10 dark:bg-zinc-950/70 dark:shadow-black/20'>
            <div className='flex items-center gap-2 border-b border-slate-900/10 pb-4 dark:border-white/10'>
              <SlidersHorizontal className='h-4 w-4 text-sky-600 dark:text-sky-300' />
              <p className='font-mono text-xs font-semibold tracking-widest text-slate-500 uppercase dark:text-zinc-500'>
                project filter
              </p>
            </div>
            <div className='mt-4 flex flex-wrap gap-2'>
              {projectFilters.map((filter) => (
                <button
                  key={filter}
                  type='button'
                  onClick={() => selectFilter(filter)}
                  className={cn(
                    'rounded-full border px-4 py-2 text-sm font-semibold transition',
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

        <div className='mt-12 grid gap-4 lg:grid-cols-[0.86fr_1.14fr]'>
          <div className='grid gap-3'>
            {visibleProjects.map((project) => {
              const Icon = projectIcons[project.name]
              const isActive = activeProject.name === project.name

              return (
                <button
                  key={project.name}
                  type='button'
                  onClick={() => setActiveProjectName(project.name)}
                  className={cn(
                    'group rounded-[2rem] border p-5 text-left shadow-xl backdrop-blur-xl transition',
                    isActive
                      ? 'border-sky-400/45 bg-white/85 shadow-sky-950/8 dark:bg-zinc-950/85'
                      : 'border-slate-900/10 bg-white/55 shadow-slate-900/5 hover:-translate-y-0.5 hover:border-sky-400/35 dark:border-white/10 dark:bg-white/5 dark:shadow-black/20',
                  )}
                >
                  <div className='flex items-start justify-between gap-4'>
                    <div className='flex items-center gap-3'>
                      <span className='grid h-11 w-11 place-items-center rounded-2xl bg-sky-500/10 text-sky-700 ring-1 ring-sky-500/15 dark:bg-sky-400/10 dark:text-sky-200 dark:ring-sky-300/15'>
                        <Icon className='h-5 w-5' />
                      </span>
                      <span>
                        <span className='block text-lg font-semibold text-slate-950 dark:text-white'>
                          {project.name}
                        </span>
                        <span className='mt-1 block text-sm text-slate-500 dark:text-zinc-400'>
                          {project.type}
                        </span>
                      </span>
                    </div>
                    <ArrowUpRight
                      className={cn(
                        'h-4 w-4 transition',
                        isActive
                          ? 'text-sky-600 dark:text-sky-300'
                          : 'text-slate-400 group-hover:text-sky-600 dark:text-zinc-600 dark:group-hover:text-sky-300',
                      )}
                    />
                  </div>
                </button>
              )
            })}
          </div>

          <section className='overflow-hidden rounded-[2rem] border border-slate-900/10 bg-slate-950 text-white shadow-2xl shadow-slate-950/15 dark:border-white/10 dark:bg-zinc-950 dark:shadow-black/25'>
            <div className='flex items-center justify-between border-b border-white/10 px-5 py-4'>
              <div className='flex items-center gap-2'>
                <span className='h-3 w-3 rounded-full bg-red-400' />
                <span className='h-3 w-3 rounded-full bg-amber-300' />
                <span className='h-3 w-3 rounded-full bg-emerald-400' />
              </div>
              <p className='font-mono text-xs text-zinc-500'>
                {activeProject.category.toLowerCase()}.preview
              </p>
            </div>

            <div className='grid gap-6 p-5 sm:p-6 lg:grid-cols-[1fr_0.82fr]'>
              <div>
                <div className='flex items-center gap-3'>
                  <span className='grid h-12 w-12 place-items-center rounded-2xl bg-sky-300/12 text-sky-200 ring-1 ring-sky-200/15'>
                    <ActiveIcon className='h-5 w-5' />
                  </span>
                  <div>
                    <p className='font-mono text-xs text-sky-200'>
                      {activeProject.status}
                    </p>
                    <h2 className='mt-1 text-3xl font-semibold'>
                      {activeProject.name}
                    </h2>
                  </div>
                </div>

                <p className='mt-6 max-w-2xl text-base leading-8 text-zinc-300'>
                  {activeProject.description}
                </p>

                <div className='mt-6 grid gap-3 sm:grid-cols-2'>
                  {activeProject.features.map((feature) => (
                    <div
                      key={feature}
                      className='rounded-2xl border border-white/10 bg-white/6 px-4 py-3 text-sm text-zinc-300'
                    >
                      {feature}
                    </div>
                  ))}
                  {activeProject.challenges.map((challenge) => (
                    <div
                      key={challenge}
                      className='rounded-2xl border border-sky-300/15 bg-sky-300/8 px-4 py-3 text-sm text-sky-100'
                    >
                      {challenge}
                    </div>
                  ))}
                </div>

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
              </div>

              <div className='rounded-2xl border border-white/10 bg-black/25 p-4'>
                <div className='flex items-end justify-between gap-4'>
                  <div>
                    <p className='font-mono text-xs text-zinc-500'>
                      fit score
                    </p>
                    <p className='mt-1 font-mono text-4xl font-semibold text-sky-200'>
                      {activeProject.score}
                    </p>
                  </div>
                  <Gauge className='h-5 w-5 text-sky-200' />
                </div>
                <div className='mt-4 h-2 overflow-hidden rounded-full bg-white/10'>
                  <div
                    className='h-full rounded-full bg-linear-to-r from-sky-400 to-cyan-200 transition-all duration-500'
                    style={{ width: `${activeProject.score}%` }}
                  />
                </div>

                <div className='mt-6 space-y-2 font-mono text-sm'>
                  {activeProject.preview.map((line) => (
                    <p key={line} className='text-zinc-400'>
                      <span className='text-sky-300'>$</span> {line}
                    </p>
                  ))}
                </div>
                <div className='mt-6 flex flex-wrap gap-2'>
                  <a
                    href={activeProject.links.demo}
                    className='rounded-full bg-white px-4 py-2 text-sm font-semibold text-zinc-950 transition hover:-translate-y-0.5 hover:bg-sky-100 focus-visible:ring-2 focus-visible:ring-sky-300/70 focus-visible:outline-none'
                  >
                    Open demo
                  </a>
                  <a
                    href={activeProject.links.github}
                    target='_blank'
                    className='rounded-full border border-white/10 bg-white/6 px-4 py-2 text-sm font-semibold text-white transition hover:-translate-y-0.5 hover:border-sky-300/35 hover:bg-sky-300/10 focus-visible:ring-2 focus-visible:ring-sky-300/70 focus-visible:outline-none'
                  >
                    GitHub
                  </a>
                </div>
              </div>
            </div>
          </section>
        </div>

        <div className='mt-4 grid gap-4 md:grid-cols-3'>
          {principles.map((principle) => {
            const Icon = principle.icon

            return (
              <article
                key={principle.title}
                className='rounded-[2rem] border border-slate-900/10 bg-white/70 p-6 shadow-xl shadow-slate-900/5 backdrop-blur-xl dark:border-white/10 dark:bg-white/6 dark:shadow-black/20'
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
    </main>
  )
}
