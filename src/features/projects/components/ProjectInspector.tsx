import { Code2, ExternalLink, Sparkles } from 'lucide-react'
import { FaGithub } from 'react-icons/fa6'

import { cn } from '@/lib/utils/cn'

import type { Project } from '../types'

type ProjectInspectorProps = {
  project: Project
  activeTab: string
  onTabChange: (tab: string) => void
  onOpenDetails: () => void
}

export function ProjectInspector({
  project,
  activeTab,
  onTabChange,
  onOpenDetails,
}: ProjectInspectorProps) {
  const Icon = project.icon
  const activeInspection =
    project.tabs.find((tab) => tab.label === activeTab) ?? project.tabs[0]

  return (
    <aside className='rounded-[1.5rem] border border-white/10 bg-black/25 p-5'>
      <div className='flex items-start gap-3'>
        <span className='grid h-12 w-12 shrink-0 place-items-center rounded-2xl bg-sky-300/12 text-sky-200 ring-1 ring-sky-200/15'>
          <Icon className='h-5 w-5' />
        </span>
        <div>
          <p className='font-mono text-xs text-sky-200'>{project.status}</p>
          <p className='mt-1 text-sm text-zinc-500'>{project.type}</p>
        </div>
      </div>

      <p className='mt-5 text-base leading-8 text-zinc-300'>
        {project.description}
      </p>

      <div className='mt-5 flex flex-wrap gap-2'>
        <button
          type='button'
          onClick={onOpenDetails}
          className='inline-flex items-center gap-2 rounded-full bg-white px-4 py-2 text-sm font-semibold text-zinc-950 transition hover:-translate-y-0.5 hover:bg-sky-100 focus-visible:ring-2 focus-visible:ring-sky-300/70 focus-visible:outline-none'
        >
          Details
          <Sparkles className='h-4 w-4' />
        </button>
        <a
          href={project.liveUrl}
          className='inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/6 px-4 py-2 text-sm font-semibold text-white transition hover:-translate-y-0.5 hover:border-sky-300/35 hover:bg-sky-300/10 focus-visible:ring-2 focus-visible:ring-sky-300/70 focus-visible:outline-none'
        >
          Live
          <ExternalLink className='h-4 w-4' />
        </a>
        <a
          href={project.githubUrl}
          target='_blank'
          className='inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/6 px-4 py-2 text-sm font-semibold text-white transition hover:-translate-y-0.5 hover:border-sky-300/35 hover:bg-sky-300/10 focus-visible:ring-2 focus-visible:ring-sky-300/70 focus-visible:outline-none'
        >
          GitHub
          <FaGithub className='h-4 w-4' />
        </a>
      </div>

      <div className='mt-6 rounded-[1.25rem] border border-white/10 bg-zinc-950/70 p-2'>
        <div className='grid grid-cols-2 gap-2 sm:grid-cols-4'>
          {project.tabs.map((tab) => (
            <button
              key={tab.label}
              type='button'
              onClick={() => onTabChange(tab.label)}
              className={cn(
                'rounded-2xl px-3 py-2 text-sm font-semibold transition focus-visible:ring-2 focus-visible:ring-sky-300/70 focus-visible:outline-none',
                activeInspection.label === tab.label
                  ? 'bg-sky-300 text-zinc-950'
                  : 'text-zinc-400 hover:bg-white/8 hover:text-white',
              )}
            >
              {tab.label}
            </button>
          ))}
        </div>
      </div>

      <div className='mt-4 min-h-56 rounded-[1.25rem] border border-white/10 bg-white/6 p-4'>
        <p className='font-mono text-xs text-sky-200'>
          {activeInspection.eyebrow}
        </p>
        <div className='mt-4 grid gap-3'>
          {activeInspection.items.map((item, index) => (
            <div
              key={item}
              className='grid gap-3 rounded-2xl border border-white/10 bg-black/20 p-3 sm:grid-cols-[auto_1fr_auto]'
            >
              <span className='font-mono text-sm text-sky-200'>
                {String(index + 1).padStart(2, '0')}
              </span>
              <span className='text-sm leading-6 text-zinc-300'>{item}</span>
              <Code2 className='h-4 w-4 text-sky-200' />
            </div>
          ))}
        </div>
        {activeInspection.note ? (
          <p className='mt-4 text-sm leading-7 text-zinc-400'>
            {activeInspection.note}
          </p>
        ) : null}
      </div>
    </aside>
  )
}
