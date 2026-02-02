import { Link } from 'react-router-dom'
import CodeBlock from '../components/CodeBlock'
import ComparisonTable from '../components/ComparisonTable'
import GetApiKeyModal from '../components/GetApiKeyModal'

const heroCode = `from novyx import Novyx

nx = Novyx(api_key="...")
nx.remember("User prefers dark mode")
context = nx.recall("preferences")`

const installCode = `pip3 install novyx`

const initCode = `from novyx import Novyx
nx = Novyx(api_key="YOUR_KEY")`

const rememberCode = `nx.remember("User prefers async communication")`

const recallCode = `context = nx.recall("communication preferences")
# Returns: "User prefers async communication" (score: 0.94)`

export default function Home() {
  return (
    <div className="animate-fade-in">
      {/* Hero */}
      <section className="py-20 md:py-32">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 grid gap-10 lg:grid-cols-[1.1fr_0.9fr] items-center">
          <div>
            <div className="inline-flex items-center gap-2 rounded-full border border-border bg-[#18181B] px-3 py-1 text-xs text-gray-300 mb-5">
              Now in Public Beta
            </div>
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Your AI finally remembers. And stays safe.
            </h1>
            <p className="text-xl md:text-2xl text-gray-400 mb-8 max-w-xl">
              The memory + security layer for AI agents. Store context, detect threats,
              roll back damage. Four lines of code.
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
                ChatGPT forgets. Claude forgets. Every conversation starts from zero.
                Your context window is a lie—it&apos;s short-term memory pretending to
                be intelligence.
              </p>
            </div>
            <div className="rounded-xl border border-border bg-[#18181B] p-6">
              <h3 className="text-lg font-semibold mb-3">The Security Problem</h3>
              <p className="text-gray-400">
                Anyone can poison your agent&apos;s memory. Inject bad data. Corrupt
                months of context. And there&apos;s no rollback. No audit trail. No
                proof of what happened.
              </p>
            </div>
          </div>
          <p className="mt-6 text-gray-300 font-medium">Novyx fixes both.</p>
        </div>
      </section>

      {/* Four Verbs */}
      <section className="py-16 border-t border-border">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-semibold mb-8">
            Four verbs. Infinite memory.
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="rounded-xl border border-border bg-[#18181B] p-6">
              <p className="font-mono text-sm text-primary mb-2">nx.remember(content)</p>
              <p className="text-gray-400">Store memories with cryptographic hashing. Every fact timestamped and tamper-proof.</p>
            </div>
            <div className="rounded-xl border border-border bg-[#18181B] p-6">
              <p className="font-mono text-sm text-primary mb-2">nx.recall(query)</p>
              <p className="text-gray-400">Semantic search across all context. Find by meaning, not keywords.</p>
            </div>
            <div className="rounded-xl border border-border bg-[#18181B] p-6">
              <p className="font-mono text-sm text-primary mb-2">nx.act(action, params)</p>
              <p className="text-gray-400">Protected actions with Sentinel checks. Block unauthorized operations in &lt;30ms.</p>
            </div>
            <div className="rounded-xl border border-border bg-[#18181B] p-6">
              <p className="font-mono text-sm text-primary mb-2">nx.rollback(target)</p>
              <p className="text-gray-400">Magic Rollback to any verified state. Surgical precision—fix only what&apos;s broken.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Comparison */}
      <section className="py-16 border-t border-border">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-semibold mb-8">Why Novyx?</h2>
          <ComparisonTable />
        </div>
      </section>

      {/* Use Cases */}
      <section className="py-16 border-t border-border">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-semibold mb-8">
            Built for production AI
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            {[
              {
                title: 'Customer Support',
                description: 'Remember every conversation, forever. Pull context from 6 months ago in milliseconds.',
              },
              {
                title: 'Sales AI',
                description: 'Never lose lead context. Your AI remembers what they said in March.',
              },
              {
                title: 'Healthcare',
                description: 'HIPAA-compliant memory with cryptographic audit trails. 7-year retention.',
              },
              {
                title: 'Finance',
                description: 'SOX/FINRA ready. Magic Rollback for when compliance asks “what happened?”',
              },
            ].map((item) => (
              <div key={item.title} className="rounded-xl border border-border bg-[#18181B] p-6">
                <h3 className="font-semibold mb-2">{item.title}</h3>
                <p className="text-gray-400">{item.description}</p>
              </div>
            ))}
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
              <p className="text-sm text-gray-400 mb-3">Step 1: Install</p>
              <CodeBlock code={installCode} language="bash" />
            </div>
            <div className="rounded-xl border border-border bg-[#18181B] p-6">
              <p className="text-sm text-gray-400 mb-3">Step 2: Initialize</p>
              <CodeBlock code={initCode} language="python" />
            </div>
            <div className="rounded-xl border border-border bg-[#18181B] p-6">
              <p className="text-sm text-gray-400 mb-3">Step 3: Remember</p>
              <CodeBlock code={rememberCode} language="python" />
            </div>
            <div className="rounded-xl border border-border bg-[#18181B] p-6">
              <p className="text-sm text-gray-400 mb-3">Step 4: Recall</p>
              <CodeBlock code={recallCode} language="python" />
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
              <p className="text-2xl font-semibold">4 lines</p>
              <p className="text-gray-400">to get started</p>
            </div>
          </div>
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
          <p className="mt-3 text-sm text-gray-500">10,000 memories free. Forever.</p>
        </div>
      </section>

      {/* Email Signup */}
      <section className="py-16 border-t border-zinc-800">
        <div className="max-w-md mx-auto text-center px-4">
          <h3 className="text-xl font-semibold mb-2">Stay Updated</h3>
          <p className="text-zinc-400 mb-4">Get notified about new features and updates.</p>
          <form
            action="https://buttondown.email/api/emails/embed-subscribe/novyxlabs"
            method="post"
            target="popupwindow"
            className="flex gap-2"
          >
            <input
              type="email"
              name="email"
              placeholder="you@example.com"
              required
              className="flex-1 px-4 py-2 bg-zinc-800 border border-zinc-700 rounded-lg text-white placeholder-zinc-500 focus:outline-none focus:border-indigo-500"
            />
            <button
              type="submit"
              className="px-6 py-2 bg-indigo-600 hover:bg-indigo-500 text-white font-medium rounded-lg transition-colors"
            >
              Subscribe
            </button>
          </form>
        </div>
      </section>
    </div>
  )
}
