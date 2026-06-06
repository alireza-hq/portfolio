'use client'

import { useEffect, useState } from 'react'

export function AppIntro() {
  const [isLeaving, setIsLeaving] = useState(false)
  const [isMounted, setIsMounted] = useState(true)

  useEffect(() => {
    const leaveTimer = window.setTimeout(() => setIsLeaving(true), 3300)
    const unmountTimer = window.setTimeout(() => setIsMounted(false), 4150)
    const fallbackTimer = window.setTimeout(() => setIsMounted(false), 5000)

    return () => {
      window.clearTimeout(leaveTimer)
      window.clearTimeout(unmountTimer)
      window.clearTimeout(fallbackTimer)
    }
  }, [])

  if (!isMounted) return null

  return (
    <div
      className={`app-intro ${isLeaving ? 'app-intro--leaving' : ''}`}
      aria-hidden='true'
    >
      <div className='app-intro__panel'>
        <div className='app-intro__orb'>
          <span />
          <span />
          <span />
        </div>

        <div className='app-intro__content'>
          <p className='app-intro__eyebrow'>portfolio interface</p>
          <div className='app-intro__brand'>ALIREZA</div>
          <div className='app-intro__terminal'>
            <span>booting terminal</span>
            <span>syncing stack</span>
            <span>opening workspace</span>
          </div>
          <div className='app-intro__progress' />
        </div>
      </div>
    </div>
  )
}
