'use client'

import { useCallback, useState } from 'react'

export function useCommandHistory() {
  const [history, setHistory] = useState<string[]>([])
  const [cursor, setCursor] = useState<number | null>(null)

  const addCommand = useCallback((command: string) => {
    setHistory((prev) => [...prev, command])
    setCursor(null)
  }, [])

  const getPreviousCommand = useCallback(() => {
    if (history.length === 0) return ''

    const nextCursor =
      cursor === null ? history.length - 1 : Math.max(cursor - 1, 0)

    setCursor(nextCursor)
    return history[nextCursor] ?? ''
  }, [cursor, history])

  const getNextCommand = useCallback(() => {
    if (history.length === 0 || cursor === null) return ''

    const nextCursor = cursor + 1

    if (nextCursor >= history.length) {
      setCursor(null)
      return ''
    }

    setCursor(nextCursor)
    return history[nextCursor] ?? ''
  }, [cursor, history])

  return {
    history,
    addCommand,
    getPreviousCommand,
    getNextCommand,
  }
}
