import { Lightbulb } from 'lucide-react'

import type { Project } from '../types'

type ActiveBuildConsoleProps = {
  project: Project
  onOpenDetails: () => void
}

export function ActiveBuildConsole({
  project,
  onOpenDetails,
}: ActiveBuildConsoleProps) {
  const details = [
    ['project type', project.type],
    ['frontend stack', project.frontendStack.join(', ')],
    [
      'backend / data',
      project.backendStack?.join(', ') ?? 'Static / client-side',
    ],
    ['main challenge', project.mainChallenge],
    ['current status', project.statusLabels.join(' / ')],
  ]

  return (
    <section className='mt-4 overflow-hidden rounded-[2rem] border border-zinc-900/10 bg-white/70 shadow-xl shadow-zinc-900/5 backdrop-blur-xl dark:border-white/10 dark:bg-white/6 dark:shadow-black/20'>
      <div className='flex flex-col gap-4 md:flex-row md:items-center md:justify-between'>
        <div className='p-5'>
          <p className='font-mono text-xs font-semibold tracking-widest text-sky-600 uppercase dark:text-sky-300'>
            active build console
          </p>
          <h2 className='mt-2 text-2xl font-semibold text-zinc-950 dark:text-white'>
            Real projects, real tradeoffs, inspectable decisions.
          </h2>
        </div>
        <button
          type='button'
          onClick={onOpenDetails}
          className='mx-5 mb-5 inline-flex w-fit items-center gap-2 rounded-full bg-zinc-950 px-4 py-2 text-sm font-semibold text-white transition hover:-translate-y-0.5 hover:bg-sky-700 focus-visible:ring-2 focus-visible:ring-sky-400/70 focus-visible:outline-none md:my-5 dark:bg-white dark:text-zinc-950 dark:hover:bg-sky-200'
        >
          Inspect active build
          <Lightbulb className='h-4 w-4' />
        </button>
      </div>

      <div className='border-t border-zinc-900/10 bg-zinc-950 p-5 font-mono text-sm text-zinc-300 dark:border-white/10'>
        <div className='grid gap-2'>
          {details.map(([label, value]) => (
            <p key={label} className='grid gap-2 sm:grid-cols-[9rem_1fr]'>
              <span className='text-sky-300'>{label}</span>
              <span>{value}</span>
            </p>
          ))}
        </div>
      </div>
    </section>
  )
}
