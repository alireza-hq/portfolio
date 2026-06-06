export function ContactSignalIntro() {
  return (
    <div className='mt-5'>
      <div className='flex items-center justify-between gap-4'>
        <p className='font-mono text-sm font-semibold text-sky-600 dark:text-sky-300'>
          contact
        </p>
        <span className='inline-flex items-center gap-2 rounded-full border border-sky-500/20 bg-sky-500/10 px-3 py-1.5 font-mono text-xs text-sky-700 dark:border-sky-200/15 dark:bg-sky-300/10 dark:text-sky-100'>
          <span className='relative flex h-2 w-2'>
            <span className='absolute inline-flex h-full w-full animate-ping rounded-full bg-sky-300 opacity-70' />
            <span className='relative inline-flex h-2 w-2 rounded-full bg-sky-200' />
          </span>
          online
        </span>
      </div>

      <h1 className='mt-4 text-3xl leading-tight font-semibold tracking-normal sm:text-4xl'>
        Send a signal.
      </h1>
      <p className='mt-3 max-w-xl text-sm leading-6 text-zinc-600 dark:text-zinc-300'>
        Whether it is a project, opportunity, or a quick question, feel free to
        reach out.
      </p>
    </div>
  )
}
