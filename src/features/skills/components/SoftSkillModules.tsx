import { cn } from '@/lib/utils/cn'

import type { SoftSkill } from '../types'

type SoftSkillModulesProps = {
  activeSoftSkill: SoftSkill
  softSkills: SoftSkill[]
  onSoftSkillSelect: (skill: SoftSkill) => void
}

export function SoftSkillModules({
  activeSoftSkill,
  softSkills,
  onSoftSkillSelect,
}: SoftSkillModulesProps) {
  const ActiveIcon = activeSoftSkill.icon

  return (
    <section
      id='soft-skills'
      className='rounded-4xl border border-zinc-900/10 bg-white/75 p-6 shadow-xl shadow-zinc-900/5 backdrop-blur-xl dark:border-white/10 dark:bg-zinc-950/75 dark:shadow-black/20'
    >
      <div className='flex items-center justify-between gap-4'>
        <div>
          <p className='font-mono text-xs font-semibold tracking-widest text-sky-600 uppercase dark:text-sky-300'>
            soft-skill modules
          </p>
          <h2 className='mt-3 text-2xl font-semibold text-zinc-950 dark:text-white'>
            The parts behind the code.
          </h2>
        </div>
        <ActiveIcon
          className='h-8 w-8 text-sky-600 dark:text-sky-300'
          aria-hidden='true'
        />
      </div>

      <div className='mt-6 grid grid-cols-2 gap-3 sm:grid-cols-3'>
        {softSkills.map((skill) => {
          const Icon = skill.icon
          const isActive = activeSoftSkill.id === skill.id

          return (
            <button
              key={skill.id}
              type='button'
              onFocus={() => onSoftSkillSelect(skill)}
              onClick={() => onSoftSkillSelect(skill)}
              className={cn(
                'group rounded-3xl border p-4 text-left transition focus-visible:ring-1 focus-visible:ring-sky-400/60 focus-visible:outline-none active:scale-95',
                isActive
                  ? 'border-sky-400/45 bg-sky-500/10 text-sky-700 dark:bg-sky-400/12 dark:text-sky-200'
                  : 'border-zinc-900/10 bg-zinc-50/80 text-zinc-700 hover:-translate-y-0.5 hover:border-sky-400/35 dark:border-white/10 dark:bg-white/6 dark:text-zinc-300',
              )}
            >
              <Icon className='h-5 w-5' />
              <span className='mt-4 block text-sm font-semibold'>
                {skill.label}
              </span>
              <span className='mt-2 block text-xs leading-5 text-zinc-500 dark:text-zinc-400'>
                {isActive ? 'active signal' : 'module ready'}
              </span>
            </button>
          )
        })}
      </div>
    </section>
  )
}
