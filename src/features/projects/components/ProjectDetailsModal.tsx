import { ExternalLink, X } from 'lucide-react'
import { FaGithub } from 'react-icons/fa6'

import type { Project } from '../types'
import { ProjectPreview } from './ProjectPreview'

type ProjectDetailsModalProps = {
  project: Project
  onClose: () => void
}

export function ProjectDetailsModal({
  project,
  onClose,
}: ProjectDetailsModalProps) {
  const buildDetails = [
    ['status', project.statusLabels.join(' / ')],
    ['frontend', project.frontendStack.join(', ')],
    ['backend / data', project.backendStack?.join(', ') ?? 'Client-side'],
    ['challenge', project.mainChallenge],
  ]

  return (
    <div
      className='fixed inset-0 z-[60] grid place-items-center bg-zinc-950/55 px-4 py-8 backdrop-blur-md'
      role='dialog'
      aria-modal='true'
      aria-labelledby='project-modal-title'
      onMouseDown={(event) => {
        if (event.target === event.currentTarget) onClose()
      }}
    >
      <div className='max-h-[88vh] w-full max-w-5xl overflow-y-auto rounded-[2rem] border border-zinc-900/10 bg-white text-zinc-950 shadow-2xl shadow-black/30 dark:border-white/10 dark:bg-zinc-950 dark:text-white dark:shadow-black/50'>
        <div className='sticky top-0 z-10 flex items-center justify-between border-b border-zinc-900/10 bg-white/92 px-5 py-4 backdrop-blur-md dark:border-white/10 dark:bg-zinc-950/92'>
          <div>
            <p className='font-mono text-xs text-sky-600 dark:text-sky-300'>
              {project.status}
            </p>
            <h2
              id='project-modal-title'
              className='mt-1 text-2xl font-semibold'
            >
              {project.title}
            </h2>
          </div>
          <button
            type='button'
            onClick={onClose}
            className='grid h-10 w-10 place-items-center rounded-full border border-zinc-900/10 bg-zinc-50 text-zinc-600 transition hover:bg-zinc-100 hover:text-zinc-950 dark:border-white/10 dark:bg-white/6 dark:text-zinc-300 dark:hover:bg-white/10 dark:hover:text-white'
            aria-label='Close project details'
          >
            <X className='h-4 w-4' />
          </button>
        </div>

        <div className='grid gap-6 p-5 sm:p-6 lg:grid-cols-[0.95fr_1.05fr]'>
          <div className='grid content-start gap-5'>
            <ProjectPreview project={project} />
            <section className='rounded-2xl border border-zinc-900/10 bg-zinc-50 p-4 font-mono text-xs text-zinc-700 dark:border-white/10 dark:bg-zinc-900 dark:text-zinc-300'>
              {buildDetails.map(([label, value]) => (
                <p
                  key={label}
                  className='grid gap-1 py-1.5 sm:grid-cols-[7rem_1fr]'
                >
                  <span className='text-sky-600 dark:text-sky-300'>
                    {label}
                  </span>
                  <span>{value}</span>
                </p>
              ))}
            </section>
          </div>

          <div className='grid gap-5'>
            <ModalSection title='Architecture' body={project.architecture} />
            <ListSection title='Stack' items={project.stack} />
            <ListSection title='Features' items={project.features} />
            <ListSection
              title='Build notes'
              items={project.tabs.flatMap((tab) => tab.items).slice(0, 8)}
            />
          </div>
        </div>

        {project.liveUrl || project.githubUrl ? (
          <div className='flex flex-wrap gap-2 border-t border-zinc-900/10 p-5 sm:p-6 dark:border-white/10'>
            {project.liveUrl ? (
              <a
                href={project.liveUrl}
                className='inline-flex items-center gap-2 rounded-full bg-zinc-950 px-4 py-2 text-sm font-semibold text-white transition hover:bg-sky-700 dark:bg-white dark:text-zinc-950 dark:hover:bg-sky-200'
              >
                Live <ExternalLink className='h-4 w-4' />
              </a>
            ) : null}
            {project.githubUrl ? (
              <a
                href={project.githubUrl}
                target='_blank'
                rel='noreferrer'
                className='inline-flex items-center gap-2 rounded-full border border-zinc-900/10 px-4 py-2 text-sm font-semibold text-zinc-700 transition hover:border-sky-400/40 hover:text-sky-700 dark:border-white/10 dark:text-zinc-200 dark:hover:text-sky-200'
              >
                GitHub <FaGithub className='h-4 w-4' />
              </a>
            ) : null}
          </div>
        ) : null}
      </div>
    </div>
  )
}

function ModalSection({ title, body }: { title: string; body: string }) {
  return (
    <section>
      <h3 className='font-semibold'>{title}</h3>
      <p className='mt-2 text-sm leading-7 text-zinc-600 dark:text-zinc-300'>
        {body}
      </p>
    </section>
  )
}

function ListSection({ title, items }: { title: string; items: string[] }) {
  return (
    <section>
      <h3 className='font-semibold'>{title}</h3>
      <div className='mt-2 flex flex-wrap gap-2'>
        {items.map((item) => (
          <span
            key={item}
            className='rounded-full border border-zinc-900/10 bg-zinc-50 px-3 py-1.5 text-xs text-zinc-700 dark:border-white/10 dark:bg-white/6 dark:text-zinc-300'
          >
            {item}
          </span>
        ))}
      </div>
    </section>
  )
}
