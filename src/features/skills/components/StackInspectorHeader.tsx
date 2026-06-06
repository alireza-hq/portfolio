import { Radar } from 'lucide-react'

import { cn } from '@/lib/utils/cn'

import type { StackCategory } from '../types'

type StackInspectorHeaderProps = {
  activeCategory: StackCategory
  categories: StackCategory[]
  onCategorySelect: (category: StackCategory) => void
}

export function StackInspectorHeader({
  activeCategory,
  categories,
  onCategorySelect,
}: StackInspectorHeaderProps) {
  return (
    <div className='flex flex-col gap-4 border-b border-zinc-900/10 px-5 py-4 lg:flex-row lg:items-center lg:justify-between dark:border-white/10'>
      <div className='flex items-center gap-3'>
        <div className='grid h-10 w-10 place-items-center rounded-2xl bg-sky-500/10 text-sky-700 ring-1 ring-sky-500/15 dark:bg-sky-300/12 dark:text-sky-200 dark:ring-sky-200/15'>
          <Radar className='h-5 w-5' />
        </div>
        <div>
          <p className='font-mono text-xs text-sky-600 dark:text-sky-300'>
            stack.inspector
          </p>
          <p className='text-sm text-zinc-500 dark:text-zinc-400'>
            Focus, hover, click, inspect.
          </p>
        </div>
      </div>

      <div
        className='grid w-full grid-cols-2 gap-2 sm:grid-cols-3 lg:flex lg:w-auto lg:justify-end'
        role='tablist'
        aria-label='Stack categories'
      >
        {categories.map((category) => (
          <button
            key={category.id}
            type='button'
            role='tab'
            aria-selected={activeCategory.id === category.id}
            onClick={() => onCategorySelect(category)}
            className={cn(
              'min-w-0 rounded-full border px-3 py-2 text-xs font-semibold transition active:scale-95 sm:text-sm lg:shrink-0 lg:px-4',
              activeCategory.id === category.id
                ? 'border-sky-500/35 bg-sky-500/10 text-sky-700 dark:border-sky-300/45 dark:bg-sky-300/12 dark:text-sky-100'
                : 'border-zinc-900/10 bg-zinc-50/80 text-zinc-600 hover:border-sky-400/35 hover:text-zinc-950 dark:border-white/10 dark:bg-white/5 dark:text-zinc-300 dark:hover:border-sky-300/30 dark:hover:text-white',
            )}
          >
            {category.label}
          </button>
        ))}
      </div>
    </div>
  )
}
