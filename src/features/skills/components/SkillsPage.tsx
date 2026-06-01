'use client'

import { useEffect, useMemo, useState } from 'react'
import {
  ArrowUpRight,
  BrainCircuit,
  ChevronsDown,
  Compass,
  Layers3,
  MessagesSquare,
  Radar,
  Sparkles,
  Workflow,
  Zap,
} from 'lucide-react'
import type { IconType } from 'react-icons'
import {
  SiCss,
  SiDocker,
  SiEslint,
  SiExpress,
  SiFigma,
  SiFramer,
  SiGit,
  SiGithub,
  SiHtml5,
  SiJest,
  SiJavascript,
  SiNextdotjs,
  SiNodedotjs,
  SiPnpm,
  SiPostman,
  SiPostgresql,
  SiPrettier,
  SiPrisma,
  SiRadixui,
  SiReact,
  SiReacthookform,
  SiRedux,
  SiShadcnui,
  SiTailwindcss,
  SiTestinglibrary,
  SiTypescript,
  SiVercel,
  SiVite,
  SiVitest,
  SiZod,
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
    summary:
      'The main layer: app structure, typed UI, and interaction systems.',
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
      {
        name: 'Redux',
        icon: SiRedux,
        level: 76,
        tone: 'text-indigo-400',
        use: 'Predictable app state, shared flows, and debugging complex UI behavior.',
      },
      {
        name: 'Vite',
        icon: SiVite,
        level: 80,
        tone: 'text-amber-300',
        use: 'Fast local tooling, experiments, and lightweight React prototypes.',
      },
    ],
  },
  {
    id: 'interface',
    label: 'Interface',
    summary:
      'The visual layer: responsive layouts, styling systems, and UI polish.',
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
      {
        name: 'shadcn/ui',
        icon: SiShadcnui,
        level: 82,
        tone: 'text-zinc-950 dark:text-white',
        use: 'Composable UI patterns, accessible primitives, and fast product surfaces.',
      },
      {
        name: 'Radix UI',
        icon: SiRadixui,
        level: 76,
        tone: 'text-cyan-300',
        use: 'Accessible low-level primitives for menus, dialogs, tabs, and controls.',
      },
      {
        name: 'Framer',
        icon: SiFramer,
        level: 70,
        tone: 'text-sky-400',
        use: 'Tasteful interaction motion when it improves clarity instead of noise.',
      },
    ],
  },
  {
    id: 'data',
    label: 'Data / Forms',
    summary:
      'The workflow layer: forms, validation, APIs, and backend-adjacent work.',
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
      {
        name: 'Zod',
        icon: SiZod,
        level: 82,
        tone: 'text-sky-400',
        use: 'Validation schemas for forms, API boundaries, and safer data parsing.',
      },
      {
        name: 'Postman',
        icon: SiPostman,
        level: 72,
        tone: 'text-orange-400',
        use: 'API checks, endpoint exploration, and request/response debugging.',
      },
    ],
  },
  {
    id: 'workflow',
    label: 'Workflow',
    summary:
      'The shipping layer: package flow, version control, and deployment habits.',
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
      {
        name: 'GitHub',
        icon: SiGithub,
        level: 86,
        tone: 'text-zinc-950 dark:text-white',
        use: 'Repository workflow, reviews, issue context, and project history.',
      },
      {
        name: 'Docker',
        icon: SiDocker,
        level: 66,
        tone: 'text-sky-500',
        use: 'Local service environments and backend-adjacent development setups.',
      },
      {
        name: 'ESLint',
        icon: SiEslint,
        level: 84,
        tone: 'text-indigo-400',
        use: 'Code quality guardrails and consistency before shipping.',
      },
      {
        name: 'Prettier',
        icon: SiPrettier,
        level: 88,
        tone: 'text-pink-300',
        use: 'Formatting consistency so review energy stays on behavior.',
      },
      {
        name: 'Testing Library',
        icon: SiTestinglibrary,
        level: 70,
        tone: 'text-rose-400',
        use: 'Interaction-focused tests that match how users actually touch UI.',
      },
      {
        name: 'Jest',
        icon: SiJest,
        level: 68,
        tone: 'text-red-400',
        use: 'Unit-level checks for logic, utilities, and stable behavior.',
      },
      {
        name: 'Vitest',
        icon: SiVitest,
        level: 72,
        tone: 'text-lime-400',
        use: 'Fast test loops for modern TypeScript and Vite-friendly projects.',
      },
    ],
  },
]

