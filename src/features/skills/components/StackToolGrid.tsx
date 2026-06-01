import { cn } from '@/lib/utils/cn'

import type { StackItem } from '../types'

type StackToolGridProps = {
  lockedTool: StackItem
  tools: StackItem[]
  onToolLock: (tool: StackItem) => void
  onToolPreview: (tool?: StackItem) => void
}

export function StackToolGrid({
  lockedTool,
  tools,
  onToolLock,
  onToolPreview,
}: StackToolGridProps) {
  return (
    <div className='mt-8 grid grid-cols-3 gap-3 sm:grid-cols-4 xl:grid-cols-5'>
      {tools.map((tool) => {
        const Icon = tool.icon
        const isLocked = lockedTool.name === tool.name

        return (
          <button
            key={tool.name}
            type='button'
            aria-label={`Inspect ${tool.name}`}
            aria-pressed={isLocked}
            onMouseEnter={() => onToolPreview(tool)}
            onMouseLeave={() => onToolPreview()}
            onFocus={() => onToolPreview(tool)}
            onBlur={() => onToolPreview()}
            onClick={() => onToolLock(tool)}
            className={cn(
              'group relative aspect-square rounded-3xl border bg-zinc-50/80 p-3 transition duration-200 focus-visible:ring-2 focus-visible:ring-sky-300/70 focus-visible:outline-none active:scale-95 dark:bg-white/6',
              isLocked
                ? 'border-sky-300/60 bg-sky-500/8 shadow-[0_0_40px_rgb(14_165_233/0.16)]'
                : 'border-zinc-900/10 hover:-translate-y-1 hover:border-sky-400/35 hover:bg-white dark:border-white/10 dark:hover:border-sky-300/30 dark:hover:bg-white/9',
            )}
          >
            <span className='grid h-full place-items-center rounded-2xl bg-white dark:bg-black/18'>
              <Icon
                className={cn(
                  'h-9 w-9 transition duration-200 sm:h-11 sm:w-11',
                  tool.tone,
                  isLocked ? 'scale-110' : 'group-hover:scale-110',
                )}
              />
            </span>
            <span className='pointer-events-none absolute inset-x-2 -bottom-2 z-10 rounded-full border border-zinc-900/10 bg-white px-2 py-1 text-center text-xs font-semibold text-zinc-950 opacity-0 shadow-xl shadow-zinc-900/15 transition group-hover:bottom-2 group-hover:opacity-100 group-focus-visible:bottom-2 group-focus-visible:opacity-100 dark:border-white/10 dark:bg-zinc-950 dark:text-white dark:shadow-black/30'>
              {tool.name}
            </span>
          </button>
        )
      })}
    </div>
  )
}
