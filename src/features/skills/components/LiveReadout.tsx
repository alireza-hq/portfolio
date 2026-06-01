import type { SoftSkill, StackItem } from '../types'

type LiveReadoutProps = {
  activeSoftSkill: SoftSkill
  activeStack: StackItem
  workspaceScore: number
}

export function LiveReadout({
  activeSoftSkill,
  activeStack,
  workspaceScore,
}: LiveReadoutProps) {
  const ActiveIcon = activeSoftSkill.icon
  const commandTool = activeStack.name.toLowerCase().replaceAll(' ', '-')

  return (
    <section className='rounded-[2rem] border border-zinc-900/10 bg-white/75 p-6 text-zinc-950 shadow-2xl shadow-zinc-900/8 backdrop-blur-xl dark:border-white/10 dark:bg-zinc-950 dark:text-white dark:shadow-black/25'>
      <p className='font-mono text-xs font-semibold tracking-widest text-sky-600 uppercase dark:text-sky-300'>
        live readout
      </p>
      <div className='mt-5 grid gap-4 sm:grid-cols-[auto_1fr] sm:items-start'>
        <div className='grid h-20 w-20 place-items-center rounded-[1.5rem] border border-sky-500/20 bg-sky-500/10 dark:border-sky-300/20 dark:bg-sky-300/10'>
          <ActiveIcon
            className='h-9 w-9 text-sky-600 dark:text-sky-200'
            aria-hidden='true'
          />
        </div>
        <div>
          <div className='flex items-start justify-between gap-4'>
            <div>
              <h2 className='text-3xl font-semibold'>
                {activeSoftSkill.label}
              </h2>
              <p className='mt-3 leading-7 text-zinc-600 dark:text-zinc-400'>
                {activeSoftSkill.signal}
              </p>
            </div>
            <span className='font-mono text-3xl font-semibold text-sky-600 dark:text-sky-200'>
              {workspaceScore}
            </span>
          </div>
          <div className='mt-5 grid gap-2 font-mono text-sm text-zinc-500 dark:text-zinc-400'>
            <p>
              <span className='text-sky-600 dark:text-sky-300'>$</span> combine{' '}
              {commandTool} + {activeSoftSkill.id}
            </p>
            <p>
              <span className='text-sky-600 dark:text-sky-300'>$</span> output
              controlled, useful, interactive UI
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
