import { useState } from 'react'

interface GetApiKeyModalProps {
  label: string
  className?: string
}

export default function GetApiKeyModal({ label, className }: GetApiKeyModalProps) {
  const [open, setOpen] = useState(false)
  const [email, setEmail] = useState('')
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')
  const [apiKey, setApiKey] = useState('')
  const [copied, setCopied] = useState(false)

  const closeModal = () => {
    setOpen(false)
    setError('')
    setCopied(false)
    setApiKey('')
    setEmail('')
  }

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault()
    setLoading(true)
    setError('')

    try {
      const response = await fetch('https://novyx-ram-api.fly.dev/v1/keys', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email }),
      })

      const data = await response.json().catch(() => ({}))

      if (!response.ok) {
        setError(data?.error || data?.message || 'Something went wrong. Please try again.')
        return
      }

      const key = data?.api_key || data?.key || data?.apiKey
      if (!key) {
        setError('Request succeeded but no API key was returned.')
        return
      }

      setApiKey(String(key))
    } catch {
      setError('Something went wrong. Please try again.')
    } finally {
      setLoading(false)
    }
  }

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(apiKey)
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    } catch {
      setCopied(false)
    }
  }

  return (
    <>
      <button
        type="button"
        onClick={() => setOpen(true)}
        className={className}
      >
        {label}
      </button>

      {open && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 p-4">
          <div className="w-full max-w-lg rounded-xl border border-border bg-[#18181B] p-6">
            <div className="flex items-start justify-between mb-4">
              <div>
                <h2 className="text-xl font-semibold">Get Free API Key</h2>
                <p className="text-sm text-gray-400">
                  Enter your email to receive a new API key.
                </p>
              </div>
              <button
                type="button"
                onClick={closeModal}
                className="text-gray-400 hover:text-white transition-colors"
                aria-label="Close"
              >
                ✕
              </button>
            </div>

            {apiKey ? (
              <div className="space-y-4">
                <div className="rounded-lg border border-border bg-[#0D1117] p-4">
                  <p className="text-xs text-gray-400 mb-2">
                    Save this key - you won&apos;t see it again
                  </p>
                  <div className="flex items-center gap-2">
                    <code className="text-sm text-gray-200 break-all">{apiKey}</code>
                    <button
                      type="button"
                      onClick={handleCopy}
                      className="text-xs text-gray-400 hover:text-white transition"
                    >
                      {copied ? 'Copied!' : 'Copy'}
                    </button>
                  </div>
                </div>
                <button
                  type="button"
                  onClick={closeModal}
                  className="w-full bg-gray-800 hover:bg-gray-700 text-white py-2 rounded-lg transition-colors"
                >
                  Close
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <input
                  type="email"
                  value={email}
                  onChange={(event) => setEmail(event.target.value)}
                  placeholder="you@company.com"
                  required
                  disabled={loading}
                  className="w-full px-4 py-3 rounded-lg bg-[#0D1117] border border-[#30363D] focus:border-primary focus:outline-none transition-colors disabled:opacity-50"
                />
                {error && <p className="text-sm text-red-400">{error}</p>}
                <button
                  type="submit"
                  disabled={loading}
                  className="w-full bg-primary hover:bg-primary-hover text-white py-3 rounded-lg font-medium transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {loading ? 'Submitting...' : 'Submit'}
                </button>
              </form>
            )}
          </div>
        </div>
      )}
    </>
  )
}
