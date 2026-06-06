import { cn } from '@/lib/utils/cn'

import type { Project } from '../types'
import { ProjectPreview } from './ProjectPreview'

type ProjectCardProps = {
  project: Project
  isActive: boolean
  onSelect: (project: Project) => void
}

export function ProjectCard({ project, isActive, onSelect }: ProjectCardProps) {
  const Icon = project.icon

  return (
    <button
      type='button'
      onClick={() => onSelect(project)}
      className={cn(
        'group rounded-[2rem] border bg-white/70 p-3 text-left shadow-xl shadow-zinc-900/5 backdrop-blur-xl transition focus-visible:ring-1 focus-visible:ring-sky-400/70 focus-visible:outline-none active:scale-[0.99] dark:border-white/10 dark:bg-white/6 dark:shadow-black/20',
        isActive
          ? 'border-sky-400/45'
          : 'border-zinc-900/10 hover:-translate-y-0.5 hover:border-sky-400/35',
      )}
    >
      <ProjectPreview project={project} compact />
      <div className='mt-4 flex items-start justify-between gap-3 px-1 pb-1'>
        <div>
          <span className='font-mono text-[0.68rem] font-semibold text-sky-700 dark:text-sky-200'>
            {project.status}
          </span>
          <p className='mt-3 font-semibold text-zinc-950 dark:text-white'>
            {project.title}
          </p>
          <p className='mt-1 text-sm text-zinc-500 dark:text-zinc-400'>
            {project.type}
          </p>
        </div>
        <Icon className='h-5 w-5 shrink-0 text-sky-600 dark:text-sky-300' />
      </div>
    </button>
  )
}
