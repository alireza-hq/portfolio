'use client'

import { useCallback, useMemo, useState } from 'react'
import type { CommandContext, TerminalLine, TerminalTheme } from '../types'
import { commandRegistry } from '../components/commandRegistry'

function createLine(
  kind: TerminalLine['kind'],
  content: TerminalLine['content'],
): TerminalLine {
  return {
    id: crypto.randomUUID(),
    kind,
    content,
  }
}

function normalizeCommand(input: string) {
  return input.trim().replace(/\s+/g, ' ')
}

export function useTerminal() {
  const [theme, setTheme] = useState<TerminalTheme>('dark')
  const [lines, setLines] = useState<TerminalLine[]>([])

  const clear = useCallback(() => {
    setLines([])
  }, [])

  const context = useMemo<CommandContext>(
    () => ({
      setTheme,
      clear,
    }),
    [clear],
  )

  const executeCommand = useCallback(
    (rawInput: string) => {
      const normalizedInput = normalizeCommand(rawInput)

      if (!normalizedInput) return

      const [commandNameRaw, ...args] = normalizedInput.split(' ')
      const commandName = commandNameRaw.toLowerCase()

      setLines((prev) => [...prev, createLine('command', normalizedInput)])

      const command = commandRegistry[commandName]

      if (!command) {
        setLines((prev) => [
          ...prev,
          createLine(
            'error',
            "Command not found. Type 'help' to see available commands.",
          ),
        ])
        return
      }

      const result = command.execute(args, context)

      if (result.type === 'clear') {
        clear()
        return
      }

      if (result.type === 'external') {
        window.open(result.url, '_blank', 'noopener,noreferrer')
        setLines((prev) => [
          ...prev,
          createLine('output', `Opening ${result.url}...`),
        ])
        return
      }

      setLines((prev) => [...prev, createLine('output', result.content)])
    },
    [clear, context],
  )

  return {
    theme,
    lines,
    executeCommand,
  }
}
