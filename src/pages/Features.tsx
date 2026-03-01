import { Link } from 'react-router-dom'
import ComparisonTable from '../components/ComparisonTable'
import GetApiKeyModal from '../components/GetApiKeyModal'

export default function Features() {
  return (
    <div className="animate-fade-in py-16 md:py-24">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">Features</h1>
        <p className="text-xl text-gray-400 mb-16">
          Everything Novyx ships — memory, rollback, audit, and the tools built on top.
        </p>

        {/* Knowledge Graph */}
        <section className="mb-16">
          <div className="rounded-xl border-2 border-primary/30 bg-primary/5 p-8 md:p-12 shadow-lg shadow-primary/5">
            <h2 className="text-3xl md:text-4xl font-semibold mb-4">
              Knowledge Graph
            </h2>
            <p className="text-xl text-gray-300 mb-4 max-w-2xl">
              Your agent doesn&apos;t just remember facts — it understands relationships between them.
            </p>
            <p className="text-gray-400 max-w-2xl mb-6">
              Store structured relationships as subject–predicate–object triples. Query connections, traverse entities, build smarter agents. Entities are auto-created and deduplicated. No other memory provider ships graph traversal + rollback + cryptographic audit together.
            </p>
            <ul className="space-y-2 text-sm text-gray-400 mb-6 max-w-md">
              <li className="flex items-start gap-2">
                <span className="text-primary mt-0.5">✓</span>
                <span>Subject–predicate–object triples</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-primary mt-0.5">✓</span>
                <span>Auto-created &amp; deduplicated entities</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-primary mt-0.5">✓</span>
                <span>Entity traversal &amp; filtering</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-primary mt-0.5">✓</span>
                <span>Cascade deletes <span className="text-xs text-primary">(Pro+)</span></span>
              </li>
            </ul>
            <Link
              to="/docs"
              className="inline-flex items-center gap-2 bg-primary hover:bg-primary-hover text-white px-6 py-3 rounded-lg font-medium transition-all hover:shadow-lg hover:shadow-primary/25"
            >
              View SDK docs →
            </Link>
          </div>
        </section>

        {/* Replay */}
        <section className="mb-16">
          <div className="rounded-xl border-2 border-primary/30 bg-primary/5 p-8 md:p-12 mb-8 shadow-lg shadow-primary/5">
            <h2 className="text-3xl md:text-4xl font-semibold mb-4">
              Replay — Time-Travel Debugging for AI Agents
            </h2>
            <p className="text-xl text-gray-300 mb-4 max-w-2xl">
              See exactly what your agent <em>knew</em> when it made a decision. Not just what it said — what it remembered.
            </p>
            <p className="text-gray-400 max-w-2xl mb-6">
              Novyx Replay lets you scrub through your agent&apos;s memory timeline, reconstruct its knowledge state at any point in time, and even re-run searches against historical memory. Debug bad decisions by seeing the exact memories your agent had access to — not just the LLM trace.
            </p>
            <p className="text-gray-300 italic mb-6 border-l-2 border-primary pl-4">
              &ldquo;LangSmith shows you what your agent said. Novyx shows you what your agent knew.&rdquo;
            </p>
            <Link
              to="/docs/replay"
              className="inline-flex items-center gap-2 bg-primary hover:bg-primary-hover text-white px-6 py-3 rounded-lg font-medium transition-all hover:shadow-lg hover:shadow-primary/25"
            >
              Start debugging smarter →
            </Link>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="rounded-xl border border-border bg-[#18181B] p-6 transition-all duration-300 hover:border-white/15 hover:shadow-lg hover:shadow-black/20">
              <h3 className="text-lg font-semibold mb-2">Memory Timeline</h3>
              <p className="text-gray-400 text-sm">
                Scrub through every create, update, delete, and rollback with timestamps, agent IDs, and content previews.
              </p>
            </div>
            <div className="rounded-xl border border-border bg-[#18181B] p-6 transition-all duration-300 hover:border-white/15 hover:shadow-lg hover:shadow-black/20">
              <h3 className="text-lg font-semibold mb-2">Point-in-Time Snapshots</h3>
              <p className="text-gray-400 text-sm">
                Reconstruct the full memory state + knowledge graph at any timestamp. See exactly what your agent knew at 3:47 PM on Tuesday.
              </p>
            </div>
            <div className="rounded-xl border border-border bg-[#18181B] p-6 transition-all duration-300 hover:border-white/15 hover:shadow-lg hover:shadow-black/20">
              <h3 className="text-lg font-semibold mb-2">Memory Lifecycle</h3>
              <p className="text-gray-400 text-sm">
                Track a single memory from birth to death: when it was created, updated, recalled, linked to other memories, and deleted.
              </p>
            </div>
            <div className="rounded-xl border border-border bg-[#18181B] p-6 transition-all duration-300 hover:border-white/15 hover:shadow-lg hover:shadow-black/20">
              <h3 className="text-lg font-semibold mb-2">Memory Diff</h3>
              <p className="text-gray-400 text-sm">
                Compare two points in time. What memories were added, removed, or modified between deploy A and deploy B?
              </p>
            </div>
            <div className="rounded-xl border border-border bg-[#18181B] p-6 transition-all duration-300 hover:border-white/15 hover:shadow-lg hover:shadow-black/20">
              <h3 className="text-lg font-semibold mb-2">Counterfactual Recall <span className="text-xs text-primary">(Enterprise)</span></h3>
              <p className="text-gray-400 text-sm">
                &ldquo;What would my agent have recalled if I asked it this question yesterday?&rdquo; Re-runs semantic search against historical memory state.
              </p>
            </div>
            <div className="rounded-xl border border-border bg-[#18181B] p-6 transition-all duration-300 hover:border-white/15 hover:shadow-lg hover:shadow-black/20">
              <h3 className="text-lg font-semibold mb-2">Drift Analysis <span className="text-xs text-primary">(Enterprise)</span></h3>
              <p className="text-gray-400 text-sm">
                Track how your agent&apos;s knowledge evolves. Tag frequency shifts, importance distribution changes, topics appearing and disappearing.
              </p>
            </div>
          </div>
        </section>

        {/* Cortex */}
        <section className="mb-16">
          <div className="rounded-xl border-2 border-primary/30 bg-primary/5 p-8 md:p-12 mb-8 shadow-lg shadow-primary/5">
            <div className="inline-flex items-center gap-2 rounded-full border border-primary/40 bg-primary/10 px-3 py-1 text-xs text-primary mb-4 animate-pulse-subtle">
              New
            </div>
            <h2 className="text-3xl md:text-4xl font-semibold mb-4">
              Cortex — Autonomous Memory Intelligence
            </h2>
            <p className="text-xl text-gray-300 mb-4 max-w-2xl">
              Your agent&apos;s memory doesn&apos;t just store — it thinks.
            </p>
            <p className="text-gray-400 max-w-2xl mb-6">
              Cortex automatically maintains your agent&apos;s memory: merging near-duplicates, boosting knowledge that matters, decaying noise, and surfacing patterns you&apos;d never spot manually. Set it once, and your agent gets smarter over time without any extra code.
            </p>
            <Link
              to="/docs/cortex"
              className="inline-flex items-center gap-2 bg-primary hover:bg-primary-hover text-white px-6 py-3 rounded-lg font-medium transition-all hover:shadow-lg hover:shadow-primary/25"
            >
              Explore Cortex docs →
            </Link>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            <div className="rounded-xl border border-border bg-[#18181B] p-6 transition-all duration-300 hover:border-white/15 hover:shadow-lg hover:shadow-black/20">
              <h3 className="text-lg font-semibold mb-2">Consolidation</h3>
              <p className="text-gray-400 text-sm">
                Auto-merge near-duplicate memories using pgvector similarity. Reduce noise without losing information.
              </p>
            </div>
            <div className="rounded-xl border border-border bg-[#18181B] p-6 transition-all duration-300 hover:border-white/15 hover:shadow-lg hover:shadow-black/20">
              <h3 className="text-lg font-semibold mb-2">Reinforcement</h3>
              <p className="text-gray-400 text-sm">
                Boost frequently-recalled memories and decay forgotten noise. Your agent&apos;s memory naturally prioritizes what matters.
              </p>
            </div>
            <div className="rounded-xl border border-border bg-[#18181B] p-6 transition-all duration-300 hover:border-white/15 hover:shadow-lg hover:shadow-black/20">
              <h3 className="text-lg font-semibold mb-2">Insight Generation <span className="text-xs text-primary">(Enterprise)</span></h3>
              <p className="text-gray-400 text-sm">
                Pattern detection across the memory corpus. Recurring themes, emerging trends, and correlations — surfaced automatically.
              </p>
            </div>
          </div>
        </section>

        {/* Context Spaces */}
        <section className="mb-16">
          <div className="rounded-xl border-2 border-primary/30 bg-primary/5 p-8 md:p-12 shadow-lg shadow-primary/5">
            <h2 className="text-3xl md:text-4xl font-semibold mb-4">
              Context Spaces
            </h2>
            <p className="text-xl text-gray-300 mb-4 max-w-2xl">
              Agent A learns it, Agent B knows it. Shared memory across your entire agent fleet.
            </p>
            <p className="text-gray-400 max-w-2xl">
              Context Spaces let multiple agents read and write to the same memory pool. One agent discovers a user preference, and every other agent in the space knows it instantly. No message passing, no sync logic, no stale caches.
            </p>
            <p className="mt-4 text-sm text-primary">Available on all tiers. Space sharing on Pro+.</p>
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
