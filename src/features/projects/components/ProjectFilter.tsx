import { SlidersHorizontal } from 'lucide-react'

import { cn } from '@/lib/utils/cn'

import { projectFilters } from '../data/projects'
import type { ProjectFilter as ProjectFilterValue } from '../types'

type ProjectFilterProps = {
  activeFilter: ProjectFilterValue
  onChange: (filter: ProjectFilterValue) => void
}

export function ProjectFilter({ activeFilter, onChange }: ProjectFilterProps) {
  return (
    <div className='rounded-[2rem] border border-zinc-900/10 bg-white/70 p-4 shadow-xl shadow-zinc-900/5 backdrop-blur-xl dark:border-white/10 dark:bg-zinc-950/70 dark:shadow-black/20'>
      <div className='flex items-center gap-2 border-b border-zinc-900/10 pb-4 dark:border-white/10'>
        <SlidersHorizontal className='h-4 w-4 text-sky-600 dark:text-sky-300' />
        <p className='font-mono text-xs font-semibold tracking-widest text-zinc-500 uppercase dark:text-zinc-500'>
          atlas filter
        </p>
      </div>
      <div className='mt-4 flex flex-wrap gap-2'>
        {projectFilters.map((filter) => (
          <button
            key={filter}
            type='button'
            onClick={() => onChange(filter)}
            className={cn(
              'rounded-full border px-4 py-2 text-sm font-semibold transition focus-visible:ring-2 focus-visible:ring-sky-400/70 focus-visible:outline-none active:scale-95',
              activeFilter === filter
                ? 'border-sky-400/40 bg-sky-500/10 text-sky-700 dark:bg-sky-400/12 dark:text-sky-200'
                : 'border-zinc-900/10 bg-zinc-50/75 text-zinc-600 hover:border-sky-400/35 hover:text-sky-700 dark:border-white/10 dark:bg-white/6 dark:text-zinc-300 dark:hover:text-sky-200',
            )}
          >
            {filter}
          </button>
        ))}
      </div>
    </div>
  )
}
