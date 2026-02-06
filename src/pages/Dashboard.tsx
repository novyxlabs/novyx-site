import { useState, useEffect } from 'react'
import { Link, useSearchParams } from 'react-router-dom'

interface UsageData {
  tier: 'Free' | 'Starter' | 'Pro' | 'Enterprise'
  memories: { used: number; limit: number }
  api_calls: { used: number; limit: number }
  rollbacks: { used: number; limit: number }
  resets_at: string
}

function maskApiKey(key: string): string {
  if (key.length <= 12) return key
  return `${key.slice(0, 8)}...${key.slice(-4)}`
}

function formatNumber(num: number): string {
  if (num >= 1000000) return `${(num / 1000000).toFixed(1)}M`
  if (num >= 1000) return `${(num / 1000).toFixed(1)}k`
  return num.toLocaleString()
}

function getPercentage(used: number, limit: number): number {
  if (limit === -1 || limit === Infinity) return 0 // Unlimited
  return Math.min((used / limit) * 100, 100)
}

function getTierColor(tier: string): string {
  switch (tier) {
    case 'Free': return 'bg-gray-500'
    case 'Starter': return 'bg-blue-500'
    case 'Pro': return 'bg-indigo-500'
    case 'Enterprise': return 'bg-purple-500'
    default: return 'bg-gray-500'
  }
}

interface UsageCardProps {
  title: string
  used: number
  limit: number
  isLifetime?: boolean
}

function UsageCard({ title, used, limit, isLifetime }: UsageCardProps) {
  const isUnlimited = limit === -1
  const percentage = isUnlimited ? 0 : getPercentage(used, limit)
  const isWarning = percentage >= 80 && percentage < 95
  const isDanger = percentage >= 95

  return (
    <div className="p-6 rounded-xl border border-border bg-[#18181B]">
      <h3 className="text-sm text-gray-400 mb-2">{title}</h3>
      <p className="text-2xl font-semibold mb-3">
        {formatNumber(used)} / {isUnlimited ? '∞' : formatNumber(limit)}
      </p>

      {/* Progress bar */}
      <div className="h-2 bg-zinc-700 rounded-full overflow-hidden mb-2">
        <div
          className={`h-full rounded-full transition-all ${
            isDanger ? 'bg-red-500' : isWarning ? 'bg-yellow-500' : 'bg-indigo-500'
          }`}
          style={{ width: `${isUnlimited ? 0 : percentage}%` }}
        />
      </div>

      <p className="text-sm text-gray-400">
        {isUnlimited ? 'Unlimited' : `${percentage.toFixed(1)}% used`}
        {isLifetime && !isUnlimited && ' (lifetime)'}
      </p>
    </div>
  )
}

