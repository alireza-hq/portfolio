'use client'

import { useEffect, useRef, useState } from 'react'
import { useTerminal } from '@/features/terminal/hooks/useTerminal'

import { TerminalOutput } from './TerminalOutput'
import { TerminalInput } from './TerminalInput'

const BOOT_LINES = [
  'alireza v1.0.0',
  "Welcome. Type 'help' for available commands.",
]

export default function Terminal() {
  const { theme, lines, executeCommand } = useTerminal()

  const [isActive, setIsActive] = useState(false)

  const bottomRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: 'smooth' })
  }, [lines])

  const isDark = theme === 'dark'

  const containerBg = isDark
    ? 'bg-zinc-950 border-zinc-800 shadow-2xl shadow-black/60'
    : 'bg-zinc-50 border-zinc-300 shadow-xl shadow-zinc-400/40'

  const titleText = isDark ? 'text-zinc-500' : 'text-zinc-500'
  const bodyBg = isDark ? '' : ''
  const dividerColor = isDark ? 'border-zinc-800' : 'border-zinc-200'
  const scrollbarClass = isDark
    ? '[&::-webkit-scrollbar-thumb]:bg-zinc-700 [&::-webkit-scrollbar-track]:bg-transparent'
    : '[&::-webkit-scrollbar-thumb]:bg-zinc-300 [&::-webkit-scrollbar-track]:bg-transparent'

  return (
    <div
      className={`relative mx-auto flex w-full max-w-4xl flex-col overflow-hidden rounded-xl border font-mono transition-colors duration-300 ${containerBg} `}
      role='application'
      aria-label='Developer terminal'
    >
      {/* ── Title bar ─────────────────────────────────────────────────── */}
      <div
        className={[
          'flex items-center justify-between border-b px-4 py-3',
          isDark ? 'border-zinc-800 bg-zinc-900' : 'border-zinc-300 bg-white',
        ].join(' ')}
        aria-hidden='true'
      >
        {/* Traffic lights */}
        <div className='flex gap-2'>
          <span className='h-3 w-3 rounded-full bg-red-500' />
          <span className='h-3 w-3 rounded-full bg-yellow-500' />
          <span className='h-3 w-3 rounded-full bg-emerald-500' />
        </div>

        {/* Title */}
        <span
          className={`flex-1 text-center text-xs tracking-widest uppercase ${titleText}`}
        >
          alireza@portfolio ~ terminal
        </span>

        <div className='w-14' />
      </div>

      {/* ── Body ──────────────────────────────────────────────────────── */}
      <div
        className={`flex max-h-[70vh] min-h-105 flex-col gap-4 overflow-y-auto px-5 py-4 [&::-webkit-scrollbar]:w-1.5 ${scrollbarClass} ${bodyBg} `}
      >
        {/* Boot lines */}
        <div className='space-y-0.5' aria-label='Terminal welcome message'>
          {BOOT_LINES.map((line, i) => (
            <p
              key={i}
              className={`font-mono text-xs ${
                i === 0
                  ? isDark
                    ? 'font-semibold text-violet-400'
                    : 'font-semibold text-violet-600'
                  : isDark
                    ? 'text-zinc-500'
                    : 'text-zinc-400'
              }`}
            >
              {line}
            </p>
          ))}
        </div>

        {/* Command history output */}
        <TerminalOutput lines={lines} />

        {/* Divider before input */}
        <div className={`border-t ${dividerColor}`} aria-hidden='true' />

        {/* Live input */}
        <TerminalInput onExecute={executeCommand} isActive={isActive} />
      </div>
    </div>
  )
}
