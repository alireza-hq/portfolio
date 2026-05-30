import Link from 'next/link'
import { ArrowUpRight, Send } from 'lucide-react'
import { FaGithub, FaLinkedinIn } from 'react-icons/fa6'
import { MdOutlineMail } from 'react-icons/md'

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
        <div className='flex flex-col justify-between rounded-[2rem] border border-slate-900/10 bg-slate-950 p-6 text-white shadow-2xl shadow-slate-950/15 sm:p-8 lg:p-10 dark:border-white/10 dark:bg-zinc-950 dark:shadow-black/30'>
          <div>
            <p className='font-mono text-sm font-semibold text-purple-300'>
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
                  className='group flex items-center justify-between gap-4 rounded-2xl border border-white/10 bg-white/6 px-4 py-3 text-left transition hover:border-purple-300/40 hover:bg-purple-300/10'
                >
                  <span className='flex min-w-0 items-center gap-3'>
                    <span className='grid h-10 w-10 shrink-0 place-items-center rounded-xl bg-white/10 text-purple-200'>
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
                  <ArrowUpRight className='h-4 w-4 shrink-0 text-zinc-500 transition group-hover:text-purple-200' />
                </Link>
              )
            })}
          </div>
        </div>

        <form className='rounded-[2rem] border border-slate-900/10 bg-white/85 p-6 shadow-2xl shadow-slate-900/8 backdrop-blur-md sm:p-8 lg:p-10 dark:border-white/10 dark:bg-zinc-950/85 dark:shadow-black/25'>
          <div className='grid gap-5 sm:grid-cols-2'>
            <label className='grid gap-2'>
              <span className='text-sm font-semibold text-slate-700 dark:text-zinc-300'>
                Name
              </span>
              <input
                className='h-12 rounded-2xl border border-slate-900/10 bg-slate-50 px-4 text-slate-950 outline-none transition placeholder:text-slate-400 focus:border-purple-400 focus:ring-4 focus:ring-purple-400/12 dark:border-white/10 dark:bg-white/6 dark:text-white dark:placeholder:text-zinc-600'
                placeholder='Your name'
                type='text'
              />
            </label>

            <label className='grid gap-2'>
              <span className='text-sm font-semibold text-slate-700 dark:text-zinc-300'>
                Email
              </span>
              <input
                className='h-12 rounded-2xl border border-slate-900/10 bg-slate-50 px-4 text-slate-950 outline-none transition placeholder:text-slate-400 focus:border-purple-400 focus:ring-4 focus:ring-purple-400/12 dark:border-white/10 dark:bg-white/6 dark:text-white dark:placeholder:text-zinc-600'
                placeholder='you@example.com'
                type='email'
              />
            </label>
          </div>

          <label className='mt-5 grid gap-2'>
            <span className='text-sm font-semibold text-slate-700 dark:text-zinc-300'>
              Project type
            </span>
            <input
              className='h-12 rounded-2xl border border-slate-900/10 bg-slate-50 px-4 text-slate-950 outline-none transition placeholder:text-slate-400 focus:border-purple-400 focus:ring-4 focus:ring-purple-400/12 dark:border-white/10 dark:bg-white/6 dark:text-white dark:placeholder:text-zinc-600'
              placeholder='Portfolio, dashboard, SaaS UI...'
              type='text'
            />
          </label>

          <label className='mt-5 grid gap-2'>
            <span className='text-sm font-semibold text-slate-700 dark:text-zinc-300'>
              Message
            </span>
            <textarea
              className='min-h-44 resize-y rounded-2xl border border-slate-900/10 bg-slate-50 px-4 py-3 text-slate-950 outline-none transition placeholder:text-slate-400 focus:border-purple-400 focus:ring-4 focus:ring-purple-400/12 dark:border-white/10 dark:bg-white/6 dark:text-white dark:placeholder:text-zinc-600'
              placeholder='Tell me what you want to build...'
            />
          </label>

          <div className='mt-6 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between'>
            <p className='max-w-md text-sm leading-6 text-slate-500 dark:text-zinc-500'>
              The form is ready for your backend or form provider later. For now,
              your direct socials are listed first.
            </p>
            <button
              type='button'
              className='inline-flex items-center justify-center gap-2 rounded-full bg-slate-950 px-5 py-3 text-sm font-semibold text-white transition hover:bg-purple-700 focus-visible:ring-2 focus-visible:ring-purple-400/70 focus-visible:outline-none dark:bg-white dark:text-zinc-950 dark:hover:bg-purple-200'
            >
              <Send className='h-4 w-4' />
              Send message
            </button>
          </div>
        </form>
      </section>
    </main>
  )
}
