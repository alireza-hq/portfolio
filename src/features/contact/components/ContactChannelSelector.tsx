import { ArrowUpRight } from 'lucide-react'

import { cn } from '@/lib/utils/cn'

import type { ContactChannel } from '../data/channels'

type ContactChannelSelectorProps = {
  activeChannel: ContactChannel
  channels: ContactChannel[]
  onSelect: (channel: ContactChannel) => void
}

export function ContactChannelSelector({
  activeChannel,
  channels,
  onSelect,
}: ContactChannelSelectorProps) {
  return (
    <div className='mt-5 grid gap-2 sm:grid-cols-3'>
      {channels.map((channel) => (
        <ContactChannelButton
          key={channel.label}
          channel={channel}
          isActive={activeChannel.label === channel.label}
          onSelect={onSelect}
        />
      ))}
    </div>
  )
}

type ContactChannelButtonProps = {
  channel: ContactChannel
  isActive: boolean
  onSelect: (channel: ContactChannel) => void
}

function ContactChannelButton({
  channel,
  isActive,
  onSelect,
}: ContactChannelButtonProps) {
  const Icon = channel.icon

  return (
    <button
      type='button'
      onClick={() => onSelect(channel)}
      className={cn(
        'group flex items-center justify-between gap-3 rounded-2xl border px-3 py-2.5 text-left transition',
        isActive
          ? 'border-sky-500/35 bg-sky-500/10 dark:border-sky-200/30 dark:bg-sky-300/12'
          : 'border-zinc-900/10 bg-white/70 hover:border-sky-400/30 hover:bg-white dark:border-white/10 dark:bg-white/6 dark:hover:border-white/20 dark:hover:bg-white/9',
      )}
    >
      <span className='flex min-w-0 items-center gap-3'>
        <span
          className={cn(
            'grid h-9 w-9 shrink-0 place-items-center rounded-xl transition',
            isActive
              ? 'bg-sky-500/10 text-sky-700 dark:bg-white/16 dark:text-white'
              : 'bg-zinc-100 text-zinc-700 dark:bg-white/10 dark:text-white',
          )}
        >
          <Icon className='h-4 w-4' />
        </span>
        <span className='block min-w-0 text-sm font-semibold text-zinc-950 dark:text-white'>
          {channel.label}
        </span>
      </span>
      <ArrowUpRight className='h-4 w-4 shrink-0 text-zinc-500 transition group-hover:text-sky-600 dark:group-hover:text-white' />
    </button>
  )
}
