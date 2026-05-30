import Link from 'next/link'

const navLinks = [
  { href: '#skills', label: 'Skills' },
  { href: '#projects', label: 'Projects' },
  { href: '#contact', label: 'Contact' },
  { href: '#about', label: 'About Me' },
]

const actionLinks = [
  { href: '#resume', label: 'Resume' },
  { href: '#theme', label: 'Theme' },
]

export function Navbar() {
  return (
    <header className='pointer-events-none fixed inset-x-0 top-4 z-50 flex justify-center px-4 sm:top-6'>
      <nav
        className='pointer-events-auto flex w-full max-w-3xl items-center justify-between gap-3 rounded-full border border-white/10 bg-zinc-950/45 px-3 py-2 shadow-2xl ring-1 shadow-black/30 ring-white/5 backdrop-blur-[2px] supports-backdrop-filter:bg-zinc-950/30 sm:px-4'
        aria-label='Primary navigation'
      >
        <div className='flex min-w-0 flex-1 scrollbar-none items-center justify-center gap-1 overflow-x-auto [&::-webkit-scrollbar]:hidden'>
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className='group relative shrink-0 rounded-full px-3 py-2 text-sm font-medium text-zinc-300 transition duration-200 hover:-translate-y-0.5 hover:bg-white/8 hover:text-white focus-visible:ring-2 focus-visible:ring-cyan-300/70 focus-visible:outline-none sm:px-4'
            >
              <span className='relative z-10'>{link.label}</span>
              <span className='absolute inset-x-4 bottom-1 h-px origin-center scale-x-0 bg-violet-500 opacity-0 transition duration-200 group-hover:scale-x-100 group-hover:opacity-100' />
            </Link>
          ))}
        </div>

        <div className='hidden h-6 w-px bg-white/10 sm:block' />

        <div className='flex shrink-0 items-center gap-1'>
          {actionLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className='rounded-full border border-white/10 bg-white/5 px-3 py-2 text-sm font-semibold text-zinc-100 shadow-inner shadow-white/5 transition duration-200 hover:border-violet-400/40 hover:bg-violet-400/10 hover:text-violet-200 focus-visible:ring-2 focus-visible:ring-violet-400/70 focus-visible:outline-none'
            >
              {link.label}
            </Link>
          ))}
        </div>
      </nav>
    </header>
  )
}
