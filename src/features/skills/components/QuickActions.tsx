const workflow = [
  'Plan structure before building',
  'Build small reusable components',
  'Validate forms and API boundaries',
  'Keep commits and refactors controlled',
]

export function QuickActions() {
  return (
    <section className='rounded-4xl border border-zinc-900/10 bg-white/70 p-6 shadow-xl shadow-zinc-900/5 backdrop-blur-xl dark:border-white/10 dark:bg-white/6 dark:shadow-black/20'>
      <p className='font-mono text-xs font-semibold tracking-widest text-sky-600 uppercase dark:text-sky-300'>
        workflow
      </p>
      <h2 className='mt-3 text-2xl font-semibold text-zinc-950 dark:text-white'>
        How I use this stack
      </h2>
      <div className='mt-4'>
        {workflow.map((item) => (
          <div
            key={item}
            className='flex gap-3 border-b border-zinc-900/10 py-3 text-sm text-zinc-700 last:border-b-0 dark:border-white/10 dark:text-zinc-300'
          >
            <span className='font-mono text-sky-600 dark:text-sky-300'>-</span>
            <span>{item}</span>
          </div>
        ))}
      </div>
    </section>
  )
}
