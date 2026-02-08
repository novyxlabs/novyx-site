import GetApiKeyModal from '../components/GetApiKeyModal'
import UpgradeButton from '../components/UpgradeButton'

const tiers = [
  { name: 'Free', price: '$0/mo' },
  { name: 'Pro', price: '$49/mo', highlighted: true, callout: 'Most popular for production agents' },
  { name: 'Enterprise', price: '$299/mo' },
]

const rows = [
  { label: 'Memories', values: ['5,000', 'Unlimited', 'Unlimited'] },
  { label: 'API calls', values: ['5,000/mo', '100,000/mo', 'Unlimited'] },
  {
    label: 'Rollbacks',
    values: ['3/month', 'Unlimited', 'Unlimited'],
    highlight: [false, true, true],
  },
  { label: 'Semantic search', values: ['✅', '✅', '✅'] },
  { label: 'Anomaly alerts', values: ['❌', '✅', '✅'] },
  { label: 'Trace audit', values: ['❌', '✅', '✅'] },
  { label: 'Magic Rollback', values: ['Limited', '✅', '✅'] },
  { label: 'Circuit breaker', values: ['❌', '❌', '✅'] },
  { label: 'Audit retention', values: ['7 days', '30 days', '90 days'] },
  { label: 'Support', values: ['Community', 'Email', 'Priority'] },
  { label: 'SLA', values: ['—', '99.5%', '99.9%'] },
]

const faqs = [
  {
    q: "What's the difference between Novyx and Mem0?",
    a: 'Mem0 is memory-only. Novyx is memory + security. We add tamper detection, threat alerts, Magic Rollback, and cryptographic audit trails. Same price, more protection.',
  },
  {
    q: 'What happens when I use all my free rollbacks?',
    a: "You'll be prompted to upgrade. Your memories and data are safe - you just can't roll back until you upgrade.",
  },
  {
    q: 'Do rollback limits reset?',
    a: 'Free tier rollbacks are 3 per month. Pro and Enterprise get unlimited rollbacks.',
  },
  {
    q: 'Can I upgrade mid-month?',
    a: 'Yes, upgrades are immediate. Your new limits apply right away.',
  },
  {
    q: 'Do I need security features for basic memory?',
    a: 'No. Free tier gives you persistent memory and basic features. Upgrade to Pro when you need unlimited rollbacks, anomaly alerts, and full security auditing.',
  },
  {
    q: 'What happens if I hit my API limit?',
    a: "We'll send you a warning at 80%. If you go over, requests will be queued, not dropped. Upgrade anytime.",
  },
  {
    q: 'Do you support self-hosting?',
    a: 'Enterprise tier includes on-prem deployment options.',
  },
  {
    q: 'Is my data secure?',
    a: 'Every memory is SHA-256 hashed. Tamper detection is automatic. Pro adds unlimited Magic Rollback. Enterprise adds compliance certifications.',
  },
]

export default function Pricing() {
  return (
    <div className="animate-fade-in py-16 md:py-24">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Simple, transparent pricing</h1>
          <p className="text-xl text-gray-400">
            Start free. Scale as you grow. Only pay for security when you need it.
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
                      {tier.highlighted && (
                        <span className="text-xs px-2 py-0.5 rounded-full bg-primary/20 text-primary">
                          Most Popular
                        </span>
                      )}
                    </div>
                    <div className="mt-1 text-lg font-semibold">{tier.price}</div>
                    {tier.callout && (
                      <div className="mt-1 text-xs text-primary font-normal">{tier.callout}</div>
                    )}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {rows.map((row) => (
                <tr key={row.label} className="border-t border-border">
                  <td className="px-4 py-4 text-gray-400">{row.label}</td>
                  {row.values.map((value, index) => (
                    <td key={`${row.label}-${index}`} className="px-4 py-4 text-gray-200">
                      <span className="flex items-center gap-2">
                        {value}
                        {row.highlight?.[index] && value === 'Unlimited' && (
                          <span className="text-xs px-1.5 py-0.5 rounded bg-green-500/20 text-green-400">
                            Pro
                          </span>
                        )}
                      </span>
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
                    tier="Pro"
                    label="Start Pro"
                    className="block w-full text-center py-3 px-6 rounded-lg bg-indigo-600 hover:bg-indigo-500 text-white font-medium transition-colors cursor-pointer disabled:opacity-50"
                  />
                </td>
                <td className="px-4 py-5">
                  <UpgradeButton
                    tier="Enterprise"
                    label="Start Enterprise"
                    className="block w-full text-center py-3 px-6 rounded-lg bg-zinc-800 hover:bg-zinc-700 text-white font-medium transition-colors cursor-pointer disabled:opacity-50"
                  />
                </td>
              </tr>
            </tbody>
          </table>
        </div>

        {/* Magic Rollback callout */}
        <div className="mt-8 p-4 rounded-lg border border-primary/30 bg-primary/5 text-center">
          <p className="text-gray-200">
            <span className="font-semibold text-primary">Magic Rollback</span> — Undo agent mistakes instantly.{' '}
            <span className="text-gray-400">Pro tier includes unlimited rollbacks.</span>
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
