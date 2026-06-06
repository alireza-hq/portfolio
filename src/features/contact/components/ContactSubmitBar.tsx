import { CheckCircle2, Send } from 'lucide-react'

type ContactSubmitBarProps = {
  isSubmitting: boolean
  submitMessage: string
}

export function ContactSubmitBar({
  isSubmitting,
  submitMessage,
}: ContactSubmitBarProps) {
  return (
    <div className='mt-6 flex flex-col gap-3 border-t border-zinc-900/10 pt-5 sm:flex-row sm:items-center sm:justify-between dark:border-white/10'>
      <div
        className='min-h-5 font-mono text-xs text-emerald-700 dark:text-emerald-300'
        role='status'
        aria-live='polite'
      >
        {submitMessage ? (
          <span className='inline-flex items-center gap-2'>
            <CheckCircle2 className='h-3.5 w-3.5' />
            {submitMessage}
          </span>
        ) : null}
      </div>
      <button
        type='submit'
        disabled={isSubmitting}
        className='inline-flex items-center justify-center gap-2 rounded-full bg-zinc-950 px-5 py-3 text-sm font-semibold text-white transition hover:bg-zinc-800 focus-visible:ring-1 focus-visible:ring-sky-400/70 focus-visible:outline-none disabled:cursor-not-allowed disabled:opacity-50 dark:bg-white dark:text-zinc-950 dark:hover:bg-zinc-200'
      >
        <Send className='h-4 w-4' />
        {isSubmitting ? 'Preparing...' : 'Compose email'}
      </button>
    </div>
  )
}
