'use client'

import { useState } from 'react'
import Link from 'next/link'
import { ArrowUpRight, Mail, Radio, Sparkles, Terminal } from 'lucide-react'
import { FaGithub, FaLinkedinIn } from 'react-icons/fa6'

import { cn } from '@/lib/utils/cn'

const channels = [
  {
    label: 'GitHub',
    href: 'https://github.com/yourusername',
    value: 'github.com/yourusername',
    icon: FaGithub,
    status: 'Best for code, repos, and proof of work.',
    command: 'git remote add alireza',
  },
  {
    label: 'LinkedIn',
    href: 'https://linkedin.com/in/yourusername',
    value: 'linkedin.com/in/yourusername',
    icon: FaLinkedinIn,
    status: 'Best for roles, contracts, and quick intros.',
    command: 'connect --context frontend',
  },
  {
    label: 'Email',
    href: 'mailto:your.email@example.com',
    value: 'your.email@example.com',
    icon: Mail,
    status: 'Best for detailed scope and async planning.',
    command: 'send --subject project',
  },
]

export function ContactSignalPanel() {
  const [activeChannel, setActiveChannel] = useState(channels[0])
  const ActiveIcon = activeChannel.icon

  return (
    <section className='relative isolate overflow-hidden rounded-4xl border border-zinc-950/10 bg-zinc-950/92 p-5 text-white shadow-2xl shadow-zinc-950/15 backdrop-blur-xs sm:p-6 dark:border-white/10 dark:bg-zinc-950/82 dark:shadow-black/30'>
      <div className='absolute inset-0 -z-10 opacity-80'>
        <div className='absolute -top-20 right-0 h-64 w-64 rounded-full bg-sky-400/12 blur-3xl' />
        <div className='absolute -bottom-28 -left-20 h-80 w-80 rounded-full bg-cyan-300/10 blur-3xl' />
        <div className='absolute inset-x-8 top-1/2 h-px bg-linear-to-r from-transparent via-sky-200/20 to-transparent' />
      </div>

      <div className='relative grid min-h-72 place-items-center overflow-hidden rounded-4xl border border-white/10 bg-black/25 sm:min-h-80 xl:min-h-[23rem]'>
        <div className='absolute h-68 w-68 animate-pulse rounded-full border border-sky-200/12 sm:h-80 sm:w-80' />
        <div className='absolute h-52 w-52 animate-[spin_20s_linear_infinite_reverse] rounded-full border border-dashed border-sky-200/25 sm:h-60 sm:w-60' />
        <div className='absolute h-36 w-36 animate-[spin_26s_linear_infinite] rounded-full border border-white/10 sm:h-44 sm:w-44' />
        <div className='absolute h-28 w-28 rounded-full bg-sky-300/10 blur-2xl sm:h-36 sm:w-36' />
        <div className='grid h-28 w-28 place-items-center rounded-[2rem] border border-sky-200/25 bg-zinc-950/90 text-white shadow-2xl shadow-sky-950/40 sm:h-32 sm:w-32'>
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

      <div className='mt-5'>
        <div className='flex items-center justify-between gap-4'>
          <p className='font-mono text-sm font-semibold text-sky-300'>
            contact
          </p>
          <span className='inline-flex items-center gap-2 rounded-full border border-sky-200/15 bg-sky-300/10 px-3 py-1.5 font-mono text-xs text-sky-100'>
            <span className='relative flex h-2 w-2'>
              <span className='absolute inline-flex h-full w-full animate-ping rounded-full bg-sky-300 opacity-70' />
              <span className='relative inline-flex h-2 w-2 rounded-full bg-sky-200' />
            </span>
            online
          </span>
        </div>

        <h1 className='mt-4 text-3xl leading-tight font-semibold tracking-normal sm:text-4xl'>
          Send a signal.
        </h1>
        <p className='mt-3 max-w-xl text-sm leading-6 text-zinc-300'>
          Send the idea, rough scope, or messy version. I can shape it into
          something fast, usable, and polished.
        </p>
      </div>

      <div className='mt-5 grid gap-2 sm:grid-cols-3'>
        {channels.map((channel) => {
          const Icon = channel.icon
          const isActive = activeChannel.label === channel.label

          return (
            <button
              key={channel.label}
              type='button'
              onClick={() => setActiveChannel(channel)}
              className={cn(
                'group flex items-center justify-between gap-3 rounded-2xl border px-3 py-2.5 text-left transition focus-visible:ring-2 focus-visible:ring-sky-300/70 focus-visible:outline-none',
                isActive
                  ? 'border-sky-200/30 bg-sky-300/12'
                  : 'border-white/10 bg-white/6 hover:border-white/20 hover:bg-white/9',
              )}
            >
              <span className='flex min-w-0 items-center gap-3'>
                <span
                  className={cn(
                    'grid h-9 w-9 shrink-0 place-items-center rounded-xl transition',
                    isActive
                      ? 'bg-white/16 text-white'
                      : 'bg-white/10 text-white',
                  )}
                >
                  <Icon className='h-4 w-4' />
                </span>
                <span className='block min-w-0 text-sm font-semibold text-white'>
                  {channel.label}
                </span>
              </span>
              <ArrowUpRight className='h-4 w-4 shrink-0 text-zinc-500 transition group-hover:text-white' />
            </button>
          )
        })}
      </div>

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
            target={
              activeChannel.href.startsWith('http') ? '_blank' : undefined
            }
            className='inline-flex w-fit shrink-0 items-center gap-2 rounded-full bg-white px-4 py-2 text-sm font-semibold text-zinc-950 transition hover:-translate-y-0.5 hover:bg-zinc-100 focus-visible:ring-2 focus-visible:ring-sky-300/70 focus-visible:outline-none'
          >
            Open {activeChannel.label}
            <ArrowUpRight className='h-4 w-4' />
          </Link>
        </div>
      </div>
    </section>
  )
}
