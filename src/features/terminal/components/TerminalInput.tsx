'use client'

import { memo, useEffect, useRef, useState } from 'react'
import { useCommandHistory } from '../hooks/useCommandHistory'
import { ChevronRight } from 'lucide-react'
import { terminalCompletions } from './commandRegistry'

type TerminalInputProps = {
  onExecute: (command: string) => void
  focusRequest: number
}

export const TerminalInput = memo(function TerminalInput({
  onExecute,
  focusRequest,
}: TerminalInputProps) {
  const [value, setValue] = useState('')
  const [isFocused, setIsFocused] = useState(false)
  const [cursorPosition, setCursorPosition] = useState(0)
  const inputRef = useRef<HTMLInputElement>(null)
  const { addCommand, getPreviousCommand, getNextCommand } = useCommandHistory()

  useEffect(() => {
    inputRef.current?.focus({ preventScroll: true })
  }, [])

  useEffect(() => {
    inputRef.current?.focus({ preventScroll: true })
  }, [focusRequest])

  function replaceValue(nextValue: string) {
    setValue(nextValue)
    setCursorPosition(nextValue.length)
    requestAnimationFrame(() =>
      inputRef.current?.setSelectionRange(nextValue.length, nextValue.length),
    )
  }

  function handleKeyDown(event: React.KeyboardEvent<HTMLInputElement>) {
    if (event.key === 'Tab') {
      event.preventDefault()

      const query = value.trimStart().toLowerCase()

      if (!query) return

      const matches = terminalCompletions.filter((command) =>
        command.startsWith(query),
      )

      if (matches.length === 1) {
        replaceValue(matches[0])
        return
      }

      if (matches.length > 1) {
        const sharedPrefix = matches.reduce((prefix, match) => {
          let index = 0

          while (
            index < prefix.length &&
            index < match.length &&
            prefix[index] === match[index]
          ) {
            index += 1
          }

          return prefix.slice(0, index)
        })

        if (sharedPrefix.length > query.length) {
          replaceValue(sharedPrefix)
        }
      }

      return
    }

    if (event.key === 'Enter') {
      const command = value.trim()

      if (!command) return

      onExecute(command)
      addCommand(command)
      setValue('')
      setCursorPosition(0)
      return
    }

    if (event.key === 'ArrowUp') {
      event.preventDefault()
      const command = getPreviousCommand()
      replaceValue(command)
      return
    }

    if (event.key === 'ArrowDown') {
      event.preventDefault()
      const command = getNextCommand()
      replaceValue(command)
    }
  }

  function syncCursor() {
    setCursorPosition(inputRef.current?.selectionStart ?? value.length)
  }

  return (
    <div className='flex items-center gap-3 text-left'>
      <div className='flex items-center gap-2 text-sky-600 dark:text-sky-400'>
        <ChevronRight className='h-4.5 w-4.5' />
        <span className='hidden sm:inline'>portfolio</span>
        <span>$</span>
      </div>

      <div className='relative flex-1 font-mono'>
        <input
          ref={inputRef}
          value={value}
          onChange={(event) => {
            setValue(event.target.value)
            setCursorPosition(
              event.target.selectionStart ?? event.target.value.length,
            )
          }}
          onKeyDown={handleKeyDown}
          onKeyUp={syncCursor}
          onClick={syncCursor}
          onSelect={syncCursor}
          onFocus={() => setIsFocused(true)}
          onBlur={() => setIsFocused(false)}
          className='terminal-command-input relative z-10 w-full bg-transparent text-left text-transparent caret-transparent outline-none placeholder:text-zinc-400 dark:placeholder:text-zinc-600'
          placeholder='Type a command...'
          spellCheck={false}
          autoCapitalize='none'
          autoComplete='off'
          aria-label='Terminal command input'
        />

        <span
          className='pointer-events-none absolute inset-0 z-20 text-left whitespace-pre text-zinc-900 dark:text-zinc-100'
          aria-hidden='true'
        >
          {value}
          {isFocused ? (
            <span
              className='animate-terminal-cursor absolute top-0 bottom-0 w-[1ch] bg-zinc-700 dark:bg-zinc-200'
              style={{ left: `${cursorPosition}ch` }}
            />
          ) : null}
        </span>
      </div>
    </div>
  )
})
