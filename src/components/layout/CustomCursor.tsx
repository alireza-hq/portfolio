'use client'

import { useEffect, useRef, useState } from 'react'

function isInteractive(target: EventTarget | null) {
  return target instanceof Element
    ? Boolean(
        target.closest(
          'a, button, input, textarea, select, [role="button"], [data-cursor="interactive"]',
        ),
      )
    : false
}

export function CustomCursor() {
  const cursorRef = useRef<HTMLDivElement>(null)
  const frameRef = useRef(0)
  const pointerRef = useRef({ x: 0, y: 0, target: null as EventTarget | null })
  const [isEnabled, setIsEnabled] = useState(false)

  useEffect(() => {
    const mediaQuery = window.matchMedia(
      '(pointer: fine) and (min-width: 768px)',
    )

    function syncEnabled() {
      setIsEnabled(mediaQuery.matches)
    }

    syncEnabled()
    mediaQuery.addEventListener('change', syncEnabled)

    return () => mediaQuery.removeEventListener('change', syncEnabled)
  }, [])

  useEffect(() => {
    if (!isEnabled) return

    const cursor = cursorRef.current

    if (!cursor) return
    const cursorElement = cursor

    function moveCursor(x: number, y: number) {
      cursorElement.style.transform = `translate3d(${x}px, ${y}px, 0)`
    }

    function flushCursor() {
      frameRef.current = 0
      moveCursor(pointerRef.current.x, pointerRef.current.y)
      cursorElement.classList.add('custom-cursor--visible')
      cursorElement.classList.toggle(
        'custom-cursor--interactive',
        isInteractive(pointerRef.current.target),
      )
    }

    moveCursor(window.innerWidth / 2, window.innerHeight / 2)
    cursorElement.classList.add('custom-cursor--visible')

    function handlePointerMove(event: PointerEvent) {
      pointerRef.current = {
        x: event.clientX,
        y: event.clientY,
        target: event.target,
      }

      if (!frameRef.current) {
        frameRef.current = requestAnimationFrame(flushCursor)
      }
    }

    function handlePointerDown() {
      cursorElement.classList.add('custom-cursor--pressed')
    }

    function handlePointerUp() {
      cursorElement.classList.remove('custom-cursor--pressed')
    }

    function handlePointerLeave() {
      cursorElement.classList.remove('custom-cursor--visible')
    }

    function handlePointerEnter() {
      cursorElement.classList.add('custom-cursor--visible')
    }

    window.addEventListener('pointermove', handlePointerMove, { passive: true })
    window.addEventListener('pointerdown', handlePointerDown)
    window.addEventListener('pointerup', handlePointerUp)
    document.documentElement.addEventListener('mouseleave', handlePointerLeave)
    document.documentElement.addEventListener('mouseenter', handlePointerEnter)

    return () => {
      if (frameRef.current) cancelAnimationFrame(frameRef.current)
      window.removeEventListener('pointermove', handlePointerMove)
      window.removeEventListener('pointerdown', handlePointerDown)
      window.removeEventListener('pointerup', handlePointerUp)
      document.documentElement.removeEventListener(
        'mouseleave',
        handlePointerLeave,
      )
      document.documentElement.removeEventListener(
        'mouseenter',
        handlePointerEnter,
      )
    }
  }, [isEnabled])

  if (!isEnabled) return null

  return (
    <div ref={cursorRef} className='custom-cursor' aria-hidden='true'>
      <span className='custom-cursor__glow' />
      <span className='custom-cursor__ring' />
      <span className='custom-cursor__dot' />
    </div>
  )
}
