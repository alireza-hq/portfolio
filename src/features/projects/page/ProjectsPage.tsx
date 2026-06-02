'use client'

import { useEffect, useMemo, useState } from 'react'

import { cn } from '@/lib/utils/cn'

import { ActiveBuildConsole } from '../components/ActiveBuildConsole'
import { ProjectCard } from '../components/ProjectCard'
import { ProjectDetailsModal } from '../components/ProjectDetailsModal'
import { ProjectFilter } from '../components/ProjectFilter'
import { ProjectInspector } from '../components/ProjectInspector'
import { ProjectPreview } from '../components/ProjectPreview'
import { ProjectsHero } from '../components/ProjectsHero'
import { projects } from '../data/projects'
import type { Project, ProjectFilter as ProjectFilterValue } from '../types'

export function ProjectsPage() {
  const [activeFilter, setActiveFilter] = useState<ProjectFilterValue>('All')
  const [activeProjectSlug, setActiveProjectSlug] = useState(projects[0].slug)
  const [activeTab, setActiveTab] = useState(projects[0].tabs[0].label)
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
      setActiveTab(nextProject.tabs[0].label)
    }
  }

  function selectProject(project: Project) {
    setActiveProjectSlug(project.slug)
    setActiveTab(project.tabs[0].label)
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

        <section className='mt-12 overflow-hidden rounded-[2rem] border border-zinc-900/10 bg-zinc-950 text-white shadow-2xl shadow-zinc-950/15 dark:border-white/10 dark:bg-zinc-950 dark:shadow-black/25'>
          <div className='grid gap-6 p-5 sm:p-6 xl:grid-cols-[1.2fr_0.8fr]'>
            <ProjectPreview project={activeProject} />
            <ProjectInspector
              project={activeProject}
              activeTab={activeTab}
              onTabChange={setActiveTab}
              onOpenDetails={() => setIsModalOpen(true)}
            />
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

        <ActiveBuildConsole
          project={activeProject}
          onOpenDetails={() => setIsModalOpen(true)}
        />
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
