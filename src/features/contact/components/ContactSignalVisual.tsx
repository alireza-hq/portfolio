import { Radio, Sparkles } from 'lucide-react'

import type { ContactChannel } from '../data/channels'

type ContactSignalVisualProps = {
  activeChannel: ContactChannel
}

export function ContactSignalVisual({
  activeChannel,
}: ContactSignalVisualProps) {
  const ActiveIcon = activeChannel.icon

  return (
    <div className='relative grid min-h-72 place-items-center overflow-hidden rounded-4xl border border-zinc-900/10 bg-zinc-50/80 sm:min-h-80 xl:min-h-92 dark:border-white/10 dark:bg-black/25'>
      <div className='absolute h-68 w-68 animate-pulse rounded-full border border-sky-500/15 sm:h-80 sm:w-80 dark:border-sky-200/12' />
      <div className='absolute h-52 w-52 animate-[spin_20s_linear_infinite_reverse] rounded-full border border-dashed border-sky-200/25 sm:h-60 sm:w-60' />
      <div className='absolute h-36 w-36 animate-[spin_26s_linear_infinite] rounded-full border border-zinc-900/10 sm:h-44 sm:w-44 dark:border-white/10' />
      <div className='absolute h-28 w-28 rounded-full bg-sky-300/10 blur-2xl sm:h-36 sm:w-36' />
      <div className='grid h-28 w-28 place-items-center rounded-4xl border border-sky-500/25 bg-white text-sky-700 shadow-2xl shadow-sky-950/10 sm:h-32 sm:w-32 dark:border-sky-200/25 dark:bg-zinc-950/90 dark:text-white dark:shadow-sky-950/40'>
        <ActiveIcon className='h-10 w-10 sm:h-12 sm:w-12' />
      </div>

      <div className='absolute top-4 left-4 flex items-center gap-2 rounded-full border border-zinc-900/10 bg-white/80 px-3 py-1.5 font-mono text-xs text-zinc-600 dark:border-white/10 dark:bg-white/8 dark:text-zinc-300'>
        <Radio className='h-3.5 w-3.5 text-sky-200' />
        signal
      </div>

      <div className='absolute right-4 bottom-4 max-w-48 rounded-3xl border border-zinc-900/10 bg-white/85 p-3 backdrop-blur-md dark:border-white/10 dark:bg-zinc-950/72'>
        <div className='mb-1 flex items-center gap-2 text-xs font-semibold text-zinc-950 dark:text-white'>
          <Sparkles className='h-3.5 w-3.5 text-sky-200' />
          {activeChannel.label} locked
        </div>
        <p className='text-xs leading-5 text-zinc-600 dark:text-zinc-400'>
          {activeChannel.status}
        </p>
      </div>
    </div>
  )
}
