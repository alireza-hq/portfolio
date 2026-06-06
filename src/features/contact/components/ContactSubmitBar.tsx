import { Send } from 'lucide-react'

type ContactSubmitBarProps = {
  isSubmitting: boolean
}

export function ContactSubmitBar({ isSubmitting }: ContactSubmitBarProps) {
  return (
    <div className='mt-6 flex justify-end border-t border-zinc-900/10 pt-5 dark:border-white/10'>
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
