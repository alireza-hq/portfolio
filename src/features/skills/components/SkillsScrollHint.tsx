import { cn } from '@/lib/utils/cn'

type SkillsScrollHintProps = {
  isVisible: boolean
}

export function SkillsScrollHint({ isVisible }: SkillsScrollHintProps) {
  return (
    <div
      className={cn(
        'pointer-events-none fixed bottom-7 left-1/2 z-100 -translate-x-1/2 text-sky-600 transition duration-500 dark:text-sky-200',
        isVisible ? 'translate-y-0 opacity-90' : 'translate-y-3 opacity-0',
      )}
      aria-hidden='true'
    >
      <span className='grid h-9 w-6 justify-center rounded-full border-2 border-current pt-1.5 drop-shadow-[0_0_20px_rgb(14_165_233/0.35)]'>
        <span className='animate-scroll-wheel h-1.5 w-1 rounded-full bg-current' />
      </span>
    </div>
  )
}
