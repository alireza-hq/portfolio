import {
  Braces,
  Database,
  Gauge,
  GitBranch,
  Layers3,
  Palette,
  ShieldCheck,
  Sparkles,
  SquareTerminal,
} from 'lucide-react'

const skillGroups = [
  {
    title: 'Interface Engineering',
    description: 'Polished, responsive product UI with strong state boundaries.',
    icon: Layers3,
    items: ['React', 'Next.js', 'TypeScript', 'Tailwind CSS', 'Accessibility'],
  },
  {
    title: 'Application Logic',
    description: 'Data flows, forms, commands, and client-side architecture.',
    icon: Braces,
    items: ['State modeling', 'React Hook Form', 'Zod', 'REST APIs', 'Prisma'],
  },
  {
    title: 'Backend Adjacent',
    description: 'Enough backend fluency to ship complete web experiences.',
    icon: Database,
    items: ['Node.js', 'Express', 'PostgreSQL', 'Auth flows', 'API contracts'],
  },
]

const strengths = [
  {
    title: 'Performance minded',
    copy: 'Interfaces stay light, fast, and readable under real content.',
    icon: Gauge,
  },
  {
    title: 'Design systems',
    copy: 'Components are built to scale without turning into visual noise.',
    icon: Palette,
  },
  {
    title: 'Developer experience',
    copy: 'Folder structure, naming, and utilities stay easy to reason about.',
    icon: SquareTerminal,
  },
  {
    title: 'Reliable delivery',
    copy: 'Git habits, checks, and small commits keep the work controlled.',
    icon: GitBranch,
  },
]

const toolbox = [
  'Next.js App Router',
  'React Server Components',
  'Tailwind CSS v4',
  'Framer-style motion systems',
  'TypeScript',
  'pnpm',
  'Git',
  'Vercel-ready builds',
]

