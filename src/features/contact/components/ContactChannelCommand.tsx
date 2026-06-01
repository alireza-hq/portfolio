import { ArrowUpRight, Terminal } from 'lucide-react'
import Link from 'next/link'

import type { ContactChannel } from '../data/channels'

type ContactChannelCommandProps = {
  activeChannel: ContactChannel
}

export function ContactChannelCommand({
  activeChannel,
}: ContactChannelCommandProps) {
  return (
    <div className='mt-3 rounded-3xl border border-white/10 bg-white/7 p-3 font-mono text-sm'>
      <div className='flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between'>
        <div className='min-w-0'>
          <div className='mb-1 flex items-center gap-2 text-white'>
            <Terminal className='h-4 w-4' />
            <span>{activeChannel.command}</span>
          </div>
          <p className='leading-7 text-zinc-300'>{activeChannel.value}</p>
        </div>
        <Link
          href={activeChannel.href}
          target={activeChannel.href.startsWith('http') ? '_blank' : undefined}
          className='inline-flex w-fit shrink-0 items-center gap-2 rounded-full bg-white px-4 py-2 text-sm font-semibold text-zinc-950 transition hover:-translate-y-0.5 hover:bg-zinc-100 focus-visible:ring-2 focus-visible:ring-sky-300/70 focus-visible:outline-none'
        >
          Open {activeChannel.label}
          <ArrowUpRight className='h-4 w-4' />
        </Link>
      </div>
    </div>
  )
}
