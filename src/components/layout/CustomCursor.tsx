'use client'

import { useEffect, useRef } from 'react'

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

  useEffect(() => {
    const cursor = cursorRef.current

    if (!cursor) return
    const cursorElement = cursor

    function moveCursor(x: number, y: number) {
      cursorElement.style.setProperty('--cursor-x', `${x}px`)
      cursorElement.style.setProperty('--cursor-y', `${y}px`)
    }

    moveCursor(window.innerWidth / 2, window.innerHeight / 2)
    cursorElement.classList.add('custom-cursor--visible')

    function handlePointerMove(event: PointerEvent) {
      moveCursor(event.clientX, event.clientY)
      cursorElement.classList.add('custom-cursor--visible')
      cursorElement.classList.toggle(
        'custom-cursor--interactive',
        isInteractive(event.target),
      )
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

    window.addEventListener('pointermove', handlePointerMove)
    window.addEventListener('pointerdown', handlePointerDown)
    window.addEventListener('pointerup', handlePointerUp)
    document.documentElement.addEventListener('mouseleave', handlePointerLeave)
    document.documentElement.addEventListener('mouseenter', handlePointerEnter)

    return () => {
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
  }, [])

  return (
    <div ref={cursorRef} className='custom-cursor' aria-hidden='true'>
      <span className='custom-cursor__glow' />
      <span className='custom-cursor__ring' />
      <span className='custom-cursor__dot' />
    </div>
  )
}
