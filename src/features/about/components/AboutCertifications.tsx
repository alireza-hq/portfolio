import { certifications } from '../data/certifications'

export const AboutCertifications = () => {
  return (
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
  )
}
