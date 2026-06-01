'use client'

import { useState } from 'react'
import type { MouseEvent } from 'react'
import Image from 'next/image'

import { certifications } from '../data/certifications'

type Certification = (typeof certifications)[number]
type PreviewPosition = {
  x: number
  y: number
}

const PREVIEW_WIDTH = 288
const PREVIEW_HEIGHT = 204
const PREVIEW_OFFSET = 8
const VIEWPORT_GAP = 12

export const AboutCertifications = () => {
  const [activeCertification, setActiveCertification] =
    useState<Certification>()
  const [previewPosition, setPreviewPosition] = useState<PreviewPosition>()

  function getPreviewPosition(x: number, y: number) {
    const hasHorizontalRoom =
      x + PREVIEW_OFFSET + PREVIEW_WIDTH <= window.innerWidth - VIEWPORT_GAP
    const hasVerticalRoom =
      y + PREVIEW_OFFSET + PREVIEW_HEIGHT <= window.innerHeight - VIEWPORT_GAP
    const nextX = hasHorizontalRoom
      ? x + PREVIEW_OFFSET
      : x - PREVIEW_WIDTH - PREVIEW_OFFSET
    const nextY = hasVerticalRoom
      ? y + PREVIEW_OFFSET
      : y - PREVIEW_HEIGHT - PREVIEW_OFFSET

    return {
      x: Math.max(
        VIEWPORT_GAP,
        Math.min(nextX, window.innerWidth - PREVIEW_WIDTH - VIEWPORT_GAP),
      ),
      y: Math.max(
        VIEWPORT_GAP,
        Math.min(nextY, window.innerHeight - PREVIEW_HEIGHT - VIEWPORT_GAP),
      ),
    }
  }

  function movePreview(event: MouseEvent<HTMLButtonElement>) {
    setPreviewPosition(getPreviewPosition(event.clientX, event.clientY))
  }

  function showPreview(
    certification: Certification,
    event: MouseEvent<HTMLButtonElement>,
  ) {
    setActiveCertification(certification)
    setPreviewPosition(getPreviewPosition(event.clientX, event.clientY))
  }

  function hidePreview() {
    setActiveCertification(undefined)
    setPreviewPosition(undefined)
  }

  function blockImageAccess(event: MouseEvent) {
    event.preventDefault()
  }

  function focusPreview(certification: Certification) {
    setPreviewPosition({
      x: Math.max(
        window.innerWidth - PREVIEW_WIDTH - VIEWPORT_GAP,
        VIEWPORT_GAP,
      ),
      y: Math.max(window.innerHeight / 2 - PREVIEW_HEIGHT / 2, VIEWPORT_GAP),
    })
    setActiveCertification(certification)
  }

  return (
    <div className='rounded-4xl border border-zinc-900/10 bg-white/80 p-6 shadow-xl shadow-zinc-900/5 backdrop-blur-md dark:border-white/10 dark:bg-zinc-950/80 dark:shadow-black/20'>
      <p className='font-mono text-xs font-semibold tracking-widest text-sky-600 uppercase dark:text-sky-300'>
        certifications
      </p>
      <div className='mt-5 grid gap-3 sm:grid-cols-2'>
        {certifications.map((item) => (
          <button
            key={item.title}
            type='button'
            onMouseEnter={(event) => showPreview(item, event)}
            onMouseMove={movePreview}
            onMouseLeave={hidePreview}
            onFocus={() => focusPreview(item)}
            onBlur={hidePreview}
            className='group rounded-2xl border border-zinc-900/10 bg-zinc-50/90 p-4 text-left shadow-sm shadow-zinc-900/5 transition hover:-translate-y-0.5 hover:border-sky-400/40 hover:bg-white focus-visible:ring-2 focus-visible:ring-sky-400/60 focus-visible:outline-none dark:border-white/10 dark:bg-white/6 dark:hover:bg-white/10'
          >
            <span className='font-mono text-[0.65rem] font-semibold tracking-widest text-sky-600 uppercase dark:text-sky-300'>
              {item.issuer}
            </span>
            <span className='mt-2 block text-sm font-semibold text-zinc-800 group-hover:text-sky-700 dark:text-zinc-200 dark:group-hover:text-sky-200'>
              {item.title}
            </span>
          </button>
        ))}
      </div>

      {activeCertification && previewPosition && (
        <div
          className='pointer-events-none fixed z-100 hidden w-72 overflow-hidden rounded-2xl border border-white/18 bg-zinc-950/92 p-2 shadow-2xl shadow-zinc-950/30 backdrop-blur-md select-none md:block'
          style={{
            left: previewPosition.x,
            top: previewPosition.y,
          }}
          onContextMenu={blockImageAccess}
          aria-hidden='true'
        >
          <Image
            src={activeCertification.image}
            alt=''
            width={3508}
            height={2480}
            draggable={false}
            className='h-auto w-full rounded-xl select-none'
          />
        </div>
      )}
    </div>
  )
}
