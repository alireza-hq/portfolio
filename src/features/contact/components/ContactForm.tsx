'use client'

import { MessageSquareText, Send, Sparkles } from 'lucide-react'

import { cn } from '@/lib/utils'
import { useContact } from '../hooks/useContact'

const projectPresets = [
  {
    label: 'Portfolio',
    project: 'Portfolio experience',
    message:
      'I want a portfolio that feels interactive, polished, and memorable without becoming hard to use.',
  },
  {
    label: 'Dashboard',
    project: 'Dashboard interface',
    message:
      'I need a dashboard with clean flows, readable data, and UI states that feel production-ready.',
  },
  {
    label: 'Frontend fix',
    project: 'Frontend polish / refactor',
    message:
      'I have an existing frontend that needs better structure, performance, styling, and interaction details.',
  },
]

export const ContactForm = () => {
  const {
    register,
    handleSubmit,
    onSubmit,
    errors,
    isSubmitting,
    setValue,
    watch,
  } = useContact()
  const messageValue = watch('message') ?? ''

  function applyPreset(preset: (typeof projectPresets)[number]) {
    setValue('project', preset.project, {
      shouldDirty: true,
      shouldValidate: true,
    })
    setValue('message', preset.message, {
      shouldDirty: true,
      shouldValidate: true,
    })
  }

  return (
    <form
      className='relative flex h-full flex-col overflow-hidden rounded-4xl border border-zinc-900/10 bg-white/72 p-6 shadow-2xl shadow-zinc-900/8 backdrop-blur-md sm:p-8 lg:p-10 dark:border-white/10 dark:bg-zinc-950/70 dark:shadow-black/25'
      onSubmit={handleSubmit(onSubmit)}
      noValidate
    >
      <div className='pointer-events-none absolute -top-24 right-0 h-56 w-56 rounded-full bg-sky-500/10 blur-3xl dark:bg-sky-400/10' />
      <div className='relative mb-7 flex flex-col gap-5 border-b border-zinc-900/10 pb-6 dark:border-white/10'>
        <div className='flex items-start justify-between gap-4'>
          <div>
            <p className='font-mono text-xs font-semibold tracking-widest text-sky-600 uppercase dark:text-sky-300'>
              message composer
            </p>
            <h2 className='mt-2 text-3xl font-semibold text-zinc-950 dark:text-white'>
              Send a clean signal.
            </h2>
            <p className='mt-3 max-w-xl text-sm leading-6 text-zinc-500 dark:text-zinc-400'>
              Pick a starter if you want speed, then edit the fields like a
              normal person. Nothing weird, just less empty space.
            </p>
          </div>
          <span className='grid h-12 w-12 shrink-0 place-items-center rounded-2xl bg-sky-500/10 text-sky-700 ring-1 ring-sky-500/15 dark:text-sky-200'>
            <MessageSquareText className='h-5 w-5' />
          </span>
        </div>

        <div className='grid gap-2 sm:grid-cols-3'>
          {projectPresets.map((preset) => (
            <button
              key={preset.label}
              type='button'
              onClick={() => applyPreset(preset)}
              className='group rounded-2xl border border-zinc-900/10 bg-zinc-50/85 px-4 py-3 text-left transition hover:-translate-y-0.5 hover:border-sky-400/35 hover:bg-white focus-visible:ring-2 focus-visible:ring-sky-400/60 focus-visible:outline-none dark:border-white/10 dark:bg-white/6 dark:hover:bg-white/10'
            >
              <span className='flex items-center gap-2 text-sm font-semibold text-zinc-950 dark:text-white'>
                <Sparkles className='h-4 w-4 text-sky-600 dark:text-sky-300' />
                {preset.label}
              </span>
              <span className='mt-2 block text-xs leading-5 text-zinc-500 dark:text-zinc-500'>
                Quick-fill project and message.
              </span>
            </button>
          ))}
        </div>
      </div>

      <div className='grid gap-5 sm:grid-cols-2'>
        <label className='grid gap-2'>
          <span className='text-sm font-semibold text-zinc-700 dark:text-zinc-300'>
            Name
          </span>

          <input
            {...register('name')}
            className={cn(
              'h-12 rounded-2xl border border-zinc-900/10 bg-zinc-50 px-4 text-zinc-950 transition outline-none placeholder:text-zinc-400 focus:border-sky-400 focus:ring-4 focus:ring-sky-400/12 dark:border-white/10 dark:bg-white/6 dark:text-white dark:placeholder:text-zinc-600',
              errors.name &&
                'border-red-400 focus:border-red-400 focus:ring-red-400/15',
            )}
            placeholder='Your name'
            type='text'
          />

          {errors.name && (
            <p className='min-h-5 text-sm text-red-400/80'>
              {errors.name?.message}
            </p>
          )}
        </label>

        <label className='grid gap-2'>
          <span className='text-sm font-semibold text-zinc-700 dark:text-zinc-300'>
            Email
          </span>

          <input
            {...register('email')}
            className={cn(
              'h-12 rounded-2xl border border-zinc-900/10 bg-zinc-50 px-4 text-zinc-950 transition outline-none placeholder:text-zinc-400 focus:border-sky-400 focus:ring-4 focus:ring-sky-400/12 dark:border-white/10 dark:bg-white/6 dark:text-white dark:placeholder:text-zinc-600',
              errors.email &&
                'border-red-400 focus:border-red-400 focus:ring-red-400/15',
            )}
            placeholder='you@example.com'
            type='email'
          />

          {errors.email && (
            <p className='min-h-5 text-sm text-red-400/80'>
              {errors.email.message}
            </p>
          )}
        </label>
      </div>

      <label className='mt-5 grid gap-2'>
        <span className='text-sm font-semibold text-zinc-700 dark:text-zinc-300'>
          Project type
        </span>

        <input
          {...register('project')}
          className={cn(
            'h-12 rounded-2xl border border-zinc-900/10 bg-zinc-50 px-4 text-zinc-950 transition outline-none placeholder:text-zinc-400 focus:border-sky-400 focus:ring-4 focus:ring-sky-400/12 dark:border-white/10 dark:bg-white/6 dark:text-white dark:placeholder:text-zinc-600',
            errors.project &&
              'border-red-400 focus:border-red-400 focus:ring-red-400/15',
          )}
          placeholder='Portfolio, dashboard, SaaS UI...'
          type='text'
        />

        {errors.project && (
          <p className='min-h-5 text-sm text-red-400/80'>
            {errors.project.message}
          </p>
        )}
      </label>

      <label className='mt-5 grid gap-2'>
        <span className='text-sm font-semibold text-zinc-700 dark:text-zinc-300'>
          Message
        </span>

        <textarea
          {...register('message')}
          className={cn(
            'min-h-44 resize-none rounded-2xl border border-zinc-900/10 bg-zinc-50 px-4 py-3 text-zinc-950 transition outline-none placeholder:text-zinc-400 focus:border-sky-400 focus:ring-4 focus:ring-sky-400/12 dark:border-white/10 dark:bg-white/6 dark:text-white dark:placeholder:text-zinc-600',
            errors.message &&
              'border-red-400 focus:border-red-400 focus:ring-red-400/15',
          )}
          placeholder='Tell me what you want to build...'
        />

        {errors.message && (
          <p className='min-h-5 text-sm text-red-400/80'>
            {errors.message.message}
          </p>
        )}
      </label>

      <div className='mt-5 grid gap-3 sm:grid-cols-3'>
        {[
          ['reply', 'Async friendly'],
          ['scope', 'Screens + states'],
          ['handoff', 'Clean next step'],
        ].map(([label, value]) => (
          <div
            key={label}
            className='rounded-2xl border border-zinc-900/10 bg-zinc-50/75 p-4 dark:border-white/10 dark:bg-white/6'
          >
            <p className='font-mono text-xs text-sky-600 dark:text-sky-300'>
              {label}
            </p>
            <p className='mt-2 text-sm font-semibold text-zinc-800 dark:text-zinc-200'>
              {value}
            </p>
          </div>
        ))}
      </div>

      <div className='mt-auto flex flex-col gap-3 pt-6 sm:flex-row sm:items-center sm:justify-between'>
        <p className='max-w-md font-mono text-sm leading-6 text-zinc-500 dark:text-zinc-500'>
          message.length = {messageValue.length}
        </p>

        <button
          type='submit'
          disabled={isSubmitting}
          className='inline-flex items-center justify-center gap-2 rounded-full bg-zinc-950 px-5 py-3 text-sm font-semibold text-white transition hover:bg-sky-700 focus-visible:ring-2 focus-visible:ring-sky-400/70 focus-visible:outline-none disabled:cursor-not-allowed disabled:opacity-50 dark:bg-white dark:text-zinc-950 dark:hover:bg-sky-200'
        >
          <Send className='h-4 w-4' />
          {isSubmitting ? 'Sending...' : 'Send message'}
        </button>
      </div>
    </form>
  )
}
