import { Card, CardContent, CardHeader } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import Link from 'next/link'
import { Calendar, Clock, ArrowRight } from 'lucide-react'
import type { Metadata } from 'next'
import Image from 'next/image'

export const metadata: Metadata = {
  title: 'Public Speaking Blog & Resources | Tips for Youth Speakers in Toronto',
  description: 'Expert advice on public speaking, confidence building, and communication skills for teens and young adults. Read our latest articles on youth leadership, presentation tips, and overcoming speaking anxiety in Toronto.',
  keywords: 'public speaking tips, youth communication blog, teen confidence advice, speaking anxiety help, presentation skills Toronto, youth leadership articles, communication resources',
  openGraph: {
    title: 'Public Speaking Blog - Veritas Speaking',
    description: 'Expert tips and resources for young speakers. Learn about confidence, communication, and leadership development.',
    type: 'website',
  },
}

const blogPosts = [
  {
    id: 1,
    title: '5 Tips to Overcome Public Speaking Anxiety',
    excerpt: 'Feeling nervous before a presentation is normal. Learn practical strategies to manage anxiety and speak with confidence.',
    date: '2025-01-10',
    readTime: '5 min read',
    category: 'Confidence',
    slug: 'overcome-speaking-anxiety'
  },
  {
    id: 2,
    title: 'The Power of Body Language in Communication',
    excerpt: 'Your words are only part of the message. Discover how body language can enhance or undermine your speaking effectiveness.',
    date: '2025-01-08',
    readTime: '6 min read',
    category: 'Communication Skills',
    slug: 'body-language-communication'
  },
  {
    id: 3,
    title: 'How to Structure a Compelling Speech',
    excerpt: 'Every great speech has a clear structure. Learn the proven framework that keeps audiences engaged from start to finish.',
    date: '2025-01-05',
    readTime: '7 min read',
    category: 'Speech Writing',
    slug: 'structure-compelling-speech'
  },
  {
    id: 4,
    title: 'Building Confidence Through Daily Practice',
    excerpt: 'Confidence isn\'t built in a day, but small daily habits can make a huge difference. Start your confidence journey today.',
    date: '2025-01-03',
    readTime: '4 min read',
    category: 'Confidence',
    slug: 'daily-confidence-practice'
  },
  {
    id: 5,
    title: 'Mastering the Art of Storytelling',
    excerpt: 'Stories captivate audiences and make your message memorable. Learn how to weave compelling narratives into your speeches.',
    date: '2024-12-28',
    readTime: '8 min read',
    category: 'Storytelling',
    slug: 'mastering-storytelling'
  },
  {
    id: 6,
    title: 'Voice Projection and Vocal Techniques',
    excerpt: 'Your voice is your most powerful tool. Discover techniques to project clearly and speak with vocal variety that engages listeners.',
    date: '2024-12-25',
    readTime: '6 min read',
    category: 'Vocal Skills',
    slug: 'voice-projection-techniques'
  },
]

export default function Blog() {
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
              Resources & Insights
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground text-pretty">
              Expert advice on public speaking, confidence building, and communication skills for young speakers.
            </p>
          </div>
        </div>
      </section>

      {/* Featured Post */}
      <section className="py-8">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <Card className="overflow-hidden border-2 border-primary">
              <div className="grid grid-cols-1 md:grid-cols-2">
                <div className="aspect-video md:aspect-auto bg-muted flex items-center justify-center">
                  <Image 
                    src="/confident-teen-speaking-at-podium.jpg" 
                    alt="Featured post"
                    width={600}
                    height={400}
                    className="object-cover w-full h-full"
                  />
                </div>
                <div className="p-6 md:p-8 flex flex-col justify-center">
                  <div className="inline-block bg-primary text-primary-foreground text-xs font-bold px-2 py-1 rounded w-fit mb-3">
                    FEATURED
                  </div>
                  <h2 className="font-serif font-bold text-2xl md:text-3xl mb-3">
                    {blogPosts[0].title}
                  </h2>
                  <p className="text-muted-foreground mb-4">
                    {blogPosts[0].excerpt}
                  </p>
                  <div className="flex items-center gap-4 text-sm text-muted-foreground mb-4">
                    <div className="flex items-center gap-1">
                      <Calendar className="h-4 w-4" />
                      <span>{new Date(blogPosts[0].date).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Clock className="h-4 w-4" />
                      <span>{blogPosts[0].readTime}</span>
                    </div>
                  </div>
                  <Button asChild>
                    <Link href={`/blog/${blogPosts[0].slug}`}>
                      Read Article <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Blog Grid */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="font-serif font-bold text-3xl md:text-4xl mb-8 text-balance">
              Latest Articles
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {blogPosts.slice(1).map((post) => (
                <Card key={post.id} className="hover:border-primary transition-colors">
                  <CardHeader className="p-0">
                    <div className="aspect-video bg-muted flex items-center justify-center rounded-t-lg overflow-hidden">
                      <Image 
                        src={`/.jpg?height=200&width=400&query=${post.category.toLowerCase()} speaking`} 
                        alt={post.title}
                        width={400}
                        height={200}
                        className="object-cover w-full h-full"
                      />
                    </div>
                  </CardHeader>
                  <CardContent className="pt-6 space-y-3">
                    <div className="inline-block bg-accent/10 text-accent text-xs font-semibold px-2 py-1 rounded">
                      {post.category}
                    </div>
                    <h3 className="font-serif font-bold text-xl">
                      {post.title}
                    </h3>
                    <p className="text-sm text-muted-foreground">
                      {post.excerpt}
                    </p>
                    <div className="flex items-center gap-3 text-xs text-muted-foreground pt-2">
                      <div className="flex items-center gap-1">
                        <Calendar className="h-3 w-3" />
                        <span>{new Date(post.date).toLocaleDateString('en-US', { month: 'short', day: 'numeric' })}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Clock className="h-3 w-3" />
                        <span>{post.readTime}</span>
                      </div>
                    </div>
                    <Button variant="outline" className="w-full" asChild>
                      <Link href={`/blog/${post.slug}`}>
                        Read More
                      </Link>
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Newsletter CTA */}
      <section className="py-16 bg-muted">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center space-y-6">
            <h2 className="font-serif font-bold text-3xl md:text-4xl text-balance">
              Stay Updated
            </h2>
            <p className="text-lg text-muted-foreground text-pretty">
              Get the latest tips, resources, and inspiration for young speakers delivered to your inbox.
            </p>
            <Card className="p-6">
              <form className="flex flex-col sm:flex-row gap-3">
                <input 
                  type="email" 
                  placeholder="Enter your email"
                  className="flex-1 h-10 rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                  required
                />
                <Button type="submit">Subscribe</Button>
              </form>
              <p className="text-xs text-muted-foreground mt-3">
                We respect your privacy. Unsubscribe at any time.
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center space-y-6">
            <h2 className="font-serif font-bold text-3xl md:text-4xl text-balance">
              Ready to Put Learning Into Practice?
            </h2>
            <p className="text-lg text-muted-foreground text-pretty">
              Reading is great, but practice makes perfect. Book a coaching session to accelerate your growth.
            </p>
            <Button size="lg" asChild>
              <Link href="/services">Explore Coaching Options</Link>
            </Button>
          </div>
        </div>
      </section>
    </main>
  )
}
