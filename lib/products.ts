export interface Product {
  id: string
  name: string
  description: string
  priceInCents: number
  images?: string[]
  features?: string[]
  popular?: boolean
}

// Source of truth for all coaching services
export const PRODUCTS: Product[] = [
  {
    id: 'group-session',
    name: 'Weekly Group Sessions',
    description: '30-minute weekly group calls for collaborative learning',
    priceInCents: 7500, // $75/month
    priceSuffix: '/month',
    popular: true,
    features: [
      '30-minute weekly sessions',
      'Small group of 6-8 participants',
      'Interactive exercises and practice',
      'Peer feedback and support',
      'Monthly commitment'
    ]
  },
  {
    id: 'individual-coaching',
    name: 'Bi-Weekly Individual Coaching',
    description: '60-minute one-on-one coaching sessions every two weeks',
    priceInCents: 11500, // $115/hour
    priceSuffix: '/month',
    features: [
      '60-minute private session',
      'Bi-weekly scheduling',
      'Personalized feedback and strategy',
      'Custom speech analysis',
      'Follow-up resources included',
      'Monthly commitment'
    ]
  },
  {
    id: 'audio-recordings',
    name: 'Audio Recordings Package',
    description: '12 pre-recorded 3-minute lessons on essential speaking skills',
    priceInCents: 2500, // $25
    features: [
      '12 x 3-minute audio lessons',
      'Core speaking techniques',
      'Self-paced learning',
      'Downloadable content',
      'Perfect for beginners'
    ]
  }
]
