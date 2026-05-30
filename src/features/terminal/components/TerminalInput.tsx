'use client'

import { memo, useEffect, useRef, useState } from 'react'
import { useCommandHistory } from '../hooks/useCommandHistory'
import { ChevronRight } from 'lucide-react'

type TerminalInputProps = {
  onExecute: (command: string) => void
  isActive: boolean
}

export const TerminalInput = memo(function TerminalInput({
  onExecute,
  isActive,
}: TerminalInputProps) {
  const [value, setValue] = useState('')
  const inputRef = useRef<HTMLInputElement>(null)
  const { addCommand, getPreviousCommand, getNextCommand } = useCommandHistory()

  useEffect(() => {
    if (isActive) {
      inputRef.current?.focus()
    }
  }, [isActive])

  function handleKeyDown(event: React.KeyboardEvent<HTMLInputElement>) {
    if (event.key === 'Enter') {
      const command = value.trim()

      if (!command) return

      onExecute(command)
      addCommand(command)
      setValue('')
      return
    }

    if (event.key === 'ArrowUp') {
      event.preventDefault()
      setValue(getPreviousCommand())
      return
    }

    if (event.key === 'ArrowDown') {
      event.preventDefault()
      setValue(getNextCommand())
    }
  }

  return (
    <div className='flex items-center gap-3'>
      <div className='flex items-center gap-2 text-violet-600 dark:text-violet-400'>
        <ChevronRight className='h-4.5 w-4.5' />
        <span className='hidden sm:inline'>portfolio</span>
        <span>$</span>
      </div>

      <div className='relative flex-1'>
        <input
          ref={inputRef}
          value={value}
          onChange={(event) => setValue(event.target.value)}
          onKeyDown={handleKeyDown}
          className='relative z-10 w-full bg-transparent text-transparent caret-transparent outline-none placeholder:text-slate-400 dark:placeholder:text-zinc-600'
          placeholder='Type a command...'
          spellCheck={false}
          autoCapitalize='none'
          autoComplete='off'
          aria-label='Terminal command input'
        />

        <span
          className='pointer-events-none absolute inset-0 whitespace-pre text-slate-900 dark:text-zinc-100'
          aria-hidden='true'
        >
          {value}
          <span className='animate-terminal-cursor ml-px inline-block h-5 w-2 align-[-0.2rem] bg-slate-700 dark:bg-zinc-200' />
        </span>
      </div>
    </div>
  )
})
