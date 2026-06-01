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
    <div className='relative grid min-h-72 place-items-center overflow-hidden rounded-4xl border border-white/10 bg-black/25 sm:min-h-80 xl:min-h-92'>
      <div className='absolute h-68 w-68 animate-pulse rounded-full border border-sky-200/12 sm:h-80 sm:w-80' />
      <div className='absolute h-52 w-52 animate-[spin_20s_linear_infinite_reverse] rounded-full border border-dashed border-sky-200/25 sm:h-60 sm:w-60' />
      <div className='absolute h-36 w-36 animate-[spin_26s_linear_infinite] rounded-full border border-white/10 sm:h-44 sm:w-44' />
      <div className='absolute h-28 w-28 rounded-full bg-sky-300/10 blur-2xl sm:h-36 sm:w-36' />
      <div className='grid h-28 w-28 place-items-center rounded-4xl border border-sky-200/25 bg-zinc-950/90 text-white shadow-2xl shadow-sky-950/40 sm:h-32 sm:w-32'>
        <ActiveIcon className='h-10 w-10 sm:h-12 sm:w-12' />
      </div>

      <div className='absolute top-4 left-4 flex items-center gap-2 rounded-full border border-white/10 bg-white/8 px-3 py-1.5 font-mono text-xs text-zinc-300'>
        <Radio className='h-3.5 w-3.5 text-sky-200' />
        signal
      </div>

      <div className='absolute right-4 bottom-4 max-w-48 rounded-3xl border border-white/10 bg-zinc-950/72 p-3 backdrop-blur-md'>
        <div className='mb-1 flex items-center gap-2 text-xs font-semibold text-white'>
          <Sparkles className='h-3.5 w-3.5 text-sky-200' />
          {activeChannel.label} locked
        </div>
        <p className='text-xs leading-5 text-zinc-400'>
          {activeChannel.status}
        </p>
      </div>
    </div>
  )
}
