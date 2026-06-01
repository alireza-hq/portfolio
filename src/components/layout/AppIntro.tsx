'use client'

import { useEffect, useState } from 'react'

export function AppIntro() {
  const [isLeaving, setIsLeaving] = useState(false)
  const [isMounted, setIsMounted] = useState(true)

  useEffect(() => {
    const leaveTimer = window.setTimeout(() => setIsLeaving(true), 1700)
    const unmountTimer = window.setTimeout(() => setIsMounted(false), 2600)

    return () => {
      window.clearTimeout(leaveTimer)
      window.clearTimeout(unmountTimer)
    }
  }, [])

  if (!isMounted) return null

  return (
    <div
      className={`app-intro ${isLeaving ? 'app-intro--leaving' : ''}`}
      aria-hidden='true'
    >
      <div className='app-intro__panel'>
        <p className='app-intro__eyebrow'>initializing portfolio</p>
        <div className='app-intro__brand'>Welcome</div>
        <div className='app-intro__progress' />
      </div>
    </div>
  )
}
