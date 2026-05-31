import Link from 'next/link'
import { ArrowUpRight } from 'lucide-react'
import { FaGithub, FaLinkedinIn } from 'react-icons/fa6'
import { MdOutlineMail } from 'react-icons/md'
import { ContactBriefBuilder } from './ContactBriefBuilder'
import { ContactForm } from './ContactForm'

const socials = [
  {
    label: 'GitHub',
    href: 'https://github.com/yourusername',
    value: 'github.com/yourusername',
    icon: FaGithub,
  },
  {
    label: 'LinkedIn',
    href: 'https://linkedin.com/in/yourusername',
    value: 'linkedin.com/in/yourusername',
    icon: FaLinkedinIn,
  },
  {
    label: 'Email',
    href: 'mailto:your.email@example.com',
    value: 'your.email@example.com',
    icon: MdOutlineMail,
  },
]

export function ContactPage() {
  return (
    <main className='relative z-10 min-h-screen px-4 pt-32 pb-20 sm:px-6 lg:px-8'>
      <section className='mx-auto grid w-full max-w-7xl gap-8 lg:grid-cols-[0.82fr_1.18fr]'>
        <div className='flex flex-col justify-between rounded-4xl border border-zinc-950/10 bg-zinc-950/90 p-6 text-white shadow-2xl shadow-zinc-950/15 backdrop-blur-xs sm:p-8 lg:p-10 dark:border-white/10 dark:bg-zinc-950/80 dark:shadow-black/30'>
          <div>
            <p className='font-mono text-sm font-semibold text-sky-300'>
              contact
            </p>
            <h1 className='mt-5 text-5xl leading-tight font-semibold tracking-normal sm:text-6xl'>
              Got a clean build in mind?
            </h1>
            <p className='mt-6 max-w-xl text-lg leading-8 text-zinc-300'>
              Send the idea, the rough scope, or the messy version. I can help
              turn it into something fast, usable, and polished.
            </p>
          </div>

          <div className='mt-10 grid gap-3'>
            {socials.map((social) => {
              const Icon = social.icon

              return (
                <Link
                  key={social.label}
                  href={social.href}
                  target={social.href.startsWith('http') ? '_blank' : undefined}
                  className='group flex items-center justify-between gap-4 rounded-2xl border border-white/10 bg-white/6 px-4 py-3 text-left transition hover:border-sky-300/40 hover:bg-sky-300/10'
                >
                  <span className='flex min-w-0 items-center gap-3'>
                    <span className='grid h-10 w-10 shrink-0 place-items-center rounded-xl bg-white/10 text-sky-200'>
                      <Icon className='h-4.5 w-4.5' />
                    </span>
                    <span className='min-w-0'>
                      <span className='block text-sm font-semibold text-white'>
                        {social.label}
                      </span>
                      <span className='block truncate text-sm text-zinc-400'>
                        {social.value}
                      </span>
                    </span>
                  </span>
                  <ArrowUpRight className='h-4 w-4 shrink-0 text-zinc-500 transition group-hover:text-sky-200' />
                </Link>
              )
            })}
          </div>
        </div>

        <div className='grid gap-5'>
          <ContactBriefBuilder />
          <ContactForm />
        </div>
      </section>
    </main>
  )
}
