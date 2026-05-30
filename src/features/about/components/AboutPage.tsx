const education = [
  {
    title: 'Computer Science',
    meta: 'Frontend engineering, web architecture, data structures',
  },
  {
    title: 'Self-directed product engineering',
    meta: 'React, Next.js, TypeScript, performance, accessibility',
  },
]

const certifications = [
  'Responsive Web Design',
  'JavaScript Algorithms and Data Structures',
  'React / Next.js production patterns',
  'TypeScript application architecture',
]

const values = [
  'Interfaces that feel instant',
  'Readable code that survives change',
  'Useful polish over decorative noise',
  'Design systems with practical constraints',
]

export function AboutPage() {
  return (
    <main className='relative z-10 min-h-screen px-4 pt-32 pb-20 sm:px-6 lg:px-8'>
      <section className='mx-auto grid w-full max-w-7xl gap-10 lg:grid-cols-[0.85fr_1.15fr]'>
        <div>
          <p className='font-mono text-sm font-semibold text-violet-600 dark:text-violet-300'>
            about
          </p>
          <h1 className='mt-4 text-5xl leading-tight font-semibold tracking-normal text-slate-950 dark:text-white'>
            Frontend developer with a taste for sharp, practical UI.
          </h1>
          <p className='mt-6 max-w-2xl text-lg leading-8 text-slate-600 dark:text-zinc-400'>
            I care about the boring things that make products feel premium:
            state, spacing, speed, responsive behavior, and code that other
            people can actually work with.
          </p>
        </div>

        <div className='grid gap-4'>
          <section className='rounded-3xl border border-slate-900/10 bg-white/55 p-6 shadow-xl shadow-slate-900/5 backdrop-blur-xl dark:border-white/10 dark:bg-white/5 dark:shadow-black/20'>
            <h2 className='text-2xl font-semibold text-slate-950 dark:text-white'>
              Education
            </h2>
            <div className='mt-5 grid gap-4'>
              {education.map((item) => (
                <div key={item.title}>
                  <p className='font-semibold text-slate-900 dark:text-zinc-100'>
                    {item.title}
                  </p>
                  <p className='mt-1 text-slate-600 dark:text-zinc-400'>
                    {item.meta}
                  </p>
                </div>
              ))}
            </div>
          </section>

          <section className='rounded-3xl border border-slate-900/10 bg-white/55 p-6 shadow-xl shadow-slate-900/5 backdrop-blur-xl dark:border-white/10 dark:bg-white/5 dark:shadow-black/20'>
            <h2 className='text-2xl font-semibold text-slate-950 dark:text-white'>
              Certifications
            </h2>
            <div className='mt-5 flex flex-wrap gap-3'>
              {certifications.map((item) => (
                <span
                  key={item}
                  className='rounded-full border border-slate-900/10 bg-slate-50/80 px-4 py-2 text-sm font-medium text-slate-700 dark:border-white/10 dark:bg-zinc-950/50 dark:text-zinc-300'
                >
                  {item}
                </span>
              ))}
            </div>
          </section>

          <section className='rounded-3xl border border-slate-900/10 bg-slate-950 p-6 text-white shadow-xl shadow-slate-900/10 dark:border-white/10 dark:bg-white/8 dark:shadow-black/20'>
            <h2 className='text-2xl font-semibold'>How I work</h2>
            <div className='mt-5 grid gap-3 sm:grid-cols-2'>
              {values.map((item) => (
                <p
                  key={item}
                  className='rounded-2xl border border-white/10 bg-white/6 px-4 py-3 text-sm text-zinc-200'
                >
                  {item}
                </p>
              ))}
            </div>
          </section>
        </div>
      </section>
    </main>
  )
}
