'use client'

import { useState } from 'react'
import type { MouseEvent, PointerEvent } from 'react'
import Image from 'next/image'

import { certifications } from '../data/certifications'

type Certification = (typeof certifications)[number]
type PreviewPosition = {
  isFlipped: boolean
  x: number
  y: number
}

const PREVIEW_WIDTH = 288
const PREVIEW_OFFSET = 10

export const AboutCertifications = () => {
  const [activeCertification, setActiveCertification] =
    useState<Certification>()
  const [previewPosition, setPreviewPosition] = useState<PreviewPosition>()

  function getPreviewPosition(x: number, y: number): PreviewPosition {
    return {
      isFlipped: x + PREVIEW_WIDTH + PREVIEW_OFFSET > window.innerWidth,
      x,
      y,
    }
  }

  function showPreview(certification: Certification, x: number, y: number) {
    setActiveCertification(certification)
    setPreviewPosition(getPreviewPosition(x, y))
  }

  function movePreview(event: PointerEvent<HTMLButtonElement>) {
    setPreviewPosition(getPreviewPosition(event.clientX, event.clientY))
  }

  function focusPreview(
    certification: Certification,
    element: HTMLButtonElement,
  ) {
    const rect = element.getBoundingClientRect()

    showPreview(certification, rect.left, rect.bottom)
  }

  function hidePreview() {
    setActiveCertification(undefined)
    setPreviewPosition(undefined)
  }

  function blockImageAccess(event: MouseEvent) {
    event.preventDefault()
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
            onPointerEnter={(event) =>
              showPreview(item, event.clientX, event.clientY)
            }
            onPointerMove={movePreview}
            onPointerLeave={hidePreview}
            onFocus={(event) => {
              if (event.currentTarget.matches(':focus-visible')) {
                focusPreview(item, event.currentTarget)
              }
            }}
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
            transform: previewPosition.isFlipped
              ? `translate(calc(-100% - ${PREVIEW_OFFSET}px), ${PREVIEW_OFFSET}px)`
              : `translate(${PREVIEW_OFFSET}px, ${PREVIEW_OFFSET}px)`,
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
