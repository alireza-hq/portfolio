import { Layers3 } from 'lucide-react'

import type { Mission, SoftSkill, StackItem } from '../types'

type BuildRecipeProps = {
  activeMission: Mission
  activeSoftSkill: SoftSkill
  activeStack: StackItem
}

export function BuildRecipe({
  activeMission,
  activeSoftSkill,
  activeStack,
}: BuildRecipeProps) {
  const steps = [
    {
      label: 'Input',
      value: activeMission.label,
      detail: activeMission.command,
    },
    {
      label: 'Tool',
      value: activeStack.name,
      detail: activeStack.use,
    },
    {
      label: 'Human layer',
      value: activeSoftSkill.label,
      detail: activeSoftSkill.signal,
    },
    {
      label: 'Output',
      value: activeMission.result,
      detail: 'The current mode translated into a practical build direction.',
    },
  ]

  return (
    <section
      id='build-recipe'
      className='scroll-mt-28 rounded-[2rem] border border-zinc-900/10 bg-white/70 p-6 shadow-xl shadow-zinc-900/5 backdrop-blur-xl dark:border-white/10 dark:bg-zinc-950/70 dark:shadow-black/20'
    >
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
        {steps.map((step, index) => (
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
  )
}
