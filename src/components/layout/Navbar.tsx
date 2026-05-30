'use client'

import Link from 'next/link'
import { Download, Moon, Sun } from 'lucide-react'
import { useTheme } from 'next-themes'
import { usePathname } from 'next/navigation'
import { cn } from '@/lib/utils'

const navLinks = [
  { href: '/', label: 'Home' },
  { href: '/about', label: 'About' },
  { href: '/skills', label: 'Skills' },
  { href: '/projects', label: 'Projects' },
  { href: '/contact', label: 'Contact' },
]

function ThemeToggle() {
  const { resolvedTheme, setTheme } = useTheme()
  const isDark = resolvedTheme !== 'light'

  return (
    <button
      type='button'
      onClick={() => setTheme(isDark ? 'light' : 'dark')}
      className='grid h-9.5 w-9.5 place-items-center rounded-full border border-slate-900/10 bg-white/55 text-slate-700 shadow-inner shadow-white/70 transition duration-200 hover:border-cyan-500/30 hover:bg-cyan-50 hover:text-slate-950 focus-visible:ring-2 focus-visible:ring-cyan-500/60 focus-visible:outline-none dark:border-white/10 dark:bg-white/5 dark:text-zinc-200 dark:shadow-white/5 dark:hover:bg-cyan-400/10 dark:hover:text-white'
      aria-label={isDark ? 'Switch to light mode' : 'Switch to dark mode'}
    >
      <Sun className='hidden h-4 w-4 dark:block' />
      <Moon className='h-4 w-4 dark:hidden' />
    </button>
  )
}

export function Navbar() {
  const pathname = usePathname()

  return (
    <header className='pointer-events-none fixed inset-x-0 top-4 z-50 flex justify-center px-3 sm:top-6 sm:px-6'>
      <nav
        className='pointer-events-auto grid w-full max-w-5xl grid-cols-[auto_1fr_auto] items-center gap-2 rounded-full border border-slate-900/10 bg-white/55 px-2 py-2 shadow-2xl ring-1 shadow-slate-900/10 ring-white/70 backdrop-blur-2xl dark:border-white/10 dark:bg-zinc-950/45 dark:shadow-black/30 dark:ring-white/5'
        aria-label='Primary navigation'
      >
        <Link
          href='/'
          className='brand-type-link rounded-full px-3 py-2 font-mono text-xs font-semibold tracking-widest text-slate-800 uppercase transition hover:text-slate-950 focus-visible:ring-2 focus-visible:ring-cyan-500/60 focus-visible:outline-none dark:text-zinc-100 dark:hover:text-white'
          aria-label='Go home'
        >
          <span className='brand-type' aria-hidden='true' />
          <span className='sr-only'>Alireza</span>
        </Link>

        <div className='flex min-w-0 scrollbar-none items-center justify-center gap-1 overflow-x-auto [&::-webkit-scrollbar]:hidden'>
          {navLinks.map((link) => {
            const isActive = pathname === link.href

            return (
              <Link
                key={link.href}
                href={link.href}
                className={cn(
                  'group relative shrink-0 rounded-full px-3 py-2 text-sm font-medium transition duration-200 focus-visible:ring-2 focus-visible:ring-cyan-500/60 focus-visible:outline-none sm:px-4',
                  'text-slate-600 hover:-translate-y-0.5 hover:bg-slate-950/5 hover:text-slate-950',
                  'dark:text-zinc-300 dark:hover:bg-white/8 dark:hover:text-white',
                  isActive &&
                    'bg-slate-950/7 text-slate-950 dark:bg-white/10 dark:text-white',
                )}
              >
                <span className='relative z-10'>{link.label}</span>
                <span
                  className={cn(
                    'absolute inset-x-4 bottom-1 h-px origin-center bg-cyan-500 transition duration-200 dark:bg-cyan-300',
                    isActive
                      ? 'scale-x-100 opacity-100'
                      : 'scale-x-0 opacity-0 group-hover:scale-x-100 group-hover:opacity-100',
                  )}
                />
              </Link>
            )
          })}
        </div>

        <div className='flex shrink-0 items-center justify-end gap-1'>
          <Link
            href='/resume.pdf'
            download
            className='hidden items-center gap-2 rounded-full border border-slate-900/10 bg-slate-950 px-4 py-2 text-sm font-semibold text-white shadow-sm shadow-slate-900/10 transition duration-200 hover:-translate-y-0.5 hover:bg-slate-800 focus-visible:ring-2 focus-visible:ring-cyan-500/60 focus-visible:outline-none md:inline-flex dark:border-white/10 dark:bg-white/8 dark:text-zinc-100 dark:shadow-inner dark:shadow-white/5 dark:hover:border-cyan-300/30 dark:hover:bg-cyan-400/10 dark:hover:text-white'
          >
            <Download className='h-4 w-4' />
            Resume
          </Link>
          <ThemeToggle />
        </div>
      </nav>
    </header>
  )
}
