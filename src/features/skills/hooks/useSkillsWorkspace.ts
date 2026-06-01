'use client'

import { useMemo, useState } from 'react'
import { FaMugHot } from 'react-icons/fa6'

import { missions, softSkills, stackCategories } from '../data/skills'
import type { Mission, SoftSkill, StackCategory, StackItem } from '../types'

const COFFEE_CHANCE = 0.05

const coffeeTool: StackItem = {
  name: 'Coffee',
  icon: FaMugHot,
  comfort: 'Essential',
  fitScore: 100,
  tone: 'text-amber-500',
  use: 'Runtime dependency for late-night debugging sessions.',
}

export function useSkillsWorkspace() {
  const [activeCategoryId, setActiveCategoryId] = useState(missions[0].tabId)
  const [lockedToolName, setLockedToolName] = useState(missions[0].stackName)
  const [previewToolName, setPreviewToolName] = useState<string>()
  const [glitchTool, setGlitchTool] = useState<StackItem>()
  const [activeSoftId, setActiveSoftId] = useState(missions[0].softId)
  const [activeMissionId, setActiveMissionId] = useState(missions[0].id)

  const activeCategory = getCategory(activeCategoryId)
  const activeMission = getMission(activeMissionId)
  const lockedTool = getTool(activeCategory, lockedToolName)
  const previewTool =
    glitchTool ??
    (previewToolName ? getTool(activeCategory, previewToolName) : lockedTool)
  const activeSoftSkill = getSoftSkill(activeSoftId)

  const stackCount = useMemo(
    () =>
      stackCategories.reduce(
        (count, category) => count + category.items.length,
        0,
      ),
    [],
  )

  const workspaceScore = Math.round(
    (previewTool.fitScore + activeMission.result.length + stackCount) / 3,
  )

  function selectCategory(category: StackCategory) {
    setActiveCategoryId(category.id)
    setLockedToolName(category.items[0].name)
    setPreviewToolName(undefined)
    setGlitchTool(undefined)
  }

  function lockTool(tool: StackItem) {
    setGlitchTool(Math.random() < COFFEE_CHANCE ? coffeeTool : undefined)
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
    setGlitchTool(undefined)
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
    workspaceScore,
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
