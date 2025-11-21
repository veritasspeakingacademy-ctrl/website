import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { PRODUCTS } from "@/lib/products"
import { Check } from "lucide-react"
import Link from "next/link"
import type { Metadata } from "next"
import Image from "next/image"

export const metadata: Metadata = {
  title: "Public Speaking Services & Pricing | Weekly Sessions $75/month | Veritas Speaking Toronto",
  description:
    "Choose your perfect coaching plan! Weekly group sessions $75/month, bi-weekly 1-on-1 coaching $75/hour, or 12 audio lessons for $25. Coaches Adil Mukhi and Maiwand Gawharzad guide Toronto teens to speaking success. Book now!",
  keywords:
    "public speaking coaching prices Toronto, youth group sessions $75, individual speaking coach $75 hour, audio speech lessons $25, teen communication training, online speaking classes Toronto, Adil Mukhi services, Maiwand Gawharzad coaching",
  openGraph: {
    title: "Public Speaking Services & Pricing - Veritas Speaking",
    description:
      "Affordable youth coaching in Toronto. Group sessions $75/month, 1-on-1 coaching $75/hour, audio lessons $25. Expert guidance from Adil Mukhi and Maiwand Gawharzad.",
    type: "website",
    images: [
      {
        url: "/confident-teen-speaking-at-podium.jpg",
        width: 1200,
        height: 630,
        alt: "Youth public speaking services",
      },
    ],
  },
}

export default function Services() {
  return (
    <main>
      {/* Hero */}
      <section className="py-16 md:py-24 relative">
        <div className="absolute bottom-10 right-10 opacity-10">
          <Image src="/veritas-logo.png" alt="" width={100} height={100} />
        </div>
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center space-y-6">
            <h1 className="font-serif font-bold text-4xl md:text-5xl lg:text-6xl text-balance">Our Services</h1>
            <p className="text-lg md:text-xl text-muted-foreground text-pretty">
              Choose the coaching option that fits your goals, schedule, and learning style. All services are designed
              to build your confidence and speaking skills.
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
            {PRODUCTS.map((product) => (
              <Card
                key={product.id}
                id={product.id}
                className={product.popular ? "border-2 border-primary relative" : ""}
              >
                {product.popular && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                    <span className="bg-primary text-primary-foreground text-xs font-bold px-3 py-1 rounded-full">
                      MOST POPULAR
                    </span>
                  </div>
                )}
                <CardHeader>
                  <CardTitle className="font-serif text-2xl">{product.name}</CardTitle>
                  <p className="text-muted-foreground">{product.description}</p>
                  <div className="pt-4">
                    <span className="text-3xl font-bold">${(product.priceInCents / 100).toFixed(2)}</span>
                  </div>
                </CardHeader>
                <CardContent className="space-y-4">
                  {product.features && (
                    <ul className="space-y-2">
                      {product.features.map((feature, index) => (
                        <li key={index} className="flex gap-2">
                          <Check className="h-5 w-5 text-accent flex-shrink-0 mt-0.5" />
                          <span className="text-sm">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  )}
                  <Button className="w-full" asChild>
                    <Link href={`/checkout/${product.id}`}>Book Now</Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-muted" id="faq">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto space-y-8">
            <h2 className="font-serif font-bold text-3xl md:text-4xl text-center text-balance">
              Frequently Asked Questions
            </h2>
            <div className="space-y-4">
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">What age group do you work with?</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    We primarily work with teens and young adults (ages 13-25). Our coaching is specifically designed to
                    address the unique challenges and opportunities of this age group.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">Do I need any prior experience?</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Not at all! We work with speakers of all levels, from complete beginners who are nervous about
                    speaking to experienced speakers looking to refine their skills.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">How do group sessions work?</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Group sessions are 30 minutes long and limited to 6-8 participants to ensure everyone gets
                    personalized attention. Sessions include exercises, practice speeches, and peer feedback in a
                    supportive environment.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">What should I expect from individual coaching?</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Individual coaching sessions are 60-minute one-on-one sessions held bi-weekly. They're completely
                    personalized to your goals. We'll work on specific skills you want to develop, prepare for important
                    presentations, or address particular challenges you're facing.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">What's included in the Audio Recordings package?</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    You'll receive 12 pre-recorded audio lessons, each 3 minutes long, covering essential public
                    speaking skills. These are perfect for self-paced learning and can be listened to anytime, anywhere.
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
            <h2 className="font-serif font-bold text-3xl md:text-4xl text-balance">Still Have Questions?</h2>
            <p className="text-lg text-muted-foreground text-pretty">
              We're here to help you find the perfect coaching option for your needs.
            </p>
            <Button size="lg" asChild>
              <Link href="/contact">Contact Us</Link>
            </Button>
          </div>
        </div>
      </section>
    </main>
  )
}
