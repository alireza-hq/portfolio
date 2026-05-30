import Link from 'next/link'
import { Code2, Mail } from 'lucide-react'

export function ContactPage() {
  return (
    <main className='relative z-10 min-h-screen px-4 pt-32 pb-20 sm:px-6 lg:px-8'>
      <section className='mx-auto flex min-h-[calc(100vh-12rem)] w-full max-w-5xl flex-col justify-center'>
        <p className='font-mono text-sm font-semibold text-violet-600 dark:text-violet-300'>
          contact
        </p>
        <h1 className='mt-4 max-w-4xl text-5xl leading-tight font-semibold tracking-normal text-slate-950 dark:text-white'>
          Got a clean build in mind?
        </h1>
        <p className='mt-6 max-w-2xl text-lg leading-8 text-slate-600 dark:text-zinc-400'>
          Send the idea, the rough scope, or the messy version. I can help turn
          it into something fast, usable, and polished.
        </p>

        <div className='mt-10 flex flex-wrap gap-3'>
          <Link
            href='mailto:your.email@example.com'
            className='inline-flex items-center gap-2 rounded-full bg-slate-950 px-5 py-3 text-sm font-semibold text-white shadow-lg shadow-slate-950/10 transition hover:-translate-y-0.5 hover:bg-violet-700 focus-visible:ring-2 focus-visible:ring-violet-400/70 focus-visible:outline-none dark:bg-white dark:text-zinc-950 dark:hover:bg-violet-200'
          >
            <Mail className='h-4 w-4' />
            Email me
          </Link>
          <Link
            href='https://github.com/yourusername'
            target='_blank'
            className='inline-flex items-center gap-2 rounded-full border border-slate-900/10 bg-white/55 px-5 py-3 text-sm font-semibold text-slate-800 shadow-sm shadow-slate-900/5 backdrop-blur-xl transition hover:-translate-y-0.5 hover:border-violet-400/40 hover:text-violet-700 focus-visible:ring-2 focus-visible:ring-violet-400/70 focus-visible:outline-none dark:border-white/10 dark:bg-white/5 dark:text-zinc-100 dark:hover:text-violet-200'
          >
            <Code2 className='h-4 w-4' />
            GitHub
          </Link>
        </div>
      </section>
    </main>
  )
}