export function SkillsPage() {
  return (
    <main className='relative z-10 min-h-screen px-4 pt-32 pb-20 sm:px-6 lg:px-8'>
      <section className='mx-auto w-full max-w-7xl'>
        <div className='grid gap-8 lg:grid-cols-[0.95fr_1.05fr] lg:items-end'>
          <div>
            <p className='font-mono text-sm font-semibold text-sky-600 dark:text-sky-300'>
              skills
            </p>
            <h1 className='mt-4 max-w-4xl text-5xl leading-tight font-semibold tracking-normal text-slate-950 sm:text-6xl dark:text-white'>
              A focused stack for fast, clean product interfaces.
            </h1>
            <p className='mt-6 max-w-2xl text-lg leading-8 text-slate-600 dark:text-zinc-400'>
              I care about the full path from idea to interaction: structure,
              performance, visual polish, and code that stays pleasant after the
              first version ships.
            </p>
          </div>

          <div className='grid gap-3 sm:grid-cols-3'>
            {[
              ['01', 'Frontend first'],
              ['02', 'Typed logic'],
              ['03', 'Production polish'],
            ].map(([number, label]) => (
              <div
                key={label}
                className='rounded-3xl border border-slate-900/10 bg-white/65 p-5 shadow-xl shadow-slate-900/5 backdrop-blur-xl dark:border-white/10 dark:bg-white/6 dark:shadow-black/20'
              >
                <p className='font-mono text-3xl font-semibold text-slate-950 dark:text-white'>
                  {number}
                </p>
                <p className='mt-3 text-sm font-medium text-slate-500 dark:text-zinc-400'>
                  {label}
                </p>
              </div>
            ))}
          </div>
        </div>

        <div className='mt-12 grid gap-4 lg:grid-cols-3'>
          {skillGroups.map((group) => {
            const Icon = group.icon

            return (
              <section
                key={group.title}
                className='group rounded-[2rem] border border-slate-900/10 bg-white/70 p-6 shadow-xl shadow-slate-900/5 backdrop-blur-xl transition hover:-translate-y-1 hover:border-sky-400/45 dark:border-white/10 dark:bg-zinc-950/70 dark:shadow-black/20'
              >
                <div className='flex items-start justify-between gap-4'>
                  <div className='grid h-12 w-12 place-items-center rounded-2xl bg-sky-500/10 text-sky-700 ring-1 ring-sky-500/15 dark:bg-sky-400/10 dark:text-sky-200 dark:ring-sky-300/15'>
                    <Icon className='h-5 w-5' />
                  </div>
                  <Sparkles className='h-4 w-4 text-slate-300 transition group-hover:text-sky-400 dark:text-zinc-700 dark:group-hover:text-sky-300' />
                </div>

                <h2 className='mt-6 text-2xl font-semibold text-slate-950 dark:text-white'>
                  {group.title}
                </h2>
                <p className='mt-3 text-sm leading-6 text-slate-500 dark:text-zinc-400'>
                  {group.description}
                </p>

                <div className='mt-6 flex flex-wrap gap-2'>
                  {group.items.map((item) => (
                    <span
                      key={item}
                      className='rounded-full border border-slate-900/10 bg-slate-50/90 px-3 py-1.5 text-sm font-medium text-slate-700 dark:border-white/10 dark:bg-white/6 dark:text-zinc-300'
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </section>
            )
          })}
        </div>

        <div className='mt-4 grid gap-4 lg:grid-cols-[1.2fr_0.8fr]'>
          <section className='rounded-[2rem] border border-slate-900/10 bg-slate-950 p-6 text-white shadow-2xl shadow-slate-950/15 sm:p-8 dark:border-white/10 dark:bg-zinc-950 dark:shadow-black/25'>
            <div className='flex items-center gap-3'>
              <div className='grid h-11 w-11 place-items-center rounded-2xl bg-sky-300/12 text-sky-200 ring-1 ring-sky-200/15'>
                <ShieldCheck className='h-5 w-5' />
              </div>
              <div>
                <p className='font-mono text-xs font-semibold tracking-widest text-sky-200 uppercase'>
                  working style
                </p>
                <h2 className='mt-1 text-2xl font-semibold'>
                  Practical, calm, production-shaped.
                </h2>
              </div>
            </div>

            <div className='mt-8 grid gap-3 sm:grid-cols-2'>
              {strengths.map((strength) => {
                const Icon = strength.icon

                return (
                  <article
                    key={strength.title}
                    className='rounded-2xl border border-white/10 bg-white/6 p-4'
                  >
                    <Icon className='h-5 w-5 text-sky-200' />
                    <h3 className='mt-4 font-semibold'>{strength.title}</h3>
                    <p className='mt-2 text-sm leading-6 text-zinc-400'>
                      {strength.copy}
                    </p>
                  </article>
                )
              })}
            </div>
          </section>

          <section className='rounded-[2rem] border border-slate-900/10 bg-white/70 p-6 shadow-xl shadow-slate-900/5 backdrop-blur-xl sm:p-8 dark:border-white/10 dark:bg-white/6 dark:shadow-black/20'>
            <p className='font-mono text-xs font-semibold tracking-widest text-sky-600 uppercase dark:text-sky-300'>
              toolbox
            </p>
            <h2 className='mt-3 text-2xl font-semibold text-slate-950 dark:text-white'>
              Tools I reach for.
            </h2>

            <div className='mt-6 grid gap-2'>
              {toolbox.map((item) => (
                <div
                  key={item}
                  className='flex items-center justify-between rounded-2xl border border-slate-900/10 bg-slate-50/80 px-4 py-3 text-sm font-medium text-slate-700 dark:border-white/10 dark:bg-zinc-950/45 dark:text-zinc-300'
                >
                  <span>{item}</span>
                  <span className='h-2 w-2 rounded-full bg-sky-500 shadow-[0_0_18px_rgb(14_165_233/0.6)]' />
                </div>
              ))}
            </div>
          </section>
        </div>
      </section>
    </main>
  )
}
