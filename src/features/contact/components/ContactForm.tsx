'use client'

import { Send } from 'lucide-react'

import { cn } from '@/lib/utils'
import { useContact } from '../hooks/useContact'

export const ContactForm = () => {
  const { register, handleSubmit, onSubmit, errors, isSubmitting } =
    useContact()

  return (
    <form
      className='flex h-full flex-col rounded-4xl border border-zinc-900/10 bg-white/76 p-6 shadow-2xl shadow-zinc-900/8 backdrop-blur-md sm:p-8 lg:p-10 dark:border-white/10 dark:bg-zinc-950/70 dark:shadow-black/25'
      onSubmit={handleSubmit(onSubmit)}
      noValidate
    >
      <div className='mb-8 border-b border-zinc-900/10 pb-6 dark:border-white/10'>
        <p className='font-mono text-xs font-semibold tracking-widest text-sky-600 uppercase dark:text-sky-300'>
          message
        </p>
        <h2 className='mt-3 text-3xl font-semibold text-zinc-950 dark:text-white'>
          Send the details.
        </h2>
        <p className='mt-3 max-w-xl text-sm leading-6 text-zinc-500 dark:text-zinc-400'>
          Keep it short or go detailed. Name, email, project type, and the
          actual message are enough.
        </p>
      </div>

      <div className='grid gap-6 sm:grid-cols-2'>
        <label className='grid gap-2'>
          <span className='text-sm font-semibold text-zinc-700 dark:text-zinc-300'>
            Name
          </span>

          <input
            {...register('name')}
            className={cn(
              'h-13 rounded-2xl border border-zinc-900/10 bg-zinc-50/90 px-4 text-zinc-950 transition outline-none placeholder:text-zinc-400 focus:border-sky-400 focus:bg-white focus:ring-4 focus:ring-sky-400/12 dark:border-white/10 dark:bg-white/6 dark:text-white dark:placeholder:text-zinc-600 dark:focus:bg-white/8',
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
              'h-13 rounded-2xl border border-zinc-900/10 bg-zinc-50/90 px-4 text-zinc-950 transition outline-none placeholder:text-zinc-400 focus:border-sky-400 focus:bg-white focus:ring-4 focus:ring-sky-400/12 dark:border-white/10 dark:bg-white/6 dark:text-white dark:placeholder:text-zinc-600 dark:focus:bg-white/8',
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

      <label className='mt-6 grid gap-2'>
        <span className='text-sm font-semibold text-zinc-700 dark:text-zinc-300'>
          Project type
        </span>

        <input
          {...register('project')}
          className={cn(
            'h-13 rounded-2xl border border-zinc-900/10 bg-zinc-50/90 px-4 text-zinc-950 transition outline-none placeholder:text-zinc-400 focus:border-sky-400 focus:bg-white focus:ring-4 focus:ring-sky-400/12 dark:border-white/10 dark:bg-white/6 dark:text-white dark:placeholder:text-zinc-600 dark:focus:bg-white/8',
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

      <label className='mt-6 grid flex-1 gap-2'>
        <span className='text-sm font-semibold text-zinc-700 dark:text-zinc-300'>
          Message
        </span>

        <textarea
          {...register('message')}
          className={cn(
            'min-h-52 flex-1 resize-none rounded-2xl border border-zinc-900/10 bg-zinc-50/90 px-4 py-4 text-zinc-950 transition outline-none placeholder:text-zinc-400 focus:border-sky-400 focus:bg-white focus:ring-4 focus:ring-sky-400/12 dark:border-white/10 dark:bg-white/6 dark:text-white dark:placeholder:text-zinc-600 dark:focus:bg-white/8',
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

      <div className='mt-7 flex flex-col gap-4 border-t border-zinc-900/10 pt-6 sm:flex-row sm:items-center sm:justify-between dark:border-white/10'>
        <p className='max-w-md text-sm leading-6 text-zinc-500 dark:text-zinc-500'>
          I’ll reply through the email you provide. The form is ready to wire to
          a provider later.
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
