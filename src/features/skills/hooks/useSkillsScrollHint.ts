'use client'

import { useEffect, useState } from 'react'

export function useSkillsScrollHint() {
  const [showScrollHint, setShowScrollHint] = useState(false)

  useEffect(() => {
    function syncScrollHint() {
      const scrollableHeight =
        document.documentElement.scrollHeight - window.innerHeight
      const distanceFromBottom = scrollableHeight - window.scrollY

      setShowScrollHint(scrollableHeight > 120 && distanceFromBottom > 160)
    }

    syncScrollHint()
    window.addEventListener('scroll', syncScrollHint, { passive: true })
    window.addEventListener('resize', syncScrollHint)

    return () => {
      window.removeEventListener('scroll', syncScrollHint)
      window.removeEventListener('resize', syncScrollHint)
    }
  }, [])

  return showScrollHint
}
