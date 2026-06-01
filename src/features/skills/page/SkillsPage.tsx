'use client'

import { BuildRecipe } from '../components/BuildRecipe'
import { LiveReadout } from '../components/LiveReadout'
import { MissionControl } from '../components/MissionControl'
import { QuickActions } from '../components/QuickActions'
import { SkillsHero } from '../components/SkillsHero'
import { SkillsScrollHint } from '../components/SkillsScrollHint'
import { SoftSkillModules } from '../components/SoftSkillModules'
import { StackInspector } from '../components/StackInspector'
import {
  missions,
  quickActions,
  softSkills,
  stackCategories,
} from '../data/skills'
import { useSkillsScrollHint } from '../hooks/useSkillsScrollHint'
import { useSkillsWorkspace } from '../hooks/useSkillsWorkspace'

export function SkillsPage() {
  const showScrollHint = useSkillsScrollHint()
  const workspace = useSkillsWorkspace()

  return (
    <main className='relative z-10 min-h-screen px-4 pt-32 pb-20 sm:px-6 lg:px-8'>
      <SkillsScrollHint isVisible={showScrollHint} />

      <section className='mx-auto w-full max-w-7xl'>
        <div className='grid gap-8 lg:grid-cols-[0.86fr_1.14fr] lg:items-end'>
          <SkillsHero />
          <MissionControl
            activeMission={workspace.activeMission}
            activeSoft={workspace.activeSoftSkill}
            activeStack={workspace.previewTool}
            missions={missions}
            onMissionSelect={workspace.runMission}
            stackCount={workspace.stackCount}
            workspaceScore={workspace.workspaceScore}
          />
        </div>

        <StackInspector
          activeCategory={workspace.activeCategory}
          activeMission={workspace.activeMission}
          categories={stackCategories}
          lockedTool={workspace.lockedTool}
          previewTool={workspace.previewTool}
          onCategorySelect={workspace.selectCategory}
          onToolLock={workspace.lockTool}
          onToolPreview={workspace.previewToolCandidate}
        />

        <section className='mt-4 grid scroll-mt-28 gap-4 lg:grid-cols-[0.95fr_1.05fr]'>
          <SoftSkillModules
            activeSoftSkill={workspace.activeSoftSkill}
            softSkills={softSkills}
            onSoftSkillSelect={workspace.selectSoftSkill}
          />
          <LiveReadout
            activeSoftSkill={workspace.activeSoftSkill}
            activeStack={workspace.previewTool}
            workspaceScore={workspace.workspaceScore}
          />
        </section>

        <div className='mt-4 grid gap-4 lg:grid-cols-[1fr_1fr]'>
          <BuildRecipe
            activeMission={workspace.activeMission}
            activeSoftSkill={workspace.activeSoftSkill}
            activeStack={workspace.previewTool}
          />
          <QuickActions actions={quickActions} />
        </div>
      </section>
    </main>
  )
}
