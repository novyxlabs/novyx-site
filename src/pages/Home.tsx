import { Link } from 'react-router-dom'
import CodeBlock from '../components/CodeBlock'
import ComparisonTable from '../components/ComparisonTable'
import ContactModal from '../components/ContactModal'
import GetApiKeyModal from '../components/GetApiKeyModal'
import UpgradeButton from '../components/UpgradeButton'

const heroCode = `from novyx import Novyx

nx = Novyx(api_key="...")
nx.remember("user prefers dark mode")
nx.recall("user preferences")
nx.rollback("2 hours ago")`

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
          </div>
          <div>
            <CodeBlock code={heroCode} language="python" />
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
          <blockquote className="rounded-xl border border-primary/30 bg-primary/5 p-8">
            <p className="text-lg text-gray-200 italic leading-relaxed">
              &ldquo;Built after my agent mass-deleted user data. No audit trail. No way to prove what happened. No undo. Three days of manual reconstruction. Never again.&rdquo;
            </p>
            <footer className="mt-4 text-sm text-gray-400">
              — Blake Heron, Founder
            </footer>
          </blockquote>
        </div>
      </section>

      {/* Three Pillars */}
      <section className="py-16 border-t border-border">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-semibold mb-8">
            Built on three pillars
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
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
            <div className="rounded-xl border border-border bg-[#18181B] p-6 text-center">
              <h3 className="text-lg font-semibold mb-2">Python SDK</h3>
              <p className="text-sm text-gray-400">pip install novyx</p>
            </div>
            <div className="rounded-xl border border-border bg-[#18181B] p-6 text-center">
              <h3 className="text-lg font-semibold mb-2">JS / TS SDK</h3>
              <p className="text-sm text-gray-400">npm install novyx</p>
            </div>
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
              <h3 className="text-lg font-semibold mb-3">AI Assistants That Remember</h3>
              <p className="text-gray-400">
                Your assistant remembers user preferences, past conversations, and context — across sessions, forever.
              </p>
            </div>
            <div className="rounded-xl border border-border bg-[#18181B] p-6">
              <h3 className="text-lg font-semibold mb-3">Agents That Can Undo Mistakes</h3>
              <p className="text-gray-400">
                Agent hallucinated? Wrote bad data? Rollback to before it happened. No data loss, no panic.
              </p>
            </div>
            <div className="rounded-xl border border-border bg-[#18181B] p-6">
              <h3 className="text-lg font-semibold mb-3">Auditable AI for Production</h3>
              <p className="text-gray-400">
                Every agent action is logged with cryptographic proof. Know exactly what your agent did and when.
              </p>
            </div>
            <div className="rounded-xl border border-border bg-[#18181B] p-6">
              <h3 className="text-lg font-semibold mb-3">Multi-Agent Memory Sharing</h3>
              <p className="text-gray-400">
                Multiple agents sharing the same memory layer via Context Spaces. One learns, all benefit. Live on Pro+.
              </p>
            </div>
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
