import Link from 'next/link'
import { Download, ExternalLink, FileText } from 'lucide-react'

import { routes } from '@/lib/routes'

export function ResumePage() {
  return (
    <main className='relative z-10 min-h-screen px-4 pt-32 pb-20 sm:px-6 lg:px-8'>
      <section className='mx-auto w-full max-w-7xl'>
        <div className='flex flex-col gap-6 border-b border-zinc-900/10 pb-8 sm:flex-row sm:items-end sm:justify-between dark:border-white/10'>
          <div>
            <p className='font-mono text-sm font-semibold text-sky-600 dark:text-sky-300'>
              resume --inspect
            </p>
            <h1 className='mt-3 text-4xl font-semibold text-zinc-950 sm:text-5xl dark:text-white'>
              Resume
            </h1>
          </div>

          <div className='flex flex-wrap gap-2'>
            <Link
              href={routes.resumeFile}
              target='_blank'
              rel='noreferrer'
              className='inline-flex items-center gap-2 rounded-full border border-zinc-900/10 bg-white/75 px-4 py-2.5 text-sm font-semibold text-zinc-800 transition hover:border-sky-400/45 hover:text-sky-700 focus-visible:ring-1 focus-visible:ring-sky-400/70 focus-visible:outline-none dark:border-white/10 dark:bg-white/7 dark:text-zinc-100 dark:hover:text-sky-200'
            >
              <ExternalLink className='h-4 w-4' />
              Open PDF
            </Link>
            <a
              href={routes.resumeFile}
              download
              className='inline-flex items-center gap-2 rounded-full bg-zinc-950 px-4 py-2.5 text-sm font-semibold text-white transition hover:bg-sky-700 focus-visible:ring-1 focus-visible:ring-sky-400/70 focus-visible:outline-none dark:bg-white dark:text-zinc-950 dark:hover:bg-sky-200'
            >
              <Download className='h-4 w-4' />
              Download
            </a>
          </div>
        </div>

        <div className='mt-8 grid gap-5 xl:grid-cols-[minmax(0,1fr)_18rem]'>
          <section className='overflow-hidden rounded-3xl border border-zinc-900/10 bg-white/80 shadow-2xl shadow-zinc-950/10 dark:border-white/10 dark:bg-zinc-950/80 dark:shadow-black/30'>
            <div className='flex items-center gap-3 border-b border-zinc-900/10 px-4 py-3 dark:border-white/10'>
              <span className='grid h-9 w-9 place-items-center rounded-xl border border-sky-500/20 bg-sky-500/10 text-sky-600 dark:text-sky-300'>
                <FileText className='h-4 w-4' />
              </span>
              <div>
                <p className='font-mono text-xs font-semibold text-zinc-900 dark:text-zinc-100'>
                  Resume.pdf
                </p>
                <p className='mt-0.5 font-mono text-[0.68rem] text-zinc-500'>
                  PDF document
                </p>
              </div>
            </div>
            <iframe
              src={`${routes.resumeFile}#view=FitH`}
              title='Alireza Haghighi resume PDF'
              className='h-[78vh] w-full bg-zinc-100 dark:bg-zinc-900'
            />
          </section>

          <aside className='h-fit overflow-hidden rounded-3xl border border-zinc-900/10 bg-zinc-950 text-white shadow-xl shadow-zinc-950/15 dark:border-white/10'>
            <div className='border-b border-white/10 px-5 py-4'>
              <p className='font-mono text-xs text-sky-300'>document status</p>
              <p className='mt-2 font-semibold'>Ready for inspection</p>
            </div>
            <div className='grid font-mono text-xs'>
              {[
                ['format', 'PDF / A4'],
                ['focus', 'Software development'],
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
