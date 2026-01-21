export interface Testimonial {
  id: number
  quote: string
  author: string
  position: string
}

export const testimonials: Testimonial[] = [
  {
    id: 1,
    quote:
      'DecisionLens has transformed our procurement process, saving us thousands in overhead costs.',
    author: 'Michael S.',
    position: 'Operations Director',
  },
  {
    id: 2,
    quote:
      'The team’s expertise and dedication helped us streamline our workflows effectively.',
    author: 'Sarah L.',
    position: 'Project Manager',
  },
  {
    id: 3,
    quote:
      'We’ve seen a huge improvement in team efficiency thanks to their solutions.',
    author: 'James K.',
    position: 'CTO',
  },
  {
    id: 4,
    quote:
      'Their support and guidance have been invaluable for our business growth.',
    author: 'Linda M.',
    position: 'CEO',
  },
]
