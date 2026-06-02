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
  return (
    <div
      className='fixed inset-0 z-[60] grid place-items-center bg-zinc-950/70 px-4 py-8 backdrop-blur-md'
      role='dialog'
      aria-modal='true'
      aria-labelledby='project-modal-title'
    >
      <div className='max-h-[88vh] w-full max-w-5xl overflow-y-auto rounded-[2rem] border border-white/10 bg-zinc-950 text-white shadow-2xl shadow-black/50'>
        <div className='sticky top-0 z-10 flex items-center justify-between border-b border-white/10 bg-zinc-950/92 px-5 py-4 backdrop-blur-md'>
          <div>
            <p className='font-mono text-xs text-sky-200'>build notes</p>
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
            className='grid h-10 w-10 place-items-center rounded-full border border-white/10 bg-white/6 text-zinc-300 transition hover:bg-white/10 hover:text-white focus-visible:ring-2 focus-visible:ring-sky-300/70 focus-visible:outline-none'
            aria-label='Close project details'
          >
            <X className='h-4 w-4' />
          </button>
        </div>

        <div className='grid gap-6 p-5 sm:p-6 lg:grid-cols-[0.95fr_1.05fr]'>
          <ProjectPreview project={project} />

          <div className='grid gap-5'>
            <ModalSection title='Problem' body={project.problem} />
            <ModalSection title='Solution' body={project.solution} />
            <ModalSection title='Architecture' body={project.architecture} />

            <section>
              <h3 className='font-semibold text-white'>Main features</h3>
              <div className='mt-3 flex flex-wrap gap-2'>
                {project.features.map((feature) => (
                  <span
                    key={feature}
                    className='rounded-full border border-white/10 bg-white/6 px-3 py-1.5 text-sm text-zinc-200'
                  >
                    {feature}
                  </span>
                ))}
              </div>
            </section>

            <section>
              <h3 className='font-semibold text-white'>What I learned</h3>
              <div className='mt-3 grid gap-2'>
                {project.learned.map((item, index) => (
                  <p
                    key={item}
                    className='grid gap-3 rounded-2xl border border-white/10 bg-white/6 p-4 text-sm leading-6 text-zinc-300 sm:grid-cols-[auto_1fr]'
                  >
                    <span className='font-mono text-sky-200'>
                      {String(index + 1).padStart(2, '0')}
                    </span>
                    <span>{item}</span>
                  </p>
                ))}
              </div>
            </section>
          </div>
        </div>

        <div className='flex flex-wrap gap-2 border-t border-white/10 p-5 sm:p-6'>
          <a
            href={project.liveUrl}
            className='inline-flex items-center gap-2 rounded-full bg-white px-4 py-2 text-sm font-semibold text-zinc-950 transition hover:bg-sky-100 focus-visible:ring-2 focus-visible:ring-sky-300/70 focus-visible:outline-none'
          >
            Live link
            <ExternalLink className='h-4 w-4' />
          </a>
          <a
            href={project.githubUrl}
            target='_blank'
            className='inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/6 px-4 py-2 text-sm font-semibold text-white transition hover:border-sky-300/35 hover:bg-sky-300/10 focus-visible:ring-2 focus-visible:ring-sky-300/70 focus-visible:outline-none'
          >
            GitHub
            <FaGithub className='h-4 w-4' />
          </a>
        </div>
      </div>
    </div>
  )
}

function ModalSection({ title, body }: { title: string; body: string }) {
  return (
    <section>
      <h3 className='font-semibold text-white'>{title}</h3>
      <p className='mt-3 rounded-2xl border border-white/10 bg-white/6 p-4 text-sm leading-7 text-zinc-300'>
        {body}
      </p>
    </section>
  )
}