const missions = [
  {
    id: 'systems',
    label: 'Systems',
    tabId: 'data',
    stackName: 'Zod',
    softId: 'clarity',
    command: 'trace --flow data',
    result: 'Typed boundaries, clear validation, reliable handoffs.',
  },
  {
    id: 'prototype',
    label: 'Prototype',
    tabId: 'frontend',
    stackName: 'Vite',
    softId: 'curiosity',
    command: 'boot --mode prototype',
    result: 'Fast experiments, quick UI decisions, low ceremony.',
  },
  {
    id: 'ship',
    label: 'Ship',
    tabId: 'workflow',
    stackName: 'GitHub',
    softId: 'ownership',
    command: 'release --confidence high',
    result: 'Clean commits, verified checks, deployable increments.',
  },
  {
    id: 'product',
    label: 'Product UI',
    tabId: 'interface',
    stackName: 'Tailwind CSS',
    softId: 'taste',
    command: 'compose --surface product',
    result: 'Usable screens, crisp states, responsive layout discipline.',
  },
]

const softSkills = [
  {
    id: 'clarity',
    label: 'Clarity',
    icon: MessagesSquare,
    value: 91,
    signal: 'I reduce vague requests into screens, states, and next actions.',
  },
  {
    id: 'ownership',
    label: 'Ownership',
    icon: Compass,
    value: 88,
    signal: 'I keep the work moving and leave the code easier to continue.',
  },
  {
    id: 'taste',
    label: 'Taste',
    icon: Sparkles,
    value: 86,
    signal: 'I care about spacing, hierarchy, motion, and how the UI feels.',
  },
  {
    id: 'curiosity',
    label: 'Curiosity',
    icon: BrainCircuit,
    value: 90,
    signal:
      'I inspect problems, learn fast, and connect details across the app.',
  },
  {
    id: 'momentum',
    label: 'Momentum',
    icon: Zap,
    value: 84,
    signal:
      'I bias toward small working steps, useful commits, and visible progress.',
  },
  {
    id: 'systems',
    label: 'Systems thinking',
    icon: Workflow,
    value: 82,
    signal:
      'I think in contracts, reusable patterns, and durable interaction models.',
  },
]

const quickActions = [
  {
    label: 'Review build recipe',
    href: '#build-recipe',
  },
  {
    label: 'Open icon inspector',
    href: '#stack-inspector',
  },
  {
    label: 'Tune soft-skill modules',
    href: '#soft-skills',
  },
  {
    label: 'Use the terminal',
    href: '/',
  },
]

