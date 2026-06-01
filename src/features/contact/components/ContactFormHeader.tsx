export function ContactFormHeader() {
  return (
    <div className='mb-7 border-b border-zinc-900/10 pb-5 dark:border-white/10'>
      <p className='font-mono text-xs font-semibold tracking-widest text-sky-600 uppercase dark:text-sky-300'>
        message
      </p>
      <h2 className='mt-3 text-2xl font-semibold text-zinc-950 dark:text-white'>
        Send the details.
      </h2>
      <p className='mt-3 max-w-xl text-sm leading-6 text-zinc-500 dark:text-zinc-400'>
        Name, email, project type, and the actual message are enough.
      </p>
    </div>
  )
}
