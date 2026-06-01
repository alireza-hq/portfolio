const education = [
  {
    period: '2022 - Now',
    title: 'Computer Science',
    meta: 'Frontend engineering, web architecture, data structures',
  },
  {
    period: 'Always',
    title: 'Self-directed product engineering',
    meta: 'React, Next.js, TypeScript, performance, accessibility',
  },
]

const certifications = [
  {
    title: 'Responsive Web Design',
    issuer: 'Certification',
  },
  {
    title: 'JavaScript Algorithms and Data Structures',
    issuer: 'Certification',
  },
  {
    title: 'React / Next.js production patterns',
    issuer: 'Specialization',
  },
  {
    title: 'TypeScript application architecture',
    issuer: 'Specialization',
  },
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
      <section className='mx-auto w-full max-w-7xl'>
        <div className='rounded-4 grid min-h-112 overflow-hidden border border-zinc-900/10 bg-zinc-950 text-white shadow-2xl shadow-zinc-950/15 lg:grid-cols-[1.05fr_0.95fr] dark:border-white/10 dark:bg-zinc-950 dark:shadow-black/30'>
          <div className='relative flex flex-col justify-between p-6 sm:p-8 lg:p-10'>
            <div>
              <p className='font-mono text-sm font-semibold text-sky-300'>
                about / profile
              </p>
              <h1 className='mt-5 max-w-3xl text-4xl leading-tight font-semibold tracking-normal sm:text-6xl'>
                Frontend developer with a taste for sharp, practical UI.
              </h1>
              <p className='mt-6 max-w-2xl text-lg leading-8 text-zinc-300'>
                I care about the boring things that make products feel premium:
                state, spacing, speed, responsive behavior, and code that other
                people can actually work with.
              </p>
            </div>

            <div className='mt-10 grid gap-3 sm:grid-cols-3'>
              {['React', 'Next.js', 'TypeScript'].map((item) => (
                <div
                  key={item}
                  className='border-t border-white/12 pt-3 font-mono text-sm text-zinc-300'
                >
                  {item}
                </div>
              ))}
            </div>
          </div>

          <div className='relative min-h-72 border-t border-white/10 bg-white/3 p-6 sm:p-8 lg:border-t-0 lg:border-l lg:p-10'>
            <div className='absolute inset-0 bg-[linear-gradient(135deg,transparent_0%,rgb(14_165_233/0.16)_48%,transparent_100%)]' />
            <div className='relative flex h-full flex-col justify-end'>
              <div className='about-type-rotator font-mono text-[clamp(3.4rem,8vw,7rem)] leading-none font-semibold tracking-normal text-white/12 select-none'>
                <span />
              </div>
              <div className='mt-6 max-w-sm'>
                <p className='text-sm font-semibold text-sky-200'>
                  Current direction
                </p>
                <p className='mt-3 leading-7 text-zinc-300'>
                  Building portfolio-grade interfaces with terminal energy,
                  restrained motion, and production-minded component structure.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className='mt-8 grid gap-8 lg:grid-cols-[0.8fr_1.2fr]'>
          <section className='rounded-4xl border border-zinc-900/10 bg-white/80 p-6 shadow-xl shadow-zinc-900/5 backdrop-blur-md dark:border-white/10 dark:bg-zinc-950/80 dark:shadow-black/20'>
            <div className='flex items-center justify-between gap-4 border-b border-zinc-900/10 pb-5 dark:border-white/10'>
              <div>
                <p className='font-mono text-xs font-semibold tracking-widest text-sky-600 uppercase dark:text-sky-300'>
                  education
                </p>
                <h2 className='mt-2 text-2xl font-semibold text-zinc-950 dark:text-white'>
                  Learning path
                </h2>
              </div>
              <span className='education-orb h-3 w-3 rounded-full border border-sky-500/45 bg-sky-500/30 shadow-[0_0_24px_rgb(14_165_233/0.75)]' />
            </div>

            <div className='relative mt-6 grid gap-6 pl-6 before:absolute before:top-2 before:bottom-2 before:left-1 before:w-px before:bg-zinc-900/10 dark:before:bg-white/12'>
              {education.map((item) => (
                <article key={item.title} className='relative'>
                  <span className='education-orb absolute top-1 left-[-25.35px] h-3 w-3 rounded-full border-2 border-white bg-sky-500 dark:border-zinc-950' />
                  <p className='font-mono text-xs text-zinc-500 dark:text-zinc-500'>
                    {item.period}
                  </p>
                  <h3 className='mt-2 font-semibold text-zinc-950 dark:text-white'>
                    {item.title}
                  </h3>
                  <p className='mt-2 leading-7 text-zinc-600 dark:text-zinc-400'>
                    {item.meta}
                  </p>
                </article>
              ))}
            </div>
          </section>

          <section className='grid gap-8'>
            <div className='rounded-4xl border border-zinc-900/10 bg-white/80 p-6 shadow-xl shadow-zinc-900/5 backdrop-blur-md dark:border-white/10 dark:bg-zinc-950/80 dark:shadow-black/20'>
              <p className='font-mono text-xs font-semibold tracking-widest text-sky-600 uppercase dark:text-sky-300'>
                certifications
              </p>
              <div className='mt-5 grid gap-3 sm:grid-cols-2'>
                {certifications.map((item) => (
                  <a
                    key={item.title}
                    href='#'
                    className='group rounded-2xl border border-zinc-900/10 bg-zinc-50/90 p-4 shadow-sm shadow-zinc-900/5 transition hover:-translate-y-0.5 hover:border-sky-400/40 hover:bg-white dark:border-white/10 dark:bg-white/6 dark:hover:bg-white/10'
                  >
                    <span className='font-mono text-[0.65rem] font-semibold tracking-widest text-sky-600 uppercase dark:text-sky-300'>
                      {item.issuer}
                    </span>
                    <span className='mt-2 block text-sm font-semibold text-zinc-800 group-hover:text-sky-700 dark:text-zinc-200 dark:group-hover:text-sky-200'>
                      {item.title}
                    </span>
                  </a>
                ))}
              </div>
            </div>

            <div className='grid overflow-hidden rounded-4xl border border-zinc-900/10 bg-white/80 shadow-xl shadow-zinc-900/5 backdrop-blur-md sm:grid-cols-[0.9fr_1.1fr] dark:border-white/10 dark:bg-zinc-950/80 dark:shadow-black/20'>
              <div className='relative flex min-h-64 flex-col justify-between overflow-hidden bg-zinc-100/80 p-6 dark:bg-white/5'>
                <div className='absolute -right-10 -bottom-10 h-40 w-40 rounded-full bg-sky-500/12 blur-2xl' />
                <p className='font-mono text-xs font-semibold tracking-widest text-sky-600 uppercase dark:text-sky-300'>
                  principles
                </p>
                <div className='relative'>
                  <p className='font-mono text-7xl leading-none font-semibold text-zinc-950/5 dark:text-white/8'>
                    04
                  </p>
                  <h2 className='mt-4 text-2xl font-semibold text-zinc-950 dark:text-white'>
                    How I like the work to feel.
                  </h2>
                </div>
              </div>

              <div className='grid divide-y divide-zinc-900/10 dark:divide-white/10'>
                {values.map((item) => (
                  <p
                    key={item}
                    className='px-6 py-4 text-sm font-medium text-zinc-700 dark:text-zinc-300'
                  >
                    {item}
                  </p>
                ))}
              </div>
            </div>
          </section>
        </div>
      </section>
    </main>
  )
}
