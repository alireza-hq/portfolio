import { ArrowUpRight } from 'lucide-react'

const projects = [
  {
    name: 'Portfolio Terminal',
    type: 'Interactive portfolio',
    description:
      'A terminal-driven personal site with command discovery, theme control, and a focused developer identity.',
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

export function ProjectsPage() {
  return (
    <main className='relative z-10 min-h-screen px-4 pt-32 pb-20 sm:px-6 lg:px-8'>
      <section className='mx-auto w-full max-w-7xl'>
        <p className='font-mono text-sm font-semibold text-violet-600 dark:text-violet-300'>
          projects
        </p>
        <h1 className='mt-4 max-w-4xl text-5xl leading-tight font-semibold tracking-normal text-slate-950 dark:text-white'>
          Selected project shapes I like building.
        </h1>

        <div className='mt-12 grid gap-4 md:grid-cols-3'>
          {projects.map((project) => (
            <article
              key={project.name}
              className='group rounded-3xl border border-slate-900/10 bg-white/55 p-6 shadow-xl shadow-slate-900/5 backdrop-blur-xl transition duration-200 hover:-translate-y-1 hover:border-violet-400/40 dark:border-white/10 dark:bg-white/5 dark:shadow-black/20'
            >
              <p className='text-sm font-medium text-violet-600 dark:text-violet-300'>
                {project.type}
              </p>
              <h2 className='mt-4 text-xl font-semibold text-slate-950 dark:text-white'>
                {project.name}
              </h2>
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
    </main>
  )
}
