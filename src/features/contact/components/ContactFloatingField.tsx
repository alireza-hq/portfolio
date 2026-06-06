import type { FieldError, UseFormRegisterReturn } from 'react-hook-form'

import { cn } from '@/lib/utils/cn'

type ContactFloatingFieldProps = {
  error?: FieldError
  label: string
  registration: UseFormRegisterReturn
  type?: 'email' | 'text'
}

type ContactFloatingTextareaProps = {
  error?: FieldError
  label: string
  registration: UseFormRegisterReturn
}

function fieldClass(hasError: boolean) {
  return cn(
    'peer h-14 w-full rounded-2xl border border-zinc-900/10 bg-zinc-50/90 px-4 pt-5 pb-2 text-zinc-950 transition outline-none placeholder:text-transparent focus:border-sky-400 focus:bg-white focus:ring-1 focus:ring-sky-400/12 dark:border-white/10 dark:bg-white/6 dark:text-white dark:focus:bg-zinc-950',
    hasError &&
      'border-red-400 focus:border-red-400 focus:ring-red-400/15 dark:border-red-400 dark:focus:border-red-400',
  )
}

function textareaClass(hasError: boolean) {
  return cn(
    'peer min-h-40 w-full resize-none rounded-2xl border border-zinc-900/10 bg-zinc-50/90 px-4 pt-7 pb-4 text-zinc-950 transition outline-none placeholder:text-transparent focus:border-sky-400 focus:bg-white focus:ring-1 focus:ring-sky-400/12 dark:border-white/10 dark:bg-white/6 dark:text-white dark:focus:bg-zinc-950',
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

function FieldErrorMessage({ error }: { error?: FieldError }) {
  if (!error) return null

  return <p className='min-h-5 px-1 text-sm text-red-400/80'>{error.message}</p>
}

export function ContactFloatingField({
  error,
  label,
  registration,
  type = 'text',
}: ContactFloatingFieldProps) {
  const hasError = Boolean(error)

  return (
    <label className='grid gap-1.5'>
      <span className='relative block'>
        <input
          {...registration}
          className={fieldClass(hasError)}
          placeholder=' '
          type={type}
        />
        <span className={floatingLabelClass(hasError)}>{label}</span>
      </span>

      <FieldErrorMessage error={error} />
    </label>
  )
}

export function ContactFloatingTextarea({
  error,
  label,
  registration,
}: ContactFloatingTextareaProps) {
  const hasError = Boolean(error)

  return (
    <label className='mt-5 grid gap-1.5'>
      <span className='relative block'>
        <textarea
          {...registration}
          className={textareaClass(hasError)}
          placeholder=' '
        />
        <span className={floatingLabelClass(hasError)}>{label}</span>
      </span>

      <FieldErrorMessage error={error} />
    </label>
  )
}
