import { cn } from '@/lib/utils/cn'

import type { Mission, SoftSkill, StackItem } from '../types'

type MissionControlProps = {
  activeMission: Mission
  activeSoft: SoftSkill
  activeStack: StackItem
  missions: Mission[]
  onMissionSelect: (mission: Mission) => void
  stackCount: number
}

export function MissionControl({
  activeMission,
  activeSoft,
  activeStack,
  missions,
  onMissionSelect,
  stackCount,
}: MissionControlProps) {
  return (
    <section className='rounded-4xl border border-zinc-900/10 bg-white/75 p-5 text-zinc-950 shadow-2xl shadow-zinc-900/8 backdrop-blur-xl dark:border-white/10 dark:bg-zinc-950 dark:text-white dark:shadow-black/25'>
      <div className='flex items-start justify-between gap-4'>
        <div>
          <p className='font-mono text-xs font-semibold tracking-widest text-sky-600 uppercase dark:text-sky-300'>
            mission control
          </p>
          <h2 className='mt-3 text-2xl font-semibold'>{activeMission.label}</h2>
          <p className='mt-2 text-sm leading-6 text-zinc-600 dark:text-zinc-400'>
            Presets tune the stack inspector, soft-skill module, and live
            readout together.
          </p>
        </div>
        <span className='rounded-full border border-sky-500/20 bg-sky-500/10 px-3 py-1.5 font-mono text-xs font-semibold text-sky-700 dark:border-sky-300/20 dark:bg-sky-300/10 dark:text-sky-200'>
          {activeStack.comfort}
        </span>
      </div>

      <div className='mt-5 flex gap-2 overflow-x-auto pb-1'>
        {missions.map((mission) => (
          <button
            key={mission.id}
            type='button'
            onClick={() => onMissionSelect(mission)}
            className={cn(
              'shrink-0 rounded-full border px-4 py-2 text-sm font-semibold transition focus-visible:ring-1 focus-visible:ring-sky-300/70 focus-visible:outline-none active:scale-95',
              activeMission.id === mission.id
                ? 'border-sky-500/35 bg-sky-500/10 text-sky-700 dark:border-cyan-300/45 dark:bg-cyan-300/12 dark:text-cyan-100'
                : 'border-zinc-900/10 bg-zinc-50/80 text-zinc-600 hover:border-sky-400/35 hover:text-zinc-950 dark:border-white/10 dark:bg-white/5 dark:text-zinc-300 dark:hover:border-cyan-300/30 dark:hover:text-white',
            )}
          >
            {mission.label}
          </button>
        ))}
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
  )
}
