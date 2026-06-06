'use client'

import { useEffect, useRef, useState } from 'react'

import { cn } from '@/lib/utils/cn'

const scrollThreshold = 500
const minScrollDuration = 2200
const maxScrollDuration = 5200

function easeOutCubic(progress: number) {
  return 1 - Math.pow(1 - progress, 3)
}

function setPageScrollTop(value: number) {
  document.documentElement.scrollTop = value
  document.body.scrollTop = value
}

export function BackToTop() {
  const [isVisible, setIsVisible] = useState(false)
  const [isReturning, setIsReturning] = useState(false)
  const animationFrameRef = useRef<number | null>(null)

  useEffect(() => {
    function handleScroll() {
      setIsVisible(window.scrollY > scrollThreshold)
    }

    handleScroll()
    window.addEventListener('scroll', handleScroll, { passive: true })

    return () => {
      window.removeEventListener('scroll', handleScroll)

      if (animationFrameRef.current) {
        window.cancelAnimationFrame(animationFrameRef.current)
      }
    }
  }, [])

  function returnToTop() {
    const prefersReducedMotion = window.matchMedia(
      '(prefers-reduced-motion: reduce)',
    ).matches
    const rootElement = document.documentElement
    const bodyElement = document.body
    const previousRootScrollBehavior = rootElement.style.scrollBehavior
    const previousBodyScrollBehavior = bodyElement.style.scrollBehavior
    const startY = window.scrollY

    if (animationFrameRef.current) {
      window.cancelAnimationFrame(animationFrameRef.current)
    }

    setIsReturning(true)

    if (prefersReducedMotion || startY === 0) {
      setPageScrollTop(0)
      window.setTimeout(() => setIsReturning(false), 250)
      return
    }

    rootElement.style.scrollBehavior = 'auto'
    bodyElement.style.scrollBehavior = 'auto'

    const duration = Math.min(
      maxScrollDuration,
      Math.max(minScrollDuration, startY * 1.15),
    )
    const startTime = performance.now()

    function scrollStep(currentTime: number) {
      const elapsed = currentTime - startTime
      const progress = Math.min(elapsed / duration, 1)
      const easedProgress = easeOutCubic(progress)
      const nextY = Math.max(0, Math.round(startY * (1 - easedProgress)))

      setPageScrollTop(nextY)

      if (progress < 1) {
        animationFrameRef.current = window.requestAnimationFrame(scrollStep)
        return
      }

      animationFrameRef.current = null
      setPageScrollTop(0)
      rootElement.style.scrollBehavior = previousRootScrollBehavior
      bodyElement.style.scrollBehavior = previousBodyScrollBehavior
      setIsReturning(false)
    }

    animationFrameRef.current = window.requestAnimationFrame(scrollStep)

    window.setTimeout(() => {
      rootElement.style.scrollBehavior = previousRootScrollBehavior
      bodyElement.style.scrollBehavior = previousBodyScrollBehavior
      setIsReturning(false)
    }, duration + 150)
  }

  return (
    <button
      type='button'
      onClick={returnToTop}
      aria-label='Return to top'
      className={cn(
        'group fixed right-4 bottom-4 z-40 inline-flex items-center gap-2 rounded-full border border-sky-300/20 bg-zinc-950/72 px-3.5 py-2 font-mono text-xs font-semibold text-sky-100 shadow-lg shadow-black/20 backdrop-blur-xl transition duration-300 focus-visible:ring-1 focus-visible:ring-sky-300/70 focus-visible:outline-none sm:right-6 sm:bottom-6',
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
