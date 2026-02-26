import GetApiKeyModal from '../components/GetApiKeyModal'
import ContactModal from '../components/ContactModal'
import UpgradeButton from '../components/UpgradeButton'

const tiers = [
  { name: 'Free', price: '$0/mo', tagline: 'For experimenting and side projects' },
  { name: 'Starter', price: '$12/mo', tagline: 'For indie developers and personal agents', badge: 'Best Value' },
  { name: 'Pro', price: '$39/mo', tagline: 'For teams and production workloads', highlighted: true, badge: 'Most Popular' },
  { name: 'Enterprise', price: '$199/mo', tagline: 'For regulated industries and scale' },
]

const quotaRows = [
  { label: 'Memories', values: ['5,000', '25,000', 'Unlimited', 'Unlimited'] },
  { label: 'API Calls', values: ['5,000/mo', '25,000/mo', '100,000/mo', 'Unlimited'] },
  { label: 'Rollbacks', values: ['10/mo', '50/mo', 'Unlimited', 'Unlimited'] },
  { label: 'Rate Limit', values: ['1,000/min', '10,000/min', '10,000/min', '10,000/min'] },
]

const coreRows = [
  { label: 'Semantic Search', values: ['✅', '✅', '✅', '✅'] },
  { label: 'Memory Spaces (CRUD)', values: ['✅', '✅', '✅', '✅'] },
  { label: 'Circuit Breaker', values: ['✅', '✅', '✅', '✅'] },
  { label: 'Conflict Resolution', values: ['Reject only', 'All strategies', 'All strategies', 'All strategies'] },
]

const intelligenceRows = [
  { label: 'AI Rollback Suggestions', values: ['—', '✅', '✅', '✅'] },
  { label: 'Audit Export', values: ['—', '✅', '✅', '✅'] },
  { label: 'Knowledge Graph (Triples)', values: ['—', '—', '✅', '✅'] },
  { label: 'Async Rollback Jobs', values: ['—', '—', '✅', '✅'] },
  { label: 'Memory Space Sharing', values: ['—', '—', '✅', '✅'] },
  { label: 'Execution Traces (RSA-signed)', values: ['—', '—', '✅', '✅'] },
  { label: 'Anomaly Alerts', values: ['—', '—', '✅', '✅'] },
  { label: 'Audit Verification', values: ['—', '—', '✅', '✅'] },
]

const replayRows = [
  { label: 'Memory Timeline', values: ['—', '—', '✅', '✅'] },
  { label: 'Point-in-Time Snapshots', values: ['—', '—', '✅', '✅'] },
  { label: 'Memory Lifecycle', values: ['—', '—', '✅', '✅'] },
  { label: 'Memory Diff', values: ['—', '—', '✅', '✅'] },
  { label: 'Counterfactual Recall', values: ['—', '—', '—', '✅'] },
  { label: 'Drift Analysis', values: ['—', '—', '—', '✅'] },
]

const cortexRows = [
  { label: 'Consolidation', values: ['—', '—', '✅', '✅'] },
  { label: 'Reinforcement', values: ['—', '—', '✅', '✅'] },
  { label: 'Decay', values: ['—', '—', '✅', '✅'] },
  { label: 'Insight Generation', values: ['—', '—', '—', '✅'] },
]

const complianceRows = [
  { label: 'Audit Retention', values: ['7 days', '14 days', '30 days', '90 days'] },
  { label: 'Memory Version History', values: ['—', '—', '—', '✅'] },
  { label: 'SSO Ready', values: ['—', '—', '—', '✅'] },
  { label: 'SLA', values: ['—', '—', '99.5%', '99.9%'] },
  { label: 'Support', values: ['Community', 'Community', 'Email', 'Priority'] },
]

