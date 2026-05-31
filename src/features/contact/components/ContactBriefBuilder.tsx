'use client'

import { useMemo, useState } from 'react'
import { Check, Clipboard, Sparkles } from 'lucide-react'

import { cn } from '@/lib/utils'

const briefOptions = {
  scope: ['Portfolio', 'Dashboard', 'SaaS UI'],
  pace: ['This week', 'This month', 'Exploring'],
  priority: ['Interaction', 'Performance', 'Polish'],
} as const

type BriefKey = keyof typeof briefOptions

const defaultBrief: Record<BriefKey, string> = {
  scope: 'Portfolio',
  pace: 'This month',
  priority: 'Interaction',
}

export function ContactBriefBuilder() {
  const [brief, setBrief] = useState(defaultBrief)
  const [copied, setCopied] = useState(false)

  const message = useMemo(
    () =>
      `Hey Alireza, I want to build a ${brief.scope.toLowerCase()} with a focus on ${brief.priority.toLowerCase()}. Timeline: ${brief.pace.toLowerCase()}.`,
    [brief],
  )

  async function copyBrief() {
    await navigator.clipboard.writeText(message)
    setCopied(true)
    window.setTimeout(() => setCopied(false), 1400)
  }

  return (
    <section className='rounded-4xl border border-zinc-950/10 bg-white/70 p-5 shadow-2xl shadow-zinc-950/8 backdrop-blur-md dark:border-white/10 dark:bg-zinc-950/70 dark:shadow-black/25'>
      <div className='flex items-start justify-between gap-4'>
        <div>
          <p className='font-mono text-xs font-semibold tracking-widest text-sky-600 uppercase dark:text-sky-300'>
            brief builder
          </p>
          <h2 className='mt-2 text-2xl font-semibold text-zinc-950 dark:text-white'>
            Shape the first message.
          </h2>
        </div>
        <span className='grid h-11 w-11 shrink-0 place-items-center rounded-2xl bg-sky-500/10 text-sky-600 ring-1 ring-sky-500/15 dark:text-sky-300'>
          <Sparkles className='h-5 w-5' />
        </span>
      </div>

      <div className='mt-5 grid gap-4'>
        {(Object.keys(briefOptions) as BriefKey[]).map((group) => (
          <div key={group}>
            <p className='font-mono text-xs text-zinc-500 uppercase dark:text-zinc-500'>
              {group}
            </p>
            <div className='mt-2 flex flex-wrap gap-2'>
              {briefOptions[group].map((option) => (
                <button
                  key={option}
                  type='button'
                  onClick={() =>
                    setBrief((current) => ({ ...current, [group]: option }))
                  }
                  className={cn(
                    'rounded-full border px-3 py-2 text-sm font-semibold transition focus-visible:ring-2 focus-visible:ring-sky-400/70 focus-visible:outline-none active:scale-95',
                    brief[group] === option
                      ? 'border-sky-500/35 bg-sky-500/10 text-sky-700 dark:text-sky-200'
                      : 'border-zinc-950/10 bg-zinc-50 text-zinc-600 hover:border-sky-500/30 hover:text-zinc-950 dark:border-white/10 dark:bg-white/6 dark:text-zinc-300 dark:hover:text-white',
                  )}
                >
                  {option}
                </button>
              ))}
            </div>
          </div>
        ))}
      </div>

      <div className='mt-5 rounded-3xl border border-zinc-950/10 bg-zinc-50 p-4 dark:border-white/10 dark:bg-white/6'>
        <p className='text-sm leading-7 text-zinc-700 dark:text-zinc-300'>
          {message}
        </p>
      </div>

      <button
        type='button'
        onClick={copyBrief}
        className='hover:-tranzinc-y-0.5 mt-4 inline-flex items-center gap-2 rounded-full bg-zinc-950 px-4 py-2 text-sm font-semibold text-white transition hover:bg-sky-700 focus-visible:ring-2 focus-visible:ring-sky-400/70 focus-visible:outline-none dark:bg-white dark:text-zinc-950 dark:hover:bg-sky-200'
      >
        {copied ? (
          <Check className='h-4 w-4' />
        ) : (
          <Clipboard className='h-4 w-4' />
        )}
        {copied ? 'Copied' : 'Copy brief'}
      </button>
    </section>
  )
}
