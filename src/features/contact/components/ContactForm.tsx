'use client'

import { Send } from 'lucide-react'

import { cn } from '@/lib/utils/cn'
import { useContact } from '../hooks/useContact'

function fieldClass(hasError: boolean) {
  return cn(
    'peer h-14 w-full rounded-2xl border border-zinc-900/10 bg-zinc-50/90 px-4 pt-5 pb-2 text-zinc-950 transition outline-none placeholder:text-transparent focus:border-sky-400 focus:bg-white focus:ring-4 focus:ring-sky-400/12 dark:border-white/10 dark:bg-white/6 dark:text-white dark:focus:bg-zinc-950',
    hasError &&
      'border-red-400 focus:border-red-400 focus:ring-red-400/15 dark:border-red-400 dark:focus:border-red-400',
  )
}

function floatingLabelClass(hasError: boolean) {
  return cn(
    'pointer-events-none absolute left-4 top-4 text-sm font-medium text-zinc-500 transition-all peer-focus:top-2 peer-focus:text-xs peer-focus:text-sky-600 peer-[:not(:placeholder-shown)]:top-2 peer-[:not(:placeholder-shown)]:text-xs dark:text-zinc-500 dark:peer-focus:text-sky-300',
    hasError &&
      'peer-focus:text-red-400 peer-[:not(:placeholder-shown)]:text-red-400 dark:peer-focus:text-red-400 dark:peer-[:not(:placeholder-shown)]:text-red-400',
  )
}

export const ContactForm = () => {
  const { register, handleSubmit, onSubmit, errors, isSubmitting } =
    useContact()

  return (
    <form
      className='rounded-4xl border border-zinc-900/10 bg-white/76 p-6 shadow-2xl shadow-zinc-900/8 backdrop-blur-md sm:p-8 dark:border-white/10 dark:bg-zinc-950/70 dark:shadow-black/25'
      onSubmit={handleSubmit(onSubmit)}
      noValidate
    >
      <div className='mb-7 border-b border-zinc-900/10 pb-5 dark:border-white/10'>
        <p className='font-mono text-xs font-semibold tracking-widest text-sky-600 uppercase dark:text-sky-300'>
          message
        </p>
        <h2 className='mt-3 text-2xl font-semibold text-zinc-950 dark:text-white'>
          Send the details.
        </h2>
        <p className='mt-3 max-w-xl text-sm leading-6 text-zinc-500 dark:text-zinc-400'>
          Name, email, project type, and the actual message are enough.
        </p>
      </div>

      <div className='grid gap-5 sm:grid-cols-2'>
        <label className='grid gap-1.5'>
          <span className='relative block'>
            <input
              {...register('name')}
              className={fieldClass(Boolean(errors.name))}
              placeholder=' '
              type='text'
            />
            <span className={floatingLabelClass(Boolean(errors.name))}>
              Name
            </span>
          </span>

          {errors.name && (
            <p className='min-h-5 px-1 text-sm text-red-400/80'>
              {errors.name?.message}
            </p>
          )}
        </label>

        <label className='grid gap-1.5'>
          <span className='relative block'>
            <input
              {...register('email')}
              className={fieldClass(Boolean(errors.email))}
              placeholder=' '
              type='email'
            />
            <span className={floatingLabelClass(Boolean(errors.email))}>
              Email
            </span>
          </span>

          {errors.email && (
            <p className='min-h-5 px-1 text-sm text-red-400/80'>
              {errors.email.message}
            </p>
          )}
        </label>
      </div>

      <label className='mt-5 grid gap-1.5'>
        <span className='relative block'>
          <input
            {...register('project')}
            className={fieldClass(Boolean(errors.project))}
            placeholder=' '
            type='text'
          />
          <span className={floatingLabelClass(Boolean(errors.project))}>
            Project type
          </span>
        </span>

        {errors.project && (
          <p className='min-h-5 px-1 text-sm text-red-400/80'>
            {errors.project.message}
          </p>
        )}
      </label>

      <label className='mt-5 grid gap-1.5'>
        <span className='relative block'>
          <textarea
            {...register('message')}
            className={cn(
              'peer min-h-40 w-full resize-none rounded-2xl border border-zinc-900/10 bg-zinc-50/90 px-4 pt-7 pb-4 text-zinc-950 transition outline-none placeholder:text-transparent focus:border-sky-400 focus:bg-white focus:ring-4 focus:ring-sky-400/12 dark:border-white/10 dark:bg-white/6 dark:text-white dark:focus:bg-zinc-950',
              errors.message &&
                'border-red-400 focus:border-red-400 focus:ring-red-400/15 dark:border-red-400 dark:focus:border-red-400',
            )}
            placeholder=' '
          />
          <span className={floatingLabelClass(Boolean(errors.message))}>
            Message
          </span>
        </span>

        {errors.message && (
          <p className='min-h-5 px-1 text-sm text-red-400/80'>
            {errors.message.message}
          </p>
        )}
      </label>

      <div className='mt-6 flex justify-end border-t border-zinc-900/10 pt-5 dark:border-white/10'>
        <button
          type='submit'
          disabled={isSubmitting}
          className='inline-flex items-center justify-center gap-2 rounded-full bg-zinc-950 px-5 py-3 text-sm font-semibold text-white transition hover:bg-zinc-800 focus-visible:ring-2 focus-visible:ring-sky-400/70 focus-visible:outline-none disabled:cursor-not-allowed disabled:opacity-50 dark:bg-white dark:text-zinc-950 dark:hover:bg-zinc-200'
        >
          <Send className='h-4 w-4' />
          {isSubmitting ? 'Sending...' : 'Send message'}
        </button>
      </div>
    </form>
  )
}