const faqs = [
  {
    q: 'What happens when I hit my limit?',
    a: "Your agent keeps working. Memory operations gracefully degrade — we return a 429 with your current usage, the limit, your plan, and an upgrade URL. We never crash your agent, and we never silently drop requests.",
  },
  {
    q: 'Do rollback limits reset?',
    a: 'Yes, monthly. Free tier gets 10 rollbacks/month. Starter gets 50/month. Pro and Enterprise get unlimited.',
  },
  {
    q: 'Can I upgrade mid-month?',
    a: 'Yes, upgrades are immediate. Your new limits and features apply right away. Downgrades take effect at the end of your billing cycle.',
  },
  {
    q: 'Do I need security features for basic memory?',
    a: 'No. Free tier gives you persistent memory, semantic search, Memory Spaces, and Circuit Breaker protection. Upgrade to Starter when you want conflict resolution strategies, audit export, and AI rollback suggestions. Upgrade to Pro for execution traces, anomaly alerts, and memory sharing.',
  },
  {
    q: 'What happens if I hit my API limit?',
    a: "You'll get usage pressure warnings as you approach your limit. If you exceed it, requests return a 429 with your usage stats and upgrade path. Your data is always safe.",
  },
  {
    q: 'Do you support self-hosting?',
    a: 'Self-hosted deployment is on our roadmap for Q2 2026. Join our Discord for updates.',
  },
  {
    q: 'Is my data secure?',
    a: 'Every memory is SHA-256 hashed and chain-linked. Tamper detection is automatic on all tiers. Circuit Breaker protects against runaway loops and data exfiltration. Pro adds RSA-signed execution traces and anomaly detection. Enterprise adds 90-day audit retention and memory version history.',
  },
  {
    q: 'What are Execution Traces?',
    a: "A cryptographic record of every step your agent takes — thoughts, actions, observations, outputs. Each step is hash-chained and the final trace is RSA-4096 signed. You get independently verifiable proof of what your agent did, when, and why. Available on Pro+.",
  },
  {
    q: "What's the Circuit Breaker?",
    a: "Built-in protection that detects and stops runaway agent loops, data exfiltration attempts, and suspicious financial operations. It runs on every plan including Free — because safety shouldn't be a premium feature.",
  },
]

function SectionHeader({ title }: { title: string }) {
  return (
    <tr className="border-t-2 border-primary/30">
      <td colSpan={5} className="px-4 py-3 text-sm font-semibold text-primary bg-primary/5">
        {title}
      </td>
    </tr>
  )
}

