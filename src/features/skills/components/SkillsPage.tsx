const groups = [
  {
    title: 'Frontend',
    items: ['React', 'Next.js', 'TypeScript', 'Tailwind CSS', 'Accessibility'],
  },
  {
    title: 'Backend adjacent',
    items: ['Node.js', 'Express', 'Prisma', 'PostgreSQL', 'REST APIs'],
  },
  {
    title: 'Craft',
    items: ['Design systems', 'Performance', 'State modeling', 'DX', 'Git'],
  },
]

export function SkillsPage() {
  return (
    <main className='relative z-10 min-h-screen px-4 pt-32 pb-20 sm:px-6 lg:px-8'>
      <section className='mx-auto w-full max-w-7xl'>
        <p className='font-mono text-sm font-semibold text-violet-600 dark:text-violet-300'>
          skills
        </p>
        <h1 className='mt-4 max-w-4xl text-5xl leading-tight font-semibold tracking-normal text-slate-950 dark:text-white'>
          The stack I use to ship clean, fast web interfaces.
        </h1>

        <div className='mt-12 grid gap-4 md:grid-cols-3'>
          {groups.map((group) => (
            <section
              key={group.title}
              className='rounded-3xl border border-slate-900/10 bg-white/55 p-6 shadow-xl shadow-slate-900/5 backdrop-blur-xl dark:border-white/10 dark:bg-white/5 dark:shadow-black/20'
            >
              <h2 className='text-2xl font-semibold text-slate-950 dark:text-white'>
                {group.title}
              </h2>
              <div className='mt-6 flex flex-wrap gap-3'>
                {group.items.map((item) => (
                  <span
                    key={item}
                    className='rounded-full border border-slate-900/10 bg-slate-50/80 px-4 py-2 text-sm font-medium text-slate-700 dark:border-white/10 dark:bg-zinc-950/50 dark:text-zinc-300'
                  >
                    {item}
                  </span>
                ))}
              </div>
            </section>
          ))}
        </div>
      </section>
    </main>
  )
}
