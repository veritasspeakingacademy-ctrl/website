import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Mail, MapPin, Clock } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Let's Talk! Contact Adil Mukhi & Maiwand Gawharzad | Veritas Speaking Toronto",
  description:
    "Ready to start your speaking journey? Connect with coaches Adil Mukhi and Maiwand Gawharzad! We're excited to answer your questions and help you find the perfect coaching plan. Email us today at contact@veritasspeaking.com!",
  keywords:
    "contact Veritas Speaking, reach Adil Mukhi, email Maiwand Gawharzad, Toronto speaking coach contact, youth coaching inquiries, public speaking questions, teen communication coaching Toronto",
  openGraph: {
    title: "Contact Us - Let's Start Your Speaking Journey!",
    description:
      "Connect with Toronto coaches Adil Mukhi and Maiwand Gawharzad! We're here to answer questions and help you discover your confident voice.",
    type: "website",
    images: [
      {
        url: "/confident-teen-speaking-at-podium.jpg",
        width: 1200,
        height: 630,
        alt: "Contact Veritas Speaking coaches",
      },
    ],
  },
}

export default function Contact() {
  return (
    <main>
      {/* Hero */}
      <section className="py-16 md:py-24 relative">
        <div className="absolute bottom-10 left-10 opacity-10">
          <Image src="/veritas-logo.png" alt="" width={80} height={80} />
        </div>
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center space-y-6">
            <h1 className="font-serif font-bold text-4xl md:text-5xl lg:text-6xl text-balance">Get in Touch</h1>
            <p className="text-lg md:text-xl text-muted-foreground text-pretty">
              Have questions about our coaching services? Want to learn more before booking? We're here to help!
            </p>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto space-y-8">
            {/* Primary Email Contact */}
            <Card className="border-2 border-primary/20">
              <CardContent className="pt-8 pb-8 text-center space-y-4">
                <div className="flex justify-center mb-4">
                  <div className="h-16 w-16 rounded-full bg-primary/10 flex items-center justify-center">
                    <Mail className="h-8 w-8 text-primary" />
                  </div>
                </div>
                <h2 className="font-serif font-bold text-2xl md:text-3xl">Email Us</h2>
                <a
                  href="mailto:contact@veritasspeaking.com"
                  className="text-2xl md:text-3xl text-primary hover:underline font-semibold block"
                >
                  contact@veritasspeaking.com
                </a>
                <p className="text-muted-foreground max-w-xl mx-auto text-pretty">
                  We typically respond within 24 hours. Whether you're a student ready to start your speaking journey or
                  a parent with questions, we'd love to hear from you!
                </p>
              </CardContent>
            </Card>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Card>
                <CardContent className="pt-6 space-y-4">
                  <div className="flex gap-4">
                    <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <MapPin className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold mb-1">Location</h3>
                      <p className="text-muted-foreground">Toronto, Ontario</p>
                      <p className="text-sm text-muted-foreground mt-1">All sessions are conducted online</p>
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
                      <p className="text-sm text-muted-foreground mt-1">Weekdays, evenings, and weekends available</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            <Card className="bg-muted">
              <CardContent className="pt-6">
                <h3 className="font-semibold mb-3 text-lg">Parent/Guardian Information</h3>
                <p className="text-sm text-muted-foreground text-pretty">
                  For students under 18, we welcome parents and guardians to reach out with questions or to discuss how
                  our coaching can support your teen's development. We're happy to arrange a call to discuss your
                  child's specific needs and goals.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* FAQ Quick Links */}
      <section className="py-16 bg-muted">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center space-y-6">
            <h2 className="font-serif font-bold text-3xl md:text-4xl text-balance">Before You Reach Out</h2>
            <p className="text-lg text-muted-foreground text-pretty">
              Many common questions are answered on our Services page, including pricing, session formats, and what to
              expect.
            </p>
            <Button size="lg" variant="outline" asChild>
              <Link href="/services">View Services & Pricing</Link>
            </Button>
          </div>
        </div>
      </section>
    </main>
  )
}
