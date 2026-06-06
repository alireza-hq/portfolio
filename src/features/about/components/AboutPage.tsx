'use client'

import { useState } from 'react'

import { AboutCertifications } from './AboutCertifications'
import { AboutEducation } from './AboutEducation'
import { AboutHero } from './AboutHero'
import { AboutPrinciples } from './AboutPrinciples'
import type { Certification } from '../data/certifications'

export function AboutPage() {
  const [activeCertification, setActiveCertification] =
    useState<Certification>()

  return (
    <main className='relative z-10 min-h-screen px-4 pt-32 pb-20 sm:px-6 lg:px-8'>
      <section className='mx-auto w-full max-w-7xl'>
        <AboutHero />

        <div className='mt-8 grid gap-8 lg:grid-cols-[0.8fr_1.2fr]'>
          <AboutEducation />
          <section className='grid gap-8'>
            <AboutCertifications
              activeCertification={activeCertification}
              onCertificationEnter={setActiveCertification}
              onCertificationLeave={() => setActiveCertification(undefined)}
              onCertificationToggle={(certification) =>
                setActiveCertification((current) =>
                  current?.title === certification.title
                    ? undefined
                    : certification,
                )
              }
            />
            <AboutPrinciples activeCertification={activeCertification} />
          </section>
        </div>
      </section>
    </main>
  )
}
