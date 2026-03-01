import { Link } from 'react-router-dom'
import CodeBlock from '../components/CodeBlock'
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
memories = nx.recall("user preferences")
nx.rollback("2 hours ago")`,
  },
  {
    language: 'javascript',
    label: 'JavaScript',
    code: `import { Novyx } from 'novyx';

const nx = new Novyx({ apiKey: 'nram_...' });
await nx.remember('User prefers dark mode', { tags: ['ui'] });
const memories = await nx.recall('user preferences');
await nx.rollback('2 hours ago');`,
  },
]

const setupCode = `pip3 install novyx

from novyx import Novyx
nx = Novyx(api_key="YOUR_KEY")`

const threeLinesCode = `nx.remember("user prefers dark mode")
nx.recall("user preferences")
nx.rollback("2 hours ago")`

const comparisonRows = [
  { feature: 'Persistent across sessions', novyx: true, langchain: 'Manual', vectordb: 'Manual' },
  { feature: 'Point-in-time rollback', novyx: true, langchain: false, vectordb: false },
  { feature: 'Cryptographic audit trail', novyx: true, langchain: false, vectordb: false },
  { feature: 'Semantic search', novyx: true, langchain: true, vectordb: true },
  { feature: 'Knowledge graph', novyx: 'Pro+', langchain: false, vectordb: false },
  { feature: 'Multi-agent sharing', novyx: true, langchain: false, vectordb: false },
  { feature: 'MCP server', novyx: '23 tools', langchain: false, vectordb: false },
  { feature: 'Circuit breaker', novyx: 'Free', langchain: false, vectordb: false },
]

export default function Home() {
  return (
    <div className="animate-fade-in">
      {/* Hero */}
      <section className="py-20 md:py-32 relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[600px] bg-primary/[0.04] rounded-full blur-[120px]" />
        </div>
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 grid gap-10 lg:grid-cols-[1.1fr_0.9fr] items-center relative">
          <div>
            <div className="inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-3 py-1 text-xs text-primary mb-5 animate-pulse-subtle">
              Now Live
            </div>
            <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-b from-white via-white to-gray-400 bg-clip-text text-transparent">
              Memory that belongs to you, not the model.
            </h1>
            <p className="text-xl md:text-2xl text-gray-400 mb-8 max-w-xl">
              Persistent memory, rollback, and audit for AI agents. Three lines of code.
            </p>
            <div className="flex flex-wrap gap-4">
              <GetApiKeyModal
                label="Get Free API Key"
                className="inline-flex items-center gap-2 bg-primary hover:bg-primary-hover text-white px-6 py-3 rounded-lg font-medium transition-all hover:shadow-lg hover:shadow-primary/25"
              />
              <Link
                to="/docs"
                className="inline-flex items-center gap-2 border border-border text-white px-6 py-3 rounded-lg font-medium transition-all hover:border-white/30 hover:bg-white/[0.03]"
              >
                View Docs
              </Link>
              <a
                href="https://try.novyxlabs.com"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 border border-border text-white px-6 py-3 rounded-lg font-medium transition-all hover:border-white/30 hover:bg-white/[0.03]"
              >
                Try Live →
              </a>
            </div>
          </div>
          <div className="shadow-2xl shadow-primary/10 rounded-lg">
            <CodeBlock tabs={heroTabs} />
          </div>
        </div>
      </section>

      {/* Social Proof Bar */}
      <section className="py-8 border-t border-border">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-3 text-sm text-gray-400">
            <span className="text-gray-200 font-medium">Free tier — no credit card required.</span>
            <span className="hidden md:inline text-border">|</span>
            <span><span className="text-gray-300">Model-agnostic.</span> Works with OpenAI, Claude, Gemini, LangChain, CrewAI, MCP.</span>
          </div>
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
            <div className="rounded-xl border border-border bg-[#18181B] p-6 transition-all duration-300 hover:border-white/15 hover:shadow-lg hover:shadow-black/20">
              <h3 className="text-xl font-semibold mb-3">Persistent Memory</h3>
              <p className="text-gray-400 mb-4">
                Semantic search across all memories. Works across sessions, restarts, crashes.
              </p>
              <ul className="space-y-2 text-sm text-gray-400">
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-0.5">&#10003;</span>
                  <span>Sub-100ms recall</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-0.5">&#10003;</span>
                  <span>Semantic search across context</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-0.5">&#10003;</span>
                  <span>Survives restarts &amp; crashes</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-0.5">&#10003;</span>
                  <span>Share across agents with Spaces <span className="text-xs text-primary">(Pro+)</span></span>
                </li>
              </ul>
            </div>

            {/* Pillar 2: Magic Rollback */}
            <div className="rounded-xl border border-border bg-[#18181B] p-6 transition-all duration-300 hover:border-white/15 hover:shadow-lg hover:shadow-black/20">
              <h3 className="text-xl font-semibold mb-3">Magic Rollback</h3>
              <p className="text-gray-400 mb-4">
                Point-in-time restore. Preview before executing. Like git for agent state.
              </p>
              <ul className="space-y-2 text-sm text-gray-400">
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-0.5">&#10003;</span>
                  <span>Restore to any point in time</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-0.5">&#10003;</span>
                  <span>Preview before executing</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-0.5">&#10003;</span>
                  <span>Surgical precision</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-0.5">&#10003;</span>
                  <span>AI-suggested rollback points <span className="text-xs text-primary">(Starter+)</span></span>
                </li>
              </ul>
            </div>

            {/* Pillar 3: Audit Trail */}
            <div className="rounded-xl border border-border bg-[#18181B] p-6 transition-all duration-300 hover:border-white/15 hover:shadow-lg hover:shadow-black/20">
              <h3 className="text-xl font-semibold mb-3">Audit Trail</h3>
              <p className="text-gray-400 mb-4">
                Cryptographic verification. Tamper-proof logs. Export for compliance.
              </p>
              <ul className="space-y-2 text-sm text-gray-400">
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-0.5">&#10003;</span>
                  <span>SHA-256 cryptographic hashing</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-0.5">&#10003;</span>
                  <span>Tamper-proof logs</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-0.5">&#10003;</span>
                  <span>Export for compliance</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-0.5">&#10003;</span>
                  <span>RSA-signed execution traces <span className="text-xs text-primary">(Pro+)</span></span>
                </li>
              </ul>
            </div>
          </div>
          <p className="mt-6 text-sm text-gray-400">
            <Link to="/features" className="text-primary hover:text-primary-hover transition-colors">
              See all features: Knowledge Graph, Replay, Cortex, Context Spaces →
            </Link>
          </p>
        </div>
      </section>

      {/* Code Snippet */}
      <section className="py-16 border-t border-border">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-semibold mb-8">
            Get started in 30 seconds
          </h2>
          <div className="grid lg:grid-cols-2 gap-6">
            <div className="rounded-xl border border-border bg-[#18181B] p-6 transition-all duration-300 hover:border-white/15 hover:shadow-lg hover:shadow-black/20">
              <p className="text-sm text-gray-400 mb-3">Setup: Install &amp; initialize</p>
              <CodeBlock code={setupCode} language="python" />
            </div>
            <div className="rounded-xl border border-border bg-[#18181B] p-6 transition-all duration-300 hover:border-white/15 hover:shadow-lg hover:shadow-black/20">
              <p className="text-sm text-gray-400 mb-3">Then just 3 lines: remember, recall, rollback</p>
              <CodeBlock code={threeLinesCode} language="python" />
            </div>
          </div>
        </div>
      </section>

      {/* Comparison */}
      <section className="py-16 border-t border-border">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-semibold mb-8">
            Novyx vs. the alternatives
          </h2>
          <div className="overflow-x-auto rounded-xl border border-border">
            <table className="w-full text-sm">
              <thead className="bg-[#18181B]">
                <tr>
                  <th className="text-left px-4 py-4 text-gray-400 font-medium">Feature</th>
                  <th className="text-left px-4 py-4 text-white font-medium">Novyx</th>
                  <th className="text-left px-4 py-4 text-gray-400 font-medium">LangChain Memory</th>
                  <th className="text-left px-4 py-4 text-gray-400 font-medium">Vector DB</th>
                </tr>
              </thead>
              <tbody>
                {comparisonRows.map((row) => (
                  <tr key={row.feature} className="border-t border-border">
                    <td className="px-4 py-3 text-gray-300">{row.feature}</td>
                    <td className="px-4 py-3 text-primary font-medium">
                      {row.novyx === true ? '&#10003;' : row.novyx === false ? '—' : row.novyx}
                    </td>
                    <td className="px-4 py-3 text-gray-400">
                      {row.langchain === true ? '&#10003;' : row.langchain === false ? '—' : row.langchain}
                    </td>
                    <td className="px-4 py-3 text-gray-400">
                      {row.vectordb === true ? '&#10003;' : row.vectordb === false ? '—' : row.vectordb}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="py-16 border-t border-border">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="rounded-xl border border-border bg-[#18181B] p-6 text-center transition-all duration-300 hover:border-white/15 hover:shadow-lg hover:shadow-black/20">
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
            <div className="rounded-xl border border-border bg-[#18181B] p-6 text-center transition-all duration-300 hover:border-white/15 hover:shadow-lg hover:shadow-black/20">
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
                <li>Replay, Cortex, 23 MCP tools</li>
                <li>Unlimited rollbacks</li>
              </ul>
              <UpgradeButton
                tier="Pro"
                label="Go Pro"
                className="inline-flex items-center justify-center w-full gap-2 bg-indigo-600 hover:bg-indigo-500 text-white px-4 py-2.5 rounded-lg font-medium transition-colors text-sm cursor-pointer"
              />
            </div>
            <div className="rounded-xl border border-border bg-[#18181B] p-6 text-center transition-all duration-300 hover:border-white/15 hover:shadow-lg hover:shadow-black/20">
              <h3 className="text-xl font-semibold mb-1">Enterprise</h3>
              <p className="text-gray-400 text-sm mb-4">$199/mo</p>
              <ul className="space-y-2 text-sm text-gray-400 mb-6 text-left">
                <li>Unlimited everything</li>
                <li>90-day audit for compliance</li>
                <li>Cortex insights, counterfactual recall</li>
                <li>Drift analysis, 99.9% SLA</li>
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
            className="inline-flex items-center gap-2 bg-primary hover:bg-primary-hover text-white px-6 py-3 rounded-lg font-medium transition-all hover:shadow-lg hover:shadow-primary/25"
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
