'use client'

import { Send } from 'lucide-react'

import { cn } from '@/lib/utils'
import { useContact } from '../hooks/useContact'

export const ContactForm = () => {
  const { register, handleSubmit, onSubmit, errors, isSubmitting } =
    useContact()

  return (
    <form
      className='rounded-4xl border border-slate-900/10 bg-white/70 p-6 shadow-2xl shadow-slate-900/8 backdrop-blur-md sm:p-8 lg:p-10 dark:border-white/10 dark:bg-zinc-950/70 dark:shadow-black/25'
      onSubmit={handleSubmit(onSubmit)}
      noValidate
    >
      <div className='grid gap-5 sm:grid-cols-2'>
        <label className='grid gap-2'>
          <span className='text-sm font-semibold text-slate-700 dark:text-zinc-300'>
            Name
          </span>

          <input
            {...register('name')}
            className={cn(
              'h-12 rounded-2xl border border-slate-900/10 bg-slate-50 px-4 text-slate-950 transition outline-none placeholder:text-slate-400 focus:border-sky-400 focus:ring-4 focus:ring-sky-400/12 dark:border-white/10 dark:bg-white/6 dark:text-white dark:placeholder:text-zinc-600',
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
          <span className='text-sm font-semibold text-slate-700 dark:text-zinc-300'>
            Email
          </span>

          <input
            {...register('email')}
            className={cn(
              'h-12 rounded-2xl border border-slate-900/10 bg-slate-50 px-4 text-slate-950 transition outline-none placeholder:text-slate-400 focus:border-sky-400 focus:ring-4 focus:ring-sky-400/12 dark:border-white/10 dark:bg-white/6 dark:text-white dark:placeholder:text-zinc-600',
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
        <span className='text-sm font-semibold text-slate-700 dark:text-zinc-300'>
          Project type
        </span>

        <input
          {...register('project')}
          className={cn(
            'h-12 rounded-2xl border border-slate-900/10 bg-slate-50 px-4 text-slate-950 transition outline-none placeholder:text-slate-400 focus:border-sky-400 focus:ring-4 focus:ring-sky-400/12 dark:border-white/10 dark:bg-white/6 dark:text-white dark:placeholder:text-zinc-600',
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
        <span className='text-sm font-semibold text-slate-700 dark:text-zinc-300'>
          Message
        </span>

        <textarea
          {...register('message')}
          className={cn(
            'min-h-44 resize-none rounded-2xl border border-slate-900/10 bg-slate-50 px-4 py-3 text-slate-950 transition outline-none placeholder:text-slate-400 focus:border-sky-400 focus:ring-4 focus:ring-sky-400/12 dark:border-white/10 dark:bg-white/6 dark:text-white dark:placeholder:text-zinc-600',
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

      <div className='mt-6 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between'>
        <p className='max-w-md text-sm leading-6 text-slate-500 dark:text-zinc-500'>
          The form is ready for your backend or form provider later. For now,
          your direct socials are listed first.
        </p>

        <button
          type='submit'
          disabled={isSubmitting}
          className='inline-flex items-center justify-center gap-2 rounded-full bg-slate-950 px-5 py-3 text-sm font-semibold text-white transition hover:bg-sky-700 focus-visible:ring-2 focus-visible:ring-sky-400/70 focus-visible:outline-none disabled:cursor-not-allowed disabled:opacity-50 dark:bg-white dark:text-zinc-950 dark:hover:bg-sky-200'
        >
          <Send className='h-4 w-4' />
          {isSubmitting ? 'Sending...' : 'Send message'}
        </button>
      </div>
    </form>
  )
}
