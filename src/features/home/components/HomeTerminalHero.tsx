import Link from 'next/link'
import { ArrowUpRight, Sparkles } from 'lucide-react'
import Terminal from '@/features/terminal/components/Terminal'

export function HomeTerminalHero() {
  return (
    <section className='relative z-10 mx-auto flex min-h-[calc(100vh-7rem)] w-full max-w-6xl flex-col items-center justify-center gap-8 px-4 pt-28 pb-16 text-center sm:px-6 lg:px-8'>
      <div className='inline-flex items-center gap-2 rounded-full border border-slate-900/10 bg-white/55 px-3 py-2 text-sm font-medium text-slate-600 shadow-sm shadow-slate-900/5 backdrop-blur-xl dark:border-white/10 dark:bg-white/5 dark:text-zinc-300'>
        <Sparkles className='h-4 w-4 text-sky-600 dark:text-sky-300' />
        Terminal-first portfolio
      </div>

      <div className='max-w-4xl'>
        <h1 className='text-5xl leading-[0.95] font-semibold tracking-normal text-slate-950 sm:text-6xl lg:text-7xl dark:text-white'>
          I build fast, clean interfaces.
        </h1>
        <p className='mx-auto mt-5 max-w-2xl text-lg leading-8 text-slate-600 dark:text-zinc-400'>
          Start with the terminal. Type <span className='font-mono'>help</span>,
          or jump into the focused pages when you want the full story.
        </p>
      </div>

      <div className='relative w-full'>
        <div className='absolute -inset-4 rounded-4xl bg-linear-to-tr from-sky-500/12 via-cyan-400/8 to-amber-300/10 blur-2xl dark:from-sky-500/20 dark:via-cyan-400/10 dark:to-amber-300/10' />
        <Terminal />
      </div>

      <div className='flex flex-wrap justify-center gap-3'>
        <Link
          href='/about'
          className='inline-flex items-center gap-2 rounded-full bg-slate-950 px-5 py-3 text-sm font-semibold text-white shadow-lg shadow-slate-950/10 transition hover:-translate-y-0.5 hover:bg-sky-700 focus-visible:ring-2 focus-visible:ring-sky-400/70 focus-visible:outline-none dark:bg-white dark:text-zinc-950 dark:hover:bg-sky-200'
        >
          About me
          <ArrowUpRight className='h-4 w-4' />
        </Link>
        <Link
          href='/projects'
          className='inline-flex items-center gap-2 rounded-full border border-slate-900/10 bg-white/55 px-5 py-3 text-sm font-semibold text-slate-800 shadow-sm shadow-slate-900/5 backdrop-blur-xl transition hover:-translate-y-0.5 hover:border-sky-400/40 hover:text-sky-700 focus-visible:ring-2 focus-visible:ring-sky-400/70 focus-visible:outline-none dark:border-white/10 dark:bg-white/5 dark:text-zinc-100 dark:hover:text-sky-200'
        >
          Projects
        </Link>
      </div>
    </section>
  )
}
