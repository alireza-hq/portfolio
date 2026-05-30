import Link from 'next/link'
import { ArrowUpRight, Code2, Mail } from 'lucide-react'

const sitemap = [
  { href: '/', label: 'Home' },
  { href: '/about', label: 'About' },
  { href: '/skills', label: 'Skills' },
  { href: '/projects', label: 'Projects' },
  { href: '/contact', label: 'Contact' },
]

const contactLinks = [
  {
    href: 'mailto:your.email@example.com',
    label: 'your.email@example.com',
    icon: Mail,
  },
  {
    href: 'https://github.com/yourusername',
    label: 'github.com/yourusername',
    icon: Code2,
  },
]

export function Footer() {
  return (
    <footer className='relative z-10 px-4 pb-8 sm:px-6 lg:px-8'>
      <div className='mx-auto w-full max-w-7xl border-t border-slate-900/10 pt-10 dark:border-white/10'>
        <div className='grid gap-10 rounded-[2rem] border border-slate-900/10 bg-slate-950 p-6 text-white shadow-2xl shadow-slate-950/10 sm:p-8 lg:grid-cols-[1.25fr_0.75fr_0.9fr] dark:border-white/10 dark:bg-white/7 dark:shadow-black/20'>
          <div>
            <p className='font-mono text-xs font-semibold tracking-widest text-cyan-200 uppercase'>
              end of line
            </p>
            <h2 className='mt-4 max-w-xl text-3xl font-semibold tracking-normal'>
              Clean interfaces, fast flows, and code that stays readable.
            </h2>
            <p className='mt-4 max-w-lg leading-7 text-zinc-400'>
              This portfolio is terminal-first on purpose: direct, keyboard
              friendly, and a little weird in the right places.
            </p>
          </div>

          <div>
            <p className='text-sm font-semibold text-zinc-200'>Sitemap</p>
            <div className='mt-4 grid gap-2'>
              {sitemap.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className='group inline-flex w-fit items-center gap-2 text-sm text-zinc-400 transition hover:text-white focus-visible:ring-2 focus-visible:ring-cyan-300/60 focus-visible:outline-none'
                >
                  {link.label}
                  <ArrowUpRight className='h-3.5 w-3.5 opacity-0 transition group-hover:opacity-100' />
                </Link>
              ))}
            </div>
          </div>

          <div>
            <p className='text-sm font-semibold text-zinc-200'>Contact</p>
            <div className='mt-4 grid gap-3'>
              {contactLinks.map((link) => {
                const Icon = link.icon

                return (
                  <Link
                    key={link.href}
                    href={link.href}
                    target={link.href.startsWith('http') ? '_blank' : undefined}
                    className='inline-flex min-w-0 items-center gap-3 rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-zinc-300 transition hover:border-cyan-300/30 hover:bg-cyan-300/10 hover:text-white focus-visible:ring-2 focus-visible:ring-cyan-300/60 focus-visible:outline-none'
                  >
                    <Icon className='h-4 w-4 shrink-0' />
                    <span className='truncate'>{link.label}</span>
                  </Link>
                )
              })}
            </div>
          </div>
        </div>

        <div className='flex flex-col gap-2 px-2 pt-5 text-xs text-slate-500 sm:flex-row sm:items-center sm:justify-between dark:text-zinc-600'>
          <p>Built with Next.js, TypeScript, and Tailwind CSS.</p>
          <p>© 2026 Alireza. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
