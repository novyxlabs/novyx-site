import { Link } from 'react-router-dom'
import ComparisonTable from '../components/ComparisonTable'
import GetApiKeyModal from '../components/GetApiKeyModal'

const features = [
  {
    title: 'Knowledge Graph',
    description:
      "Your agent doesn't just remember facts — it understands relationships between them. Store structured triples, traverse entities, and build smarter agents.",
    tier: 'Pro+',
    link: '/docs',
    linkLabel: 'View SDK docs →',
  },
  {
    title: 'Replay',
    description:
      'Time-travel debugging for AI agents. See exactly what your agent knew when it made a decision — not just what it said.',
    link: '/docs/replay',
    linkLabel: 'Explore Replay →',
  },
  {
    title: 'Cortex',
    badge: 'New',
    description:
      "Autonomous memory intelligence. Auto-merge duplicates, boost important memories, decay noise, and surface patterns — your agent's memory manages itself.",
    link: '/docs/cortex',
    linkLabel: 'Explore Cortex →',
  },
  {
    title: 'Context Spaces',
    description:
      'Agent A learns it, Agent B knows it. Shared memory across your entire agent fleet — no message passing, no sync logic, no stale caches.',
    tier: 'Space sharing on Pro+',
    link: '/docs',
    linkLabel: 'View SDK docs →',
  },
]

