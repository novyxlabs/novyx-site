import GetApiKeyModal from '../components/GetApiKeyModal'

const tiers = [
  {
    name: 'Free',
    price: '$0/mo',
    cta: { label: 'Get Free API Key', modal: true },
  },
  {
    name: 'Starter',
    price: '$19/mo',
    cta: { label: 'Start Starter', href: 'mailto:blake@novyxlabs.com?subject=Novyx%20Starter%20Plan' },
  },
  {
    name: 'Pro',
    price: '$99/mo',
    cta: { label: 'Start Pro', href: 'mailto:blake@novyxlabs.com?subject=Novyx%20Pro%20Plan' },
    highlighted: true,
    callout: 'Most popular for production agents',
  },
  {
    name: 'Enterprise',
    price: '$499/mo',
    cta: { label: 'Contact Sales', href: 'mailto:blake@novyxlabs.com?subject=Novyx%20Enterprise' },
  },
]

const rows = [
  { label: 'Memories', values: ['10,000', '50,000', 'Unlimited', 'Unlimited'] },
  { label: 'API calls', values: ['5,000/mo', '25,000/mo', '100,000/mo', 'Unlimited'] },
  {
    label: 'Rollbacks',
    values: ['3 lifetime', '5/month', 'Unlimited', 'Unlimited'],
    highlight: [false, false, true, true],
  },
  { label: 'Semantic search', values: ['✅', '✅', '✅', '✅'] },
  { label: 'Sentinel alerts', values: ['❌', 'Alerts only', 'Full', 'Full'] },
  { label: 'Magic Rollback™', values: ['Limited', 'Limited', '✅', '✅'] },
  { label: 'Circuit breaker', values: ['❌', '❌', '❌', '✅'] },
  { label: 'Audit retention', values: ['7 days', '30 days', '1 year', '7 years + compliance'] },
  { label: 'Support', values: ['Community', 'Email', 'Priority', 'Dedicated'] },
  { label: 'SLA', values: ['—', '—', '99.5%', '99.9%'] },
]

const faqs = [
  {
    q: "What's the difference between Novyx and Mem0?",
    a: 'Mem0 is memory-only. Novyx is memory + security. We add tamper detection, threat alerts, Magic Rollback™, and cryptographic audit trails. Same price, more protection.',
  },
  {
    q: 'What happens when I use all my free rollbacks?',
    a: "You'll be prompted to upgrade. Your memories and data are safe - you just can't roll back until you upgrade.",
  },
  {
    q: 'Do rollback limits reset?',
    a: 'Free tier rollbacks are lifetime (3 total). Starter rollbacks reset monthly (5/month). Pro and Enterprise are unlimited.',
  },
  {
    q: 'Can I upgrade mid-month?',
    a: 'Yes, upgrades are immediate. Your new limits apply right away.',
  },
  {
    q: 'Do I need Sentinel if I just want memory?',
    a: 'No. Free and Starter tiers give you persistent memory without full Sentinel. Upgrade to Pro when you need unlimited rollbacks and full security.',
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
    a: 'Every memory is SHA-256 hashed. Tamper detection is automatic. Pro adds unlimited Magic Rollback™. Enterprise adds compliance certifications.',
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
                {tiers.map((tier) => (
                  <td key={`${tier.name}-cta`} className="px-4 py-5">
                    {tier.cta.modal ? (
                      <GetApiKeyModal
                        label={tier.cta.label}
                        className={`inline-flex items-center justify-center w-full px-4 py-2 rounded-lg font-medium transition-colors ${
                          tier.highlighted
                            ? 'bg-primary hover:bg-primary-hover text-white'
                            : 'bg-gray-800 hover:bg-gray-700 text-white'
                        }`}
                      />
                    ) : (
                      <a
                        href={tier.cta.href}
                        className={`inline-flex items-center justify-center w-full px-4 py-2 rounded-lg font-medium transition-colors ${
                          tier.highlighted
                            ? 'bg-primary hover:bg-primary-hover text-white'
                            : 'bg-gray-800 hover:bg-gray-700 text-white'
                        }`}
                      >
                        {tier.cta.label}
                      </a>
                    )}
                  </td>
                ))}
              </tr>
            </tbody>
          </table>
        </div>

        {/* Magic Rollback callout */}
        <div className="mt-8 p-4 rounded-lg border border-primary/30 bg-primary/5 text-center">
          <p className="text-gray-200">
            <span className="font-semibold text-primary">Magic Rollback™</span> — Undo agent mistakes instantly.{' '}
            <span className="text-gray-400">Pro tier includes unlimited rollbacks.</span>
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
