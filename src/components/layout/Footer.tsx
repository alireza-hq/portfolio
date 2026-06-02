import Link from 'next/link'
import { ArrowUpRight } from 'lucide-react'
import { FaGithub, FaLinkedinIn } from 'react-icons/fa6'
import { MdOutlineMail } from 'react-icons/md'

import { routes } from '@/lib/routes'

const sitemap = [
  { href: routes.home, label: 'Home' },
  { href: routes.about, label: 'About' },
  { href: routes.skills, label: 'Skills' },
  { href: routes.projects, label: 'Projects' },
  { href: routes.contact, label: 'Contact' },
]

const contactLinks = [
  {
    href: routes.social.github,
    command: 'inspect --source code',
    label: 'GitHub',
    value: routes.social.github.replace('https://', ''),
    icon: FaGithub,
  },
  {
    href: routes.social.linkedin,
    command: 'connect --professional',
    label: 'LinkedIn',
    value: routes.social.linkedin
      .replace('https://www.', '')
      .replace(/\/$/, ''),
    icon: FaLinkedinIn,
  },
  {
    href: routes.social.email,
    command: 'send --subject opportunity',
    label: 'Email',
    value: routes.social.email.replace('mailto:', ''),
    icon: MdOutlineMail,
  },
]

export function Footer() {
  return (
    <footer className='relative z-10 mt-16 overflow-hidden bg-zinc-950 px-4 py-10 text-white shadow-[0_-24px_80px_rgb(15_23_42/0.16)] sm:px-6 lg:px-8 dark:bg-zinc-950 dark:shadow-[0_-24px_80px_rgb(0_0_0/0.42)]'>
      <div className='pointer-events-none absolute inset-x-0 top-0 h-px bg-linear-to-r from-transparent via-sky-300/60 to-transparent' />
      <div className='pointer-events-none absolute -top-32 right-8 h-64 w-64 rounded-full bg-sky-400/8 blur-3xl' />
      <div className='mx-auto w-full max-w-7xl'>
        <div className='grid gap-10 border-b border-white/10 pb-10 lg:grid-cols-[1.25fr_0.7fr_1fr]'>
          <div>
            <p className='font-mono text-xs font-semibold tracking-widest text-sky-200 uppercase'>
              END OF LINE
            </p>
            <p className='mt-2 font-mono text-xs text-zinc-500'>
              You&apos;ve reached the bottom of the workspace.
            </p>
            <h2 className='mt-4 max-w-xl text-3xl font-semibold tracking-normal'>
              Clean interfaces, fast flows, and code that stays readable.
            </h2>
            <p className='mt-4 max-w-lg leading-7 text-zinc-300'>
              This portfolio is terminal-first on purpose: direct, keyboard
              friendly, and a little weird in the right places.
            </p>
          </div>

          <nav aria-label='Footer sitemap'>
            <p className='font-mono text-xs font-semibold tracking-widest text-zinc-500 uppercase'>
              sitemap
            </p>
            <div className='mt-4 grid gap-2.5'>
              {sitemap.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className='group inline-flex w-fit items-center gap-2 rounded-lg px-1 py-1 text-sm text-zinc-300 transition hover:translate-x-1 hover:text-sky-200 focus-visible:ring-2 focus-visible:ring-sky-300/60 focus-visible:outline-none'
                >
                  <span className='font-mono text-xs text-sky-300/70'>/</span>
                  {link.label}
                  <ArrowUpRight className='h-3.5 w-3.5 opacity-0 transition group-hover:opacity-100' />
                </Link>
              ))}
            </div>
          </nav>

          <section aria-labelledby='footer-contact-title'>
            <p
              id='footer-contact-title'
              className='font-mono text-xs font-semibold tracking-widest text-zinc-500 uppercase'
            >
              signal routes
            </p>
            <div className='mt-4 grid gap-3'>
              {contactLinks.map((link) => {
                const Icon = link.icon
                const isExternal = link.href.startsWith('http')

                return (
                  <Link
                    key={link.href}
                    href={link.href}
                    target={isExternal ? '_blank' : undefined}
                    rel={isExternal ? 'noreferrer' : undefined}
                    aria-label={`Open ${link.label}`}
                    className='group grid min-w-0 grid-cols-[auto_1fr_auto] items-center gap-3 rounded-2xl border border-white/12 bg-white/[0.07] px-4 py-3 text-sm text-zinc-100 transition hover:-translate-y-0.5 hover:border-sky-300/45 hover:bg-sky-300/10 hover:shadow-[0_14px_36px_rgb(14_165_233/0.12)] focus-visible:ring-2 focus-visible:ring-sky-300/70 focus-visible:outline-none'
                  >
                    <span className='grid h-9 w-9 place-items-center rounded-xl border border-white/10 bg-zinc-900 text-sky-200 transition group-hover:border-sky-300/35 group-hover:bg-sky-300/10'>
                      <Icon className='h-4 w-4' />
                    </span>
                    <span className='min-w-0'>
                      <span className='block font-mono text-[0.68rem] text-sky-200/80'>
                        {link.command}
                      </span>
                      <span className='mt-1 flex min-w-0 flex-wrap items-baseline gap-x-2 gap-y-0.5'>
                        <span className='font-semibold text-white'>
                          {link.label}
                        </span>
                        <span className='truncate text-zinc-400'>
                          {link.value}
                        </span>
                      </span>
                    </span>
                    <ArrowUpRight className='h-4 w-4 text-zinc-500 transition group-hover:text-sky-200' />
                  </Link>
                )
              })}
            </div>
          </section>
        </div>

        <div className='flex flex-col gap-2 pt-5 text-xs text-zinc-400 sm:flex-row sm:items-center sm:justify-between'>
          <p>
            Built with Next.js, TypeScript, Tailwind CSS, and unreasonable
            attention to detail.
          </p>
          <p>© 2026 Alireza. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
