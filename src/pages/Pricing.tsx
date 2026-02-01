import { Link } from 'react-router-dom'

const tiers = [
  {
    name: 'Free',
    price: '$0/mo',
    cta: { label: 'Get Started', href: '/docs', internal: true },
  },
  {
    name: 'Starter',
    price: '$19/mo',
    cta: { label: 'Start Starter', href: 'mailto:blake@novyxlabs.com?subject=Novyx%20Starter' },
  },
  {
    name: 'Pro',
    price: '$99/mo',
    cta: { label: 'Start Pro', href: 'mailto:blake@novyxlabs.com?subject=Novyx%20Pro' },
    highlighted: true,
  },
  {
    name: 'Enterprise',
    price: '$499/mo',
    cta: { label: 'Contact Sales', href: 'mailto:blake@novyxlabs.com?subject=Novyx%20Enterprise' },
  },
]

const rows = [
  { label: 'Memories', values: ['10,000', '50,000', 'Unlimited', 'Unlimited'] },
  { label: 'API calls', values: ['1,000/mo', '25,000/mo', '100,000/mo', 'Unlimited'] },
  { label: 'Semantic search', values: ['✅', '✅', '✅', '✅'] },
  { label: 'Sentinel alerts', values: ['❌', '✅', '✅', '✅'] },
  { label: 'Sentinel full', values: ['❌', '❌', '✅', '✅'] },
  { label: 'Magic Rollback™', values: ['❌', '❌', '✅', '✅'] },
  { label: 'Circuit breaker', values: ['❌', '❌', '❌', '✅'] },
  { label: 'Audit retention', values: ['7 days', '30 days', '1 year', '7 years'] },
  { label: 'Support', values: ['Community', 'Email', 'Priority', 'Dedicated'] },
  { label: 'SLA', values: ['—', '—', '99.5%', '99.9%'] },
]

const faqs = [
  {
    q: "What's the difference between Novyx and Mem0?",
    a: 'Mem0 is memory-only. Novyx is memory + security. We add tamper detection, threat alerts, Magic Rollback™, and cryptographic audit trails. Same price, more protection.',
  },
  {
    q: 'Do I need Sentinel if I just want memory?',
    a: 'No. Free and Starter tiers give you persistent memory without Sentinel. Upgrade to Pro when you need rollback and full security.',
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
    a: 'Every memory is SHA-256 hashed. Tamper detection is automatic. Pro adds Magic Rollback™. Enterprise adds compliance certifications.',
  },
  {
    q: 'Can I try Pro features before paying?',
    a: 'Email us for a 14-day Pro trial.',
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
                      {value}
                    </td>
                  ))}
                </tr>
              ))}
              <tr className="border-t border-border bg-[#111827]">
                <td className="px-4 py-5 text-gray-400">Get started</td>
                {tiers.map((tier) => (
                  <td key={`${tier.name}-cta`} className="px-4 py-5">
                    {tier.cta.internal ? (
                      <Link
                        to={tier.cta.href}
                        className={`inline-flex items-center justify-center w-full px-4 py-2 rounded-lg font-medium transition-colors ${
                          tier.highlighted
                            ? 'bg-primary hover:bg-primary-hover text-white'
                            : 'bg-gray-800 hover:bg-gray-700 text-white'
                        }`}
                      >
                        {tier.cta.label}
                      </Link>
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
