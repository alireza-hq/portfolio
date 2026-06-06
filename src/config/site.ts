const deploymentUrl =
  process.env.NEXT_PUBLIC_SITE_URL ??
  (process.env.VERCEL_PROJECT_PRODUCTION_URL
    ? `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}`
    : 'http://localhost:3000')

export const siteConfig = {
  name: 'Alireza',
  title: 'Alireza | Software Developer',
  description:
    'Interactive developer workspace showcasing frontend-focused projects, Next.js work, TypeScript interfaces, and practical product engineering.',
  url: deploymentUrl,
  ogImage: '/projects/portfolio.png',
  creator: 'Alireza',
  keywords: [
    'Alireza',
    'Frontend Developer',
    'Software Developer',
    'Next.js Developer',
    'React Developer',
    'TypeScript',
    'Portfolio',
    'Web Developer',
  ],
}
