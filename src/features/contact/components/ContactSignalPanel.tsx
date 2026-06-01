'use client'

import { useState } from 'react'

import { ContactChannelCommand } from './ContactChannelCommand'
import { ContactChannelSelector } from './ContactChannelSelector'
import { ContactSignalIntro } from './ContactSignalIntro'
import { ContactSignalVisual } from './ContactSignalVisual'
import { channels } from '../data/channels'

export function ContactSignalPanel() {
  const [activeChannel, setActiveChannel] = useState(channels[0])

  return (
    <section className='relative isolate overflow-hidden rounded-4xl border border-zinc-950/10 bg-zinc-950/92 p-5 text-white shadow-2xl shadow-zinc-950/15 backdrop-blur-xs sm:p-6 dark:border-white/10 dark:bg-zinc-950/82 dark:shadow-black/30'>
      <div className='absolute inset-0 -z-10 opacity-80'>
        <div className='absolute -top-20 right-0 h-64 w-64 rounded-full bg-sky-400/12 blur-3xl' />
        <div className='absolute -bottom-28 -left-20 h-80 w-80 rounded-full bg-cyan-300/10 blur-3xl' />
        <div className='absolute inset-x-8 top-1/2 h-px bg-linear-to-r from-transparent via-sky-200/20 to-transparent' />
      </div>

      <ContactSignalVisual activeChannel={activeChannel} />
      <ContactSignalIntro />
      <ContactChannelSelector
        activeChannel={activeChannel}
        channels={channels}
        onSelect={setActiveChannel}
      />
      <ContactChannelCommand activeChannel={activeChannel} />
    </section>
  )
}
