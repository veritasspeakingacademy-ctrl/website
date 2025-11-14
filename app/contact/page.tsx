'use client'

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { Label } from '@/components/ui/label'
import { Mail, MapPin, Clock } from 'lucide-react'
import { useState } from 'react'
import { useToast } from '@/hooks/use-toast'
import Image from 'next/image'
import Link from 'next/link'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Contact Us | Veritas Speaking Toronto',
  description: 'Get in touch with Veritas Speaking for youth public speaking coaching inquiries. Based in Toronto, Ontario. Email us at contact@veritasspeaking.com for questions about our services.',
  keywords: 'contact Veritas Speaking, Toronto speaking coach, youth coaching inquiries, public speaking questions, teen communication coaching Toronto',
  openGraph: {
    title: 'Contact Veritas Speaking - Toronto Youth Speaking Coach',
    description: 'Reach out for questions about our public speaking coaching services in Toronto. We\'re here to help teens and young adults find their voice.',
    type: 'website',
  },
}

export default function Contact() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const { toast } = useToast()

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 1000))

    toast({
      title: 'Message Sent!',
      description: 'We\'ll get back to you within 24 hours.',
    })

    setIsSubmitting(false)
    ;(e.target as HTMLFormElement).reset()
  }

  return (
    <main>
      {/* Hero */}
      <section className="py-16 md:py-24 relative">
        <div className="absolute bottom-10 left-10 opacity-10">
          <Image src="/veritas-logo.png" alt="" width={80} height={80} />
        </div>
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center space-y-6">
            <h1 className="font-serif font-bold text-4xl md:text-5xl lg:text-6xl text-balance">
              Get in Touch
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground text-pretty">
              Have questions about our coaching services? Want to learn more before booking? We\'re here to help!
            </p>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Contact Form */}
            <Card>
              <CardHeader>
                <CardTitle className="font-serif text-2xl">Send Us a Message</CardTitle>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="name">Name</Label>
                    <Input 
                      id="name" 
                      name="name" 
                      placeholder="Your full name" 
                      required 
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="email">Email</Label>
                    <Input 
                      id="email" 
                      name="email" 
                      type="email" 
                      placeholder="your.email@example.com" 
                      required 
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="age">Age (Optional)</Label>
                    <Input 
                      id="age" 
                      name="age" 
                      type="number" 
                      placeholder="Your age" 
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="service">Interested In</Label>
                    <select 
                      id="service" 
                      name="service"
                      className="w-full h-10 rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                    >
                      <option value="">Select a service</option>
                      <option value="group">Group Sessions</option>
                      <option value="individual">Individual Coaching</option>
                      <option value="audio">Audio Recording Analysis</option>
                      <option value="community">Community Access</option>
                      <option value="general">General Inquiry</option>
                    </select>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="message">Message</Label>
                    <Textarea 
                      id="message" 
                      name="message" 
                      placeholder="Tell us about your goals or ask us any questions..."
                      rows={5}
                      required 
                    />
                  </div>

                  <Button type="submit" className="w-full" disabled={isSubmitting}>
                    {isSubmitting ? 'Sending...' : 'Send Message'}
                  </Button>
                </form>
              </CardContent>
            </Card>

            {/* Contact Info */}
            <div className="space-y-6">
              <Card>
                <CardContent className="pt-6 space-y-4">
                  <div className="flex gap-4">
                    <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <Mail className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold mb-1">Email Us</h3>
                      <a 
                        href="mailto:contact@veritasspeaking.com"
                        className="text-lg text-primary hover:underline"
                      >
                        contact@veritasspeaking.com
                      </a>
                      <p className="text-sm text-muted-foreground mt-1">
                        We typically respond within 24 hours
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="pt-6 space-y-4">
                  <div className="flex gap-4">
                    <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <MapPin className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold mb-1">Location</h3>
                      <p className="text-muted-foreground">Toronto, Ontario</p>
                      <p className="text-sm text-muted-foreground mt-1">
                        All sessions are conducted online
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="pt-6 space-y-4">
                  <div className="flex gap-4">
                    <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <Clock className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold mb-1">Availability</h3>
                      <p className="text-muted-foreground">Flexible scheduling</p>
                      <p className="text-sm text-muted-foreground mt-1">
                        Weekdays, evenings, and weekends available
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-muted">
                <CardContent className="pt-6">
                  <h3 className="font-semibold mb-2">Parent/Guardian Information</h3>
                  <p className="text-sm text-muted-foreground">
                    For students under 18, we welcome parents and guardians to reach out with questions or to discuss how our coaching can support your teen\'s development. We\'re happy to arrange a call to discuss your child\'s specific needs and goals.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Quick Links */}
      <section className="py-16 bg-muted">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center space-y-6">
            <h2 className="font-serif font-bold text-3xl md:text-4xl text-balance">
              Before You Reach Out
            </h2>
            <p className="text-lg text-muted-foreground text-pretty">
              Many common questions are answered on our Services page, including pricing, session formats, and what to expect.
            </p>
            <Button size="lg" variant="outline" asChild>
              <Link href="/services#faq">View FAQs</Link>
            </Button>
          </div>
        </div>
      </section>
    </main>
  )
}
