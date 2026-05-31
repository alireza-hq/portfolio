import { ChevronRight } from 'lucide-react'
import { TerminalLine } from '../types'

type TerminalOutputProps = {
  lines: TerminalLine[]
}

export function TerminalOutput({ lines }: TerminalOutputProps) {
  return (
    <div className='space-y-3' aria-live='polite'>
      {lines.map((line) => (
        <div key={line.id} className='animate-terminal-fade-in'>
          {line.kind === 'command' ? (
            <div className='flex gap-2'>
              <div className='flex items-center gap-2 text-sky-600 dark:text-sky-400'>
                <ChevronRight className='h-4.5 w-4.5' />
                <span className='hidden sm:inline'>portfolio</span>
                <span>$</span>
              </div>
              <span>{line.content}</span>
            </div>
          ) : (
            <div
              className={
                line.kind === 'error'
                  ? 'text-red-400'
                  : line.kind === 'system'
                    ? 'text-slate-500 dark:text-zinc-400'
                    : 'text-slate-700 dark:text-zinc-300'
              }
            >
              {line.content}
            </div>
          )}
        </div>
      ))}
    </div>
  )
}
