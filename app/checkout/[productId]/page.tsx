import { notFound } from 'next/navigation'
import { PRODUCTS } from '@/lib/products'
import Checkout from '@/components/checkout'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import Link from 'next/link'
import { ArrowLeft } from 'lucide-react'
import { Button } from '@/components/ui/button'

export default async function CheckoutPage({
  params,
}: {
  params: Promise<{ productId: string }>
}) {
  const { productId } = await params
  const product = PRODUCTS.find(p => p.id === productId)

  if (!product) {
    notFound()
  }

  return (
    <main className="py-16">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          <Button variant="ghost" asChild className="mb-6">
            <Link href="/services">
              <ArrowLeft className="h-4 w-4 mr-2" />
              Back to Services
            </Link>
          </Button>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Product Details */}
            <div>
              <Card>
                <CardHeader>
                  <CardTitle className="font-serif text-2xl">
                    {product.name}
                  </CardTitle>
                  <p className="text-muted-foreground">
                    {product.description}
                  </p>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <span className="text-3xl font-bold">
                      ${(product.priceInCents / 100).toFixed(2)}
                    </span>
                  </div>
                  
                  {product.features && product.features.length > 0 && (
                    <div className="space-y-2">
                      <h3 className="font-semibold">What's Included:</h3>
                      <ul className="space-y-1">
                        {product.features.map((feature, index) => (
                          <li key={index} className="text-sm text-muted-foreground">
                            • {feature}
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                </CardContent>
              </Card>

              <Card className="mt-6">
                <CardHeader>
                  <CardTitle className="text-lg">Important Information</CardTitle>
                </CardHeader>
                <CardContent className="space-y-2 text-sm text-muted-foreground">
                  <p>• After payment, you'll receive a confirmation email with next steps</p>
                  <p>• For session bookings, we'll contact you to schedule within 24 hours</p>
                  <p>• All sessions are conducted online via video call</p>
                  <p>• Cancellation policy: 24-hour notice required for full refund</p>
                </CardContent>
              </Card>
            </div>

            {/* Checkout Form */}
            <div>
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">Complete Your Purchase</CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="space-y-4">
                    <div className="bg-muted rounded-lg p-6 space-y-4">
                      <div className="flex items-start gap-3">
                        <div className="bg-primary text-primary-foreground rounded-full h-8 w-8 flex items-center justify-center flex-shrink-0 text-sm font-bold">
                          1
                        </div>
                        <div className="space-y-2">
                          <h3 className="font-semibold">Send E-Transfer Payment</h3>
                          <p className="text-sm text-muted-foreground">
                            Send your payment of <span className="font-bold text-foreground">${(product.priceInCents / 100).toFixed(2)}</span> via Interac e-Transfer to:
                          </p>
                          <div className="bg-background rounded-md p-3 border">
                            <p className="font-mono text-sm font-semibold">veritasspeakingacademy@gmail.com</p>
                          </div>
                        </div>
                      </div>

                      <div className="flex items-start gap-3">
                        <div className="bg-primary text-primary-foreground rounded-full h-8 w-8 flex items-center justify-center flex-shrink-0 text-sm font-bold">
                          2
                        </div>
                        <div className="space-y-2">
                          <h3 className="font-semibold">Include Your Information</h3>
                          <p className="text-sm text-muted-foreground">
                            In the e-Transfer message, please include:
                          </p>
                          <ul className="text-sm text-muted-foreground space-y-1 ml-4">
                            <li>• Your full name</li>
                            <li>• Your email address</li>
                            <li>• Service purchased: <span className="font-semibold text-foreground">{product.name}</span></li>
                          </ul>
                        </div>
                      </div>

                      <div className="flex items-start gap-3">
                        <div className="bg-primary text-primary-foreground rounded-full h-8 w-8 flex items-center justify-center flex-shrink-0 text-sm font-bold">
                          3
                        </div>
                        <div className="space-y-2">
                          <h3 className="font-semibold">Confirmation</h3>
                          <p className="text-sm text-muted-foreground">
                            You'll receive a confirmation email within 24 hours with next steps and scheduling information.
                          </p>
                        </div>
                      </div>
                    </div>

                    <div className="border-t pt-4">
                      <p className="text-sm text-muted-foreground">
                        Questions? Contact us at{' '}
                        <a 
                          href="mailto:veritasspeakingacademy@gmail.com" 
                          className="text-primary hover:underline font-medium"
                        >
                          veritasspeakingacademy@gmail.com
                        </a>
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}
