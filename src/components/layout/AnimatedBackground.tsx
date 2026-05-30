'use client'

import { useEffect, useRef } from 'react'

type FloatingItem = {
  key: string
  className: string
  x: number
  y: number
  ampX: number
  ampY: number
  speed: number
  phase: number
}

type FloatingText = FloatingItem & {
  text: string
}

const particles: FloatingText[] = [
  {
    key: 'npm',
    text: 'pnpm run dev',
    className: 'portfolio-background__particle',
    x: 7,
    y: 12,
    ampX: 190,
    ampY: 120,
    speed: 0.7,
    phase: 0,
  },
  {
    key: 'react',
    text: '<React />',
    className: 'portfolio-background__particle',
    x: 78,
    y: 22,
    ampX: 170,
    ampY: 160,
    speed: 0.58,
    phase: 1.8,
  },
  {
    key: 'craft',
    text: 'const craft = true',
    className: 'portfolio-background__particle',
    x: 12,
    y: 68,
    ampX: 220,
    ampY: 130,
    speed: 0.5,
    phase: 3.1,
  },
  {
    key: 'git',
    text: 'git commit -m glow',
    className: 'portfolio-background__particle',
    x: 68,
    y: 76,
    ampX: 210,
    ampY: 150,
    speed: 0.62,
    phase: 4.4,
  },
]

const nodes: FloatingItem[] = [
  {
    key: 'n1',
    className: 'portfolio-background__node',
    x: 9,
    y: 18,
    ampX: 260,
    ampY: 120,
    speed: 0.86,
    phase: 0.2,
  },
  {
    key: 'n2',
    className: 'portfolio-background__node portfolio-background__node--large',
    x: 18,
    y: 78,
    ampX: 220,
    ampY: 190,
    speed: 0.68,
    phase: 1.2,
  },
  {
    key: 'n3',
    className: 'portfolio-background__node',
    x: 45,
    y: 12,
    ampX: 250,
    ampY: 180,
    speed: 0.76,
    phase: 2.4,
  },
  {
    key: 'n4',
    className: 'portfolio-background__node',
    x: 82,
    y: 20,
    ampX: 200,
    ampY: 140,
    speed: 0.92,
    phase: 3.2,
  },
  {
    key: 'n5',
    className: 'portfolio-background__node portfolio-background__node--large',
    x: 90,
    y: 72,
    ampX: 230,
    ampY: 170,
    speed: 0.6,
    phase: 4.1,
  },
  {
    key: 'n6',
    className: 'portfolio-background__node',
    x: 58,
    y: 84,
    ampX: 190,
    ampY: 150,
    speed: 0.82,
    phase: 5.2,
  },
  {
    key: 'n7',
    className: 'portfolio-background__node',
    x: 62,
    y: 48,
    ampX: 280,
    ampY: 110,
    speed: 0.7,
    phase: 2.8,
  },
  {
    key: 'n8',
    className: 'portfolio-background__node',
    x: 30,
    y: 62,
    ampX: 240,
    ampY: 175,
    speed: 0.74,
    phase: 5.8,
  },
]

const pixels: FloatingItem[] = [
  {
    key: 'p1',
    className: 'portfolio-background__pixel',
    x: 12,
    y: 40,
    ampX: 120,
    ampY: 90,
    speed: 1.2,
    phase: 0.4,
  },
  {
    key: 'p2',
    className: 'portfolio-background__pixel',
    x: 34,
    y: 18,
    ampX: 130,
    ampY: 110,
    speed: 1.05,
    phase: 1.6,
  },
  {
    key: 'p3',
    className: 'portfolio-background__pixel',
    x: 72,
    y: 34,
    ampX: 110,
    ampY: 140,
    speed: 1.25,
    phase: 2.6,
  },
  {
    key: 'p4',
    className: 'portfolio-background__pixel',
    x: 88,
    y: 58,
    ampX: 150,
    ampY: 80,
    speed: 1.1,
    phase: 3.4,
  },
  {
    key: 'p5',
    className: 'portfolio-background__pixel',
    x: 24,
    y: 82,
    ampX: 160,
    ampY: 90,
    speed: 1.3,
    phase: 4.7,
  },
  {
    key: 'p6',
    className: 'portfolio-background__pixel',
    x: 62,
    y: 76,
    ampX: 140,
    ampY: 100,
    speed: 1.18,
    phase: 5.6,
  },
]

function useAnimatedItems() {
  return useRef(new Map<string, HTMLElement>())
}

export function AnimatedBackground() {
  const animatedRefs = useAnimatedItems()

  useEffect(() => {
    let frameId = 0
    const items = [...particles, ...nodes, ...pixels]

    function animate(now: number) {
      const time = now / 1000

      for (const item of items) {
        const element = animatedRefs.current.get(item.key)

        if (!element) continue

        const x =
          Math.sin(time * item.speed + item.phase) * item.ampX +
          Math.sin(time * item.speed * 0.31 + item.phase) * item.ampX * 0.45
        const y =
          Math.cos(time * item.speed * 0.82 + item.phase) * item.ampY +
          Math.sin(time * item.speed * 0.47 + item.phase) * item.ampY * 0.35
        const rotate = Math.sin(time * item.speed + item.phase) * 8

        element.style.transform = `translate3d(${x}px, ${y}px, 0) rotate(${rotate}deg)`
      }

      frameId = requestAnimationFrame(animate)
    }

    frameId = requestAnimationFrame(animate)

    return () => cancelAnimationFrame(frameId)
  }, [animatedRefs])

  return (
    <div
      className='portfolio-background pointer-events-none fixed inset-0 z-0 overflow-hidden bg-slate-50 dark:bg-zinc-950'
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

      {nodes.map((node) => (
        <span
          key={node.key}
          ref={(element) => {
            if (element) animatedRefs.current.set(node.key, element)
            else animatedRefs.current.delete(node.key)
          }}
          className={node.className}
          style={{ left: `${node.x}%`, top: `${node.y}%` }}
        />
      ))}

      {particles.map((particle) => (
        <span
          key={particle.key}
          ref={(element) => {
            if (element) animatedRefs.current.set(particle.key, element)
            else animatedRefs.current.delete(particle.key)
          }}
          className={particle.className}
          style={{ left: `${particle.x}%`, top: `${particle.y}%` }}
        >
          {particle.text}
        </span>
      ))}

      {pixels.map((pixel) => (
        <span
          key={pixel.key}
          ref={(element) => {
            if (element) animatedRefs.current.set(pixel.key, element)
            else animatedRefs.current.delete(pixel.key)
          }}
          className={pixel.className}
          style={{ left: `${pixel.x}%`, top: `${pixel.y}%` }}
        />
      ))}
    </div>
  )
}
