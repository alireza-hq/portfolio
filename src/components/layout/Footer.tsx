import Link from 'next/link'
import { ArrowUpRight } from 'lucide-react'
import { FaGithub, FaLinkedinIn } from 'react-icons/fa6'
import { MdOutlineMail } from 'react-icons/md'

const sitemap = [
  { href: '/', label: 'Home' },
  { href: '/about', label: 'About' },
  { href: '/skills', label: 'Skills' },
  { href: '/projects', label: 'Projects' },
  { href: '/contact', label: 'Contact' },
]

const contactLinks = [
  {
    href: 'https://github.com/yourusername',
    label: 'github.com/yourusername',
    icon: FaGithub,
  },
  {
    href: 'https://linkedin.com/in/yourusername',
    label: 'linkedin.com/in/yourusername',
    icon: FaLinkedinIn,
  },
  {
    href: 'mailto:your.email@example.com',
    label: 'your.email@example.com',
    icon: MdOutlineMail,
  },
]

export function Footer() {
  return (
    <footer className='relative z-10 mt-16 bg-slate-950 px-4 py-10 text-white shadow-[0_-24px_80px_rgb(15_23_42/0.16)] sm:px-6 lg:px-8 dark:bg-zinc-950 dark:shadow-[0_-24px_80px_rgb(0_0_0/0.42)]'>
      <div className='mx-auto w-full max-w-7xl'>
        <div className='grid gap-10 border-b border-white/10 pb-10 lg:grid-cols-[1.25fr_0.75fr_0.9fr]'>
          <div>
            <p className='font-mono text-xs font-semibold tracking-widest text-cyan-200 uppercase'>
              end of line
            </p>
            <h2 className='mt-4 max-w-xl text-3xl font-semibold tracking-normal'>
              Clean interfaces, fast flows, and code that stays readable.
            </h2>
            <p className='mt-4 max-w-lg leading-7 text-zinc-300'>
              This portfolio is terminal-first on purpose: direct, keyboard
              friendly, and a little weird in the right places.
            </p>
          </div>

          <div>
            <p className='text-sm font-semibold text-white'>Sitemap</p>
            <div className='mt-4 grid gap-2.5'>
              {sitemap.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className='group inline-flex w-fit items-center gap-2 text-sm text-zinc-300 transition hover:text-cyan-200 focus-visible:ring-2 focus-visible:ring-cyan-300/60 focus-visible:outline-none'
                >
                  {link.label}
                  <ArrowUpRight className='h-3.5 w-3.5 opacity-0 transition group-hover:opacity-100' />
                </Link>
              ))}
            </div>
          </div>

          <div>
            <p className='text-sm font-semibold text-white'>Contact</p>
            <div className='mt-4 grid gap-3'>
              {contactLinks.map((link) => {
                const Icon = link.icon

                return (
                  <Link
                    key={link.href}
                    href={link.href}
                    target={link.href.startsWith('http') ? '_blank' : undefined}
                    className='inline-flex min-w-0 items-center gap-3 rounded-xl border border-white/12 bg-white/10 px-4 py-3 text-sm text-zinc-100 transition hover:border-cyan-300/35 hover:bg-cyan-300/12 hover:text-white focus-visible:ring-2 focus-visible:ring-cyan-300/60 focus-visible:outline-none'
                  >
                    <Icon className='h-4 w-4 shrink-0' />
                    <span className='truncate'>{link.label}</span>
                  </Link>
                )
              })}
            </div>
          </div>
        </div>

        <div className='flex flex-col gap-2 pt-5 text-xs text-zinc-400 sm:flex-row sm:items-center sm:justify-between'>
          <p>Built with Next.js, TypeScript, and Tailwind CSS.</p>
          <p>(c) 2026 Alireza. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
