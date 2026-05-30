import type { ReactNode } from 'react'

export type CommandContext = {
  toggleTheme: () => void
  clear: () => void
}

export type CommandResult =
  | {
      type: 'output'
      content: ReactNode
    }
  | {
      type: 'clear'
    }
  | {
      type: 'external'
      url: string
    }

export type TerminalCommand = {
  name: string
  description: string
  execute: (args: string[], context: CommandContext) => CommandResult
}

export type TerminalLine = {
  id: string
  kind: 'command' | 'output' | 'error' | 'system'
  content: ReactNode
}
