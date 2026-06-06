'use client'

import Link from 'next/link'
import { FileText, Moon, Sun } from 'lucide-react'
import { useTheme } from 'next-themes'
import { usePathname } from 'next/navigation'
import { routes } from '@/lib/routes'
import { cn } from '@/lib/utils/cn'

const navLinks = [
  { href: routes.home, label: 'Home' },
  { href: routes.about, label: 'About' },
  { href: routes.skills, label: 'Skills' },
  { href: routes.projects, label: 'Projects' },
  { href: routes.contact, label: 'Contact' },
]

function ThemeToggle() {
  const { resolvedTheme, setTheme } = useTheme()
  const isDark = resolvedTheme !== 'light'

  return (
    <button
      type='button'
      onClick={() => setTheme(isDark ? 'light' : 'dark')}
      className='grid h-9.5 w-9.5 cursor-pointer place-items-center rounded-full border border-zinc-900/10 bg-white/55 text-zinc-700 shadow-inner shadow-white/70 transition duration-200 hover:border-sky-500/30 hover:bg-sky-50 hover:text-zinc-950 focus-visible:ring-2 focus-visible:ring-sky-500/60 focus-visible:outline-none dark:border-white/10 dark:bg-white/5 dark:text-zinc-200 dark:shadow-white/5 dark:hover:bg-sky-400/10 dark:hover:text-white'
      aria-label='Toggle color theme'
      title='Toggle color theme'
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
        className='pointer-events-auto grid w-full max-w-5xl grid-cols-[1fr_auto] items-center gap-2 rounded-3xl border border-zinc-900/10 bg-white/55 px-2 py-2 shadow-2xl ring-1 shadow-zinc-900/10 ring-white/70 backdrop-blur-md sm:grid-cols-[auto_1fr_auto] sm:rounded-full dark:border-white/10 dark:bg-zinc-950/45 dark:shadow-black/30 dark:ring-white/5'
        aria-label='Primary navigation'
      >
        <Link
          href={routes.home}
          className='brand-type-link rounded-full px-3 py-2 font-mono text-xs font-semibold tracking-widest text-zinc-800 uppercase transition hover:text-sky-700 focus-visible:ring-1 focus-visible:ring-sky-500/60 focus-visible:outline-none dark:text-zinc-100 dark:hover:text-sky-200'
          aria-label='Go home'
        >
          <span className='brand-type' aria-hidden='true' />
          <span className='sr-only'>Alireza</span>
        </Link>

        <div className='order-3 col-span-2 flex min-w-0 scrollbar-none items-center justify-start gap-1 overflow-x-auto border-t border-zinc-900/8 pt-2 sm:order-none sm:col-span-1 sm:justify-center sm:border-t-0 sm:pt-0 dark:border-white/10 [&::-webkit-scrollbar]:hidden'>
          {navLinks.map((link) => {
            const isActive = pathname === link.href

            return (
              <Link
                key={link.href}
                href={link.href}
                className={cn(
                  'group relative shrink-0 rounded-full px-3 py-2 text-sm font-medium transition duration-200 focus-visible:ring-2 focus-visible:ring-sky-500/60 focus-visible:outline-none sm:px-4',
                  'text-zinc-600 hover:bg-zinc-950/5 hover:text-zinc-950',
                  'dark:text-zinc-300 dark:hover:bg-sky-400/10 dark:hover:text-white',
                  isActive &&
                    'bg-zinc-950/7 text-zinc-950 dark:bg-white/10 dark:text-white',
                )}
              >
                <span className='relative z-10'>{link.label}</span>
                <span
                  className={cn(
                    'absolute inset-x-4 bottom-1 h-px origin-center bg-sky-500 transition duration-200 dark:bg-sky-300',
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
            href={routes.resume}
            className='hidden items-center gap-2 rounded-full border border-zinc-900/10 bg-zinc-950 px-4 py-2 text-sm font-semibold text-white shadow-sm shadow-zinc-900/10 transition duration-200 hover:bg-sky-700 focus-visible:ring-2 focus-visible:ring-sky-500/60 focus-visible:outline-none md:inline-flex dark:border-white/10 dark:bg-white/8 dark:text-zinc-100 dark:shadow-inner dark:shadow-white/5 dark:hover:border-sky-300/30 dark:hover:bg-sky-400/10 dark:hover:text-white'
          >
            <FileText className='h-4 w-4' />
            Resume
          </Link>
          <ThemeToggle />
        </div>
      </nav>
    </header>
  )
}
