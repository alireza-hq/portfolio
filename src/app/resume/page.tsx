import type { Metadata } from 'next'

import { ResumePage } from '@/features/resume/components/ResumePage'

export const metadata: Metadata = {
  title: 'Resume',
  description:
    "Inspect or download Alireza Haghighi's frontend-focused software developer resume.",
}

export default function Resume() {
  return <ResumePage />
}
