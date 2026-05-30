import Link from 'next/link'
import { ArrowUpRight, Code2, Mail, Sparkles } from 'lucide-react'
import Terminal from '@/features/terminal/components/Terminal'

const skills = [
  'React',
  'Next.js',
  'TypeScript',
  'Tailwind CSS',
  'Node.js',
  'Prisma',
  'PostgreSQL',
  'UI Systems',
]

const projects = [
  {
    name: 'Portfolio Terminal',
    type: 'Interactive portfolio',
    description:
      'A command-line inspired personal site with discoverable commands, theme control, and a polished visual shell.',
  },
  {
    name: 'Commerce Dashboard',
    type: 'Full-stack app',
    description:
      'Product, order, and admin workflows shaped for fast scanning, clean forms, and reliable daily operation.',
  },
  {
    name: 'Ops Interface',
    type: 'Internal tool',
    description:
      'Dense tables, filters, protected routes, and stateful views for teams that need speed more than decoration.',
  },
]

const stats = [
  { value: '3+', label: 'years building' },
  { value: '12+', label: 'real projects' },
  { value: '100%', label: 'frontend obsessed' },
]

export default function Home() {
  return (
    <main
      id='home'
      className='relative z-10 min-h-screen px-4 pt-28 pb-16 sm:px-6 lg:px-8'
    >
      <section className='mx-auto grid min-h-[calc(100vh-7rem)] w-full max-w-7xl items-center gap-12 lg:grid-cols-[0.92fr_1.08fr]'>
        <div className='max-w-3xl'>
          <div className='mb-6 inline-flex items-center gap-2 rounded-full border border-slate-900/10 bg-white/55 px-3 py-2 text-sm font-medium text-slate-600 shadow-sm shadow-slate-900/5 backdrop-blur-xl dark:border-white/10 dark:bg-white/5 dark:text-zinc-300'>
            <Sparkles className='h-4 w-4 text-violet-600 dark:text-violet-300' />
            React / Next.js Developer
          </div>

          <h1 className='max-w-4xl text-5xl leading-[0.95] font-semibold tracking-normal text-slate-950 sm:text-6xl lg:text-7xl dark:text-white'>
            I build interfaces that feel fast, sharp, and expensive.
          </h1>

          <p className='mt-6 max-w-2xl text-lg leading-8 text-slate-600 dark:text-zinc-400'>
            I&apos;m Alireza, a frontend developer focused on React, Next.js,
            TypeScript, and UI systems that look clean without getting fragile.
          </p>

          <div className='mt-8 flex flex-wrap gap-3'>
            <Link
              href='#projects'
              className='inline-flex items-center gap-2 rounded-full bg-slate-950 px-5 py-3 text-sm font-semibold text-white shadow-lg shadow-slate-950/10 transition hover:-translate-y-0.5 hover:bg-violet-700 focus-visible:ring-2 focus-visible:ring-violet-400/70 focus-visible:outline-none dark:bg-white dark:text-zinc-950 dark:hover:bg-violet-200'
            >
              View projects
              <ArrowUpRight className='h-4 w-4' />
            </Link>
            <Link
              href='#contact'
              className='inline-flex items-center gap-2 rounded-full border border-slate-900/10 bg-white/55 px-5 py-3 text-sm font-semibold text-slate-800 shadow-sm shadow-slate-900/5 backdrop-blur-xl transition hover:-translate-y-0.5 hover:border-violet-400/40 hover:text-violet-700 focus-visible:ring-2 focus-visible:ring-violet-400/70 focus-visible:outline-none dark:border-white/10 dark:bg-white/5 dark:text-zinc-100 dark:hover:text-violet-200'
            >
              Let&apos;s talk
            </Link>
          </div>

          <div className='mt-10 grid max-w-xl grid-cols-3 gap-3'>
            {stats.map((stat) => (
              <div
                key={stat.label}
                className='rounded-2xl border border-slate-900/10 bg-white/45 px-4 py-3 backdrop-blur-xl dark:border-white/10 dark:bg-white/5'
              >
                <p className='text-2xl font-semibold text-slate-950 dark:text-white'>
                  {stat.value}
                </p>
                <p className='mt-1 text-xs font-medium text-slate-500 dark:text-zinc-500'>
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </div>

        <div className='relative'>
          <div className='absolute -inset-4 rounded-[2rem] bg-gradient-to-tr from-violet-500/12 via-cyan-400/8 to-amber-300/10 blur-2xl dark:from-violet-500/20 dark:via-cyan-400/10 dark:to-amber-300/10' />
          <Terminal />
        </div>
      </section>

      <section
        id='skills'
        className='mx-auto mt-20 w-full max-w-7xl border-t border-slate-900/10 py-16 dark:border-white/10'
      >
        <div className='grid gap-8 md:grid-cols-[0.7fr_1.3fr]'>
          <div>
            <p className='font-mono text-sm font-semibold text-violet-600 dark:text-violet-300'>
              stack
            </p>
            <h2 className='mt-3 text-3xl font-semibold text-slate-950 dark:text-white'>
              The tools I reach for when the work needs to hold up.
            </h2>
          </div>
          <div className='flex flex-wrap gap-3'>
            {skills.map((skill) => (
              <span
                key={skill}
                className='rounded-full border border-slate-900/10 bg-white/55 px-4 py-2 text-sm font-medium text-slate-700 shadow-sm shadow-slate-900/5 backdrop-blur-xl transition hover:-translate-y-0.5 hover:border-violet-400/40 hover:text-violet-700 dark:border-white/10 dark:bg-white/5 dark:text-zinc-300 dark:hover:text-violet-200'
              >
                {skill}
              </span>
            ))}
          </div>
        </div>
      </section>

      <section id='projects' className='mx-auto w-full max-w-7xl py-16'>
        <div className='mb-8 flex items-end justify-between gap-6'>
          <div>
            <p className='font-mono text-sm font-semibold text-violet-600 dark:text-violet-300'>
              selected work
            </p>
            <h2 className='mt-3 text-3xl font-semibold text-slate-950 dark:text-white'>
              Project shapes I like building.
            </h2>
          </div>
        </div>

        <div className='grid gap-4 md:grid-cols-3'>
          {projects.map((project) => (
            <article
              key={project.name}
              className='group rounded-3xl border border-slate-900/10 bg-white/55 p-6 shadow-xl shadow-slate-900/5 backdrop-blur-xl transition duration-200 hover:-translate-y-1 hover:border-violet-400/40 dark:border-white/10 dark:bg-white/5 dark:shadow-black/20'
            >
              <p className='text-sm font-medium text-violet-600 dark:text-violet-300'>
                {project.type}
              </p>
              <h3 className='mt-4 text-xl font-semibold text-slate-950 dark:text-white'>
                {project.name}
              </h3>
              <p className='mt-3 leading-7 text-slate-600 dark:text-zinc-400'>
                {project.description}
              </p>
              <div className='mt-6 inline-flex h-9 w-9 items-center justify-center rounded-full border border-slate-900/10 text-slate-600 transition group-hover:border-violet-400/40 group-hover:text-violet-700 dark:border-white/10 dark:text-zinc-300 dark:group-hover:text-violet-200'>
                <ArrowUpRight className='h-4 w-4' />
              </div>
            </article>
          ))}
        </div>
      </section>

      <section
        id='contact'
        className='mx-auto w-full max-w-7xl border-t border-slate-900/10 pt-16 dark:border-white/10'
      >
        <div className='flex flex-col gap-6 rounded-3xl border border-slate-900/10 bg-slate-950 p-6 text-white shadow-2xl shadow-slate-950/10 sm:p-8 md:flex-row md:items-center md:justify-between dark:border-white/10 dark:bg-white/8 dark:shadow-black/20'>
          <div>
            <p className='font-mono text-sm font-semibold text-violet-300'>
              available for work
            </p>
            <h2 className='mt-3 text-3xl font-semibold'>Got a clean build in mind?</h2>
          </div>
          <div className='flex flex-wrap gap-3'>
            <Link
              href='mailto:your.email@example.com'
              className='inline-flex items-center gap-2 rounded-full bg-white px-5 py-3 text-sm font-semibold text-slate-950 transition hover:-translate-y-0.5 hover:bg-violet-100'
            >
              <Mail className='h-4 w-4' />
              Email me
            </Link>
            <Link
              href='https://github.com/yourusername'
              target='_blank'
              className='inline-flex items-center gap-2 rounded-full border border-white/15 px-5 py-3 text-sm font-semibold text-white transition hover:-translate-y-0.5 hover:bg-white/10'
            >
              <Code2 className='h-4 w-4' />
              GitHub
            </Link>
          </div>
        </div>
      </section>
    </main>
  )
}
