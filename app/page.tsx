import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Mic, Users, Target, Award } from "lucide-react"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Veritas Speaking | Toronto Youth Public Speaking Coaching with Adil Mukhi & Maiwand Gawharzad",
  description:
    "Transform your speaking skills with Toronto's top youth coaches! Adil Mukhi and Maiwand Gawharzad empower teens to speak confidently. Weekly group sessions $75/month, 1-on-1 coaching $75/hour. Start your journey today!",
  keywords:
    "Adil Mukhi public speaking, Maiwand Gawharzad coach, youth public speaking Toronto, teen confidence coaching, public speaking classes Toronto, youth communication skills, teen leadership programs, student speech training Toronto",
  openGraph: {
    title: "Veritas Speaking - Toronto Youth Public Speaking Coaching",
    description:
      "Expert coaches Adil Mukhi and Maiwand Gawharzad help Toronto teens speak with confidence. Group sessions, 1-on-1 coaching, and audio lessons available.",
    type: "website",
    locale: "en_CA",
    siteName: "Veritas Speaking",
    images: [
      {
        url: "/confident-teen-speaking-at-podium.jpg",
        width: 1200,
        height: 630,
        alt: "Confident teen speaking at podium",
      },
    ],
  },
}

export default function Home() {
  return (
    <main>
      {/* Hero Section */}
      <section className="relative py-20 md:py-32 overflow-hidden">
        <div className="absolute inset-0 -z-10">
          <div className="absolute top-20 right-10 w-72 h-72 bg-primary/5 rounded-full blur-3xl" />
          <div className="absolute bottom-20 left-10 w-96 h-96 bg-accent/5 rounded-full blur-3xl" />
        </div>

        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center space-y-8">
            <h1 className="font-serif font-bold text-4xl md:text-6xl lg:text-7xl text-balance leading-tight">
              Find Your Voice. <br />
              Speak With Confidence. <br />
              <span className="text-primary">Change Your World.</span>
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground text-pretty max-w-2xl mx-auto leading-relaxed">
              Veritas Speaking empowers youth and young adults to communicate with clarity, confidence, and purpose.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" asChild>
                <Link href="/services">Book a Session</Link>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <Link href="/about">Learn More</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 bg-muted">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="font-serif font-bold text-3xl md:text-4xl text-center mb-12 text-balance">
              Why Choose Veritas Speaking?
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <Card>
                <CardContent className="pt-6 space-y-3">
                  <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center">
                    <Mic className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="font-semibold text-lg">Expert Coaching</h3>
                  <p className="text-sm text-muted-foreground">
                    Personalized guidance from experienced public speaking coaches who understand youth development.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="pt-6 space-y-3">
                  <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center">
                    <Users className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="font-semibold text-lg">Supportive Community</h3>
                  <p className="text-sm text-muted-foreground">
                    Connect with peers, share experiences, and grow together in a safe, encouraging environment.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="pt-6 space-y-3">
                  <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center">
                    <Target className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="font-semibold text-lg">Proven Methods</h3>
                  <p className="text-sm text-muted-foreground">
                    Evidence-based techniques that build confidence and develop practical speaking skills.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="pt-6 space-y-3">
                  <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center">
                    <Award className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="font-semibold text-lg">Real Results</h3>
                  <p className="text-sm text-muted-foreground">
                    Our students consistently report increased confidence and improved communication abilities.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Services Preview */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12 space-y-4">
              <h2 className="font-serif font-bold text-3xl md:text-4xl text-balance">Our Services</h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">
                Flexible coaching options designed to meet you where you are in your speaking journey.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <Card className="border-2 hover:border-primary transition-colors">
                <CardContent className="pt-6 space-y-4">
                  <h3 className="font-serif font-bold text-xl">Weekly Group Sessions</h3>
                  <p className="text-muted-foreground">
                    Join our 30-minute group calls every week to practice and grow with peers.
                  </p>
                  <p className="text-2xl font-bold">
                    $75<span className="text-base font-normal text-muted-foreground">/month</span>
                  </p>
                  <Button className="w-full" asChild>
                    <Link href="/services#group-session">Learn More</Link>
                  </Button>
                </CardContent>
              </Card>

              <Card className="border-2 border-primary">
                <CardContent className="pt-6 space-y-4">
                  <div className="inline-block bg-primary text-primary-foreground text-xs font-bold px-2 py-1 rounded">
                    MOST POPULAR
                  </div>
                  <h3 className="font-serif font-bold text-xl">Individual Coaching</h3>
                  <p className="text-muted-foreground">
                    Bi-weekly 60-minute one-on-one sessions personalized to your goals.
                  </p>
                  <p className="text-2xl font-bold">
                    $75<span className="text-base font-normal text-muted-foreground">/hour</span>
                  </p>
                  <Button className="w-full" asChild>
                    <Link href="/services#individual-coaching">Learn More</Link>
                  </Button>
                </CardContent>
              </Card>

              <Card className="border-2 hover:border-primary transition-colors">
                <CardContent className="pt-6 space-y-4">
                  <h3 className="font-serif font-bold text-xl">Audio Recordings</h3>
                  <p className="text-muted-foreground">
                    12 pre-recorded 3-minute lessons covering essential speaking fundamentals.
                  </p>
                  <p className="text-2xl font-bold">$25</p>
                  <Button className="w-full" asChild>
                    <Link href="/services#audio-recordings">Learn More</Link>
                  </Button>
                </CardContent>
              </Card>
            </div>

            <div className="text-center mt-8">
              <Button size="lg" variant="outline" asChild>
                <Link href="/services">View All Services</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center space-y-6">
            <h2 className="font-serif font-bold text-3xl md:text-4xl text-balance">
              Ready to Transform Your Speaking Skills?
            </h2>
            <p className="text-lg opacity-90 text-pretty">
              Join hundreds of young speakers who have discovered their voice and built lasting confidence.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" variant="secondary" asChild>
                <Link href="/services">Book Your First Session</Link>
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="bg-transparent border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary"
                asChild
              >
                <Link href="/contact">Contact Us</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
