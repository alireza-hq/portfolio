'use client'

import { useMemo, useState } from 'react'
import { ArrowUpRight, Layers3, Radar, Sparkles } from 'lucide-react'
import type { IconType } from 'react-icons'
import {
  SiCss,
  SiExpress,
  SiFigma,
  SiGit,
  SiHtml5,
  SiJavascript,
  SiNextdotjs,
  SiNodedotjs,
  SiPnpm,
  SiPostgresql,
  SiPrisma,
  SiReact,
  SiReacthookform,
  SiTailwindcss,
  SiTypescript,
  SiVercel,
} from 'react-icons/si'

import { cn } from '@/lib/utils'

type StackItem = {
  name: string
  icon: IconType
  level: number
  tone: string
  use: string
}

type StackTab = {
  id: string
  label: string
  summary: string
  items: StackItem[]
}

const stackTabs: StackTab[] = [
  {
    id: 'frontend',
    label: 'Frontend',
    summary: 'The main layer: app structure, typed UI, and interaction systems.',
    items: [
      {
        name: 'React',
        icon: SiReact,
        level: 92,
        tone: 'text-cyan-400',
        use: 'Component systems, stateful UI, and interactive product surfaces.',
      },
      {
        name: 'Next.js',
        icon: SiNextdotjs,
        level: 90,
        tone: 'text-zinc-950 dark:text-white',
        use: 'App Router pages, production builds, routing, and deployment-ready structure.',
      },
      {
        name: 'TypeScript',
        icon: SiTypescript,
        level: 88,
        tone: 'text-sky-500',
        use: 'Typed data, safer props, command contracts, and maintainable refactors.',
      },
      {
        name: 'JavaScript',
        icon: SiJavascript,
        level: 86,
        tone: 'text-yellow-400',
        use: 'Browser behavior, interaction logic, and clean runtime patterns.',
      },
    ],
  },
  {
    id: 'interface',
    label: 'Interface',
    summary: 'The visual layer: responsive layouts, styling systems, and UI polish.',
    items: [
      {
        name: 'Tailwind CSS',
        icon: SiTailwindcss,
        level: 92,
        tone: 'text-sky-400',
        use: 'Fast responsive UI, consistent spacing, surfaces, and interaction states.',
      },
      {
        name: 'HTML',
        icon: SiHtml5,
        level: 90,
        tone: 'text-orange-500',
        use: 'Semantic structure, accessible controls, and reliable document flow.',
      },
      {
        name: 'CSS',
        icon: SiCss,
        level: 88,
        tone: 'text-blue-500',
        use: 'Motion, layout constraints, custom cursor/background systems, and details.',
      },
      {
        name: 'Figma',
        icon: SiFigma,
        level: 76,
        tone: 'text-pink-400',
        use: 'Quick visual planning, spacing decisions, and interface composition.',
      },
    ],
  },
  {
    id: 'data',
    label: 'Data / Forms',
    summary: 'The workflow layer: forms, validation, APIs, and backend-adjacent work.',
    items: [
      {
        name: 'React Hook Form',
        icon: SiReacthookform,
        level: 84,
        tone: 'text-rose-400',
        use: 'Performant forms, error handling, validation flow, and clean input state.',
      },
      {
        name: 'Node.js',
        icon: SiNodedotjs,
        level: 78,
        tone: 'text-emerald-500',
        use: 'Backend-adjacent endpoints, tooling scripts, and API thinking.',
      },
      {
        name: 'Express',
        icon: SiExpress,
        level: 74,
        tone: 'text-zinc-950 dark:text-white',
        use: 'REST-style routes, middleware shape, and quick service prototypes.',
      },
      {
        name: 'PostgreSQL',
        icon: SiPostgresql,
        level: 72,
        tone: 'text-sky-500',
        use: 'Relational data modeling for dashboards, admin tools, and product flows.',
      },
      {
        name: 'Prisma',
        icon: SiPrisma,
        level: 74,
        tone: 'text-teal-500',
        use: 'Typed database access, schema iteration, and app-level data models.',
      },
    ],
  },
  {
    id: 'workflow',
    label: 'Workflow',
    summary: 'The shipping layer: package flow, version control, and deployment habits.',
    items: [
      {
        name: 'Git',
        icon: SiGit,
        level: 88,
        tone: 'text-orange-500',
        use: 'Small commits, clean history, branch safety, and controlled iteration.',
      },
      {
        name: 'pnpm',
        icon: SiPnpm,
        level: 84,
        tone: 'text-amber-400',
        use: 'Fast installs, lockfile consistency, and project scripts.',
      },
      {
        name: 'Vercel',
        icon: SiVercel,
        level: 80,
        tone: 'text-zinc-950 dark:text-white',
        use: 'Next.js deployment flow, previews, and production-ready hosting.',
      },
    ],
  },
]

