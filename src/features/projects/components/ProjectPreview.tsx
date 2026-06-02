import Image from 'next/image'

import { cn } from '@/lib/utils/cn'

import type { Project } from '../types'

type ProjectPreviewProps = {
  project: Project
  compact?: boolean
}

export function ProjectPreview({
  project,
  compact = false,
}: ProjectPreviewProps) {
  const Icon = project.icon

  return (
    <div
      className={cn(
        'group/preview relative isolate overflow-hidden rounded-[1.5rem] border border-white/10 bg-zinc-950',
        compact ? 'aspect-[4/3]' : 'aspect-[16/10]',
      )}
      aria-label={`${project.title} preview image`}
    >
      <Image
        src={project.image}
        alt={`${project.title} project screenshot`}
        fill
        sizes={
          compact
            ? '(min-width: 768px) 33vw, 100vw'
            : '(min-width: 1280px) 55vw, 100vw'
        }
        className='object-cover object-top transition duration-700 group-hover/preview:scale-[1.03]'
        priority={!compact && project.slug === 'portfolio-terminal'}
      />
      <div className='absolute inset-0 bg-linear-to-t from-zinc-950/82 via-zinc-950/18 to-transparent' />
      <div className='absolute inset-x-3 top-3 flex items-center justify-between gap-3'>
        <span className='inline-flex items-center gap-2 rounded-full border border-white/12 bg-black/45 px-3 py-1.5 text-xs font-semibold text-white/85 backdrop-blur-md'>
          <Icon className='h-3.5 w-3.5 text-sky-200' />
          {project.category}
        </span>
        <span className='rounded-full border border-sky-200/20 bg-sky-300/12 px-3 py-1.5 font-mono text-[0.68rem] text-sky-100 backdrop-blur-md'>
          {project.status}
        </span>
      </div>
      {!compact ? (
        <div className='absolute inset-x-4 bottom-4 rounded-2xl border border-white/10 bg-black/42 p-4 backdrop-blur-md'>
          <p className='font-mono text-xs text-sky-200'>selected artifact</p>
          <h2 className='mt-1 text-2xl font-semibold text-white sm:text-3xl'>
            {project.title}
          </h2>
          <p className='mt-2 line-clamp-2 text-sm leading-6 text-zinc-300'>
            {project.description}
          </p>
        </div>
      ) : null}
    </div>
  )
}