export default function Pricing() {
  return (
    <div className="animate-fade-in py-16 md:py-24">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Simple, transparent pricing</h1>
          <p className="text-xl text-gray-400">
            Start free. Scale as you grow.
          </p>
        </div>

        <div className="overflow-x-auto border border-border rounded-xl">
          <table className="w-full text-sm">
            <thead className="bg-[#18181B]">
              <tr>
                <th className="text-left px-4 py-4 text-gray-400 font-medium">Plan</th>
                {tiers.map((tier) => (
                  <th
                    key={tier.name}
                    className={`text-left px-4 py-4 font-medium ${
                      tier.highlighted ? 'text-white' : 'text-gray-300'
                    }`}
                  >
                    <div className="flex items-center gap-2">
                      {tier.name}
                      {tier.badge && (
                        <span className={`text-xs px-2 py-0.5 rounded-full ${
                          tier.highlighted
                            ? 'bg-primary/20 text-primary'
                            : 'bg-emerald-500/20 text-emerald-400'
                        }`}>
                          {tier.badge}
                        </span>
                      )}
                    </div>
                    <div className="mt-1 text-lg font-semibold">{tier.price}</div>
                    <div className="mt-1 text-xs text-gray-400 font-normal">{tier.tagline}</div>
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              <SectionHeader title="Quotas" />
              {quotaRows.map((row) => (
                <tr key={row.label} className="border-t border-border">
                  <td className="px-4 py-4 text-gray-400">{row.label}</td>
                  {row.values.map((value, index) => (
                    <td key={`${row.label}-${index}`} className="px-4 py-4 text-gray-200">
                      {value}
                    </td>
                  ))}
                </tr>
              ))}

              <SectionHeader title="Core Features" />
              {coreRows.map((row) => (
                <tr key={row.label} className="border-t border-border">
                  <td className="px-4 py-4 text-gray-400">{row.label}</td>
                  {row.values.map((value, index) => (
                    <td key={`${row.label}-${index}`} className="px-4 py-4 text-gray-200">
                      {value}
                    </td>
                  ))}
                </tr>
              ))}

              <SectionHeader title="Intelligence & Control" />
              {intelligenceRows.map((row) => (
                <tr key={row.label} className="border-t border-border">
                  <td className="px-4 py-4 text-gray-400">{row.label}</td>
                  {row.values.map((value, index) => (
                    <td key={`${row.label}-${index}`} className="px-4 py-4 text-gray-200">
                      {value}
                    </td>
                  ))}
                </tr>
              ))}

              <SectionHeader title="Replay (Time-Travel Debugging)" />
              {replayRows.map((row) => (
                <tr key={row.label} className="border-t border-border">
                  <td className="px-4 py-4 text-gray-400">{row.label}</td>
                  {row.values.map((value, index) => (
                    <td key={`${row.label}-${index}`} className="px-4 py-4 text-gray-200">
                      {value}
                    </td>
                  ))}
                </tr>
              ))}

              <SectionHeader title="Cortex (Autonomous Memory Intelligence)" />
              {cortexRows.map((row) => (
                <tr key={row.label} className="border-t border-border">
                  <td className="px-4 py-4 text-gray-400">{row.label}</td>
                  {row.values.map((value, index) => (
                    <td key={`${row.label}-${index}`} className="px-4 py-4 text-gray-200">
                      {value}
                    </td>
                  ))}
                </tr>
              ))}

              <SectionHeader title="Compliance & Enterprise" />
              {complianceRows.map((row) => (
                <tr key={row.label} className="border-t border-border">
                  <td className="px-4 py-4 text-gray-400">{row.label}</td>
                  {row.values.map((value, index) => (
                    <td key={`${row.label}-${index}`} className="px-4 py-4 text-gray-200">
                      {value}
                    </td>
                  ))}
                </tr>
              ))}

              <tr className="border-t border-border bg-[#111827]">
                <td className="px-4 py-5 text-gray-400">Get started</td>
                <td className="px-4 py-5">
                  <GetApiKeyModal
                    label="Get Free API Key"
                    className="cursor-pointer inline-block w-full text-center py-3 px-6 rounded-lg bg-zinc-800 hover:bg-zinc-700 text-white font-medium transition-colors"
                  />
                </td>
                <td className="px-4 py-5">
                  <UpgradeButton
                    tier="Starter"
                    label="Start Building"
                    className="block w-full text-center py-3 px-6 rounded-lg bg-zinc-800 hover:bg-zinc-700 text-white font-medium transition-colors cursor-pointer disabled:opacity-50"
                  />
                </td>
                <td className="px-4 py-5">
                  <UpgradeButton
                    tier="Pro"
                    label="Go Pro"
                    className="block w-full text-center py-3 px-6 rounded-lg bg-indigo-600 hover:bg-indigo-500 text-white font-medium transition-colors cursor-pointer disabled:opacity-50"
                  />
                </td>
                <td className="px-4 py-5">
                  <ContactModal
                    label="Talk to Us"
                    plan="Enterprise"
                    className="block w-full text-center py-3 px-6 rounded-lg bg-zinc-800 hover:bg-zinc-700 text-white font-medium transition-colors cursor-pointer"
                  />
                </td>
              </tr>
            </tbody>
          </table>
        </div>

        {/* Feature Descriptions */}
        <div className="mt-12 grid md:grid-cols-2 gap-6">
          <div className="rounded-xl border border-border bg-[#18181B] p-6">
            <h3 className="text-lg font-semibold mb-2">Memory Spaces</h3>
            <p className="text-sm text-gray-400">
              Organize agent memories into scoped namespaces. CRUD available on all plans. Share across tenants on Pro+.
            </p>
          </div>
          <div className="rounded-xl border border-border bg-[#18181B] p-6">
            <h3 className="text-lg font-semibold mb-2">Execution Traces</h3>
            <p className="text-sm text-gray-400">
              RSA-4096 signed record of every agent step. Hash-chained integrity. Independently verifiable. Pro+.
            </p>
          </div>
          <div className="rounded-xl border border-border bg-[#18181B] p-6">
            <h3 className="text-lg font-semibold mb-2">Anomaly Alerts</h3>
            <p className="text-sm text-gray-400">
              Behavioral baselines detect velocity spikes, suspicious patterns, and potential tampering. Pro+.
            </p>
          </div>
          <div className="rounded-xl border border-border bg-[#18181B] p-6">
            <h3 className="text-lg font-semibold mb-2">Conflict Resolution</h3>
            <p className="text-sm text-gray-400">
              Vector clocks handle concurrent writes. Free tier gets auto-reject. Starter+ gets all strategies including manual review.
            </p>
          </div>
          <div className="rounded-xl border border-border bg-[#18181B] p-6">
            <h3 className="text-lg font-semibold mb-2">Replay</h3>
            <p className="text-sm text-gray-400">
              Time-travel debugging: memory timeline, point-in-time snapshots, diffs, and memory lifecycle tracking. Enterprise adds counterfactual recall and drift analysis. Pro+.
            </p>
          </div>
          <div className="rounded-xl border border-border bg-[#18181B] p-6">
            <h3 className="text-lg font-semibold mb-2">Cortex</h3>
            <p className="text-sm text-gray-400">
              Autonomous memory maintenance: consolidation merges duplicates, reinforcement boosts what matters, decay removes noise. Enterprise adds insight generation. Pro+.
            </p>
          </div>
          <div className="rounded-xl border border-border bg-[#18181B] p-6">
            <h3 className="text-lg font-semibold mb-2">Knowledge Graph</h3>
            <p className="text-sm text-gray-400">
              Subject–predicate–object triples with automatic entity deduplication. Build entity-relationship graphs on top of flat memories. Pro+.
            </p>
          </div>
        </div>

        {/* What's in Pro */}
        <div className="mt-12 rounded-xl border-2 border-primary/40 bg-primary/5 p-8">
          <h2 className="text-2xl font-semibold mb-2 text-center">What&apos;s in Pro</h2>
          <p className="text-gray-400 text-center mb-6">Everything you need to ship production agents — $39/mo</p>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {[
              'Unlimited memories & rollbacks',
              'Replay (timeline, snapshots, diff)',
              'Cortex (consolidation, reinforcement, decay)',
              'Knowledge Graph (triples)',
              'Memory sharing between agents',
              'RSA-signed execution traces',
              'Anomaly detection alerts',
              '30-day audit history',
              'Email support',
            ].map((item) => (
              <div key={item} className="flex items-start gap-2 text-sm">
                <svg className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span className="text-gray-200">{item}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Magic Rollback callout */}
        <div className="mt-8 p-4 rounded-lg border border-primary/30 bg-primary/5 text-center">
          <p className="text-gray-200">
            <span className="font-semibold text-primary">Magic Rollback</span> — Undo agent mistakes instantly.{' '}
            <span className="text-gray-400">Pro tier includes unlimited rollbacks.</span>
          </p>
        </div>

        {/* Circuit Breaker note */}
        <div className="mt-4 p-4 rounded-lg border border-emerald-500/30 bg-emerald-500/5 text-center">
          <p className="text-gray-200">
            <span className="font-semibold text-emerald-400">Circuit Breaker</span> protection is included free on every plan.{' '}
            <span className="text-gray-400">Safety shouldn&apos;t be a premium feature.</span>
          </p>
        </div>

        {/* Discord note */}
        <div className="mt-4 text-center">
          <p className="text-sm text-gray-400">
            Questions?{' '}
            <a
              href="https://discord.gg/PCxZ3tMj"
              target="_blank"
              rel="noopener noreferrer"
              className="text-indigo-400 hover:text-indigo-300 inline-flex items-center gap-1"
            >
              <svg viewBox="0 0 24 24" className="w-4 h-4" fill="currentColor">
                <path d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0 12.64 12.64 0 0 0-.617-1.25.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 0 0 .031.057 19.9 19.9 0 0 0 5.993 3.03.078.078 0 0 0 .084-.028 14.09 14.09 0 0 0 1.226-1.994.076.076 0 0 0-.041-.106 13.107 13.107 0 0 1-1.872-.892.077.077 0 0 1-.008-.128 10.2 10.2 0 0 0 .372-.292.074.074 0 0 1 .077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 0 1 .078.01c.12.098.246.198.373.292a.077.077 0 0 1-.006.127 12.299 12.299 0 0 1-1.873.892.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028 19.839 19.839 0 0 0 6.002-3.03.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.03zM8.02 15.33c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.956-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.956 2.418-2.157 2.418zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.955-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.946 2.418-2.157 2.418z"/>
              </svg>
              Ask in Discord
            </a>
          </p>
        </div>

        <div className="mt-16">
          <h2 className="text-2xl font-semibold text-center mb-8">Frequently Asked Questions</h2>
          <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {faqs.map((faq) => (
              <div key={faq.q} className="p-6 rounded-lg border border-border bg-[#18181B]">
                <h3 className="font-semibold mb-2">{faq.q}</h3>
                <p className="text-sm text-gray-400">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