export function SkillsPage() {
  const [activeTabId, setActiveTabId] = useState(stackTabs[0].id)
  const activeTab =
    stackTabs.find((tab) => tab.id === activeTabId) ?? stackTabs[0]
  const [activeStackName, setActiveStackName] = useState(
    activeTab.items[0].name,
  )
  const activeStack =
    activeTab.items.find((item) => item.name === activeStackName) ??
    activeTab.items[0]

  const stackCount = useMemo(
    () => stackTabs.reduce((count, tab) => count + tab.items.length, 0),
    [],
  )

  function selectTab(tab: StackTab) {
    setActiveTabId(tab.id)
    setActiveStackName(tab.items[0].name)
  }

  return (
    <main className='relative z-10 min-h-screen px-4 pt-32 pb-20 sm:px-6 lg:px-8'>
      <section className='mx-auto w-full max-w-7xl'>
        <div className='grid gap-8 lg:grid-cols-[0.86fr_1.14fr] lg:items-end'>
          <div>
            <p className='font-mono text-sm font-semibold text-sky-600 dark:text-sky-300'>
              skills
            </p>
            <h1 className='mt-4 max-w-4xl text-5xl leading-tight font-semibold tracking-normal text-slate-950 sm:text-6xl dark:text-white'>
              My stack, built like an inspectable workspace.
            </h1>
            <p className='mt-6 max-w-2xl text-lg leading-8 text-slate-600 dark:text-zinc-400'>
              Switch stack layers, hover or tap the icons, and inspect how each
              tool fits into the way I build interfaces.
            </p>
          </div>

          <div className='grid grid-cols-3 gap-3'>
            {[
              ['Layers', stackTabs.length.toString()],
              ['Tools', stackCount.toString()],
              ['Accent', 'cyan'],
            ].map(([label, value]) => (
              <div
                key={label}
                className='rounded-3xl border border-slate-900/10 bg-white/65 p-5 shadow-xl shadow-slate-900/5 backdrop-blur-xl dark:border-white/10 dark:bg-white/6 dark:shadow-black/20'
              >
                <p className='font-mono text-3xl font-semibold text-slate-950 dark:text-white'>
                  {value}
                </p>
                <p className='mt-3 text-sm font-medium text-slate-500 dark:text-zinc-400'>
                  {label}
                </p>
              </div>
            ))}
          </div>
        </div>

        <section className='mt-12 overflow-hidden rounded-[2rem] border border-slate-900/10 bg-slate-950 text-white shadow-2xl shadow-slate-950/15 dark:border-white/10 dark:bg-zinc-950 dark:shadow-black/25'>
          <div className='flex flex-col gap-4 border-b border-white/10 px-5 py-4 sm:flex-row sm:items-center sm:justify-between'>
            <div className='flex items-center gap-3'>
              <div className='grid h-10 w-10 place-items-center rounded-2xl bg-sky-300/12 text-sky-200 ring-1 ring-sky-200/15'>
                <Radar className='h-5 w-5' />
              </div>
              <div>
                <p className='font-mono text-xs text-sky-200'>
                  stack.inspector
                </p>
                <p className='text-sm text-zinc-400'>
                  Tab, hover, click, inspect.
                </p>
              </div>
            </div>

            <div
              className='flex gap-2 overflow-x-auto pb-1 sm:justify-end sm:pb-0'
              role='tablist'
              aria-label='Stack categories'
            >
              {stackTabs.map((tab) => {
                const isActive = activeTab.id === tab.id

                return (
                  <button
                    key={tab.id}
                    type='button'
                    role='tab'
                    aria-selected={isActive}
                    onClick={() => selectTab(tab)}
                    className={cn(
                      'shrink-0 rounded-full border px-4 py-2 text-sm font-semibold transition active:scale-95 focus-visible:ring-2 focus-visible:ring-sky-300/70 focus-visible:outline-none',
                      isActive
                        ? 'border-sky-300/45 bg-sky-300/12 text-sky-100'
                        : 'border-white/10 bg-white/5 text-zinc-300 hover:border-sky-300/30 hover:text-white',
                    )}
                  >
                    {tab.label}
                  </button>
                )
              })}
            </div>
          </div>

          <div className='grid gap-6 p-5 sm:p-6 lg:grid-cols-[1.05fr_0.95fr]'>
            <div>
              <div className='flex items-start justify-between gap-4'>
                <div>
                  <p className='font-mono text-xs text-sky-200'>
                    active layer
                  </p>
                  <h2 className='mt-2 text-3xl font-semibold'>
                    {activeTab.label}
                  </h2>
                  <p className='mt-3 max-w-xl leading-7 text-zinc-400'>
                    {activeTab.summary}
                  </p>
                </div>
                <Sparkles className='h-5 w-5 text-sky-200' />
              </div>

              <div className='mt-8 grid grid-cols-3 gap-3 sm:grid-cols-4 xl:grid-cols-5'>
                {activeTab.items.map((item) => {
                  const Icon = item.icon
                  const isActive = activeStack.name === item.name

                  return (
                    <button
                      key={item.name}
                      type='button'
                      aria-label={`Inspect ${item.name}`}
                      onMouseEnter={() => setActiveStackName(item.name)}
                      onFocus={() => setActiveStackName(item.name)}
                      onClick={() => setActiveStackName(item.name)}
                      className={cn(
                        'group relative aspect-square rounded-3xl border bg-white/6 p-3 transition duration-200 active:scale-95 focus-visible:ring-2 focus-visible:ring-sky-300/70 focus-visible:outline-none',
                        isActive
                          ? 'border-sky-300/45 shadow-[0_0_40px_rgb(14_165_233/0.16)]'
                          : 'border-white/10 hover:-translate-y-1 hover:border-sky-300/30 hover:bg-white/9',
                      )}
                    >
                      <span className='grid h-full place-items-center rounded-2xl bg-black/18'>
                        <Icon
                          className={cn(
                            'h-9 w-9 transition duration-200 sm:h-11 sm:w-11',
                            item.tone,
                            isActive
                              ? 'scale-110'
                              : 'group-hover:scale-110',
                          )}
                        />
                      </span>
                      <span className='pointer-events-none absolute inset-x-2 -bottom-2 z-10 rounded-full border border-white/10 bg-zinc-950 px-2 py-1 text-center text-xs font-semibold text-white opacity-0 shadow-xl shadow-black/30 transition group-hover:bottom-2 group-hover:opacity-100 group-focus-visible:bottom-2 group-focus-visible:opacity-100'>
                        {item.name}
                      </span>
                    </button>
                  )
                })}
              </div>
            </div>

            <aside className='rounded-[1.5rem] border border-white/10 bg-black/25 p-5'>
              <div className='flex items-start justify-between gap-4'>
                <div>
                  <p className='font-mono text-xs text-zinc-500'>
                    selected tool
                  </p>
                  <h3 className='mt-2 text-3xl font-semibold'>
                    {activeStack.name}
                  </h3>
                </div>
                <activeStack.icon
                  className={cn('h-10 w-10', activeStack.tone)}
                  aria-hidden='true'
                />
              </div>

              <p className='mt-5 leading-7 text-zinc-300'>{activeStack.use}</p>

              <div className='mt-6'>
                <div className='flex items-center justify-between text-sm'>
                  <span className='text-zinc-500'>comfort</span>
                  <span className='font-mono text-sky-200'>
                    {activeStack.level}
                  </span>
                </div>
                <div className='mt-2 h-2 overflow-hidden rounded-full bg-white/10'>
                  <div
                    className='h-full rounded-full bg-linear-to-r from-sky-400 to-cyan-200 transition-all duration-500'
                    style={{ width: `${activeStack.level}%` }}
                  />
                </div>
              </div>

              <div className='mt-6 grid gap-2 font-mono text-sm text-zinc-400'>
                <p>
                  <span className='text-sky-300'>$</span> inspect{' '}
                  {activeStack.name.toLowerCase().replaceAll(' ', '-')}
                </p>
                <p>
                  <span className='text-sky-300'>$</span> layer --active{' '}
                  {activeTab.id}
                </p>
              </div>
            </aside>
          </div>
        </section>

        <div className='mt-4 grid gap-4 lg:grid-cols-[1fr_1fr]'>
          <section className='rounded-[2rem] border border-slate-900/10 bg-white/70 p-6 shadow-xl shadow-slate-900/5 backdrop-blur-xl dark:border-white/10 dark:bg-zinc-950/70 dark:shadow-black/20'>
            <div className='flex items-center gap-3'>
              <div className='grid h-11 w-11 place-items-center rounded-2xl bg-sky-500/10 text-sky-700 ring-1 ring-sky-500/15 dark:bg-sky-400/10 dark:text-sky-200'>
                <Layers3 className='h-5 w-5' />
              </div>
              <div>
                <p className='font-mono text-xs font-semibold tracking-widest text-sky-600 uppercase dark:text-sky-300'>
                  stack map
                </p>
                <h2 className='mt-1 text-2xl font-semibold text-slate-950 dark:text-white'>
                  How the pieces connect.
                </h2>
              </div>
            </div>
            <div className='mt-6 grid gap-3 sm:grid-cols-2'>
              {stackTabs.map((tab) => (
                <button
                  key={tab.id}
                  type='button'
                  onClick={() => selectTab(tab)}
                  className='rounded-2xl border border-slate-900/10 bg-slate-50/80 p-4 text-left transition hover:-translate-y-0.5 hover:border-sky-400/35 hover:bg-white focus-visible:ring-2 focus-visible:ring-sky-400/60 focus-visible:outline-none dark:border-white/10 dark:bg-white/6 dark:hover:bg-white/9'
                >
                  <span className='font-semibold text-slate-950 dark:text-white'>
                    {tab.label}
                  </span>
                  <span className='mt-2 block text-sm leading-6 text-slate-500 dark:text-zinc-400'>
                    {tab.items.map((item) => item.name).join(' / ')}
                  </span>
                </button>
              ))}
            </div>
          </section>

          <section className='rounded-[2rem] border border-slate-900/10 bg-white/70 p-6 shadow-xl shadow-slate-900/5 backdrop-blur-xl dark:border-white/10 dark:bg-white/6 dark:shadow-black/20'>
            <p className='font-mono text-xs font-semibold tracking-widest text-sky-600 uppercase dark:text-sky-300'>
              quick actions
            </p>
            <h2 className='mt-3 text-2xl font-semibold text-slate-950 dark:text-white'>
              Recruiter-friendly without being boring.
            </h2>
            <div className='mt-6 grid gap-3'>
              {['Inspect stack by category', 'Hover icons to reveal labels', 'Tap tiles on mobile', 'Use the terminal for commands'].map(
                (item) => (
                  <div
                    key={item}
                    className='flex items-center justify-between rounded-2xl border border-slate-900/10 bg-slate-50/80 px-4 py-3 text-sm font-medium text-slate-700 dark:border-white/10 dark:bg-zinc-950/45 dark:text-zinc-300'
                  >
                    <span>{item}</span>
                    <ArrowUpRight className='h-4 w-4 text-sky-600 dark:text-sky-300' />
                  </div>
                ),
              )}
            </div>
          </section>
        </div>
      </section>
    </main>
  )
}
