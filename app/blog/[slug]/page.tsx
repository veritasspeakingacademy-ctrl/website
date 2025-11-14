import { Card, CardContent } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import Link from 'next/link'
import { Calendar, Clock, ArrowLeft } from 'lucide-react'
import { notFound } from 'next/navigation'
import type { Metadata } from 'next'
import Image from 'next/image'

// Sample blog post data - in production this would come from a CMS or database
const blogPosts: Record<string, {
  title: string
  content: string[]
  date: string
  readTime: string
  category: string
}> = {
  'overcome-speaking-anxiety': {
    title: '5 Tips to Overcome Public Speaking Anxiety',
    date: '2025-01-10',
    readTime: '5 min read',
    category: 'Confidence',
    content: [
      'Public speaking anxiety is one of the most common fears, affecting people of all ages. For young speakers, the pressure can feel even more intense. The good news? With the right strategies, you can manage this anxiety and become a confident speaker.',
      'Here are five proven techniques to help you overcome speaking anxiety:',
      '**1. Practice Deep Breathing**\n\nBefore you step on stage, take several deep breaths. Inhale slowly through your nose for 4 counts, hold for 4, then exhale through your mouth for 4. This activates your body\'s relaxation response and calms your nervous system.',
      '**2. Prepare Thoroughly**\n\nAnxiety often stems from uncertainty. The more prepared you are, the more confident you\'ll feel. Practice your speech multiple times, anticipate questions, and know your material inside and out.',
      '**3. Reframe Your Nervousness**\n\nInstead of seeing nervousness as a bad thing, reframe it as excitement. Both emotions create similar physical sensations. Tell yourself "I\'m excited" rather than "I\'m nervous" and watch your mindset shift.',
      '**4. Focus on Your Message, Not Yourself**\n\nShift your attention from how you\'re being perceived to the value you\'re providing. Remember, your audience wants to hear what you have to say. You\'re there to serve them with your message.',
      '**5. Start Small and Build Confidence**\n\nYou don\'t have to jump into a TEDx talk right away. Start with smaller speaking opportunities—class presentations, family gatherings, small group discussions. Each successful experience builds confidence for the next.',
      'Remember, even experienced speakers feel nervous sometimes. The difference is they\'ve learned to use that energy to fuel their performance rather than letting it hold them back. With practice and these techniques, you can do the same.',
    ]
  },
}

type Props = {
  params: { slug: string }
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const post = blogPosts[params.slug]
  
  if (!post) {
    return {
      title: 'Post Not Found',
    }
  }

  return {
    title: `${post.title} | Veritas Speaking Blog`,
    description: post.content[0].substring(0, 155),
    openGraph: {
      title: post.title,
      description: post.content[0].substring(0, 155),
      type: 'article',
      publishedTime: post.date,
    },
  }
}

export default function BlogPost({ params }: Props) {
  const post = blogPosts[params.slug]

  if (!post) {
    notFound()
  }

  return (
    <main>
      <article>
        {/* Hero */}
        <section className="py-16 md:py-24 relative">
          <div className="absolute bottom-10 right-10 opacity-10">
            <Image src="/veritas-logo.png" alt="" width={100} height={100} />
          </div>
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto space-y-6">
              <Button variant="ghost" asChild className="mb-4">
                <Link href="/blog">
                  <ArrowLeft className="mr-2 h-4 w-4" /> Back to Blog
                </Link>
              </Button>
              
              <div className="inline-block bg-accent/10 text-accent text-xs font-semibold px-3 py-1 rounded">
                {post.category}
              </div>
              
              <h1 className="font-serif font-bold text-4xl md:text-5xl text-balance">
                {post.title}
              </h1>
              
              <div className="flex items-center gap-4 text-sm text-muted-foreground">
                <div className="flex items-center gap-1">
                  <Calendar className="h-4 w-4" />
                  <span>{new Date(post.date).toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}</span>
                </div>
                <div className="flex items-center gap-1">
                  <Clock className="h-4 w-4" />
                  <span>{post.readTime}</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Content */}
        <section className="py-8">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto">
              <Card>
                <CardContent className="pt-6 prose prose-lg max-w-none">
                  {post.content.map((paragraph, index) => (
                    <p key={index} className="mb-4 text-muted-foreground leading-relaxed whitespace-pre-line">
                      {paragraph.split('**').map((part, i) => 
                        i % 2 === 1 ? <strong key={i} className="text-foreground">{part}</strong> : part
                      )}
                    </p>
                  ))}
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
                Want Personalized Guidance?
              </h2>
              <p className="text-lg opacity-90 text-pretty">
                Our expert coaches can help you apply these techniques and develop your unique speaking style.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" variant="secondary" asChild>
                  <Link href="/services">Book a Session</Link>
                </Button>
                <Button size="lg" variant="outline" className="bg-transparent border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary" asChild>
                  <Link href="/blog">Read More Articles</Link>
                </Button>
              </div>
            </div>
          </div>
        </section>
      </article>
    </main>
  )
}
