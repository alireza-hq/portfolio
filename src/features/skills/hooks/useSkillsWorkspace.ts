'use client'

import { useMemo, useState } from 'react'

import { missions, softSkills, stackCategories } from '../data/skills'
import type { Mission, SoftSkill, StackCategory, StackItem } from '../types'

export function useSkillsWorkspace() {
  const [activeCategoryId, setActiveCategoryId] = useState(missions[0].tabId)
  const [lockedToolName, setLockedToolName] = useState(missions[0].stackName)
  const [previewToolName, setPreviewToolName] = useState<string>()
  const [activeSoftId, setActiveSoftId] = useState(missions[0].softId)
  const [activeMissionId, setActiveMissionId] = useState(missions[0].id)

  const activeCategory = getCategory(activeCategoryId)
  const activeMission = getMission(activeMissionId)
  const lockedTool = getTool(activeCategory, lockedToolName)
  const previewTool = previewToolName
    ? getTool(activeCategory, previewToolName)
    : lockedTool
  const activeSoftSkill = getSoftSkill(activeSoftId)

  const stackCount = useMemo(
    () =>
      stackCategories.reduce(
        (count, category) => count + category.items.length,
        0,
      ),
    [],
  )

  function selectCategory(category: StackCategory) {
    setActiveCategoryId(category.id)
    setLockedToolName(category.items[0].name)
    setPreviewToolName(undefined)
  }

  function lockTool(tool: StackItem) {
    setLockedToolName(tool.name)
    setPreviewToolName(undefined)
  }

  function previewToolCandidate(tool?: StackItem) {
    setPreviewToolName(tool?.name)
  }

  function selectSoftSkill(skill: SoftSkill) {
    setActiveSoftId(skill.id)
  }

  function runMission(mission: Mission) {
    const missionCategory = getCategory(mission.tabId)

    setActiveMissionId(mission.id)
    setActiveSoftId(mission.softId)
    setActiveCategoryId(missionCategory.id)
    setLockedToolName(mission.stackName)
    setPreviewToolName(undefined)
  }

  return {
    activeCategory,
    activeMission,
    activeSoftSkill,
    lockedTool,
    previewTool,
    runMission,
    selectCategory,
    lockTool,
    previewToolCandidate,
    selectSoftSkill,
    stackCount,
  }
}

function getCategory(categoryId: StackCategory['id']) {
  return (
    stackCategories.find((category) => category.id === categoryId) ??
    stackCategories[0]
  )
}

function getMission(missionId: Mission['id']) {
  return missions.find((mission) => mission.id === missionId) ?? missions[0]
}

function getSoftSkill(softSkillId: SoftSkill['id']) {
  return softSkills.find((skill) => skill.id === softSkillId) ?? softSkills[0]
}

function getTool(category: StackCategory, toolName: StackItem['name']) {
  return (
    category.items.find((tool) => tool.name === toolName) ?? category.items[0]
  )
}
