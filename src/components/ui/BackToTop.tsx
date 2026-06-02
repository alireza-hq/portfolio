'use client'

import { useEffect, useState } from 'react'

import { cn } from '@/lib/utils/cn'

const scrollThreshold = 500

export function BackToTop() {
  const [isVisible, setIsVisible] = useState(false)
  const [isReturning, setIsReturning] = useState(false)

  useEffect(() => {
    function handleScroll() {
      setIsVisible(window.scrollY > scrollThreshold)
    }

    handleScroll()
    window.addEventListener('scroll', handleScroll, { passive: true })

    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  function returnToTop() {
    const prefersReducedMotion = window.matchMedia(
      '(prefers-reduced-motion: reduce)',
    ).matches

    setIsReturning(true)
    window.scrollTo({
      top: 0,
      behavior: prefersReducedMotion ? 'auto' : 'smooth',
    })

    window.setTimeout(
      () => setIsReturning(false),
      prefersReducedMotion ? 250 : 950,
    )
  }

  return (
    <button
      type='button'
      onClick={returnToTop}
      aria-label='Return to top'
      className={cn(
        'group fixed right-4 bottom-4 z-40 inline-flex items-center gap-2 rounded-full border border-sky-300/20 bg-zinc-950/72 px-3.5 py-2 font-mono text-xs font-semibold text-sky-100 shadow-lg shadow-black/20 backdrop-blur-xl transition duration-300 focus-visible:ring-2 focus-visible:ring-sky-300/70 focus-visible:outline-none sm:right-6 sm:bottom-6',
        'hover:-translate-y-0.5 hover:border-sky-300/55 hover:bg-zinc-950/88 hover:shadow-[0_14px_36px_rgb(14_165_233/0.16)]',
        isVisible
          ? 'pointer-events-auto translate-y-0 opacity-100'
          : 'pointer-events-none translate-y-3 opacity-0',
      )}
    >
      <span className='h-1.5 w-1.5 rounded-full bg-sky-300 shadow-[0_0_14px_rgb(125_211_252/0.75)]' />
      <span className='grid min-w-24 grid-cols-1'>
        <span className='col-start-1 row-start-1 transition group-hover:opacity-0'>
          {isReturning ? 'cd ~/workspace' : 'cd ~'}
        </span>
        <span className='col-start-1 row-start-1 opacity-0 transition group-hover:opacity-100'>
          Return to workspace
        </span>
      </span>
    </button>
  )
}
