import { useState } from 'react'
import { Link } from 'react-router-dom'

const features = [
  {
    title: 'Max 3 Builds',
    description: 'Focus on what matters. Forge limits you to 3 active builds at a time, ensuring deep work over shallow progress.',
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
      </svg>
    ),
  },
  {
    title: 'Consumption Debt Tracking',
    description: 'Track your consumption vs. creation ratio. See exactly where your time goes and rebalance intentionally.',
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
      </svg>
    ),
  },
  {
    title: 'Progress Streaks',
    description: 'Build momentum with daily streaks. Small consistent actions compound into massive transformation.',
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
      </svg>
    ),
  },
  {
    title: 'Reflection Prompts',
    description: 'Weekly prompts help you understand your patterns and adjust your builds for sustainable growth.',
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
  },
]

export default function Forge() {
  const [email, setEmail] = useState('')
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // In production, this would submit to an API
    setSubmitted(true)
  }

  return (
    <div className="animate-fade-in">
      {/* Hero */}
      <section className="py-16 md:py-24">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-3 mb-6">
            <div className="p-3 rounded-lg bg-accent-forge/20">
              <svg className="w-8 h-8 text-accent-forge" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 18.657A8 8 0 016.343 7.343S7 9 9 10c0-2 .5-5 2.986-7C14 5 16.09 5.777 17.656 7.343A7.975 7.975 0 0120 13a7.975 7.975 0 01-2.343 5.657z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.879 16.121A3 3 0 1012.015 11L11 14H9c0 .768.293 1.536.879 2.121z" />
              </svg>
            </div>
            <span className="text-xs font-medium px-2 py-1 rounded-full bg-pink-500/20 text-pink-400">
              Waitlist
            </span>
          </div>

          <h1 className="text-4xl md:text-5xl font-bold mb-4">Forge</h1>
          <p className="text-xl text-gray-400 mb-8 max-w-2xl">
            Personal transformation through intentional building. Track your habits, limit your focus, measure what matters.
          </p>

          {/* Waitlist Form */}
          <div className="max-w-md">
            {submitted ? (
              <div className="p-4 rounded-lg bg-accent-forge/20 border border-accent-forge text-accent-forge">
                You're on the list! We'll reach out when Forge is ready.
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="flex gap-2">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email"
                  required
                  className="flex-1 px-4 py-3 rounded-lg bg-gray-900 border border-border focus:border-accent-forge focus:outline-none transition-colors"
                />
                <button
                  type="submit"
                  className="px-6 py-3 rounded-lg bg-accent-forge hover:bg-pink-600 text-white font-medium transition-colors"
                >
                  Join Waitlist
                </button>
              </form>
            )}
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-16 border-t border-border">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-semibold mb-8">How It Works</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {features.map((feature) => (
              <div key={feature.title} className="flex gap-4">
                <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-accent-forge/20 flex items-center justify-center text-accent-forge">
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

      {/* Philosophy */}
      <section className="py-16 border-t border-border">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl font-semibold mb-6">The Philosophy</h2>
          <blockquote className="text-xl text-gray-300 italic mb-4">
            "You can't build everything. But you can build the right things, deeply."
          </blockquote>
          <p className="text-gray-400">
            Forge is built on the principle that constraints enable creativity.
            By limiting active builds to 3, you're forced to prioritize ruthlessly.
            By tracking consumption debt, you understand where your energy actually goes.
          </p>
        </div>
      </section>

      {/* Pricing Preview */}
      <section className="py-16 border-t border-border">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-semibold mb-6">Pricing</h2>
          <div className="grid md:grid-cols-2 gap-6 max-w-2xl">
            <div className="p-6 rounded-lg border border-border">
              <h3 className="font-semibold mb-2">Free</h3>
              <p className="text-3xl font-bold mb-2">$0</p>
              <p className="text-sm text-gray-400">3 builds, basic tracking</p>
            </div>
            <div className="p-6 rounded-lg border border-accent-forge border-2">
              <h3 className="font-semibold mb-2">Pro</h3>
              <p className="text-3xl font-bold mb-2">$9<span className="text-lg text-gray-400">/mo</span></p>
              <p className="text-sm text-gray-400">10 builds, advanced analytics</p>
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
