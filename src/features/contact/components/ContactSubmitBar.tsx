import { AlertCircle, CheckCircle2, Send } from 'lucide-react'

import type { ContactSubmitStatus } from '../hooks/useContact'

type ContactSubmitBarProps = {
  isSubmitting: boolean
  submitStatus: ContactSubmitStatus
}

export function ContactSubmitBar({
  isSubmitting,
  submitStatus,
}: ContactSubmitBarProps) {
  const StatusIcon = submitStatus.type === 'error' ? AlertCircle : CheckCircle2

  return (
    <div className='mt-6 flex flex-col gap-3 border-t border-zinc-900/10 pt-5 sm:flex-row sm:items-center sm:justify-between dark:border-white/10'>
      <div
        className={`min-h-5 font-mono text-xs ${
          submitStatus.type === 'error'
            ? 'text-red-600 dark:text-red-300'
            : 'text-emerald-700 dark:text-emerald-300'
        }`}
        role='status'
        aria-live='polite'
      >
        {submitStatus.message ? (
          <span className='inline-flex items-center gap-2'>
            <StatusIcon className='h-3.5 w-3.5' />
            {submitStatus.message}
          </span>
        ) : null}
      </div>
      <button
        type='submit'
        disabled={isSubmitting}
        className='inline-flex items-center justify-center gap-2 rounded-full bg-zinc-950 px-5 py-3 text-sm font-semibold text-white transition hover:bg-zinc-800 focus-visible:ring-1 focus-visible:ring-sky-400/70 focus-visible:outline-none disabled:cursor-not-allowed disabled:opacity-50 dark:bg-white dark:text-zinc-950 dark:hover:bg-zinc-200'
      >
        <Send className='h-4 w-4' />
        {isSubmitting ? 'Sending...' : 'Send message'}
      </button>
    </div>
  )
}
