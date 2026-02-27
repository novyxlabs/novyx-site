import { Link } from 'react-router-dom'
import CodeBlock from '../components/CodeBlock'
import ComparisonTable from '../components/ComparisonTable'
import ContactModal from '../components/ContactModal'
import GetApiKeyModal from '../components/GetApiKeyModal'
import UpgradeButton from '../components/UpgradeButton'

const heroTabs = [
  {
    language: 'python',
    label: 'Python',
    code: `from novyx import Novyx

nx = Novyx(api_key="nram_...")
nx.remember("User prefers dark mode", tags=["ui"])
memories = nx.recall("user preferences")`,
  },
  {
    language: 'javascript',
    label: 'JavaScript',
    code: `import { Novyx } from 'novyx';

const nx = new Novyx({ apiKey: 'nram_...' });
await nx.remember('User prefers dark mode', { tags: ['ui'] });
const memories = await nx.recall('user preferences');`,
  },
]

const setupCode = `pip3 install novyx

from novyx import Novyx
nx = Novyx(api_key="YOUR_KEY")`

const threeLinesCode = `nx.remember("user prefers dark mode")
nx.recall("user preferences")
nx.rollback("2 hours ago")`

export default function Home() {
  return (
    <div className="animate-fade-in">
      {/* Hero */}
      <section className="py-20 md:py-32">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 grid gap-10 lg:grid-cols-[1.1fr_0.9fr] items-center">
          <div>
            <div className="inline-flex items-center gap-2 rounded-full border border-border bg-[#18181B] px-3 py-1 text-xs text-gray-300 mb-5">
              Now Live
            </div>
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Persistent memory + rollback for AI agents
            </h1>
            <p className="text-xl md:text-2xl text-gray-400 mb-8 max-w-xl">
              Your agent remembers. You stay in control. Three lines of code.
            </p>
            <div className="flex flex-wrap gap-4">
              <GetApiKeyModal
                label="Get Free API Key"
                className="inline-flex items-center gap-2 bg-primary hover:bg-primary-hover text-white px-6 py-3 rounded-lg font-medium transition-colors"
              />
              <Link
                to="/docs"
                className="inline-flex items-center gap-2 border border-border text-white px-6 py-3 rounded-lg font-medium transition-colors hover:border-white/40"
              >
                View Docs
              </Link>
            </div>
            <p className="mt-6 text-sm text-gray-400">
              <span className="text-gray-300 font-medium">Model-agnostic.</span> Switch from Claude to GPT to local models. Your agent&apos;s memory stays.
            </p>
          </div>
          <div>
            <CodeBlock tabs={heroTabs} />
          </div>
        </div>
      </section>

      {/* Problem */}
      <section className="py-16 border-t border-border">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-semibold mb-8">
            AI agents have amnesia. And no security.
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="rounded-xl border border-border bg-[#18181B] p-6">
              <h3 className="text-lg font-semibold mb-3">The Memory Problem</h3>
              <p className="text-gray-400">
                Most AI conversations start from zero. Your context window is temporary — it resets every session. Everything your agent learned yesterday is gone today.
              </p>
            </div>
            <div className="rounded-xl border border-border bg-[#18181B] p-6">
              <h3 className="text-lg font-semibold mb-3">The Security Problem</h3>
              <p className="text-gray-400">
                Anyone can corrupt your agent&apos;s memory. Inject bad data. Corrupt
                months of context. And there&apos;s no rollback. No audit trail. No
                proof of what happened.
              </p>
            </div>
          </div>
          <p className="mt-6 text-gray-300 font-medium">Novyx fixes both.</p>
        </div>
      </section>

      {/* Origin Story */}
      <section className="py-12 border-t border-border">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <blockquote className="rounded-xl border border-primary/30 bg-primary/5 p-8 mb-6">
            <p className="text-lg text-gray-200 italic leading-relaxed">
              &ldquo;Built after my agent mass-deleted user data. No audit trail. No way to prove what happened. No undo. Three days of manual reconstruction. Never again.&rdquo;
            </p>
            <footer className="mt-4 text-sm text-gray-400">
              — Blake Heron, Founder
            </footer>
          </blockquote>
          <blockquote className="rounded-xl border border-border bg-[#18181B] p-8">
            <p className="text-lg text-gray-200 italic leading-relaxed">
              &ldquo;It&apos;s the first memory system I&apos;ve used that feels like it&apos;s built for agents, not just by agents. The rollback especially — knowing I can undo if I store something wrong gives me confidence to capture everything.&rdquo;
            </p>
            <footer className="mt-4 text-sm text-gray-400">
              — Novyx agent, internal testing
            </footer>
          </blockquote>
        </div>
      </section>

      {/* Three Pillars */}
      <section className="py-16 border-t border-border">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-semibold mb-8">
            Built on four pillars
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Pillar 1: Persistent Memory */}
            <div className="rounded-xl border border-border bg-[#18181B] p-6">
              <h3 className="text-xl font-semibold mb-3">Persistent Memory</h3>
              <p className="text-gray-400 mb-4">
                Semantic search across all memories. Works across sessions, restarts, crashes.
              </p>
              <ul className="space-y-2 text-sm text-gray-400">
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-0.5">✓</span>
                  <span>Sub-100ms recall</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-0.5">✓</span>
                  <span>Semantic search across context</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-0.5">✓</span>
                  <span>Survives restarts & crashes</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-0.5">✓</span>
                  <span>Share across agents with Spaces <span className="text-xs text-primary">(Pro+)</span></span>
                </li>
              </ul>
            </div>

            {/* Pillar 2: Magic Rollback */}
            <div className="rounded-xl border border-border bg-[#18181B] p-6">
              <h3 className="text-xl font-semibold mb-3">Magic Rollback</h3>
              <p className="text-gray-400 mb-4">
                Point-in-time restore. Preview before executing. Like git for agent state.
              </p>
              <ul className="space-y-2 text-sm text-gray-400">
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-0.5">✓</span>
                  <span>Restore to any point in time</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-0.5">✓</span>
                  <span>Preview before executing</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-0.5">✓</span>
                  <span>Surgical precision</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-0.5">✓</span>
                  <span>AI-suggested rollback points <span className="text-xs text-primary">(Starter+)</span></span>
                </li>
              </ul>
            </div>

            {/* Pillar 3: Audit Trail */}
            <div className="rounded-xl border border-border bg-[#18181B] p-6">
              <h3 className="text-xl font-semibold mb-3">Audit Trail</h3>
              <p className="text-gray-400 mb-4">
                Cryptographic verification. Tamper-proof logs. Export for compliance.
              </p>
              <ul className="space-y-2 text-sm text-gray-400">
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-0.5">✓</span>
                  <span>SHA-256 cryptographic hashing</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-0.5">✓</span>
                  <span>Tamper-proof logs</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-0.5">✓</span>
                  <span>Export for compliance</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-0.5">✓</span>
                  <span>Anomaly alerts when something&apos;s wrong <span className="text-xs text-primary">(Pro+)</span></span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-0.5">✓</span>
                  <span>RSA-signed execution traces <span className="text-xs text-primary">(Pro+)</span></span>
                </li>
              </ul>
            </div>

            {/* Pillar 4: Knowledge Graph */}
            <div className="rounded-xl border border-border bg-[#18181B] p-6">
              <h3 className="text-xl font-semibold mb-3">Knowledge Graph</h3>
              <p className="text-gray-400 mb-4">
                Structured relationships as subject–predicate–object triples. Auto-created entities with dedup. No other memory provider ships graph traversal + rollback + cryptographic audit together.
              </p>
              <ul className="space-y-2 text-sm text-gray-400">
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
            </div>
          </div>
        </div>
      </section>

      {/* Intelligence Features */}
      <section className="py-16 border-t border-border">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-semibold mb-8">
            Smarter recall, not just more storage
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="rounded-xl border border-border bg-[#18181B] p-6">
              <h3 className="text-lg font-semibold mb-2">Memory TTL</h3>
              <p className="text-gray-400">
                Session context expires automatically. Long-term knowledge stays forever. Set per-memory TTLs from 60 seconds to 90 days.
              </p>
            </div>
            <div className="rounded-xl border border-border bg-[#18181B] p-6">
              <h3 className="text-lg font-semibold mb-2">Recency-Weighted Recall</h3>
              <p className="text-gray-400">
                Tune search to prioritize recent context or long-term knowledge. Blend semantic relevance with recency in a single query.
              </p>
            </div>
            <div className="rounded-xl border border-border bg-[#18181B] p-6">
              <h3 className="text-lg font-semibold mb-2">Match Confidence Scoring</h3>
              <p className="text-gray-400">
                Every recall result includes a confidence score so your agent knows how much to trust it. Factors in similarity, rank position, and gap to the next result.
              </p>
            </div>
            <div className="rounded-xl border border-border bg-[#18181B] p-6">
              <h3 className="text-lg font-semibold mb-2">Memory Supersession</h3>
              <p className="text-gray-400">
                Replace outdated information cleanly. Old version archived, not deleted. Your agent always gets the latest, with full history intact.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Replay */}
      <section className="py-16 border-t border-border">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="rounded-xl border-2 border-primary/30 bg-primary/5 p-8 md:p-12 mb-8">
            <div className="inline-flex items-center gap-2 rounded-full border border-primary/40 bg-primary/10 px-3 py-1 text-xs text-primary mb-4">
              New
            </div>
            <h2 className="text-3xl md:text-4xl font-semibold mb-4">
              Replay — Time-Travel Debugging for AI Agents
            </h2>
            <p className="text-xl text-gray-300 mb-4 max-w-2xl">
              See exactly what your agent <em>knew</em> when it made a decision. Not just what it said — what it remembered.
            </p>
            <p className="text-gray-400 max-w-2xl mb-6">
              Novyx Replay lets you scrub through your agent&apos;s memory timeline, reconstruct its knowledge state at any point in time, and even re-run searches against historical memory. Debug bad decisions by seeing the exact memories your agent had access to — not just the LLM trace. No other memory platform offers this.
            </p>
            <p className="text-gray-300 italic mb-6 border-l-2 border-primary pl-4">
              &ldquo;LangSmith shows you what your agent said. Novyx shows you what your agent knew.&rdquo;
            </p>
            <Link
              to="/docs/replay"
              className="inline-flex items-center gap-2 bg-primary hover:bg-primary-hover text-white px-6 py-3 rounded-lg font-medium transition-colors"
            >
              Start debugging smarter →
            </Link>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="rounded-xl border border-border bg-[#18181B] p-6">
              <h3 className="text-lg font-semibold mb-2">Memory Timeline</h3>
              <p className="text-gray-400 text-sm">
                Scrub through every create, update, delete, and rollback with timestamps, agent IDs, and content previews.
              </p>
            </div>
            <div className="rounded-xl border border-border bg-[#18181B] p-6">
              <h3 className="text-lg font-semibold mb-2">Point-in-Time Snapshots</h3>
              <p className="text-gray-400 text-sm">
                Reconstruct the full memory state + knowledge graph at any timestamp. See exactly what your agent knew at 3:47 PM on Tuesday.
              </p>
            </div>
            <div className="rounded-xl border border-border bg-[#18181B] p-6">
              <h3 className="text-lg font-semibold mb-2">Memory Lifecycle</h3>
              <p className="text-gray-400 text-sm">
                Track a single memory from birth to death: when it was created, updated, recalled, linked to other memories, and deleted.
              </p>
            </div>
            <div className="rounded-xl border border-border bg-[#18181B] p-6">
              <h3 className="text-lg font-semibold mb-2">Memory Diff</h3>
              <p className="text-gray-400 text-sm">
                Compare two points in time. What memories were added, removed, or modified between deploy A and deploy B?
              </p>
            </div>
            <div className="rounded-xl border border-border bg-[#18181B] p-6">
              <h3 className="text-lg font-semibold mb-2">Counterfactual Recall <span className="text-xs text-primary">(Enterprise)</span></h3>
              <p className="text-gray-400 text-sm">
                &ldquo;What would my agent have recalled if I asked it this question yesterday?&rdquo; Re-runs semantic search against historical memory state.
              </p>
            </div>
            <div className="rounded-xl border border-border bg-[#18181B] p-6">
              <h3 className="text-lg font-semibold mb-2">Drift Analysis <span className="text-xs text-primary">(Enterprise)</span></h3>
              <p className="text-gray-400 text-sm">
                Track how your agent&apos;s knowledge evolves. Tag frequency shifts, importance distribution changes, topics appearing and disappearing.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Cortex */}
      <section className="py-16 border-t border-border">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="rounded-xl border-2 border-primary/30 bg-primary/5 p-8 md:p-12 mb-8">
            <div className="inline-flex items-center gap-2 rounded-full border border-primary/40 bg-primary/10 px-3 py-1 text-xs text-primary mb-4">
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
              className="inline-flex items-center gap-2 bg-primary hover:bg-primary-hover text-white px-6 py-3 rounded-lg font-medium transition-colors"
            >
              Explore Cortex docs →
            </Link>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            <div className="rounded-xl border border-border bg-[#18181B] p-6">
              <h3 className="text-lg font-semibold mb-2">Consolidation</h3>
              <p className="text-gray-400 text-sm">
                Auto-merge near-duplicate memories using pgvector similarity. Reduce noise without losing information.
              </p>
            </div>
            <div className="rounded-xl border border-border bg-[#18181B] p-6">
              <h3 className="text-lg font-semibold mb-2">Reinforcement</h3>
              <p className="text-gray-400 text-sm">
                Boost frequently-recalled memories and decay forgotten noise. Your agent&apos;s memory naturally prioritizes what matters.
              </p>
            </div>
            <div className="rounded-xl border border-border bg-[#18181B] p-6">
              <h3 className="text-lg font-semibold mb-2">Insight Generation <span className="text-xs text-primary">(Enterprise)</span></h3>
              <p className="text-gray-400 text-sm">
                Pattern detection across the memory corpus. Recurring themes, emerging trends, and correlations — surfaced automatically.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Context Spaces */}
      <section className="py-16 border-t border-border">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="rounded-xl border-2 border-primary/30 bg-primary/5 p-8 md:p-12">
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
        </div>
      </section>

      {/* How Rollback Works */}
      <section className="py-16 border-t border-border">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-semibold mb-8">How Rollback Works</h2>
          <div className="rounded-xl border border-border bg-[#18181B] p-8">
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
        </div>
      </section>

      {/* Production Trust */}
      <section className="py-16 border-t border-border">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-semibold mb-8 text-center">
            Production-ready from day one
          </h2>
          <div className="grid md:grid-cols-3 gap-6 mb-8">
            <div className="rounded-xl border border-border bg-[#18181B] p-8 text-center">
              <p className="text-3xl font-bold text-primary mb-2">p50: &lt;100ms</p>
              <p className="text-gray-400">Median recall latency</p>
            </div>
            <div className="rounded-xl border border-border bg-[#18181B] p-8 text-center">
              <p className="text-3xl font-bold text-primary mb-2">p95: &lt;200ms</p>
              <p className="text-gray-400">95th percentile recall</p>
            </div>
            <div className="rounded-xl border border-border bg-[#18181B] p-8 text-center">
              <p className="text-3xl font-bold text-primary mb-2">Up to 99.9%</p>
              <p className="text-gray-400">uptime SLA</p>
            </div>
          </div>
          <p className="text-center text-gray-400">
            Your data is yours — export anytime, no lock-in.
          </p>
        </div>
      </section>

      {/* Integrations */}
      <section className="py-16 border-t border-border">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-semibold mb-8 text-center">
            Works with your stack
          </h2>
          <div className="grid md:grid-cols-3 gap-6 max-w-3xl mx-auto">
            <a
              href="https://pypi.org/project/novyx/2.9.0/"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-xl border border-border bg-[#18181B] p-6 text-center hover:border-white/40 transition-colors"
            >
              <h3 className="text-lg font-semibold mb-2">Python SDK</h3>
              <p className="text-sm text-gray-400">pip install novyx</p>
            </a>
            <a
              href="https://www.npmjs.com/package/novyx"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-xl border border-border bg-[#18181B] p-6 text-center hover:border-white/40 transition-colors"
            >
              <h3 className="text-lg font-semibold mb-2">JS / TS SDK</h3>
              <p className="text-sm text-gray-400">npm install novyx</p>
            </a>
            <div className="rounded-xl border border-border bg-[#18181B] p-6 text-center">
              <h3 className="text-lg font-semibold mb-2">REST API</h3>
              <p className="text-sm text-gray-400">Works with any HTTP client</p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Teams Choose Novyx */}
      <section className="py-16 border-t border-border">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-semibold mb-8">Why teams choose Novyx</h2>
          <ComparisonTable />
        </div>
      </section>

      {/* Use Cases */}
      <section className="py-16 border-t border-border">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-semibold mb-8">
            What developers are building
          </h2>
          <div className="grid md:grid-cols-2 gap-6 mb-8">
            <div className="rounded-xl border border-border bg-[#18181B] p-6">
              <h3 className="text-lg font-semibold mb-3">Cross-Session Recall</h3>
              <p className="text-gray-400">
                A scheduling agent that auto-recalled a contact&apos;s timezone and meeting preferences in a brand new session — without being told.
              </p>
            </div>
            <div className="rounded-xl border border-border bg-[#18181B] p-6">
              <h3 className="text-lg font-semibold mb-3">30-Second Recovery</h3>
              <p className="text-gray-400">
                An agent that stored bad data for 3 days. One rollback command. 30 seconds. Clean state.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Works with OpenClaw */}
      <section className="py-16 border-t border-border">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="rounded-xl border border-border bg-[#18181B] p-8 flex flex-col md:flex-row items-center gap-6">
            <div className="flex-1">
              <h3 className="text-xl font-semibold mb-2">Works with OpenClaw</h3>
              <p className="text-gray-400">
                3 skills, drop-in persistent memory for OpenClaw agents. Add long-term memory, rollback, and audit to any OpenClaw workflow with zero configuration.
              </p>
            </div>
            <Link
              to="/integrations#openclaw"
              className="inline-flex items-center gap-2 px-5 py-2.5 bg-primary hover:bg-primary-hover text-white rounded-lg font-medium transition-colors whitespace-nowrap"
            >
              View integration docs
            </Link>
          </div>
        </div>
      </section>

      {/* Coming Soon */}
      <section className="py-16 border-t border-border">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-semibold mb-8 text-center">
            Coming soon
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="rounded-xl border border-border bg-[#18181B] p-6">
              <h3 className="text-lg font-semibold mb-2">Self-hosted option</h3>
              <p className="text-gray-400 text-sm">Run Novyx Core on your own infrastructure. Coming Q2 2026.</p>
            </div>
            <div className="rounded-xl border border-border bg-[#18181B] p-6">
              <h3 className="text-lg font-semibold mb-2">Annual pricing</h3>
              <p className="text-gray-400 text-sm">Pay annually and save. Coming soon.</p>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-16 border-t border-border">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-semibold mb-8">
            Get started in 30 seconds
          </h2>
          <div className="grid lg:grid-cols-2 gap-6">
            <div className="rounded-xl border border-border bg-[#18181B] p-6">
              <p className="text-sm text-gray-400 mb-3">Setup: Install &amp; initialize</p>
              <CodeBlock code={setupCode} language="python" />
            </div>
            <div className="rounded-xl border border-border bg-[#18181B] p-6">
              <p className="text-sm text-gray-400 mb-3">Then just 3 lines: remember, recall, rollback</p>
              <CodeBlock code={threeLinesCode} language="python" />
            </div>
          </div>
        </div>
      </section>

      {/* Built For */}
      <section className="py-16 border-t border-border">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-semibold mb-8">
            Built for developers shipping production AI
          </h2>
          <div className="grid md:grid-cols-3 gap-6 text-center">
            <div className="rounded-xl border border-border bg-[#18181B] p-6">
              <p className="text-2xl font-semibold">Sub-100ms</p>
              <p className="text-gray-400">semantic search</p>
            </div>
            <div className="rounded-xl border border-border bg-[#18181B] p-6">
              <p className="text-2xl font-semibold">SHA-256</p>
              <p className="text-gray-400">tamper-proof hashing</p>
            </div>
            <div className="rounded-xl border border-border bg-[#18181B] p-6">
              <p className="text-2xl font-semibold">3 lines</p>
              <p className="text-gray-400">to get started</p>
            </div>
          </div>
        </div>
      </section>

      {/* Inline Pricing */}
      <section className="py-16 border-t border-border">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="rounded-xl border border-border bg-[#18181B] p-6 text-center">
              <h3 className="text-xl font-semibold mb-1">Free</h3>
              <p className="text-gray-400 text-sm mb-4">$0/mo</p>
              <ul className="space-y-2 text-sm text-gray-400 mb-6 text-left">
                <li>5,000 memories</li>
                <li>5,000 API calls/mo</li>
                <li>10 rollbacks/mo</li>
                <li>7-day audit</li>
              </ul>
              <GetApiKeyModal
                label="Get Free API Key"
                className="inline-flex items-center justify-center w-full gap-2 bg-zinc-800 hover:bg-zinc-700 text-white px-4 py-2.5 rounded-lg font-medium transition-colors text-sm"
              />
            </div>
            <div className="rounded-xl border border-border bg-[#18181B] p-6 text-center">
              <h3 className="text-xl font-semibold mb-1">Starter</h3>
              <p className="text-gray-400 text-sm mb-4">$12/mo</p>
              <ul className="space-y-2 text-sm text-gray-400 mb-6 text-left">
                <li>25,000 memories</li>
                <li>25,000 API calls/mo</li>
                <li>50 rollbacks/mo</li>
                <li>14-day audit</li>
              </ul>
              <UpgradeButton
                tier="Starter"
                label="Start Building"
                className="inline-flex items-center justify-center w-full gap-2 bg-zinc-800 hover:bg-zinc-700 text-white px-4 py-2.5 rounded-lg font-medium transition-colors text-sm cursor-pointer"
              />
            </div>
            <div className="rounded-xl border-2 border-primary bg-[#18181B] p-6 text-center">
              <div className="flex items-center justify-center gap-2 mb-1">
                <h3 className="text-xl font-semibold">Pro</h3>
                <span className="text-xs px-2 py-0.5 rounded-full bg-primary/20 text-primary">Most Popular</span>
              </div>
              <p className="text-primary text-sm mb-4">$39/mo</p>
              <ul className="space-y-2 text-sm text-gray-400 mb-6 text-left">
                <li>Unlimited memories</li>
                <li>100,000 API calls/mo</li>
                <li>Unlimited rollbacks</li>
                <li>30-day audit</li>
              </ul>
              <UpgradeButton
                tier="Pro"
                label="Go Pro"
                className="inline-flex items-center justify-center w-full gap-2 bg-indigo-600 hover:bg-indigo-500 text-white px-4 py-2.5 rounded-lg font-medium transition-colors text-sm cursor-pointer"
              />
            </div>
            <div className="rounded-xl border border-border bg-[#18181B] p-6 text-center">
              <h3 className="text-xl font-semibold mb-1">Enterprise</h3>
              <p className="text-gray-400 text-sm mb-4">$199/mo</p>
              <ul className="space-y-2 text-sm text-gray-400 mb-6 text-left">
                <li>Unlimited memories</li>
                <li>Unlimited API calls</li>
                <li>Unlimited rollbacks</li>
                <li>90-day audit</li>
              </ul>
              <ContactModal
                label="Talk to Us"
                plan="Enterprise"
                className="inline-flex items-center justify-center w-full gap-2 bg-zinc-800 hover:bg-zinc-700 text-white px-4 py-2.5 rounded-lg font-medium transition-colors text-sm cursor-pointer"
              />
            </div>
          </div>
          <p className="mt-6 text-center text-sm text-gray-400">
            <Link to="/pricing" className="text-primary hover:text-primary-hover transition-colors">
              See full pricing comparison →
            </Link>
          </p>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-16 border-t border-border">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-semibold mb-4">
            Your AI finally remembers.
          </h2>
          <p className="text-gray-400 mb-6">
            Free tier. No credit card. Start in 30 seconds.
          </p>
          <GetApiKeyModal
            label="Get Free API Key"
            className="inline-flex items-center gap-2 bg-primary hover:bg-primary-hover text-white px-6 py-3 rounded-lg font-medium transition-colors"
          />
          <p className="mt-3 text-sm text-gray-500">5,000 memories free. Forever.</p>
          <a
            href="https://discord.gg/PCxZ3tMj"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-4 inline-flex items-center gap-1.5 text-sm text-gray-400 hover:text-white transition-colors"
          >
            <svg viewBox="0 0 24 24" className="w-4 h-4" fill="currentColor">
              <path d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0 12.64 12.64 0 0 0-.617-1.25.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 0 0 .031.057 19.9 19.9 0 0 0 5.993 3.03.078.078 0 0 0 .084-.028 14.09 14.09 0 0 0 1.226-1.994.076.076 0 0 0-.041-.106 13.107 13.107 0 0 1-1.872-.892.077.077 0 0 1-.008-.128 10.2 10.2 0 0 0 .372-.292.074.074 0 0 1 .077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 0 1 .078.01c.12.098.246.198.373.292a.077.077 0 0 1-.006.127 12.299 12.299 0 0 1-1.873.892.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028 19.839 19.839 0 0 0 6.002-3.03.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.03zM8.02 15.33c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.956-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.956 2.418-2.157 2.418zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.955-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.946 2.418-2.157 2.418z"/>
            </svg>
            Join our Discord
          </a>
        </div>
      </section>

    </div>
  )
}
