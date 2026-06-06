'use client'

import { useTheme } from 'next-themes'
import { useCallback, useEffect, useRef, useState } from 'react'

import { useTerminal } from '@/features/terminal/hooks/useTerminal'
import { cn } from '@/lib/utils/cn'

import { TerminalInput } from './TerminalInput'
import { TerminalOutput } from './TerminalOutput'

const BOOT_LINES = [
  'alireza v1.0.0',
  "Welcome. Type 'help' for available commands.",
]

export default function Terminal() {
  const { resolvedTheme, setTheme } = useTheme()
  const [focusRequest, setFocusRequest] = useState(0)
  const bodyRef = useRef<HTMLDivElement>(null)

  const toggleTheme = useCallback(() => {
    setTheme(resolvedTheme === 'dark' ? 'light' : 'dark')
  }, [resolvedTheme, setTheme])

  const { lines, executeCommand } = useTerminal({ onToggleTheme: toggleTheme })

  useEffect(() => {
    const body = bodyRef.current

    if (!body) return

    body.scrollTo({
      top: body.scrollHeight,
      behavior: 'smooth',
    })
  }, [lines])

  return (
    <div
      className={cn(
        'relative mx-auto flex w-full max-w-4xl flex-col overflow-hidden rounded-2xl border text-left font-mono transition-colors duration-300',
        'border-zinc-200/80 bg-white/80 shadow-2xl shadow-zinc-900/10 backdrop-blur-xl',
        'dark:border-zinc-800 dark:bg-zinc-950/92 dark:shadow-black/60',
      )}
      role='application'
      aria-label='Developer terminal'
      onClick={() => setFocusRequest((current) => current + 1)}
    >
      <div
        className='flex items-center justify-between border-b border-zinc-200 bg-zinc-50/90 px-4 py-3 dark:border-zinc-800 dark:bg-zinc-900'
        aria-hidden='true'
      >
        <div className='flex gap-2'>
          <span className='h-3 w-3 rounded-full bg-red-500' />
          <span className='h-3 w-3 rounded-full bg-yellow-500' />
          <span className='h-3 w-3 rounded-full bg-emerald-500' />
        </div>

        <span className='flex-1 text-center text-xs tracking-widest text-zinc-500 uppercase dark:text-zinc-500'>
          alireza@portfolio ~ terminal
        </span>

        <div className='w-14' />
      </div>

      <div
        ref={bodyRef}
        className='flex max-h-[70vh] min-h-80 flex-col gap-4 overflow-y-auto px-4 py-4 text-left text-zinc-800 sm:min-h-105 sm:px-5 dark:text-zinc-200 [&::-webkit-scrollbar]:w-1.5 [&::-webkit-scrollbar-thumb]:bg-zinc-300 dark:[&::-webkit-scrollbar-thumb]:bg-zinc-700 [&::-webkit-scrollbar-track]:bg-transparent'
      >
        <div className='space-y-0.5' aria-label='Terminal welcome message'>
          {BOOT_LINES.map((line, index) => (
            <p
              key={line}
              className={cn(
                'font-mono text-xs',
                index === 0
                  ? 'font-semibold text-sky-600 dark:text-sky-400'
                  : 'text-zinc-500 dark:text-zinc-500',
              )}
            >
              {line}
            </p>
          ))}
        </div>

        <TerminalOutput lines={lines} />

        <div
          className='border-t border-zinc-200 dark:border-zinc-800'
          aria-hidden='true'
        />

        <TerminalInput onExecute={executeCommand} focusRequest={focusRequest} />
      </div>
    </div>
  )
}
