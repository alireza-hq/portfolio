# Portfolio

An interactive, terminal-first developer portfolio built with Next.js,
TypeScript, and Tailwind CSS.

## Features

- Interactive terminal with commands, history, autocomplete, and easter eggs
- Responsive project, skills, about, contact, and resume pages
- Light and dark themes
- Animated workspace background and intro
- PDF resume preview
- Server-side contact email delivery through Resend
- Sitemap, robots metadata, manifest, and structured data

## Local Development

Requires Node.js 20 or newer and pnpm.

```bash
pnpm install
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000).

## Environment Variables

Create `.env.local` from `.env.example`:

```bash
RESEND_API_KEY=re_...
CONTACT_TO_EMAIL=alireza.h.dev@outlook.com
CONTACT_FROM_EMAIL=Portfolio <portfolio@your-verified-domain.com>
NEXT_PUBLIC_SITE_URL=http://localhost:3000
```

`CONTACT_FROM_EMAIL` must use a sender or domain verified in Resend for
production delivery.

## Verification

```bash
pnpm lint
pnpm exec tsc --noEmit
pnpm build
```

## Deploy To Vercel

1. Import the repository into Vercel.
2. Add the environment variables listed above.
3. Set `NEXT_PUBLIC_SITE_URL` to the production URL.
4. Deploy.

The app automatically uses `VERCEL_PROJECT_PRODUCTION_URL` when
`NEXT_PUBLIC_SITE_URL` is not provided.
