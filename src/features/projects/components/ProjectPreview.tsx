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
  return (
    <div
      className={cn(
        'group/preview relative isolate overflow-hidden rounded-[1.5rem] border border-zinc-900/10 bg-zinc-100 dark:border-white/10 dark:bg-zinc-950',
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
    </div>
  )
}
