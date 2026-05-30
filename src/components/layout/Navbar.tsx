'use client'

import Link from 'next/link'
import { Moon, Sun } from 'lucide-react'
import { useTheme } from 'next-themes'
import { cn } from '@/lib/utils'

const navLinks = [
  { href: '#home', label: 'Home' },
  { href: '#skills', label: 'Skills' },
  { href: '#projects', label: 'Projects' },
  { href: '#contact', label: 'Contact' },
]

function ThemeToggle() {
  const { resolvedTheme, setTheme } = useTheme()
  const isDark = resolvedTheme !== 'light'

  return (
    <button
      type='button'
      onClick={() => setTheme(isDark ? 'light' : 'dark')}
      className='grid h-9 w-9 place-items-center rounded-full border border-slate-900/10 bg-white/55 text-slate-700 shadow-inner shadow-white/70 transition duration-200 hover:-translate-y-0.5 hover:border-violet-400/40 hover:bg-violet-100/70 hover:text-violet-700 focus-visible:ring-2 focus-visible:ring-violet-400/70 focus-visible:outline-none dark:border-white/10 dark:bg-white/5 dark:text-zinc-200 dark:shadow-white/5 dark:hover:bg-violet-400/10 dark:hover:text-violet-200'
      aria-label={isDark ? 'Switch to light mode' : 'Switch to dark mode'}
    >
      <Sun className='hidden h-4 w-4 dark:block' />
      <Moon className='h-4 w-4 dark:hidden' />
    </button>
  )
}

export function Navbar() {
  return (
    <header className='pointer-events-none fixed inset-x-0 top-4 z-50 flex justify-center px-3 sm:top-6 sm:px-6'>
      <nav
        className='pointer-events-auto flex w-full max-w-4xl items-center gap-2 rounded-full border border-slate-900/10 bg-white/55 px-2 py-2 shadow-2xl shadow-slate-900/10 ring-1 ring-white/70 backdrop-blur-2xl sm:grid sm:grid-cols-[1fr_auto_1fr] sm:px-3 dark:border-white/10 dark:bg-zinc-950/45 dark:shadow-black/30 dark:ring-white/5'
        aria-label='Primary navigation'
      >
        <Link
          href='#home'
          className='hidden justify-self-start rounded-full px-3 py-2 font-mono text-xs font-semibold tracking-widest text-slate-800 uppercase transition hover:text-violet-700 focus-visible:ring-2 focus-visible:ring-violet-400/70 focus-visible:outline-none sm:inline-flex dark:text-zinc-100 dark:hover:text-violet-200'
        >
          Alireza
        </Link>

        <div className='flex min-w-0 flex-1 items-center justify-center gap-1 overflow-x-auto [scrollbar-width:none] sm:flex-none [&::-webkit-scrollbar]:hidden'>
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={cn(
                'group relative shrink-0 rounded-full px-3 py-2 text-sm font-medium transition duration-200 focus-visible:ring-2 focus-visible:ring-violet-400/70 focus-visible:outline-none sm:px-4',
                'text-slate-600 hover:-translate-y-0.5 hover:bg-slate-950/5 hover:text-slate-950',
                'dark:text-zinc-300 dark:hover:bg-white/8 dark:hover:text-white',
              )}
            >
              <span className='relative z-10'>{link.label}</span>
              <span className='absolute inset-x-4 bottom-1 h-px origin-center scale-x-0 bg-gradient-to-r from-cyan-400 via-violet-500 to-amber-300 opacity-0 transition duration-200 group-hover:scale-x-100 group-hover:opacity-100' />
            </Link>
          ))}
        </div>

        <div className='flex shrink-0 items-center justify-end gap-1 justify-self-end'>
          <Link
            href='#contact'
            className='hidden rounded-full border border-slate-900/10 bg-slate-950 px-4 py-2 text-sm font-semibold text-white shadow-sm shadow-slate-900/10 transition duration-200 hover:-translate-y-0.5 hover:bg-violet-700 focus-visible:ring-2 focus-visible:ring-violet-400/70 focus-visible:outline-none md:inline-flex dark:border-white/10 dark:bg-white/8 dark:text-zinc-100 dark:shadow-inner dark:shadow-white/5 dark:hover:border-violet-400/40 dark:hover:bg-violet-400/10 dark:hover:text-violet-200'
          >
            Hire me
          </Link>
          <ThemeToggle />
        </div>
      </nav>
    </header>
  )
}
