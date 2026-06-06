import Image from 'next/image'

import { values } from '../data/values'
import type { Certification } from '../data/certifications'

type AboutPrinciplesProps = {
  activeCertification?: Certification
}

export const AboutPrinciples = ({
  activeCertification,
}: AboutPrinciplesProps) => {
  return (
    <div className='grid overflow-hidden rounded-4xl border border-zinc-900/10 bg-white/80 shadow-xl shadow-zinc-900/5 backdrop-blur-md sm:grid-cols-[0.9fr_1.1fr] dark:border-white/10 dark:bg-zinc-950/80 dark:shadow-black/20'>
      <div className='relative flex min-h-64 flex-col justify-between overflow-hidden bg-zinc-100/80 p-6 sm:min-h-80 dark:bg-white/5'>
        <div className='absolute -right-10 -bottom-10 h-40 w-40 rounded-full bg-sky-500/12 blur-2xl' />
        <p className='font-mono text-xs font-semibold tracking-widest text-sky-600 uppercase dark:text-sky-300'>
          {activeCertification ? 'certificate preview' : 'principles'}
        </p>
        <div className='relative'>
          <p className='font-mono text-6xl leading-none font-semibold text-zinc-950/5 dark:text-white/8'>
            {activeCertification ? 'CERT' : 'WORK'}
          </p>
          <h2 className='mt-4 text-2xl font-semibold text-zinc-950 dark:text-white'>
            {activeCertification
              ? activeCertification.title
              : 'How I like the work to feel.'}
          </h2>
        </div>
      </div>

      {activeCertification ? (
        <div
          className='relative h-72 bg-zinc-950/95 p-3 select-none sm:h-80'
          onContextMenu={(event) => event.preventDefault()}
        >
          <Image
            src={activeCertification.image}
            alt={`${activeCertification.title} certificate`}
            width={3508}
            height={2480}
            draggable={false}
            className='h-full w-full rounded-2xl object-contain select-none'
          />
        </div>
      ) : (
        <div className='grid h-72 divide-y divide-zinc-900/10 pt-3 sm:h-80 dark:divide-white/10'>
          {values.map((item) => (
            <p
              key={item}
              className='flex items-center px-6 py-3 text-sm font-medium text-zinc-700 dark:text-zinc-300'
            >
              {item}
            </p>
          ))}
        </div>
      )}
    </div>
  )
}