export default function Features() {
  return (
    <div className="animate-fade-in py-16 md:py-24">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">Features</h1>
        <p className="text-xl text-gray-400 mb-16">
          Everything Novyx ships — memory, rollback, audit, and the tools built on top.
        </p>

        {/* Feature cards */}
        <section className="mb-16">
          <div className="grid md:grid-cols-2 gap-6">
            {features.map((f) => (
              <div
                key={f.title}
                className="rounded-xl border border-border bg-[#18181B] p-8 transition-all duration-300 hover:border-white/15 hover:shadow-lg hover:shadow-black/20"
              >
                <div className="flex items-center gap-3 mb-3">
                  <h3 className="text-xl font-semibold">{f.title}</h3>
                  {f.badge && (
                    <span className="inline-flex items-center rounded-full border border-primary/40 bg-primary/10 px-2.5 py-0.5 text-xs text-primary animate-pulse-subtle">
                      {f.badge}
                    </span>
                  )}
                </div>
                <p className="text-gray-400 mb-4">{f.description}</p>
                {f.tier && (
                  <p className="text-sm text-primary mb-4">{f.tier}</p>
                )}
                <Link
                  to={f.link}
                  className="text-primary hover:text-primary-hover font-medium text-sm"
                >
                  {f.linkLabel}
                </Link>
              </div>
            ))}
          </div>
        </section>

        {/* How Rollback Works */}
        <section className="mb-16">
          <h2 className="text-3xl md:text-4xl font-semibold mb-8">How Rollback Works</h2>
          <div className="rounded-xl border border-border bg-[#18181B] p-8 transition-all duration-300 hover:border-white/15 hover:shadow-lg hover:shadow-black/20">
            <ol className="space-y-4 text-gray-300">
              <li className="flex gap-4">
                <span className="flex-shrink-0 w-6 h-6 rounded-full bg-primary/20 text-primary flex items-center justify-center text-sm font-semibold">1</span>
                <span>Every memory operation is cryptographically hashed (SHA-256)</span>
              </li>
              <li className="flex gap-4">
                <span className="flex-shrink-0 w-6 h-6 rounded-full bg-primary/20 text-primary flex items-center justify-center text-sm font-semibold">2</span>
                <span>Operations are chained — each references the previous hash</span>
              </li>
              <li className="flex gap-4">
                <span className="flex-shrink-0 w-6 h-6 rounded-full bg-primary/20 text-primary flex items-center justify-center text-sm font-semibold">3</span>
                <span>When you rollback, we restore state to any point in that chain</span>
              </li>
              <li className="flex gap-4">
                <span className="flex-shrink-0 w-6 h-6 rounded-full bg-primary/20 text-primary flex items-center justify-center text-sm font-semibold">4</span>
                <span>Corrupted or unwanted memories after that point are archived</span>
              </li>
              <li className="flex gap-4">
                <span className="flex-shrink-0 w-6 h-6 rounded-full bg-primary/20 text-primary flex items-center justify-center text-sm font-semibold">5</span>
                <span>Your agent continues from the clean state</span>
              </li>
            </ol>
            <p className="mt-6 text-gray-400 italic border-t border-border pt-6">
              This is like git for your agent&apos;s memory — but automatic.
            </p>
          </div>
        </section>

        {/* Production Trust */}
        <section className="mb-16">
          <h2 className="text-3xl md:text-4xl font-semibold mb-8 text-center">
            Production-ready from day one
          </h2>
          <div className="grid md:grid-cols-3 gap-6 mb-8">
            <div className="rounded-xl border border-border bg-[#18181B] p-8 text-center transition-all duration-300 hover:border-white/15 hover:shadow-lg hover:shadow-black/20">
              <p className="text-3xl font-bold text-primary mb-2">p50: &lt;100ms</p>
              <p className="text-gray-400">Median recall latency</p>
            </div>
            <div className="rounded-xl border border-border bg-[#18181B] p-8 text-center transition-all duration-300 hover:border-white/15 hover:shadow-lg hover:shadow-black/20">
              <p className="text-3xl font-bold text-primary mb-2">p95: &lt;200ms</p>
              <p className="text-gray-400">95th percentile recall</p>
            </div>
            <div className="rounded-xl border border-border bg-[#18181B] p-8 text-center transition-all duration-300 hover:border-white/15 hover:shadow-lg hover:shadow-black/20">
              <p className="text-3xl font-bold text-primary mb-2">Up to 99.9%</p>
              <p className="text-gray-400">uptime SLA</p>
            </div>
          </div>
          <p className="text-center text-gray-400">
            Your data is yours — export anytime, no lock-in.
          </p>
        </section>

        {/* Safety & Reliability */}
        <section className="mb-16">
          <h2 className="text-3xl md:text-4xl font-semibold mb-8">Safety &amp; reliability built in</h2>
          <ComparisonTable />
        </section>

        {/* Use Cases */}
        <section className="mb-16">
          <h2 className="text-3xl md:text-4xl font-semibold mb-8">
            What developers are building
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="rounded-xl border border-border bg-[#18181B] p-6 transition-all duration-300 hover:border-white/15 hover:shadow-lg hover:shadow-black/20">
              <h3 className="text-lg font-semibold mb-3">Cross-Session Recall</h3>
              <p className="text-gray-400">
                A scheduling agent that auto-recalled a contact&apos;s timezone and meeting preferences in a brand new session — without being told.
              </p>
            </div>
            <div className="rounded-xl border border-border bg-[#18181B] p-6 transition-all duration-300 hover:border-white/15 hover:shadow-lg hover:shadow-black/20">
              <h3 className="text-lg font-semibold mb-3">30-Second Recovery</h3>
              <p className="text-gray-400">
                An agent that stored bad data for 3 days. One rollback command. 30 seconds. Clean state.
              </p>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="text-center">
          <h2 className="text-3xl md:text-4xl font-semibold mb-4">
            Ready to try it?
          </h2>
          <p className="text-gray-400 mb-6">
            Free tier. No credit card. Start in 30 seconds.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <GetApiKeyModal
              label="Get Free API Key"
              className="inline-flex items-center gap-2 bg-primary hover:bg-primary-hover text-white px-6 py-3 rounded-lg font-medium transition-all hover:shadow-lg hover:shadow-primary/25"
            />
            <Link
              to="/pricing"
              className="inline-flex items-center gap-2 border border-border text-white px-6 py-3 rounded-lg font-medium transition-all hover:border-white/30 hover:bg-white/[0.03]"
            >
              See pricing →
            </Link>
          </div>
        </section>
      </div>
    </div>
  )
}
