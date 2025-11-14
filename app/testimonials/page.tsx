import { Card, CardContent } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import Link from 'next/link'
import { Quote } from 'lucide-react'
import type { Metadata } from 'next'
import Image from 'next/image'

export const metadata: Metadata = {
  title: 'Student Success Stories & Reviews | Veritas Speaking Toronto',
  description: 'Read testimonials from Toronto youth who transformed their public speaking confidence with Veritas Speaking. 500+ students coached, 95% report increased confidence. See real results from our coaching programs.',
  keywords: 'public speaking testimonials, student success stories Toronto, youth coaching reviews, teen confidence transformation, speaking coach testimonials, student feedback Toronto',
  openGraph: {
    title: 'Student Success Stories - Veritas Speaking',
    description: 'Discover how Toronto youth have transformed their public speaking confidence. Read real testimonials from our students.',
    type: 'website',
  },
}

const testimonials = [
  {
    name: 'Sarah M.',
    age: 17,
    role: 'High School Student',
    content: 'I used to dread presentations in class. After just 3 group sessions with Veritas Speaking, I volunteered to present at our school assembly. The confidence I gained has changed everything!',
    rating: 5
  },
  {
    name: 'Michael T.',
    age: 19,
    role: 'University Student',
    content: 'The individual coaching helped me ace my university interviews. My coach understood exactly what I needed to work on and gave me practical tips that actually worked.',
    rating: 5
  },
  {
    name: 'Aisha K.',
    age: 16,
    role: 'Student Leader',
    content: 'The community aspect is incredible. Practicing with other teens who get it makes such a difference. I\'ve made friends and improved my speaking skills at the same time.',
    rating: 5
  },
  {
    name: 'David L.',
    age: 20,
    role: 'Job Seeker',
    content: 'I got the internship! The interview coaching was worth every penny. I felt prepared, confident, and actually enjoyed the interview for the first time ever.',
    rating: 5
  },
  {
    name: 'Emma R.',
    age: 15,
    role: 'Debate Team Member',
    content: 'The audio recording feedback is so helpful. I can practice on my own time and still get expert guidance. It\'s perfect for my busy schedule.',
    rating: 5
  },
  {
    name: 'James P.',
    age: 18,
    role: 'High School Senior',
    content: 'From someone who couldn\'t even order at a restaurant without anxiety to leading student council meetings—Veritas Speaking literally changed my life. I can\'t thank them enough.',
    rating: 5
  }
]

export default function Testimonials() {
  return (
    <main>
      {/* Hero */}
      <section className="py-16 md:py-24 relative">
        <div className="absolute top-10 right-10 opacity-10">
          <Image src="/veritas-logo.png" alt="" width={80} height={80} />
        </div>
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center space-y-6">
            <h1 className="font-serif font-bold text-4xl md:text-5xl lg:text-6xl text-balance">
              Student Success Stories
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground text-pretty">
              Hear from young speakers who\'ve transformed their confidence and communication skills through Veritas Speaking.
            </p>
          </div>
        </div>
      </section>

      {/* Testimonials Grid */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="relative">
                <CardContent className="pt-6 space-y-4">
                  <Quote className="h-8 w-8 text-accent/20" />
                  <p className="text-muted-foreground italic">
                    "{testimonial.content}"
                  </p>
                  <div className="pt-4 border-t">
                    <p className="font-semibold">{testimonial.name}</p>
                    <p className="text-sm text-muted-foreground">
                      {testimonial.role}, Age {testimonial.age}
                    </p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-muted">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <h2 className="font-serif font-bold text-3xl md:text-4xl text-center mb-12 text-balance">
              Our Impact
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center space-y-2">
                <p className="text-4xl md:text-5xl font-bold text-primary">500+</p>
                <p className="text-muted-foreground">Students Coached</p>
              </div>
              <div className="text-center space-y-2">
                <p className="text-4xl md:text-5xl font-bold text-primary">95%</p>
                <p className="text-muted-foreground">Report Increased Confidence</p>
              </div>
              <div className="text-center space-y-2">
                <p className="text-4xl md:text-5xl font-bold text-primary">4.9/5</p>
                <p className="text-muted-foreground">Average Rating</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Video Testimonial Placeholder */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="font-serif font-bold text-3xl md:text-4xl text-center mb-8 text-balance">
              Watch Student Transformations
            </h2>
            <Card className="overflow-hidden">
              <CardContent className="p-0">
                <div className="aspect-video bg-muted flex items-center justify-center">
                  <div className="text-center space-y-4 p-8">
                    <p className="text-xl font-semibold">Video Testimonials Coming Soon</p>
                    <p className="text-muted-foreground">
                      We\'re currently collecting video testimonials from our students. Check back soon to see their stories!
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center space-y-6">
            <h2 className="font-serif font-bold text-3xl md:text-4xl text-balance">
              Ready to Write Your Success Story?
            </h2>
            <p className="text-lg opacity-90 text-pretty">
              Join our community of confident young speakers and start your transformation today.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" variant="secondary" asChild>
                <Link href="/services">Explore Services</Link>
              </Button>
              <Button size="lg" variant="outline" className="bg-transparent border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary" asChild>
                <Link href="/contact">Contact Us</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
