import { useState, useEffect } from 'react'

interface GetApiKeyModalProps {
  label?: string
  className?: string
  isOpen?: boolean
  onClose?: () => void
  onKeyGenerated?: (key: string, email: string) => void
}

export default function GetApiKeyModal({ label, className, isOpen, onClose, onKeyGenerated }: GetApiKeyModalProps) {
  const [open, setOpen] = useState(false)
  const [email, setEmail] = useState('')
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')
  const [success, setSuccess] = useState('')
  const [apiKey, setApiKey] = useState('')
  const [copied, setCopied] = useState(false)

  // Use controlled or uncontrolled state
  const isModalOpen = isOpen !== undefined ? isOpen : open

  useEffect(() => {
    if (isOpen !== undefined) {
      setOpen(isOpen)
    }
  }, [isOpen])

  const closeModal = () => {
    if (onClose) {
      onClose()
    } else {
      setOpen(false)
    }
    setError('')
    setSuccess('')
    setCopied(false)
    setApiKey('')
    setEmail('')
  }

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault()
    setLoading(true)
    setError('')
    setSuccess('')

    const trimmedEmail = email.trim()

    try {
      const response = await fetch('https://novyx-ram-api.fly.dev/v1/keys', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email: trimmedEmail }),
      })

      const data = await response.json().catch(() => ({}))

      if (!response.ok) {
        setError(data?.error || data?.message || 'Something went wrong. Please try again.')
        return
      }

      const key = data?.api_key || data?.key || data?.apiKey
      if (!key) {
        setSuccess('Check your email to verify and activate your API key')
        return
      }

      const keyString = String(key)
      setApiKey(keyString)

      // Store in localStorage
      localStorage.setItem('novyx_api_key', keyString)
      localStorage.setItem('novyx_email', trimmedEmail)

      // Call callback if provided
      if (onKeyGenerated) {
        onKeyGenerated(keyString, trimmedEmail)
      }
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
      {label && (
        <button
          type="button"
          onClick={() => setOpen(true)}
          className={className}
        >
          {label}
        </button>
      )}

      {isModalOpen && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 p-4"
          onClick={closeModal}
        >
          <div
            className="w-full max-w-lg rounded-xl border border-border bg-[#18181B] p-6"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-start justify-between mb-4">
              <div>
                <h2 className="text-xl font-semibold">Get Free API Key</h2>
                <p className="text-sm text-gray-400">
                  Enter your email to receive a new API key.
                </p>
              </div>
              <button
                type="button"
                onClick={(e) => {
                  e.stopPropagation()
                  closeModal()
                }}
                className="p-2 text-gray-400 hover:text-white hover:bg-gray-700 rounded-lg transition-colors"
                aria-label="Close"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="18" y1="6" x2="6" y2="18"></line>
                  <line x1="6" y1="6" x2="18" y2="18"></line>
                </svg>
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
                {success && <p className="text-sm text-green-400">{success}</p>}
                <div className="flex gap-3">
                  <button
                    type="button"
                    onClick={closeModal}
                    disabled={loading}
                    className="flex-1 bg-gray-700 hover:bg-gray-600 text-white py-3 rounded-lg font-medium transition-colors disabled:opacity-50"
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    disabled={loading}
                    className="flex-1 bg-primary hover:bg-primary-hover text-white py-3 rounded-lg font-medium transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {loading ? 'Submitting...' : 'Submit'}
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>
      )}
    </>
  )
}
