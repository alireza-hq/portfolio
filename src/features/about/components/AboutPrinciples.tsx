import { values } from '../data/values'

export const AboutPrinciples = () => {
  return (
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
  )
}
