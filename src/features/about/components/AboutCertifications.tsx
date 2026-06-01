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

export const AboutCertifications = () => {
  const [activeCertification, setActiveCertification] =
    useState<Certification>()
  const [previewPosition, setPreviewPosition] = useState<PreviewPosition>()

  function movePreview(event: MouseEvent<HTMLAnchorElement>) {
    setPreviewPosition({
      x: Math.min(event.clientX + 22, window.innerWidth - 390),
      y: Math.min(event.clientY + 22, window.innerHeight - 285),
    })
  }

  function focusPreview(certification: Certification) {
    setActiveCertification(certification)
    setPreviewPosition({
      x: Math.max(window.innerWidth - 410, 16),
      y: Math.max(window.innerHeight / 2 - 135, 16),
    })
  }

  return (
    <div className='rounded-4xl border border-zinc-900/10 bg-white/80 p-6 shadow-xl shadow-zinc-900/5 backdrop-blur-md dark:border-white/10 dark:bg-zinc-950/80 dark:shadow-black/20'>
      <p className='font-mono text-xs font-semibold tracking-widest text-sky-600 uppercase dark:text-sky-300'>
        certifications
      </p>
      <div className='mt-5 grid gap-3 sm:grid-cols-2'>
        {certifications.map((item) => (
          <a
            key={item.title}
            href={item.image}
            target='_blank'
            rel='noreferrer'
            onMouseEnter={() => setActiveCertification(item)}
            onMouseMove={movePreview}
            onMouseLeave={() => setActiveCertification(undefined)}
            onFocus={() => focusPreview(item)}
            onBlur={() => setActiveCertification(undefined)}
            className='group rounded-2xl border border-zinc-900/10 bg-zinc-50/90 p-4 shadow-sm shadow-zinc-900/5 transition hover:-translate-y-0.5 hover:border-sky-400/40 hover:bg-white focus-visible:ring-2 focus-visible:ring-sky-400/60 focus-visible:outline-none dark:border-white/10 dark:bg-white/6 dark:hover:bg-white/10'
          >
            <span className='font-mono text-[0.65rem] font-semibold tracking-widest text-sky-600 uppercase dark:text-sky-300'>
              {item.issuer}
            </span>
            <span className='mt-2 block text-sm font-semibold text-zinc-800 group-hover:text-sky-700 dark:text-zinc-200 dark:group-hover:text-sky-200'>
              {item.title}
            </span>
          </a>
        ))}
      </div>

      {activeCertification && previewPosition && (
        <div
          className='pointer-events-none fixed z-100 hidden w-96 overflow-hidden rounded-2xl border border-white/18 bg-zinc-950/92 p-2 shadow-2xl shadow-zinc-950/30 backdrop-blur-md md:block'
          style={{
            left: previewPosition.x,
            top: previewPosition.y,
          }}
          aria-hidden='true'
        >
          <Image
            src={activeCertification.image}
            alt=''
            width={3508}
            height={2480}
            className='h-auto w-full rounded-xl'
          />
        </div>
      )}
    </div>
  )
}
