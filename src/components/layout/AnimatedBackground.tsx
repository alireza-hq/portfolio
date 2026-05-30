const particles = [
  { text: 'npm run dev', className: 'top-[14%] left-[8%] delay-0' },
  { text: '<React />', className: 'top-[26%] right-[10%] delay-2' },
  { text: 'const craft = true', className: 'bottom-[24%] left-[12%] delay-4' },
  { text: 'git commit -m glow', className: 'right-[16%] bottom-[14%] delay-6' },
]

const pixels = [
  'left-[12%] top-[40%] delay-0',
  'left-[34%] top-[18%] delay-2',
  'right-[28%] top-[34%] delay-4',
  'right-[12%] top-[58%] delay-6',
  'left-[24%] bottom-[18%] delay-2',
  'right-[38%] bottom-[24%] delay-0',
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
      <div className='portfolio-background__beam portfolio-background__beam--one' />
      <div className='portfolio-background__beam portfolio-background__beam--two' />
      <div className='portfolio-background__beam portfolio-background__beam--three' />
      <div className='portfolio-background__vignette' />

      {particles.map((particle) => (
        <span
          key={particle.text}
          className={`portfolio-background__particle ${particle.className}`}
        >
          {particle.text}
        </span>
      ))}

      {pixels.map((pixel) => (
        <span
          key={pixel}
          className={`portfolio-background__pixel ${pixel}`}
        />
      ))}
    </div>
  )
}
