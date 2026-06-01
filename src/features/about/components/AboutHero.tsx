export const AboutHero = () => {
  return (
    <div className='grid min-h-112 overflow-hidden rounded-4xl border border-zinc-900/10 bg-zinc-950 text-white shadow-2xl shadow-zinc-950/15 lg:grid-cols-[1.05fr_0.95fr] dark:border-white/10 dark:bg-zinc-950 dark:shadow-black/30'>
      <div className='relative flex flex-col justify-between p-6 sm:p-8 lg:p-10'>
        <div>
          <p className='font-mono text-sm font-semibold text-sky-300'>
            about / profile
          </p>
          <h1 className='mt-5 max-w-3xl text-4xl leading-tight font-semibold tracking-normal sm:text-6xl'>
            Frontend-focused developer building real products.
          </h1>
          <p className='mt-6 max-w-2xl text-lg leading-8 text-zinc-300'>
            I focus on React and Next.js, with enough backend experience to
            understand how real applications connect, authenticate, fetch data,
            and stay maintainable.
          </p>
        </div>

        <div className='mt-10 grid gap-3 sm:grid-cols-3'>
          {['Next.js', 'TypeScript', 'React'].map((item) => (
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
          <div className='about-type-rotator -translate-y-5 font-mono text-[clamp(3.4rem,8vw,7rem)] leading-none font-semibold tracking-normal text-white/12 select-none sm:-translate-y-7'>
            <span className='about-type-word about-type-word--sharp'>
              Sharp
            </span>
            <span className='about-type-word about-type-word--fast'>Fast</span>
            <span className='about-type-word about-type-word--useful'>
              Useful
            </span>
          </div>
          <div className='mt-6 max-w-sm'>
            <p className='text-sm font-semibold text-sky-200'>
              Current direction
            </p>
            <p className='mt-3 leading-7 text-zinc-300'>
              Building real projects with a focus on frontend architecture,
              clean components, responsive UI, and practical product behavior.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
