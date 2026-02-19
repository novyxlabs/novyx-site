import { Link } from 'react-router-dom'

const posts = [
  {
    slug: 'introducing-novyx-core',
    title: 'Introducing Novyx Core',
    date: 'February 1, 2026',
    excerpt: 'The memory and security layer for AI agents.',
    content: `
AI agents have a memory problem. Every conversation starts from zero. Your context window fills up, old information gets pushed out, and your agent forgets what it learned yesterday. This isn't intelligence—it's amnesia with extra steps.

We built Novyx Core to fix this. It's a persistent memory layer that lets your AI agent remember everything, forever. Store a fact today, recall it six months from now. Semantic search finds relevant context in milliseconds, not by matching keywords, but by understanding meaning.

But memory alone isn't enough. What happens when someone poisons your agent's memory? Injects bad data? Corrupts months of carefully accumulated context? With most systems, you're stuck. The damage is done. There's no undo button.

Novyx Core includes Magic Rollback. Every memory write is cryptographically hashed and timestamped. When something goes wrong—and it will—you can surgically revert only the corrupted data. Your agent recovers in seconds, not hours. This is the security layer AI agents have been missing.

Three lines of code. That's all it takes to add persistent, secure memory to any AI agent. Python SDK and REST API are live today. Free tier gives you 5,000 memories. No credit card required.

Your AI finally remembers. And stays safe.
    `.trim(),
  },
]

export default function Blog() {
  return (
    <div className="animate-fade-in py-16 md:py-24">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-bold mb-4">Blog</h1>
        <p className="text-gray-400 mb-10">
          Updates, announcements, and technical deep-dives from the Novyx team.
        </p>

        <div className="space-y-8">
          {posts.map((post) => (
            <article key={post.slug} className="rounded-xl border border-border bg-[#18181B] p-8">
              <div className="mb-4">
                <time className="text-sm text-gray-500">{post.date}</time>
                <h2 className="text-2xl font-semibold mt-1">{post.title}</h2>
              </div>
              <div className="prose prose-invert prose-gray max-w-none">
                {post.content.split('\n\n').map((paragraph, i) => (
                  <p key={i} className="text-gray-300 mb-4 leading-relaxed">
                    {paragraph}
                  </p>
                ))}
              </div>
              <div className="mt-6 pt-6 border-t border-border">
                <Link
                  to="/docs"
                  className="text-primary hover:text-primary-hover font-medium"
                >
                  Read the docs →
                </Link>
              </div>
            </article>
          ))}
        </div>
      </div>
    </div>
  )
}
