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
    <div className='mt-3 rounded-3xl border border-zinc-900/10 bg-zinc-50/80 p-3 font-mono text-sm dark:border-white/10 dark:bg-white/7'>
      <div className='flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between'>
        <div className='min-w-0'>
          <div className='mb-1 flex items-center gap-2 text-zinc-950 dark:text-white'>
            <Terminal className='h-4 w-4' />
            <span>{activeChannel.command}</span>
          </div>
          <p className='leading-7 text-zinc-600 dark:text-zinc-300'>
            {activeChannel.value}
          </p>
        </div>
        <Link
          href={activeChannel.href}
          target={activeChannel.href.startsWith('http') ? '_blank' : undefined}
          className='inline-flex w-fit shrink-0 items-center gap-2 rounded-full bg-zinc-950 px-4 py-2 text-sm font-semibold text-white transition hover:-translate-y-0.5 hover:bg-sky-700 dark:bg-white dark:text-zinc-950 dark:hover:bg-zinc-100'
        >
          Open {activeChannel.label}
          <ArrowUpRight className='h-4 w-4' />
        </Link>
      </div>
    </div>
  )
}
