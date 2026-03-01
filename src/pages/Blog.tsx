import { Link } from 'react-router-dom'

export default function Story() {
  return (
    <div className="animate-fade-in py-16 md:py-24">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">Our Story</h1>
        <p className="text-gray-400 mb-12">
          How Novyx started — and why AI agents need persistent memory.
        </p>

        <div className="prose prose-invert prose-gray max-w-none space-y-6">
          <p className="text-gray-300 leading-relaxed text-lg">
            AI agents have a memory problem. Every conversation starts from zero. Your context window fills up, old information gets pushed out, and your agent forgets what it learned yesterday. This isn't intelligence — it's amnesia with extra steps.
          </p>

          <p className="text-gray-300 leading-relaxed">
            We built Novyx Core to fix this. It's a persistent memory layer that lets your AI agent remember everything, forever. Store a fact today, recall it six months from now. Semantic search finds relevant context in milliseconds — not by matching keywords, but by understanding meaning.
          </p>

          <p className="text-gray-300 leading-relaxed">
            But memory alone isn't enough. What happens when someone poisons your agent's memory? Injects bad data? Corrupts months of carefully accumulated context? With most systems, you're stuck. The damage is done. There's no undo button.
          </p>

          <p className="text-gray-300 leading-relaxed">
            Novyx Core includes Magic Rollback. Every memory write is cryptographically hashed and timestamped. When something goes wrong — and it will — you can surgically revert only the corrupted data. Your agent recovers in seconds, not hours. This is the security layer AI agents have been missing.
          </p>

          <p className="text-gray-300 leading-relaxed">
            Three lines of code. That's all it takes to add persistent, secure memory to any AI agent. Python SDK and REST API are live today. Free tier gives you 5,000 memories. No credit card required.
          </p>

          <p className="text-gray-300 leading-relaxed font-medium text-lg">
            Your AI finally remembers. And stays safe.
          </p>

          <div className="pt-4 text-sm text-gray-500">
            — Blake Heron, February 2026
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-border flex flex-wrap gap-4">
          <Link
            to="/features"
            className="inline-flex items-center gap-2 bg-primary hover:bg-primary-hover text-white px-6 py-3 rounded-lg font-medium transition-all hover:shadow-lg hover:shadow-primary/25"
          >
            See what we've built →
          </Link>
          <Link
            to="/docs"
            className="inline-flex items-center gap-2 border border-border text-white px-6 py-3 rounded-lg font-medium transition-all hover:border-white/30 hover:bg-white/[0.03]"
          >
            Read the docs →
          </Link>
        </div>
      </div>
    </div>
  )
}
