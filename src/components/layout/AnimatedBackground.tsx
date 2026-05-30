const particles = [
  {
    text: 'npm run dev',
    className: 'top-[12%] left-[7%] motion-float-a delay-0',
  },
  {
    text: '<React />',
    className: 'top-[22%] right-[8%] motion-float-b delay-2',
  },
  {
    text: 'const craft = true',
    className: 'bottom-[24%] left-[12%] motion-float-c delay-4',
  },
  {
    text: 'git commit -m glow',
    className: 'right-[16%] bottom-[14%] motion-float-d delay-6',
  },
]

const nodes = [
  'left-[9%] top-[18%] motion-node-a delay-0',
  'left-[18%] bottom-[16%] motion-node-b delay-3',
  'left-[45%] top-[12%] motion-node-c delay-6',
  'right-[18%] top-[20%] motion-node-b delay-1',
  'right-[10%] bottom-[22%] motion-node-a delay-4',
  'left-[58%] bottom-[12%] motion-node-c delay-2',
  'right-[38%] top-[48%] motion-node-a delay-5',
  'left-[30%] top-[62%] motion-node-b delay-7',
]

const pixels = [
  'left-[12%] top-[40%] motion-pixel-a delay-0',
  'left-[34%] top-[18%] motion-pixel-b delay-2',
  'right-[28%] top-[34%] motion-pixel-c delay-4',
  'right-[12%] top-[58%] motion-pixel-a delay-6',
  'left-[24%] bottom-[18%] motion-pixel-c delay-2',
  'right-[38%] bottom-[24%] motion-pixel-b delay-0',
]

export function AnimatedBackground() {
  return (
    <div
      className='portfolio-background pointer-events-none fixed inset-0 -z-10 overflow-hidden bg-slate-50 dark:bg-zinc-950'
      aria-hidden='true'
    >
      <div className='portfolio-background__aura portfolio-background__aura--violet motion-aura-a' />
      <div className='portfolio-background__aura portfolio-background__aura--cyan motion-aura-b' />
      <div className='portfolio-background__aura portfolio-background__aura--amber motion-aura-c' />
      <div className='portfolio-background__grid' />
      <div className='portfolio-background__scanline' />
      <div className='portfolio-background__beam portfolio-background__beam--one' />
      <div className='portfolio-background__beam portfolio-background__beam--two' />
      <div className='portfolio-background__beam portfolio-background__beam--three' />
      <div className='portfolio-background__vignette' />

      {nodes.map((node) => (
        <span key={node} className={`portfolio-background__node ${node}`} />
      ))}

      {particles.map((particle) => (
        <span
          key={particle.text}
          className={`portfolio-background__particle ${particle.className}`}
        >
          {particle.text}
        </span>
      ))}

      {pixels.map((pixel) => (
        <span key={pixel} className={`portfolio-background__pixel ${pixel}`} />
      ))}
    </div>
  )
}
