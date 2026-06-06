'use client'

import { useEffect, useMemo, useState } from 'react'
import { ExternalLink } from 'lucide-react'
import { FaGithub } from 'react-icons/fa6'

import { cn } from '@/lib/utils/cn'

import { ProjectCard } from '../components/ProjectCard'
import { ProjectDetailsModal } from '../components/ProjectDetailsModal'
import { ProjectFilter } from '../components/ProjectFilter'
import { ProjectPreview } from '../components/ProjectPreview'
import { ProjectsHero } from '../components/ProjectsHero'
import { projects } from '../data/projects'
import type { Project, ProjectFilter as ProjectFilterValue } from '../types'

export function ProjectsPage() {
  const [activeFilter, setActiveFilter] = useState<ProjectFilterValue>('All')
  const [activeProjectSlug, setActiveProjectSlug] = useState(projects[0].slug)
  const [isModalOpen, setIsModalOpen] = useState(false)

  const visibleProjects = useMemo(
    () =>
      activeFilter === 'All'
        ? projects
        : projects.filter((project) => project.category === activeFilter),
    [activeFilter],
  )

  const activeProject =
    visibleProjects.find((project) => project.slug === activeProjectSlug) ??
    visibleProjects[0]

  useEffect(() => {
    if (!isModalOpen) return

    function handleKeyDown(event: KeyboardEvent) {
      if (event.key === 'Escape') setIsModalOpen(false)
    }

    document.addEventListener('keydown', handleKeyDown)
    return () => document.removeEventListener('keydown', handleKeyDown)
  }, [isModalOpen])

  function selectFilter(filter: ProjectFilterValue) {
    setActiveFilter(filter)

    const nextProject =
      filter === 'All'
        ? projects[0]
        : projects.find((project) => project.category === filter)

    if (nextProject) {
      setActiveProjectSlug(nextProject.slug)
    }
  }

  function selectProject(project: Project) {
    setActiveProjectSlug(project.slug)
  }

  return (
    <main
      className={cn(
        'relative min-h-screen px-4 pt-32 pb-20 sm:px-6 lg:px-8',
        isModalOpen ? 'z-[90]' : 'z-10',
      )}
    >
      <section className='mx-auto w-full max-w-7xl'>
        <div className='grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-end'>
          <ProjectsHero />
          <ProjectFilter activeFilter={activeFilter} onChange={selectFilter} />
        </div>

        <section className='mt-12 overflow-hidden rounded-[2rem] border border-zinc-900/10 bg-white/75 shadow-2xl shadow-zinc-950/10 backdrop-blur-xl dark:border-white/10 dark:bg-zinc-950 dark:shadow-black/25'>
          <div className='grid gap-6 p-5 sm:p-6 lg:grid-cols-[1.15fr_0.85fr] lg:items-center'>
            <ProjectPreview project={activeProject} />
            <div>
              <p className='font-mono text-xs font-semibold text-sky-600 dark:text-sky-300'>
                {activeProject.status}
              </p>
              <h2 className='mt-2 text-3xl font-semibold text-zinc-950 dark:text-white'>
                {activeProject.title}
              </h2>
              <p className='mt-4 leading-7 text-zinc-600 dark:text-zinc-400'>
                {activeProject.description}
              </p>
              <div className='mt-6 flex flex-wrap gap-2'>
                <button
                  type='button'
                  onClick={() => setIsModalOpen(true)}
                  className='rounded-full bg-zinc-950 px-4 py-2 text-sm font-semibold text-white transition hover:bg-sky-700 focus-visible:ring-2 focus-visible:ring-sky-400/70 focus-visible:outline-none dark:bg-white dark:text-zinc-950 dark:hover:bg-sky-200'
                >
                  Details
                </button>
                {activeProject.liveUrl ? (
                  <a
                    href={activeProject.liveUrl}
                    className='inline-flex items-center gap-2 rounded-full border border-zinc-900/10 px-4 py-2 text-sm font-semibold text-zinc-700 transition hover:border-sky-400/40 hover:text-sky-700 focus-visible:ring-2 focus-visible:ring-sky-400/70 focus-visible:outline-none dark:border-white/10 dark:text-zinc-200 dark:hover:text-sky-200'
                  >
                    Live <ExternalLink className='h-4 w-4' />
                  </a>
                ) : null}
                {activeProject.githubUrl ? (
                  <a
                    href={activeProject.githubUrl}
                    target='_blank'
                    rel='noreferrer'
                    className='inline-flex items-center gap-2 rounded-full border border-zinc-900/10 px-4 py-2 text-sm font-semibold text-zinc-700 transition hover:border-sky-400/40 hover:text-sky-700 focus-visible:ring-2 focus-visible:ring-sky-400/70 focus-visible:outline-none dark:border-white/10 dark:text-zinc-200 dark:hover:text-sky-200'
                  >
                    GitHub <FaGithub className='h-4 w-4' />
                  </a>
                ) : null}
              </div>
            </div>
          </div>
        </section>

        <div className='mt-4 grid gap-4 md:grid-cols-3'>
          {visibleProjects.map((project) => (
            <ProjectCard
              key={project.slug}
              project={project}
              isActive={activeProject.slug === project.slug}
              onSelect={selectProject}
            />
          ))}
        </div>
      </section>

      {isModalOpen ? (
        <ProjectDetailsModal
          project={activeProject}
          onClose={() => setIsModalOpen(false)}
        />
      ) : null}
    </main>
  )
}
