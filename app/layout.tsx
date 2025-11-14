import type { Metadata, Viewport } from 'next'
import { Libre_Baskerville, Inter } from 'next/font/google'
import './globals.css'
import Navigation from '@/components/navigation'
import Footer from '@/components/footer'
import Script from 'next/script'

const libreBaskerville = Libre_Baskerville({ 
  subsets: ['latin'],
  weight: ['400', '700'],
  variable: '--font-serif'
})

const inter = Inter({ 
  subsets: ['latin'],
  variable: '--font-sans'
})

export const metadata: Metadata = {
  title: {
    default: 'Veritas Speaking - Youth Public Speaking Coaching in Toronto',
    template: '%s | Veritas Speaking'
  },
  description: 'Toronto\'s premier youth public speaking coaching. Empowering teens and young adults to develop confidence and communication skills through expert coaching and personalized training.',
  keywords: 'youth public speaking Toronto, teen confidence coaching, public speaking classes Toronto, youth communication skills, teen leadership programs, student speech training, public speaking mentorship Toronto Ontario Canada',
  authors: [{ name: 'Veritas Speaking' }],
  creator: 'Veritas Speaking',
  publisher: 'Veritas Speaking',
  metadataBase: new URL('https://veritasspeaking.com'),
  alternates: {
    canonical: '/',
  },
  icons: {
    icon: [
      { url: '/favicon-16x16.png', sizes: '16x16', type: 'image/png' },
      { url: '/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
    ],
    apple: [
      { url: '/apple-touch-icon.png', sizes: '180x180', type: 'image/png' },
    ],
  },
  openGraph: {
    type: 'website',
    locale: 'en_CA',
    url: 'https://veritasspeaking.com',
    siteName: 'Veritas Speaking',
    title: 'Veritas Speaking - Youth Public Speaking Coaching in Toronto',
    description: 'Empowering teens and young adults in Toronto to speak with confidence through expert coaching.',
    images: [
      {
        url: '/veritas-logo.png',
        width: 1200,
        height: 630,
        alt: 'Veritas Speaking Logo',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Veritas Speaking - Youth Public Speaking Coaching',
    description: 'Empowering Toronto youth to speak with confidence',
    images: ['/veritas-logo.png'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
}

export const viewport: Viewport = {
  themeColor: '#1E3A5F',
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en-CA">
      <head>
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="manifest" href="/site.webmanifest" />
        
        <Script
          async
          src="https://www.googletagmanager.com/gtag/js?id=G-N9HYBQV92X"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-N9HYBQV92X');
          `}
        </Script>
        <Script
          id="schema-org"
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@graph": [
                {
                  "@type": "EducationalOrganization",
                  "@id": "https://veritasspeaking.com/#organization",
                  "name": "Veritas Speaking",
                  "url": "https://veritasspeaking.com",
                  "logo": {
                    "@type": "ImageObject",
                    "url": "https://veritasspeaking.com/veritas-logo.png"
                  },
                  "description": "Youth public speaking coaching in Toronto empowering teens and young adults to communicate with confidence",
                  "address": {
                    "@type": "PostalAddress",
                    "addressLocality": "Toronto",
                    "addressRegion": "ON",
                    "addressCountry": "CA"
                  },
                  "geo": {
                    "@type": "GeoCoordinates",
                    "latitude": "43.6532",
                    "longitude": "-79.3832"
                  },
                  "areaServed": {
                    "@type": "City",
                    "name": "Toronto"
                  },
                  "aggregateRating": {
                    "@type": "AggregateRating",
                    "ratingValue": "4.9",
                    "reviewCount": "120",
                    "bestRating": "5",
                    "worstRating": "1"
                  },
                  "contactPoint": {
                    "@type": "ContactPoint",
                    "contactType": "Customer Service",
                    "email": "contact@veritasspeaking.com",
                    "areaServed": "CA",
                    "availableLanguage": "English"
                  }
                },
                {
                  "@type": "WebSite",
                  "@id": "https://veritasspeaking.com/#website",
                  "url": "https://veritasspeaking.com",
                  "name": "Veritas Speaking",
                  "publisher": {
                    "@id": "https://veritasspeaking.com/#organization"
                  }
                }
              ]
            })
          }}
        />
      </head>
      <body className={`${inter.variable} ${libreBaskerville.variable} antialiased`}>
        <Navigation />
        {children}
        <Footer />
      </body>
    </html>
  )
}
