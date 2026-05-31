'use client'

import { useMemo, useState } from 'react'
import {
  Braces,
  Check,
  Database,
  Gauge,
  GitBranch,
  Layers3,
  Palette,
  ShieldCheck,
  Sparkles,
  SquareTerminal,
} from 'lucide-react'

import { cn } from '@/lib/utils'
import { skillGroups, skillModes, toolbox } from '@/data/skills'

const skillIcons = {
  braces: Braces,
  database: Database,
  layers: Layers3,
}

const strengths = [
  {
    title: 'Performance minded',
    copy: 'Interfaces stay light and readable under real content.',
    icon: Gauge,
    value: 92,
  },
  {
    title: 'Design systems',
    copy: 'Components scale without turning into visual noise.',
    icon: Palette,
    value: 88,
  },
  {
    title: 'Developer experience',
    copy: 'Structure, naming, and utilities stay easy to reason about.',
    icon: SquareTerminal,
    value: 90,
  },
  {
    title: 'Reliable delivery',
    copy: 'Small commits and checks keep the work controlled.',
    icon: GitBranch,
    value: 86,
  },
]

export function SkillsPage() {
  const [activeMode, setActiveMode] =
    useState<(typeof skillModes)[number]>(skillModes[0])
  const [selectedTools, setSelectedTools] = useState<string[]>(
    [...skillModes[0].stack],
  )
  const [activeToolName, setActiveToolName] = useState<string>(toolbox[0].name)
  const activeTool =
    toolbox.find((tool) => tool.name === activeToolName) ?? toolbox[0]

  const selectedStrength = useMemo(() => {
    return Math.min(99, activeMode.score + selectedTools.length)
  }, [activeMode.score, selectedTools.length])

  function selectMode(mode: (typeof skillModes)[number]) {
    setActiveMode(mode)
    const modeStack: string[] = [...mode.stack]
    setSelectedTools(modeStack)
    setActiveToolName(
      toolbox.find((tool) => modeStack.includes(tool.name))?.name ?? toolbox[0].name,
    )
  }

  function toggleTool(tool: string) {
    setActiveToolName(tool)
    setSelectedTools((current) =>
      current.includes(tool)
        ? current.filter((item) => item !== tool)
        : [...current, tool],
    )
  }

  return (
    <main className='relative z-10 min-h-screen px-4 pt-32 pb-20 sm:px-6 lg:px-8'>
      <section className='mx-auto w-full max-w-7xl'>
        <div className='grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-end'>
          <div>
            <p className='font-mono text-sm font-semibold text-sky-600 dark:text-sky-300'>
              skills
            </p>
            <h1 className='mt-4 max-w-4xl text-5xl leading-tight font-semibold tracking-normal text-slate-950 sm:text-6xl dark:text-white'>
              Build with the stack, not just a list of logos.
            </h1>
            <p className='mt-6 max-w-2xl text-lg leading-8 text-slate-600 dark:text-zinc-400'>
              Pick a mode, shape the stack, and watch the working profile adapt.
              This is closer to how I actually think through a project.
            </p>
          </div>

          <section className='overflow-hidden rounded-[2rem] border border-slate-900/10 bg-slate-950 text-white shadow-2xl shadow-slate-950/15 dark:border-white/10 dark:bg-zinc-950 dark:shadow-black/25'>
            <div className='flex items-center justify-between border-b border-white/10 px-5 py-4'>
              <div className='flex items-center gap-2'>
                <span className='h-3 w-3 rounded-full bg-red-400' />
                <span className='h-3 w-3 rounded-full bg-amber-300' />
                <span className='h-3 w-3 rounded-full bg-emerald-400' />
              </div>
              <p className='font-mono text-xs text-zinc-500'>skills.session</p>
            </div>

            <div className='grid gap-6 p-5 sm:p-6 lg:grid-cols-[0.9fr_1.1fr]'>
              <div className='grid gap-3'>
                {skillModes.map((mode) => {
                  const isActive = activeMode.id === mode.id

                  return (
                    <button
                      key={mode.id}
                      type='button'
                      onClick={() => selectMode(mode)}
                      className={cn(
                        'rounded-2xl border px-4 py-3 text-left transition',
                        isActive
                          ? 'border-sky-300/40 bg-sky-300/12 shadow-[0_0_34px_rgb(14_165_233/0.12)]'
                          : 'border-white/10 bg-white/5 hover:border-sky-300/25 hover:bg-white/8',
                      )}
                    >
                      <span className='flex items-center justify-between gap-3'>
                        <span className='font-semibold'>{mode.label}</span>
                        {isActive ? (
                          <Check className='h-4 w-4 text-sky-200' />
                        ) : null}
                      </span>
                      <span className='mt-2 block text-sm leading-6 text-zinc-400'>
                        {mode.tagline}
                      </span>
                    </button>
                  )
                })}
              </div>

              <div className='rounded-2xl border border-white/10 bg-black/25 p-4'>
                <div className='flex items-end justify-between gap-4'>
                  <div>
                    <p className='font-mono text-xs text-sky-200'>
                      active profile
                    </p>
                    <h2 className='mt-2 text-2xl font-semibold'>
                      {activeMode.label}
                    </h2>
                  </div>
                  <p className='font-mono text-4xl font-semibold text-sky-200'>
                    {selectedStrength}
                  </p>
                </div>

                <div className='mt-5 h-2 overflow-hidden rounded-full bg-white/10'>
                  <div
                    className='h-full rounded-full bg-linear-to-r from-sky-400 to-cyan-200 transition-all duration-500'
                    style={{ width: `${selectedStrength}%` }}
                  />
                </div>

                <div className='mt-6 space-y-2 font-mono text-sm'>
                  {activeMode.output.map((line) => (
                    <p key={line} className='text-zinc-400'>
                      <span className='text-sky-300'>$</span> {line}
                    </p>
                  ))}
                  <p className='text-zinc-500'>
                    selected: {selectedTools.join(', ') || 'minimal mode'}
                  </p>
                </div>
              </div>
            </div>
          </section>
        </div>

        <div className='mt-12 grid gap-4 lg:grid-cols-3'>
          {skillGroups.map((group) => {
            const Icon = skillIcons[group.icon]

            return (
              <section
                key={group.title}
                className='group rounded-[2rem] border border-slate-900/10 bg-white/70 p-6 shadow-xl shadow-slate-900/5 backdrop-blur-xl transition hover:-translate-y-1 hover:border-sky-400/45 dark:border-white/10 dark:bg-zinc-950/70 dark:shadow-black/20'
              >
                <div className='flex items-start justify-between gap-4'>
                  <div className='grid h-12 w-12 place-items-center rounded-2xl bg-sky-500/10 text-sky-700 ring-1 ring-sky-500/15 dark:bg-sky-400/10 dark:text-sky-200 dark:ring-sky-300/15'>
                    <Icon className='h-5 w-5' />
                  </div>
                  <Sparkles className='h-4 w-4 text-slate-300 transition group-hover:text-sky-400 dark:text-zinc-700 dark:group-hover:text-sky-300' />
                </div>

                <h2 className='mt-6 text-2xl font-semibold text-slate-950 dark:text-white'>
                  {group.title}
                </h2>
                <p className='mt-3 text-sm leading-6 text-slate-500 dark:text-zinc-400'>
                  {group.description}
                </p>

                <div className='mt-6 flex flex-wrap gap-2'>
                  {group.items.map((item) => {
                    const isSelected = selectedTools.includes(item)

                    return (
                      <button
                        key={item}
                        type='button'
                        onClick={() => toggleTool(item)}
                        className={cn(
                          'rounded-full border px-3 py-1.5 text-sm font-medium transition',
                          isSelected
                            ? 'border-sky-400/40 bg-sky-500/10 text-sky-700 dark:bg-sky-400/12 dark:text-sky-200'
                            : 'border-slate-900/10 bg-slate-50/90 text-slate-700 hover:border-sky-400/35 hover:text-sky-700 dark:border-white/10 dark:bg-white/6 dark:text-zinc-300 dark:hover:text-sky-200',
                        )}
                      >
                        {item}
                      </button>
                    )
                  })}
                </div>
              </section>
            )
          })}
        </div>

        <div className='mt-4 grid gap-4 lg:grid-cols-[1.2fr_0.8fr]'>
          <section className='rounded-[2rem] border border-slate-900/10 bg-slate-950 p-6 text-white shadow-2xl shadow-slate-950/15 sm:p-8 dark:border-white/10 dark:bg-zinc-950 dark:shadow-black/25'>
            <div className='flex items-center gap-3'>
              <div className='grid h-11 w-11 place-items-center rounded-2xl bg-sky-300/12 text-sky-200 ring-1 ring-sky-200/15'>
                <ShieldCheck className='h-5 w-5' />
              </div>
              <div>
                <p className='font-mono text-xs font-semibold tracking-widest text-sky-200 uppercase'>
                  working style
                </p>
                <h2 className='mt-1 text-2xl font-semibold'>
                  Practical, calm, production-shaped.
                </h2>
              </div>
            </div>

            <div className='mt-8 grid gap-3 sm:grid-cols-2'>
              {strengths.map((strength) => {
                const Icon = strength.icon
                const width = Math.min(99, strength.value + selectedTools.length)

                return (
                  <article
                    key={strength.title}
                    className='rounded-2xl border border-white/10 bg-white/6 p-4'
                  >
                    <Icon className='h-5 w-5 text-sky-200' />
                    <h3 className='mt-4 font-semibold'>{strength.title}</h3>
                    <p className='mt-2 text-sm leading-6 text-zinc-400'>
                      {strength.copy}
                    </p>
                    <div className='mt-4 h-1.5 overflow-hidden rounded-full bg-white/10'>
                      <div
                        className='h-full rounded-full bg-sky-300 transition-all duration-500'
                        style={{ width: `${width}%` }}
                      />
                    </div>
                  </article>
                )
              })}
            </div>
          </section>

          <section className='rounded-[2rem] border border-slate-900/10 bg-white/70 p-6 shadow-xl shadow-slate-900/5 backdrop-blur-xl sm:p-8 dark:border-white/10 dark:bg-white/6 dark:shadow-black/20'>
            <p className='font-mono text-xs font-semibold tracking-widest text-sky-600 uppercase dark:text-sky-300'>
              toolbox
            </p>
            <h2 className='mt-3 text-2xl font-semibold text-slate-950 dark:text-white'>
              Tune the kit.
            </h2>

            <div className='mt-6 grid gap-2'>
              {toolbox.map((tool) => {
                const isSelected = selectedTools.includes(tool.name)
                const isActive = activeTool.name === tool.name

                return (
                  <button
                    key={tool.name}
                    type='button'
                    onClick={() => toggleTool(tool.name)}
                    className={cn(
                      'flex items-center justify-between rounded-2xl border px-4 py-3 text-left text-sm font-medium transition',
                      isSelected
                        ? 'border-sky-400/40 bg-sky-500/10 text-sky-700 dark:bg-sky-400/12 dark:text-sky-200'
                        : 'border-slate-900/10 bg-slate-50/80 text-slate-700 hover:border-sky-400/35 dark:border-white/10 dark:bg-zinc-950/45 dark:text-zinc-300',
                      isActive && 'ring-2 ring-sky-400/25',
                    )}
                  >
                    <span>{tool.name}</span>
                    <span
                      className={cn(
                        'h-2 w-2 rounded-full transition',
                        isSelected
                          ? 'bg-sky-500 shadow-[0_0_18px_rgb(14_165_233/0.6)]'
                          : 'bg-slate-300 dark:bg-zinc-700',
                      )}
                    />
                  </button>
                )
              })}
            </div>

            <div className='mt-5 rounded-2xl border border-slate-900/10 bg-slate-50/80 p-4 dark:border-white/10 dark:bg-zinc-950/45'>
              <div className='flex items-start justify-between gap-3'>
                <div>
                  <p className='text-sm font-semibold text-slate-950 dark:text-white'>
                    {activeTool.name}
                  </p>
                  <p className='mt-2 text-sm leading-6 text-slate-500 dark:text-zinc-400'>
                    {activeTool.use}
                  </p>
                </div>
                <span className='font-mono text-sm font-semibold text-sky-600 dark:text-sky-300'>
                  {activeTool.level}
                </span>
              </div>
              <p className='mt-4 text-xs text-slate-500 dark:text-zinc-500'>
                Related: {activeTool.projects.join(', ')}
              </p>
            </div>
          </section>
        </div>
      </section>
    </main>
  )
}
