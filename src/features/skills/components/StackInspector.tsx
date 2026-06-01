import { Sparkles } from 'lucide-react'

import { StackInspectorHeader } from './StackInspectorHeader'
import { StackToolGrid } from './StackToolGrid'
import { ToolPreview } from './ToolPreview'
import type { Mission, StackCategory, StackItem } from '../types'

type StackInspectorProps = {
  activeCategory: StackCategory
  activeMission: Mission
  lockedTool: StackItem
  previewTool: StackItem
  categories: StackCategory[]
  onCategorySelect: (category: StackCategory) => void
  onToolLock: (tool: StackItem) => void
  onToolPreview: (tool?: StackItem) => void
}

export function StackInspector({
  activeCategory,
  activeMission,
  lockedTool,
  previewTool,
  categories,
  onCategorySelect,
  onToolLock,
  onToolPreview,
}: StackInspectorProps) {
  return (
    <section
      id='stack-inspector'
      className='mt-12 scroll-mt-28 overflow-hidden rounded-[2rem] border border-zinc-900/10 bg-white/75 text-zinc-950 shadow-2xl shadow-zinc-900/8 backdrop-blur-xl dark:border-white/10 dark:bg-zinc-950 dark:text-white dark:shadow-black/25'
    >
      <StackInspectorHeader
        activeCategory={activeCategory}
        categories={categories}
        onCategorySelect={onCategorySelect}
      />

      <div className='grid gap-6 p-5 sm:p-6 lg:grid-cols-[1.05fr_0.95fr]'>
        <div>
          <div className='flex items-start justify-between gap-4'>
            <div>
              <p className='font-mono text-xs text-sky-600 dark:text-sky-300'>
                active layer
              </p>
              <h2 className='mt-2 text-3xl font-semibold'>
                {activeCategory.label}
              </h2>
              <p className='mt-3 max-w-xl leading-7 text-zinc-600 dark:text-zinc-400'>
                {activeCategory.summary}
              </p>
            </div>
            <Sparkles className='h-5 w-5 text-sky-600 dark:text-sky-200' />
          </div>

          <StackToolGrid
            lockedTool={lockedTool}
            tools={activeCategory.items}
            onToolLock={onToolLock}
            onToolPreview={onToolPreview}
          />
        </div>

        <ToolPreview activeMission={activeMission} tool={previewTool} />
      </div>
    </section>
  )
}
