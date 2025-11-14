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
    priceInCents: 7500, // $75/hour
    popular: true,
    features: [
      '60-minute private session',
      'Bi-weekly scheduling',
      'Personalized feedback and strategy',
      'Custom speech analysis',
      'Follow-up resources included'
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
  },
  {
    id: 'audio-recording-analysis-3',
    name: 'Audio Recording Analysis (3 mins)',
    description: 'Professional analysis of your 3-minute speech recording',
    priceInCents: 2999, // $29.99
    features: [
      'Submit up to 3 minutes of audio',
      'Detailed written feedback',
      '48-hour turnaround',
      'Actionable improvement tips',
      'Perfect for speech prep'
    ]
  },
  {
    id: 'audio-recording-analysis-5',
    name: 'Audio Recording Analysis (5 mins)',
    description: 'Comprehensive analysis of your 5-minute speech recording',
    priceInCents: 4499, // $44.99
    features: [
      'Submit up to 5 minutes of audio',
      'In-depth written feedback',
      '48-hour turnaround',
      'Video response option available',
      'Great for presentations'
    ]
  },
  {
    id: 'community-access',
    name: 'Community Access',
    description: 'Join our supportive community of young speakers',
    priceInCents: 1999, // $19.99/month
    features: [
      'Private Discord community',
      'Weekly practice sessions',
      'Resource library access',
      'Monthly guest speakers',
      'Peer support network'
    ]
  }
]
