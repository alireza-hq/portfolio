export const certifications = [
  {
    title: 'Project-Oriented React Development',
    issuer: 'Quera',
    image: '/professional-react.jpg',
  },
  {
    title: 'Advanced Python Programming',
    issuer: 'Quera',
    image: '/advanced-python.jpg',
  },
] as const

export type Certification = (typeof certifications)[number]