export default function Dashboard() {
  const [searchParams, setSearchParams] = useSearchParams()
  const [apiKey, setApiKey] = useState('')
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')
  const [usage, setUsage] = useState<UsageData | null>(null)
  const [billingLoading, setBillingLoading] = useState(false)
  const [showUpgradeSuccess, setShowUpgradeSuccess] = useState(false)

  // Check for upgraded=true query param
  useEffect(() => {
    if (searchParams.get('upgraded') === 'true') {
      setShowUpgradeSuccess(true)
      // Remove the query param from URL
      searchParams.delete('upgraded')
      setSearchParams(searchParams, { replace: true })

      // Auto-hide after 10 seconds
      setTimeout(() => setShowUpgradeSuccess(false), 10000)
    }
  }, [searchParams, setSearchParams])

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!apiKey.trim()) return

    setLoading(true)
    setError('')
    setUsage(null)

    try {
      const response = await fetch('https://novyx-ram-api.fly.dev/v1/usage', {
        headers: {
          'Authorization': `Bearer ${apiKey.trim()}`,
        },
      })

      if (response.status === 401) {
        setError('Invalid API key. Check that your key starts with nram_ and was generated at novyxlabs.com')
        return
      }

      if (!response.ok) {
        setError(`Error: ${response.status} - ${response.statusText}`)
        return
      }

      const data = await response.json()
      setUsage(data)
    } catch {
      setError('Failed to connect to API. Please try again.')
    } finally {
      setLoading(false)
    }
  }

  const handleManageBilling = async () => {
    if (!apiKey) return

    setBillingLoading(true)
    try {
      const response = await fetch('https://novyx-ram-api.fly.dev/v1/billing', {
        headers: {
          'Authorization': `Bearer ${apiKey.trim()}`,
        },
      })

      if (!response.ok) {
        throw new Error('Failed to get billing portal URL')
      }

      const data = await response.json()

      if (data.portal_url) {
        window.location.href = data.portal_url
      } else {
        throw new Error('No portal URL returned')
      }
    } catch {
      alert('Failed to open billing portal. Please try again or contact support.')
    } finally {
      setBillingLoading(false)
    }
  }

  const hasWarning = usage && (
    getPercentage(usage.memories.used, usage.memories.limit) >= 80 ||
    getPercentage(usage.api_calls.used, usage.api_calls.limit) >= 80 ||
    getPercentage(usage.rollbacks.used, usage.rollbacks.limit) >= 80
  )

  const hasDanger = usage && (
    getPercentage(usage.memories.used, usage.memories.limit) >= 95 ||
    getPercentage(usage.api_calls.used, usage.api_calls.limit) >= 95 ||
    getPercentage(usage.rollbacks.used, usage.rollbacks.limit) >= 95
  )

  return (
    <div className="animate-fade-in py-16 md:py-24">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-bold mb-4">Developer Dashboard</h1>
        <p className="text-gray-400 mb-10">
          View your API usage and limits.
        </p>

        {/* Upgrade Success Message */}
        {showUpgradeSuccess && (
          <div className="mb-8 p-4 rounded-lg border border-green-500/30 bg-green-500/10 animate-fade-in">
            <div className="flex items-start justify-between gap-4">
              <div className="flex items-start gap-3">
                <svg className="w-5 h-5 text-green-400 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <div>
                  <p className="text-green-400 font-medium">
                    Upgrade successful!
                  </p>
                  <p className="text-sm text-green-300/80 mt-1">
                    Your subscription has been activated. New limits are now in effect.
                  </p>
                </div>
              </div>
              <button
                onClick={() => setShowUpgradeSuccess(false)}
                className="text-green-400 hover:text-green-300 transition-colors"
                aria-label="Dismiss"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
          </div>
        )}

        {/* API Key Entry */}
        {!usage && (
          <div className="p-6 rounded-xl border border-border bg-[#18181B] mb-8">
            <h2 className="text-lg font-semibold mb-2">Enter your API key to view usage</h2>
            <p className="text-sm text-gray-400 mb-4">
              Your key is stored in memory only and is never saved.
            </p>
            <form onSubmit={handleSubmit} className="flex gap-3">
              <input
                type="password"
                value={apiKey}
                onChange={(e) => setApiKey(e.target.value)}
                placeholder="nram_..."
                className="flex-1 px-4 py-3 rounded-lg bg-[#0D1117] border border-[#30363D] focus:border-indigo-500 focus:outline-none transition-colors text-white placeholder-gray-500"
                disabled={loading}
              />
              <button
                type="submit"
                disabled={loading || !apiKey.trim()}
                className="px-6 py-3 bg-indigo-600 hover:bg-indigo-500 disabled:bg-indigo-600/50 disabled:cursor-not-allowed text-white font-medium rounded-lg transition-colors"
              >
                {loading ? 'Loading...' : 'View Usage'}
              </button>
            </form>
            {error && (
              <p className="mt-4 text-sm text-red-400">{error}</p>
            )}
          </div>
        )}

        {/* Usage Display */}
        {usage && (
          <>
            {/* Header with key and tier */}
            <div className="flex flex-wrap items-center justify-between gap-4 mb-8 p-4 rounded-lg border border-border bg-[#18181B]">
              <div>
                <p className="text-sm text-gray-400">Your API Key</p>
                <p className="font-mono text-white">{maskApiKey(apiKey)}</p>
              </div>
              <div className="flex items-center gap-3">
                <span className={`px-3 py-1 rounded-full text-sm font-medium text-white ${getTierColor(usage.tier)}`}>
                  {usage.tier}
                </span>
                {usage.tier !== 'Free' && (
                  <button
                    onClick={handleManageBilling}
                    disabled={billingLoading}
                    className="px-3 py-1 text-sm bg-indigo-600 hover:bg-indigo-500 disabled:bg-indigo-600/50 text-white rounded-lg transition-colors disabled:cursor-not-allowed"
                  >
                    {billingLoading ? 'Loading...' : 'Manage Billing'}
                  </button>
                )}
                <button
                  onClick={() => {
                    setUsage(null)
                    setApiKey('')
                  }}
                  className="text-sm text-gray-400 hover:text-white transition-colors"
                >
                  Change key
                </button>
              </div>
            </div>

            {/* Usage Cards */}
            <div className="grid md:grid-cols-3 gap-6 mb-8">
              <UsageCard
                title="Memories"
                used={usage.memories.used}
                limit={usage.memories.limit}
              />
              <UsageCard
                title="API Calls"
                used={usage.api_calls.used}
                limit={usage.api_calls.limit}
              />
              <UsageCard
                title="Rollbacks"
                used={usage.rollbacks.used}
                limit={usage.rollbacks.limit}
                isLifetime={usage.tier === 'Free'}
              />
            </div>

            {/* Reset date */}
            {usage.resets_at && (
              <p className="text-center text-gray-400 mb-6">
                Resets: {new Date(usage.resets_at).toLocaleDateString('en-US', {
                  month: 'long',
                  day: 'numeric',
                  year: 'numeric',
                })}
              </p>
            )}

            {/* Warnings */}
            {hasDanger && (
              <div className="p-4 rounded-lg border border-red-500/30 bg-red-500/10 mb-6">
                <p className="text-red-400 font-medium">
                  You're at or near your limit.{' '}
                  <Link to="/pricing" className="underline hover:text-red-300">
                    Upgrade to continue
                  </Link>
                </p>
              </div>
            )}
            {hasWarning && !hasDanger && (
              <div className="p-4 rounded-lg border border-yellow-500/30 bg-yellow-500/10 mb-6">
                <p className="text-yellow-400 font-medium">
                  Approaching your limit. Consider upgrading soon.
                </p>
              </div>
            )}

            {/* Bottom links */}
            <div className="flex flex-wrap justify-center gap-6 text-sm">
              <Link
                to="/pricing"
                className="text-gray-400 hover:text-white transition-colors"
              >
                Need more? View pricing →
              </Link>
              <a
                href="https://discord.gg/PCxZ3tMj"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition-colors inline-flex items-center gap-1"
              >
                <svg viewBox="0 0 24 24" className="w-4 h-4" fill="currentColor">
                  <path d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0 12.64 12.64 0 0 0-.617-1.25.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 0 0 .031.057 19.9 19.9 0 0 0 5.993 3.03.078.078 0 0 0 .084-.028 14.09 14.09 0 0 0 1.226-1.994.076.076 0 0 0-.041-.106 13.107 13.107 0 0 1-1.872-.892.077.077 0 0 1-.008-.128 10.2 10.2 0 0 0 .372-.292.074.074 0 0 1 .077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 0 1 .078.01c.12.098.246.198.373.292a.077.077 0 0 1-.006.127 12.299 12.299 0 0 1-1.873.892.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028 19.839 19.839 0 0 0 6.002-3.03.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.03zM8.02 15.33c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.956-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.956 2.418-2.157 2.418zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.955-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.946 2.418-2.157 2.418z"/>
                </svg>
                Questions? Join Discord
              </a>
            </div>
          </>
        )}

        {/* Empty state help */}
        {!usage && !loading && (
          <div className="text-center text-gray-400">
            <p className="mb-4">Don't have an API key yet?</p>
            <Link
              to="/"
              className="inline-flex items-center gap-2 px-4 py-2 bg-indigo-600 hover:bg-indigo-500 text-white font-medium rounded-lg transition-colors"
            >
              Get Free API Key
            </Link>
          </div>
        )}
      </div>
    </div>
  )
}
