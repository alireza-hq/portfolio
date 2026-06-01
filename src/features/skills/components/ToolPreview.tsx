import { cn } from '@/lib/utils/cn'

import type { Mission, StackItem } from '../types'

type ToolPreviewProps = {
  activeMission: Mission
  tool: StackItem
}

export function ToolPreview({ activeMission, tool }: ToolPreviewProps) {
  const ToolIcon = tool.icon
  const inspectName = tool.name.toLowerCase().replaceAll(' ', '-')

  return (
    <aside className='rounded-3xl border border-zinc-900/10 bg-zinc-50/85 p-5 dark:border-white/10 dark:bg-black/25'>
      <div className='flex items-start justify-between gap-4'>
        <div>
          <p className='font-mono text-xs text-zinc-500 dark:text-zinc-500'>
            selected tool
          </p>
          <h3 className='mt-2 text-3xl font-semibold'>{tool.name}</h3>
        </div>
        <ToolIcon className={cn('h-10 w-10', tool.tone)} aria-hidden='true' />
      </div>

      <p className='mt-5 leading-7 text-zinc-600 dark:text-zinc-300'>
        {tool.use}
      </p>

      <div className='mt-5 rounded-2xl border border-sky-500/15 bg-sky-500/8 p-4 dark:border-sky-300/15 dark:bg-sky-300/8'>
        <div className='flex items-center justify-between gap-3'>
          <p className='font-mono text-xs text-sky-600 dark:text-sky-200'>
            comfort
          </p>
          <span className='rounded-full bg-sky-500/10 px-2.5 py-1 text-xs font-semibold text-sky-700 dark:bg-sky-300/12 dark:text-sky-100'>
            {tool.comfort}
          </span>
        </div>
        <div className='mt-3 space-y-1 font-mono text-sm'>
          <p className='text-zinc-600 dark:text-zinc-400'>
            <span className='text-sky-600 dark:text-sky-300'>$</span> inspect{' '}
            {inspectName}
          </p>
          <p className='text-zinc-700 dark:text-zinc-300'>
            mission: {activeMission.label}
          </p>
        </div>
      </div>

      <div className='mt-6 grid gap-2 font-mono text-sm text-zinc-500 dark:text-zinc-400'>
        <p>
          <span className='text-sky-600 dark:text-sky-300'>$</span> fit-score{' '}
          {tool.fitScore}
        </p>
        <p>
          <span className='text-sky-600 dark:text-sky-300'>$</span> related{' '}
          {activeMission.command}
        </p>
      </div>
    </aside>
  )
}
