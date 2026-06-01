import { ArrowUpRight } from 'lucide-react'

import type { QuickAction } from '../types'

type QuickActionsProps = {
  actions: QuickAction[]
}

export function QuickActions({ actions }: QuickActionsProps) {
  return (
    <section
      id='terminal-shortcut'
      className='rounded-[2rem] border border-zinc-900/10 bg-white/70 p-6 shadow-xl shadow-zinc-900/5 backdrop-blur-xl dark:border-white/10 dark:bg-white/6 dark:shadow-black/20'
    >
      <p className='font-mono text-xs font-semibold tracking-widest text-sky-600 uppercase dark:text-sky-300'>
        quick actions
      </p>
      <h2 className='mt-3 text-2xl font-semibold text-zinc-950 dark:text-white'>
        Useful shortcuts.
      </h2>
      <div className='mt-6 grid gap-3'>
        {actions.map((item) => (
          <a
            key={item.label}
            href={item.href}
            className='flex items-center justify-between rounded-2xl border border-zinc-900/10 bg-zinc-50/80 px-4 py-3 text-sm font-medium text-zinc-700 transition hover:-translate-y-0.5 hover:border-sky-400/35 hover:bg-white focus-visible:ring-2 focus-visible:ring-sky-400/60 focus-visible:outline-none dark:border-white/10 dark:bg-zinc-950/45 dark:text-zinc-300 dark:hover:bg-white/8'
          >
            <span>{item.label}</span>
            <ArrowUpRight className='h-4 w-4 text-sky-600 dark:text-sky-300' />
          </a>
        ))}
      </div>
    </section>
  )
}
