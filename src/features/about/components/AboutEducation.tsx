import { education } from '../data/education'

export const AboutEducation = () => {
  return (
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
  )
}
