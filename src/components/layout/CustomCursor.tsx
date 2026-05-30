'use client'

import { useEffect, useState } from 'react'
import type { CSSProperties } from 'react'
import { cn } from '@/lib/utils'

type CursorState = {
  x: number
  y: number
  visible: boolean
  pressed: boolean
  interactive: boolean
}

const initialCursor: CursorState = {
  x: 0,
  y: 0,
  visible: false,
  pressed: false,
  interactive: false,
}

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
  const [cursor, setCursor] = useState(initialCursor)

  useEffect(() => {
    const finePointer = window.matchMedia('(pointer: fine)').matches

    if (!finePointer) return

    function handlePointerMove(event: PointerEvent) {
      setCursor((current) => ({
        ...current,
        x: event.clientX,
        y: event.clientY,
        visible: true,
        interactive: isInteractive(event.target),
      }))
    }

    function handlePointerDown() {
      setCursor((current) => ({ ...current, pressed: true }))
    }

    function handlePointerUp() {
      setCursor((current) => ({ ...current, pressed: false }))
    }

    function handlePointerLeave() {
      setCursor((current) => ({ ...current, visible: false }))
    }

    window.addEventListener('pointermove', handlePointerMove)
    window.addEventListener('pointerdown', handlePointerDown)
    window.addEventListener('pointerup', handlePointerUp)
    document.documentElement.addEventListener('mouseleave', handlePointerLeave)

    return () => {
      window.removeEventListener('pointermove', handlePointerMove)
      window.removeEventListener('pointerdown', handlePointerDown)
      window.removeEventListener('pointerup', handlePointerUp)
      document.documentElement.removeEventListener(
        'mouseleave',
        handlePointerLeave,
      )
    }
  }, [])

  return (
    <div
      className={cn(
        'custom-cursor',
        cursor.visible && 'custom-cursor--visible',
        cursor.pressed && 'custom-cursor--pressed',
        cursor.interactive && 'custom-cursor--interactive',
      )}
      style={
        {
          '--cursor-x': `${cursor.x}px`,
          '--cursor-y': `${cursor.y}px`,
        } as CSSProperties
      }
      aria-hidden='true'
    >
      <span className='custom-cursor__glow' />
      <span className='custom-cursor__ring' />
      <span className='custom-cursor__dot' />
    </div>
  )
}
