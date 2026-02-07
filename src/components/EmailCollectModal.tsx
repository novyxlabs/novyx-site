import { useState } from 'react'

interface EmailCollectModalProps {
  isOpen: boolean
  onClose: () => void
  onEmailSubmit: (email: string, apiKey?: string) => void
  tier: string
  prefilledApiKey?: string
}

export default function EmailCollectModal({ isOpen, onClose, onEmailSubmit, tier, prefilledApiKey }: EmailCollectModalProps) {
  const [email, setEmail] = useState('')
  const [showApiKeyField, setShowApiKeyField] = useState(!!prefilledApiKey)
  const [apiKey, setApiKey] = useState(prefilledApiKey || '')

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (email.trim()) {
      onEmailSubmit(email.trim(), apiKey.trim() || undefined)
    }
  }

  const handleClose = () => {
    setEmail('')
    setApiKey(prefilledApiKey || '')
    setShowApiKeyField(!!prefilledApiKey)
    onClose()
  }

  if (!isOpen) return null

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 p-4"
      onClick={handleClose}
    >
      <div
        className="w-full max-w-lg rounded-xl border border-border bg-[#18181B] p-6"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex items-start justify-between mb-4">
          <div>
            <h2 className="text-xl font-semibold">Start {tier} Plan</h2>
            <p className="text-sm text-gray-400">
              Enter your email to proceed to checkout
            </p>
          </div>
          <button
            type="button"
            onClick={handleClose}
            className="p-2 text-gray-400 hover:text-white hover:bg-gray-700 rounded-lg transition-colors"
            aria-label="Close"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <line x1="18" y1="6" x2="6" y2="18"></line>
              <line x1="6" y1="6" x2="18" y2="18"></line>
            </svg>
          </button>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="you@company.com"
            required
            className="w-full px-4 py-3 rounded-lg bg-[#0D1117] border border-[#30363D] focus:border-primary focus:outline-none transition-colors"
          />

          {!showApiKeyField && !prefilledApiKey && (
            <button
              type="button"
              onClick={() => setShowApiKeyField(true)}
              className="text-sm text-primary hover:text-primary-hover transition-colors"
            >
              Already have an API key?
            </button>
          )}

          {showApiKeyField && (
            <div className="space-y-2">
              <input
                type="password"
                value={apiKey}
                onChange={(e) => setApiKey(e.target.value)}
                placeholder="nram_..."
                className="w-full px-4 py-3 rounded-lg bg-[#0D1117] border border-[#30363D] focus:border-primary focus:outline-none transition-colors"
              />
              {apiKey && (
                <p className="text-xs text-green-400 flex items-center gap-1">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  Your existing memories will be preserved when you upgrade.
                </p>
              )}
              {!prefilledApiKey && (
                <button
                  type="button"
                  onClick={() => {
                    setShowApiKeyField(false)
                    setApiKey('')
                  }}
                  className="text-xs text-gray-400 hover:text-white transition-colors"
                >
                  Remove API key
                </button>
              )}
            </div>
          )}

          <div className="flex gap-3">
            <button
              type="button"
              onClick={handleClose}
              className="flex-1 bg-gray-700 hover:bg-gray-600 text-white py-3 rounded-lg font-medium transition-colors"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="flex-1 bg-primary hover:bg-primary-hover text-white py-3 rounded-lg font-medium transition-colors"
            >
              Continue to Checkout
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}
