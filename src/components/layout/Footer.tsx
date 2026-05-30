import Link from 'next/link'
import { Code2, Mail } from 'lucide-react'

const footerLinks = [
  { href: '/about', label: 'About' },
  { href: '/skills', label: 'Skills' },
  { href: '/projects', label: 'Projects' },
  { href: '/contact', label: 'Contact' },
]

export function Footer() {
  return (
    <footer className='relative z-10 px-4 pb-6 sm:px-6 lg:px-8'>
      <div className='mx-auto flex w-full max-w-7xl flex-col gap-6 border-t border-slate-900/10 pt-6 md:flex-row md:items-center md:justify-between dark:border-white/10'>
        <div>
          <p className='font-mono text-sm font-semibold tracking-widest text-slate-950 uppercase dark:text-white'>
            Alireza
          </p>
          <p className='mt-2 max-w-md text-sm leading-6 text-slate-500 dark:text-zinc-500'>
            React / Next.js developer building clean interfaces with a terminal
            soul and a product brain.
          </p>
        </div>

        <div className='flex flex-col gap-4 sm:flex-row sm:items-center'>
          <nav className='flex flex-wrap gap-2' aria-label='Footer navigation'>
            {footerLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className='rounded-full px-3 py-2 text-sm font-medium text-slate-600 transition hover:bg-slate-950/5 hover:text-violet-700 focus-visible:ring-2 focus-visible:ring-violet-400/70 focus-visible:outline-none dark:text-zinc-400 dark:hover:bg-white/8 dark:hover:text-violet-200'
              >
                {link.label}
              </Link>
            ))}
          </nav>

          <div className='flex gap-2'>
            <Link
              href='mailto:your.email@example.com'
              className='grid h-10 w-10 place-items-center rounded-full border border-slate-900/10 bg-white/55 text-slate-700 shadow-sm shadow-slate-900/5 backdrop-blur-xl transition hover:-translate-y-0.5 hover:text-violet-700 focus-visible:ring-2 focus-visible:ring-violet-400/70 focus-visible:outline-none dark:border-white/10 dark:bg-white/5 dark:text-zinc-300 dark:hover:text-violet-200'
              aria-label='Email Alireza'
            >
              <Mail className='h-4 w-4' />
            </Link>
            <Link
              href='https://github.com/yourusername'
              target='_blank'
              className='grid h-10 w-10 place-items-center rounded-full border border-slate-900/10 bg-white/55 text-slate-700 shadow-sm shadow-slate-900/5 backdrop-blur-xl transition hover:-translate-y-0.5 hover:text-violet-700 focus-visible:ring-2 focus-visible:ring-violet-400/70 focus-visible:outline-none dark:border-white/10 dark:bg-white/5 dark:text-zinc-300 dark:hover:text-violet-200'
              aria-label='Open GitHub'
            >
              <Code2 className='h-4 w-4' />
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