export function SkillsPage() {
  const [activeTabId, setActiveTabId] = useState(missions[0].tabId)
  const [showScrollHint, setShowScrollHint] = useState(false)
  const activeTab =
    stackTabs.find((tab) => tab.id === activeTabId) ?? stackTabs[0]
  const [activeStackName, setActiveStackName] = useState(missions[0].stackName)
  const [activeSoftId, setActiveSoftId] = useState(missions[0].softId)
  const [activeMissionId, setActiveMissionId] = useState(missions[0].id)
  const activeStack =
    activeTab.items.find((item) => item.name === activeStackName) ??
    activeTab.items[0]
  const activeSoft =
    softSkills.find((skill) => skill.id === activeSoftId) ?? softSkills[0]
  const activeMission =
    missions.find((mission) => mission.id === activeMissionId) ?? missions[0]

  const stackCount = useMemo(
    () => stackTabs.reduce((count, tab) => count + tab.items.length, 0),
    [],
  )
  const profileScore = Math.round((activeStack.level + activeSoft.value) / 2)

  useEffect(() => {
    function syncScrollHint() {
      const scrollableHeight =
        document.documentElement.scrollHeight - window.innerHeight
      const distanceFromBottom = scrollableHeight - window.scrollY

      setShowScrollHint(scrollableHeight > 120 && distanceFromBottom > 160)
    }

    syncScrollHint()
    window.addEventListener('scroll', syncScrollHint, { passive: true })
    window.addEventListener('resize', syncScrollHint)

    return () => {
      window.removeEventListener('scroll', syncScrollHint)
      window.removeEventListener('resize', syncScrollHint)
    }
  }, [])

  function selectTab(tab: StackTab) {
    setActiveTabId(tab.id)
    setActiveStackName(tab.items[0].name)
  }

  function runMission(mission: (typeof missions)[number]) {
    const missionTab = stackTabs.find((tab) => tab.id === mission.tabId)

    setActiveMissionId(mission.id)
    setActiveSoftId(mission.softId)

    if (missionTab) {
      setActiveTabId(missionTab.id)
      setActiveStackName(mission.stackName)
    }
  }

  return (
    <main className='relative z-10 min-h-screen px-4 pt-32 pb-20 sm:px-6 lg:px-8'>
      <div
        className={cn(
          'pointer-events-none fixed right-4 bottom-5 z-40 flex items-center gap-2 rounded-full border border-zinc-900/10 bg-white/78 px-3 py-2 text-xs font-semibold text-zinc-700 shadow-2xl shadow-zinc-900/10 backdrop-blur-xl transition duration-500 sm:right-6 sm:bottom-6 dark:border-white/10 dark:bg-zinc-950/72 dark:text-zinc-200 dark:shadow-black/30',
          showScrollHint
            ? 'translate-y-0 opacity-100'
            : 'translate-y-3 opacity-0',
        )}
        aria-hidden='true'
      >
        <span className='relative grid h-8 w-8 place-items-center rounded-full bg-sky-500/10 text-sky-600 dark:bg-sky-300/10 dark:text-sky-200'>
          <span className='absolute inset-0 animate-ping rounded-full bg-sky-500/18 dark:bg-sky-300/16' />
          <ChevronsDown className='relative h-4 w-4 animate-bounce' />
        </span>
        <span className='hidden sm:inline'>Scroll</span>
      </div>
      <section className='mx-auto w-full max-w-7xl'>
        <div className='grid gap-8 lg:grid-cols-[0.86fr_1.14fr] lg:items-end'>
          <div>
            <p className='font-mono text-sm font-semibold text-sky-600 dark:text-sky-300'>
              skills
            </p>
            <h1 className='mt-4 max-w-4xl text-4xl leading-tight font-semibold tracking-normal text-zinc-950 sm:text-6xl dark:text-white'>
              My stack, built like an inspectable workspace.
            </h1>
            <p className='mt-6 max-w-2xl text-lg leading-8 text-zinc-600 dark:text-zinc-400'>
              Switch stack layers, hover or tap the icons, and inspect how each
              tool fits into the way I build interfaces.
            </p>
          </div>

          <section className='rounded-[2rem] border border-zinc-900/10 bg-white/75 p-5 text-zinc-950 shadow-2xl shadow-zinc-900/8 backdrop-blur-xl dark:border-white/10 dark:bg-zinc-950 dark:text-white dark:shadow-black/25'>
            <div className='flex items-start justify-between gap-4'>
              <div>
                <p className='font-mono text-xs font-semibold tracking-widest text-sky-600 uppercase dark:text-sky-300'>
                  mission control
                </p>
                <h2 className='mt-3 text-2xl font-semibold'>
                  {activeMission.label}
                </h2>
                <p className='mt-2 text-sm leading-6 text-zinc-600 dark:text-zinc-400'>
                  Global presets tune the stack inspector, soft-skill module,
                  and live readout together.
                </p>
              </div>
              <span className='rounded-2xl border border-sky-500/20 bg-sky-500/10 px-3 py-2 font-mono text-2xl font-semibold text-sky-700 dark:border-sky-300/20 dark:bg-sky-300/10 dark:text-sky-200'>
                {profileScore}
              </span>
            </div>

            <div className='mt-5 flex gap-2 overflow-x-auto pb-1'>
              {missions.map((mission) => {
                const isActive = activeMission.id === mission.id

                return (
                  <button
                    key={mission.id}
                    type='button'
                    onClick={() => runMission(mission)}
                    className={cn(
                      'shrink-0 rounded-full border px-4 py-2 text-sm font-semibold transition focus-visible:ring-2 focus-visible:ring-sky-300/70 focus-visible:outline-none active:scale-95',
                      isActive
                        ? 'border-sky-500/35 bg-sky-500/10 text-sky-700 dark:border-cyan-300/45 dark:bg-cyan-300/12 dark:text-cyan-100'
                        : 'border-zinc-900/10 bg-zinc-50/80 text-zinc-600 hover:border-sky-400/35 hover:text-zinc-950 dark:border-white/10 dark:bg-white/5 dark:text-zinc-300 dark:hover:border-cyan-300/30 dark:hover:text-white',
                    )}
                  >
                    {mission.label}
                  </button>
                )
              })}
            </div>

            <div className='mt-5 grid gap-2 rounded-2xl border border-zinc-900/10 bg-zinc-50/85 p-4 font-mono text-sm dark:border-white/10 dark:bg-black/20'>
              <p className='text-zinc-600 dark:text-zinc-400'>
                <span className='text-sky-600 dark:text-sky-300'>$</span>{' '}
                {activeMission.command}
              </p>
              <p className='text-zinc-700 dark:text-zinc-300'>
                {activeMission.result}
              </p>
              <p className='text-zinc-500 dark:text-zinc-500'>
                {activeStack.name} / {activeSoft.label} / {stackCount} tools
              </p>
            </div>
          </section>
        </div>

        <section
          id='stack-inspector'
          className='mt-12 scroll-mt-28 overflow-hidden rounded-[2rem] border border-zinc-900/10 bg-white/75 text-zinc-950 shadow-2xl shadow-zinc-900/8 backdrop-blur-xl dark:border-white/10 dark:bg-zinc-950 dark:text-white dark:shadow-black/25'
        >
          <div className='flex flex-col gap-4 border-b border-zinc-900/10 px-5 py-4 sm:flex-row sm:items-center sm:justify-between dark:border-white/10'>
            <div className='flex items-center gap-3'>
              <div className='grid h-10 w-10 place-items-center rounded-2xl bg-sky-500/10 text-sky-700 ring-1 ring-sky-500/15 dark:bg-sky-300/12 dark:text-sky-200 dark:ring-sky-200/15'>
                <Radar className='h-5 w-5' />
              </div>
              <div>
                <p className='font-mono text-xs text-sky-600 dark:text-sky-300'>
                  stack.inspector
                </p>
                <p className='text-sm text-zinc-500 dark:text-zinc-400'>
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
                      'shrink-0 rounded-full border px-4 py-2 text-sm font-semibold transition focus-visible:ring-2 focus-visible:ring-sky-300/70 focus-visible:outline-none active:scale-95',
                      isActive
                        ? 'border-sky-500/35 bg-sky-500/10 text-sky-700 dark:border-sky-300/45 dark:bg-sky-300/12 dark:text-sky-100'
                        : 'border-zinc-900/10 bg-zinc-50/80 text-zinc-600 hover:border-sky-400/35 hover:text-zinc-950 dark:border-white/10 dark:bg-white/5 dark:text-zinc-300 dark:hover:border-sky-300/30 dark:hover:text-white',
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
                  <p className='font-mono text-xs text-sky-600 dark:text-sky-300'>
                    active layer
                  </p>
                  <h2 className='mt-2 text-3xl font-semibold'>
                    {activeTab.label}
                  </h2>
                  <p className='mt-3 max-w-xl leading-7 text-zinc-600 dark:text-zinc-400'>
                    {activeTab.summary}
                  </p>
                </div>
                <Sparkles className='h-5 w-5 text-sky-600 dark:text-sky-200' />
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
                        'group relative aspect-square rounded-3xl border bg-zinc-50/80 p-3 transition duration-200 focus-visible:ring-2 focus-visible:ring-sky-300/70 focus-visible:outline-none active:scale-95 dark:bg-white/6',
                        isActive
                          ? 'border-sky-300/45 shadow-[0_0_40px_rgb(14_165_233/0.16)]'
                          : 'border-zinc-900/10 hover:-translate-y-1 hover:border-sky-400/35 hover:bg-white dark:border-white/10 dark:hover:border-sky-300/30 dark:hover:bg-white/9',
                      )}
                    >
                      <span className='grid h-full place-items-center rounded-2xl bg-white dark:bg-black/18'>
                        <Icon
                          className={cn(
                            'h-9 w-9 transition duration-200 sm:h-11 sm:w-11',
                            item.tone,
                            isActive ? 'scale-110' : 'group-hover:scale-110',
                          )}
                        />
                      </span>
                      <span className='pointer-events-none absolute inset-x-2 -bottom-2 z-10 rounded-full border border-zinc-900/10 bg-white px-2 py-1 text-center text-xs font-semibold text-zinc-950 opacity-0 shadow-xl shadow-zinc-900/15 transition group-hover:bottom-2 group-hover:opacity-100 group-focus-visible:bottom-2 group-focus-visible:opacity-100 dark:border-white/10 dark:bg-zinc-950 dark:text-white dark:shadow-black/30'>
                        {item.name}
                      </span>
                    </button>
                  )
                })}
              </div>
            </div>

            <aside className='rounded-[1.5rem] border border-zinc-900/10 bg-zinc-50/85 p-5 dark:border-white/10 dark:bg-black/25'>
              <div className='flex items-start justify-between gap-4'>
                <div>
                  <p className='font-mono text-xs text-zinc-500 dark:text-zinc-500'>
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

              <p className='mt-5 leading-7 text-zinc-600 dark:text-zinc-300'>
                {activeStack.use}
              </p>

              <div className='mt-5 rounded-2xl border border-sky-500/15 bg-sky-500/8 p-4 dark:border-sky-300/15 dark:bg-sky-300/8'>
                <div className='flex items-center justify-between gap-3'>
                  <p className='font-mono text-xs text-sky-600 dark:text-sky-200'>
                    active mission
                  </p>
                  <span className='rounded-full bg-sky-500/10 px-2.5 py-1 text-xs font-semibold text-sky-700 dark:bg-sky-300/12 dark:text-sky-100'>
                    {activeMission.label}
                  </span>
                </div>
                <div className='mt-3 space-y-1 font-mono text-sm'>
                  <p className='text-zinc-600 dark:text-zinc-400'>
                    <span className='text-sky-600 dark:text-sky-300'>$</span>{' '}
                    {activeMission.command}
                  </p>
                  <p className='text-zinc-700 dark:text-zinc-300'>
                    {activeMission.result}
                  </p>
                </div>
              </div>

              <div className='mt-6'>
                <div className='flex items-center justify-between text-sm'>
                  <span className='text-zinc-500'>comfort</span>
                  <span className='font-mono text-sky-600 dark:text-sky-200'>
                    {activeStack.level}
                  </span>
                </div>
                <div className='mt-2 h-2 overflow-hidden rounded-full bg-zinc-200 dark:bg-white/10'>
                  <div
                    className='h-full rounded-full bg-linear-to-r from-sky-400 to-cyan-200 transition-all duration-500'
                    style={{ width: `${activeStack.level}%` }}
                  />
                </div>
              </div>

              <div className='mt-6 grid gap-2 font-mono text-sm text-zinc-500 dark:text-zinc-400'>
                <p>
                  <span className='text-sky-600 dark:text-sky-300'>$</span>{' '}
                  inspect {activeStack.name.toLowerCase().replaceAll(' ', '-')}
                </p>
                <p>
                  <span className='text-sky-600 dark:text-sky-300'>$</span>{' '}
                  profile --score {profileScore}
                </p>
              </div>
            </aside>
          </div>
        </section>

        <section
          id='soft-skills'
          className='mt-4 grid scroll-mt-28 gap-4 lg:grid-cols-[0.95fr_1.05fr]'
        >
          <div className='rounded-[2rem] border border-zinc-900/10 bg-white/75 p-6 shadow-xl shadow-zinc-900/5 backdrop-blur-xl dark:border-white/10 dark:bg-zinc-950/75 dark:shadow-black/20'>
            <div className='flex items-center justify-between gap-4'>
              <div>
                <p className='font-mono text-xs font-semibold tracking-widest text-sky-600 uppercase dark:text-sky-300'>
                  soft-skill modules
                </p>
                <h2 className='mt-3 text-2xl font-semibold text-zinc-950 dark:text-white'>
                  Human layer, not resume filler.
                </h2>
              </div>
              <activeSoft.icon
                className='h-8 w-8 text-sky-600 dark:text-sky-300'
                aria-hidden='true'
              />
            </div>

            <div className='mt-6 grid grid-cols-2 gap-3 sm:grid-cols-3'>
              {softSkills.map((skill) => {
                const Icon = skill.icon
                const isActive = activeSoft.id === skill.id

                return (
                  <button
                    key={skill.id}
                    type='button'
                    onMouseEnter={() => setActiveSoftId(skill.id)}
                    onFocus={() => setActiveSoftId(skill.id)}
                    onClick={() => setActiveSoftId(skill.id)}
                    className={cn(
                      'group rounded-3xl border p-4 text-left transition focus-visible:ring-2 focus-visible:ring-sky-400/60 focus-visible:outline-none active:scale-95',
                      isActive
                        ? 'border-sky-400/45 bg-sky-500/10 text-sky-700 dark:bg-sky-400/12 dark:text-sky-200'
                        : 'border-zinc-900/10 bg-zinc-50/80 text-zinc-700 hover:-translate-y-0.5 hover:border-sky-400/35 dark:border-white/10 dark:bg-white/6 dark:text-zinc-300',
                    )}
                  >
                    <Icon className='h-5 w-5' />
                    <span className='mt-4 block text-sm font-semibold'>
                      {skill.label}
                    </span>
                    <span className='mt-2 block h-1 overflow-hidden rounded-full bg-zinc-200 dark:bg-white/10'>
                      <span
                        className='block h-full rounded-full bg-sky-500 transition-all duration-500 dark:bg-sky-300'
                        style={{ width: `${skill.value}%` }}
                      />
                    </span>
                  </button>
                )
              })}
            </div>
          </div>

          <div className='rounded-[2rem] border border-zinc-900/10 bg-white/75 p-6 text-zinc-950 shadow-2xl shadow-zinc-900/8 backdrop-blur-xl dark:border-white/10 dark:bg-zinc-950 dark:text-white dark:shadow-black/25'>
            <p className='font-mono text-xs font-semibold tracking-widest text-sky-600 uppercase dark:text-sky-300'>
              live readout
            </p>
            <div className='mt-5 grid gap-4 sm:grid-cols-[auto_1fr] sm:items-start'>
              <div className='grid h-20 w-20 place-items-center rounded-[1.5rem] border border-sky-500/20 bg-sky-500/10 dark:border-sky-300/20 dark:bg-sky-300/10'>
                <activeSoft.icon
                  className='h-9 w-9 text-sky-600 dark:text-sky-200'
                  aria-hidden='true'
                />
              </div>
              <div>
                <div className='flex items-start justify-between gap-4'>
                  <div>
                    <h2 className='text-3xl font-semibold'>
                      {activeSoft.label}
                    </h2>
                    <p className='mt-3 leading-7 text-zinc-600 dark:text-zinc-400'>
                      {activeSoft.signal}
                    </p>
                  </div>
                  <span className='font-mono text-3xl font-semibold text-sky-600 dark:text-sky-200'>
                    {profileScore}
                  </span>
                </div>
                <div className='mt-5 grid gap-2 font-mono text-sm text-zinc-500 dark:text-zinc-400'>
                  <p>
                    <span className='text-sky-600 dark:text-sky-300'>$</span>{' '}
                    combine{' '}
                    {activeStack.name.toLowerCase().replaceAll(' ', '-')} +{' '}
                    {activeSoft.id}
                  </p>
                  <p>
                    <span className='text-sky-600 dark:text-sky-300'>$</span>{' '}
                    output controlled, useful, interactive UI
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <div
          id='build-recipe'
          className='mt-4 grid scroll-mt-28 gap-4 lg:grid-cols-[1fr_1fr]'
        >
          <section className='rounded-[2rem] border border-zinc-900/10 bg-white/70 p-6 shadow-xl shadow-zinc-900/5 backdrop-blur-xl dark:border-white/10 dark:bg-zinc-950/70 dark:shadow-black/20'>
            <div className='flex items-center gap-3'>
              <div className='grid h-11 w-11 place-items-center rounded-2xl bg-sky-500/10 text-sky-700 ring-1 ring-sky-500/15 dark:bg-sky-400/10 dark:text-sky-200'>
                <Layers3 className='h-5 w-5' />
              </div>
              <div>
                <p className='font-mono text-xs font-semibold tracking-widest text-sky-600 uppercase dark:text-sky-300'>
                  build recipe
                </p>
                <h2 className='mt-1 text-2xl font-semibold text-zinc-950 dark:text-white'>
                  What this mode produces.
                </h2>
              </div>
            </div>

            <div className='mt-6 grid gap-3'>
              {[
                {
                  label: 'Input',
                  value: activeMission.label,
                  detail: activeMission.command,
                },
                {
                  label: 'Engine',
                  value: activeStack.name,
                  detail: activeStack.use,
                },
                {
                  label: 'Signal',
                  value: activeSoft.label,
                  detail: activeSoft.signal,
                },
                {
                  label: 'Output',
                  value: `${profileScore}% fit`,
                  detail: activeMission.result,
                },
              ].map((step, index) => (
                <div
                  key={step.label}
                  className='grid gap-3 rounded-2xl border border-zinc-900/10 bg-zinc-50/80 p-4 sm:grid-cols-[auto_1fr] dark:border-white/10 dark:bg-white/6'
                >
                  <span className='grid h-9 w-9 place-items-center rounded-xl bg-sky-500/10 font-mono text-sm font-semibold text-sky-700 dark:bg-sky-400/10 dark:text-sky-200'>
                    0{index + 1}
                  </span>
                  <span>
                    <span className='block text-sm font-semibold text-sky-600 dark:text-sky-300'>
                      {step.label}
                    </span>
                    <span className='mt-1 block font-semibold text-zinc-950 dark:text-white'>
                      {step.value}
                    </span>
                    <span className='mt-2 block text-sm leading-6 text-zinc-500 dark:text-zinc-400'>
                      {step.detail}
                    </span>
                  </span>
                </div>
              ))}
            </div>
          </section>

          <section className='rounded-[2rem] border border-zinc-900/10 bg-white/70 p-6 shadow-xl shadow-zinc-900/5 backdrop-blur-xl dark:border-white/10 dark:bg-white/6 dark:shadow-black/20'>
            <p className='font-mono text-xs font-semibold tracking-widest text-sky-600 uppercase dark:text-sky-300'>
              quick actions
            </p>
            <h2 className='mt-3 text-2xl font-semibold text-zinc-950 dark:text-white'>
              Recruiter-friendly without being boring.
            </h2>
            <div className='mt-6 grid gap-3'>
              {quickActions.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  className='flex items-center justify-between rounded-2xl border border-zinc-900/10 bg-zinc-50/80 px-4 py-3 text-sm font-medium text-zinc-700 transition hover:-translate-y-0.5 hover:border-sky-400/35 hover:bg-white focus-visible:ring-2 focus-visible:ring-sky-400/60 focus-visible:outline-none dark:border-white/10 dark:bg-zinc-950/45 dark:text-zinc-300 dark:hover:bg-white/8'
                >
                  <span>{item.label}</span>
                  <ArrowUpRight className='h-4 w-4 text-sky-600 dark:text-sky-300' />
                </a>
              ))}
            </div>
          </section>
        </div>
      </section>
    </main>
  )
}
