import { Card, CardContent } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import Link from 'next/link'
import { Heart, Lightbulb, Target, Users } from 'lucide-react'
import type { Metadata } from 'next'
import Image from 'next/image'

export const metadata: Metadata = {
  title: 'About Veritas Speaking | Meet Toronto\'s Youth Public Speaking Coaches',
  description: 'Learn about Veritas Speaking\'s mission to empower young speakers. Meet our experienced coaches, including TEDx speakers and award-winning mentors dedicated to building youth confidence in Toronto.',
  keywords: 'about Veritas Speaking, youth coaching Toronto, TEDx youth coaches, public speaking mentors, teen communication experts, youth empowerment Toronto',
  openGraph: {
    title: 'About Veritas Speaking - Youth Public Speaking Coaches',
    description: 'Meet our team of experienced coaches dedicated to helping Toronto youth find their voice and speak with confidence.',
    type: 'website',
  },
}

export default function About() {
  return (
    <main>
      {/* Hero */}
      <section className="py-16 md:py-24 relative">
        <div className="absolute top-10 left-10 opacity-10">
          <Image src="/veritas-logo.png" alt="" width={80} height={80} />
        </div>
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center space-y-6">
            <h1 className="font-serif font-bold text-4xl md:text-5xl lg:text-6xl text-balance">
              About Veritas Speaking
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground text-pretty">
              We believe every young person has a unique voice worth sharing. Our mission is to help you discover that voice and speak with authenticity and confidence.
            </p>
          </div>
        </div>
      </section>

      {/* Mission & Values */}
      <section className="py-16 bg-muted">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="font-serif font-bold text-3xl md:text-4xl text-center mb-12 text-balance">
              Our Core Values
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <Card>
                <CardContent className="pt-6 space-y-3">
                  <div className="h-12 w-12 rounded-full bg-accent/10 flex items-center justify-center">
                    <Heart className="h-6 w-6 text-accent" />
                  </div>
                  <h3 className="font-semibold text-lg">Authenticity</h3>
                  <p className="text-sm text-muted-foreground">
                    We help you find and embrace your genuine voice, not imitate others.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="pt-6 space-y-3">
                  <div className="h-12 w-12 rounded-full bg-accent/10 flex items-center justify-center">
                    <Lightbulb className="h-6 w-6 text-accent" />
                  </div>
                  <h3 className="font-semibold text-lg">Growth Mindset</h3>
                  <p className="text-sm text-muted-foreground">
                    Every challenge is an opportunity to learn and improve your skills.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="pt-6 space-y-3">
                  <div className="h-12 w-12 rounded-full bg-accent/10 flex items-center justify-center">
                    <Target className="h-6 w-6 text-accent" />
                  </div>
                  <h3 className="font-semibold text-lg">Excellence</h3>
                  <p className="text-sm text-muted-foreground">
                    We're committed to delivering high-quality coaching and results.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="pt-6 space-y-3">
                  <div className="h-12 w-12 rounded-full bg-accent/10 flex items-center justify-center">
                    <Users className="h-6 w-6 text-accent" />
                  </div>
                  <h3 className="font-semibold text-lg">Community</h3>
                  <p className="text-sm text-muted-foreground">
                    Building a supportive network where everyone can thrive together.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Story */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto space-y-6">
            <h2 className="font-serif font-bold text-3xl md:text-4xl text-balance">
              Our Story
            </h2>
            <div className="prose prose-lg max-w-none space-y-4 text-muted-foreground">
              <p>
                Veritas Speaking was founded with a simple observation: many talented young people struggle to express themselves confidently in public settings. Whether it's presenting in class, interviewing for opportunities, or simply speaking up in group discussions, the fear of public speaking holds them back from reaching their full potential.
              </p>
              <p>
                We started in Toronto with a vision to create a safe, supportive environment where teens and young adults could develop their speaking skills without judgment. Our approach combines proven public speaking techniques with modern coaching methods that resonate with today's youth.
              </p>
              <p>
                What sets us apart is our understanding that confidence isn't built overnight. It's developed through practice, feedback, and a community that celebrates growth. Every session, whether group or individual, is designed to help you take the next step in your speaking journey.
              </p>
              <p>
                Today, we're proud to have helped hundreds of young speakers find their voice, overcome their fears, and communicate with confidence. Our students have gone on to excel in academic presentations, job interviews, leadership roles, and personal relationships.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Approach */}
      <section className="py-16 bg-muted">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto space-y-8">
            <h2 className="font-serif font-bold text-3xl md:text-4xl text-center text-balance">
              Our Coaching Approach
            </h2>
            <div className="space-y-6">
              <Card>
                <CardContent className="pt-6">
                  <h3 className="font-semibold text-xl mb-3">Personalized Development</h3>
                  <p className="text-muted-foreground">
                    We recognize that every speaker is unique. Our coaching is tailored to your specific goals, challenges, and learning style. Whether you're preparing for a specific event or building long-term skills, we meet you where you are.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="pt-6">
                  <h3 className="font-semibold text-xl mb-3">Practice-Based Learning</h3>
                  <p className="text-muted-foreground">
                    Theory alone doesn't build confidence—practice does. Our sessions are highly interactive, giving you multiple opportunities to speak, receive feedback, and refine your approach in a supportive environment.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="pt-6">
                  <h3 className="font-semibold text-xl mb-3">Constructive Feedback</h3>
                  <p className="text-muted-foreground">
                    We provide honest, actionable feedback that helps you improve without crushing your confidence. Our coaches are trained to highlight strengths while gently addressing areas for growth.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="pt-6">
                  <h3 className="font-semibold text-xl mb-3">Community Support</h3>
                  <p className="text-muted-foreground">
                    Learning alongside peers creates accountability and motivation. Our group sessions and community access options provide ongoing support beyond individual coaching.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center space-y-6">
            <h2 className="font-serif font-bold text-3xl md:text-4xl text-balance">
              Ready to Start Your Journey?
            </h2>
            <p className="text-lg text-muted-foreground text-pretty">
              Join our community of confident young speakers. Let's discover your authentic voice together.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" asChild>
                <Link href="/services">View Our Services</Link>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <Link href="/contact">Get in Touch</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
