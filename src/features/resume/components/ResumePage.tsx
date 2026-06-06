'use client'

import Image from 'next/image'
import Link from 'next/link'
import {
  Download,
  ExternalLink,
  FileText,
  Minus,
  Plus,
  RotateCcw,
} from 'lucide-react'
import { useState } from 'react'

import { routes } from '@/lib/routes'
import { cn } from '@/lib/utils/cn'

const zoomLevels = [75, 90, 100, 115, 130]

export function ResumePage() {
  const [zoomIndex, setZoomIndex] = useState(2)
  const zoom = zoomLevels[zoomIndex]

  return (
    <main className='relative z-10 min-h-screen px-4 pt-32 pb-20 sm:px-6 lg:px-8'>
      <section className='mx-auto w-full max-w-7xl'>
        <div className='grid gap-8 border-b border-zinc-900/10 pb-8 lg:grid-cols-[1fr_auto] lg:items-end dark:border-white/10'>
          <div>
            <p className='font-mono text-sm font-semibold text-sky-600 dark:text-sky-300'>
              resume --inspect
            </p>
            <h1 className='mt-4 text-4xl font-semibold text-zinc-950 sm:text-6xl dark:text-white'>
              Work history, without the tab chaos.
            </h1>
            <p className='mt-5 max-w-2xl text-lg leading-8 text-zinc-600 dark:text-zinc-400'>
              Inspect the document here, open the original PDF, or download a
              copy for later.
            </p>
          </div>

          <div className='flex flex-wrap gap-2'>
            <Link
              href={routes.resumeFile}
              target='_blank'
              rel='noreferrer'
              className='inline-flex items-center gap-2 rounded-full border border-zinc-900/10 bg-white/75 px-4 py-2.5 text-sm font-semibold text-zinc-800 transition hover:-translate-y-0.5 hover:border-sky-400/45 hover:text-sky-700 focus-visible:ring-2 focus-visible:ring-sky-400/70 focus-visible:outline-none dark:border-white/10 dark:bg-white/7 dark:text-zinc-100 dark:hover:text-sky-200'
            >
              <ExternalLink className='h-4 w-4' />
              Open PDF
            </Link>
            <a
              href={routes.resumeFile}
              download
              className='inline-flex items-center gap-2 rounded-full bg-zinc-950 px-4 py-2.5 text-sm font-semibold text-white transition hover:-translate-y-0.5 hover:bg-sky-700 focus-visible:ring-2 focus-visible:ring-sky-400/70 focus-visible:outline-none dark:bg-white dark:text-zinc-950 dark:hover:bg-sky-200'
            >
              <Download className='h-4 w-4' />
              Download
            </a>
          </div>
        </div>

        <div className='mt-8 grid gap-5 xl:grid-cols-[minmax(0,1fr)_18rem]'>
          <section
            aria-label='Resume document preview'
            className='overflow-hidden rounded-3xl border border-zinc-900/10 bg-zinc-200/75 shadow-2xl shadow-zinc-950/10 dark:border-white/10 dark:bg-zinc-900 dark:shadow-black/30'
          >
            <div className='flex flex-wrap items-center justify-between gap-3 border-b border-zinc-900/10 bg-white/80 px-4 py-3 backdrop-blur-xl dark:border-white/10 dark:bg-zinc-950/85'>
              <div className='flex min-w-0 items-center gap-3'>
                <span className='grid h-9 w-9 shrink-0 place-items-center rounded-xl border border-sky-500/20 bg-sky-500/10 text-sky-600 dark:text-sky-300'>
                  <FileText className='h-4 w-4' />
                </span>
                <div className='min-w-0'>
                  <p className='truncate font-mono text-xs font-semibold text-zinc-900 dark:text-zinc-100'>
                    Resume.pdf
                  </p>
                  <p className='mt-0.5 font-mono text-[0.68rem] text-zinc-500'>
                    1 page / PDF document
                  </p>
                </div>
              </div>

              <div
                className='flex items-center rounded-full border border-zinc-900/10 bg-zinc-50 p-1 dark:border-white/10 dark:bg-white/6'
                aria-label='Resume zoom controls'
              >
                <ZoomButton
                  label='Zoom out'
                  onClick={() =>
                    setZoomIndex((value) => Math.max(0, value - 1))
                  }
                  disabled={zoomIndex === 0}
                >
                  <Minus className='h-3.5 w-3.5' />
                </ZoomButton>
                <span className='min-w-14 text-center font-mono text-xs text-zinc-600 dark:text-zinc-300'>
                  {zoom}%
                </span>
                <ZoomButton
                  label='Reset zoom'
                  onClick={() => setZoomIndex(2)}
                  disabled={zoomIndex === 2}
                >
                  <RotateCcw className='h-3.5 w-3.5' />
                </ZoomButton>
                <ZoomButton
                  label='Zoom in'
                  onClick={() =>
                    setZoomIndex((value) =>
                      Math.min(zoomLevels.length - 1, value + 1),
                    )
                  }
                  disabled={zoomIndex === zoomLevels.length - 1}
                >
                  <Plus className='h-3.5 w-3.5' />
                </ZoomButton>
              </div>
            </div>

            <div className='max-h-[76vh] overflow-auto p-3 sm:p-6'>
              <div
                className='mx-auto transition-[width] duration-300 ease-out'
                style={{ width: `${zoom}%`, maxWidth: '64rem' }}
              >
                <Image
                  src={routes.resumePreview}
                  alt='Alireza Haghighi resume preview'
                  width={595}
                  height={842}
                  priority
                  className='h-auto w-full bg-white shadow-[0_24px_80px_rgb(0_0_0/0.24)]'
                />
              </div>
            </div>
          </section>

          <aside className='h-fit overflow-hidden rounded-3xl border border-zinc-900/10 bg-zinc-950 text-white shadow-xl shadow-zinc-950/15 dark:border-white/10'>
            <div className='border-b border-white/10 px-5 py-4'>
              <p className='font-mono text-xs text-sky-300'>document status</p>
              <p className='mt-2 font-semibold'>Ready for inspection</p>
            </div>
            <div className='grid gap-0 font-mono text-xs'>
              {[
                ['format', 'PDF / A4'],
                ['focus', 'Frontend engineering'],
                ['availability', 'Open to opportunities'],
                ['source', '/public/resume'],
              ].map(([label, value]) => (
                <div
                  key={label}
                  className='grid gap-1 border-b border-white/8 px-5 py-4 last:border-b-0'
                >
                  <span className='text-sky-300'>{label}</span>
                  <span className='text-zinc-300'>{value}</span>
                </div>
              ))}
            </div>
          </aside>
        </div>
      </section>
    </main>
  )
}

function ZoomButton({
  children,
  label,
  disabled,
  onClick,
}: {
  children: React.ReactNode
  label: string
  disabled: boolean
  onClick: () => void
}) {
  return (
    <button
      type='button'
      onClick={onClick}
      disabled={disabled}
      aria-label={label}
      title={label}
      className={cn(
        'grid h-8 w-8 place-items-center rounded-full text-zinc-600 transition hover:bg-sky-500/10 hover:text-sky-700 focus-visible:ring-2 focus-visible:ring-sky-400/70 focus-visible:outline-none dark:text-zinc-300 dark:hover:text-sky-200',
        disabled && 'cursor-not-allowed opacity-35',
      )}
    >
      {children}
    </button>
  )
}
