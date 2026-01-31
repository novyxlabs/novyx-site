import { useState } from 'react'
import { Link } from 'react-router-dom'

const features = [
  {
    title: 'Real-time Threat Detection',
    description: 'Continuous monitoring of your AI system. Detect prompt injections, data poisoning, and behavioral anomalies as they happen.',
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
      </svg>
    ),
  },
  {
    title: 'Magic Rollback™',
    description: 'Someone poisoned your AI\'s memory? Surgically revert only the corrupted data. Your AI recovers in seconds, not hours.',
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 10h10a8 8 0 018 8v2M3 10l6 6m-6-6l6-6" />
      </svg>
    ),
  },
  {
    title: 'Behavioral Fingerprinting',
    description: 'We learn what "normal" looks like for your AI. When behavior drifts, you know immediately—before your users do.',
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
      </svg>
    ),
  },
  {
    title: 'Tamper-Proof Audit Trails',
    description: 'Every memory write is hashed and timestamped. Compliance teams love us. Attackers hate us.',
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
      </svg>
    ),
  },
]

export default function Sentinel() {
  const [email, setEmail] = useState('')
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setSubmitted(true)
  }

  return (
    <div className="animate-fade-in">
      {/* Hero */}
      <section className="py-16 md:py-24">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-3 mb-6">
            <div className="p-3 rounded-lg bg-accent-sentinel/20">
              <svg className="w-8 h-8 text-accent-sentinel" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
              </svg>
            </div>
            <span className="text-xs font-medium px-2 py-1 rounded-full bg-amber-500/20 text-amber-400">
              Coming Soon
            </span>
          </div>

          <h1 className="text-4xl md:text-5xl font-bold mb-4">Sentinel</h1>
          <p className="text-xl text-gray-400 mb-4 max-w-2xl">
            AI Security that actually works.
          </p>
          <p className="text-gray-400 mb-8 max-w-2xl">
            Someone poisoned your AI's memory? Sentinel detects the attack and surgically rolls back only the damage. Patent-pending Magic Rollback™ technology.
          </p>

          {/* Notify Form */}
          <div className="max-w-md">
            {submitted ? (
              <div className="p-4 rounded-lg bg-accent-sentinel/20 border border-accent-sentinel text-accent-sentinel">
                You're on the list. We'll email you when Sentinel launches.
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="flex gap-2">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email"
                  required
                  className="flex-1 px-4 py-3 rounded-lg bg-[#0D1117] border border-[#30363D] focus:border-accent-sentinel focus:outline-none transition-colors"
                />
                <button
                  type="submit"
                  className="px-6 py-3 rounded-lg bg-accent-sentinel hover:bg-amber-600 text-white font-medium transition-colors"
                >
                  Notify Me
                </button>
              </form>
            )}
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-16 border-t border-border">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-semibold mb-8">What Sentinel Does</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {features.map((feature) => (
              <div key={feature.title} className="flex gap-4">
                <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-accent-sentinel/20 flex items-center justify-center text-accent-sentinel">
                  {feature.icon}
                </div>
                <div>
                  <h3 className="font-semibold mb-2">{feature.title}</h3>
                  <p className="text-sm text-gray-400">{feature.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Preview */}
      <section className="py-16 border-t border-border">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-semibold mb-6">Pricing</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="p-6 rounded-lg border border-border">
              <h3 className="font-semibold mb-2">Free Trial</h3>
              <p className="text-3xl font-bold mb-2">$0</p>
              <p className="text-sm text-gray-400">7 days, full access</p>
            </div>
            <div className="p-6 rounded-lg border border-accent-sentinel border-2">
              <h3 className="font-semibold mb-2">Pro</h3>
              <p className="text-3xl font-bold mb-2">$499<span className="text-lg text-gray-400">/mo</span></p>
              <p className="text-sm text-gray-400">Full protection suite</p>
            </div>
            <div className="p-6 rounded-lg border border-border">
              <h3 className="font-semibold mb-2">Enterprise</h3>
              <p className="text-3xl font-bold mb-2">$2,500<span className="text-lg text-gray-400">/mo</span></p>
              <p className="text-sm text-gray-400">Dedicated + SLA</p>
            </div>
          </div>
          <div className="mt-6 text-center">
            <Link
              to="/pricing"
              className="text-primary hover:text-primary-hover font-medium"
            >
              Compare all plans →
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
