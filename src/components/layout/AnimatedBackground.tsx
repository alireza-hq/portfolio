const particles = [
  { text: 'npm run dev', className: 'top-[14%] left-[8%] delay-0' },
  { text: '<React />', className: 'top-[26%] right-[10%] delay-2' },
  { text: 'const craft = true', className: 'bottom-[24%] left-[12%] delay-4' },
  { text: 'git commit -m glow', className: 'right-[16%] bottom-[14%] delay-6' },
]

export function AnimatedBackground() {
  return (
    <div
      className='portfolio-background pointer-events-none fixed inset-0 -z-10 overflow-hidden bg-slate-50 dark:bg-zinc-950'
      aria-hidden='true'
    >
      <div className='portfolio-background__aura portfolio-background__aura--violet' />
      <div className='portfolio-background__aura portfolio-background__aura--cyan' />
      <div className='portfolio-background__aura portfolio-background__aura--amber' />
      <div className='portfolio-background__grid' />
      <div className='portfolio-background__scanline' />
      <div className='portfolio-background__vignette' />

      {particles.map((particle) => (
        <span
          key={particle.text}
          className={`portfolio-background__particle ${particle.className}`}
        >
          {particle.text}
        </span>
      ))}
    </div>
  )
}
