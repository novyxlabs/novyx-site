import { useState } from 'react'
import EmailCollectModal from './EmailCollectModal'

interface UpgradeButtonProps {
  tier: string
  label: string
  className?: string
}

export default function UpgradeButton({ tier, label, className }: UpgradeButtonProps) {
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')
  const [showEmailModal, setShowEmailModal] = useState(false)

  const handleUpgrade = () => {
    setError('')
    setShowEmailModal(true)
  }

  const handleEmailSubmit = async (email: string) => {
    setShowEmailModal(false)
    await initiateCheckout(email)
  }

  const initiateCheckout = async (email: string) => {
    setLoading(true)
    setError('')

    const payload = {
      tier: tier.toLowerCase(),
      email: email,
      success_url: `${window.location.origin}/dashboard?upgraded=true`,
      cancel_url: `${window.location.origin}/pricing`,
    }

    try {
      const response = await fetch('https://novyx-ram-api.fly.dev/v1/checkout', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(payload),
      })

      if (!response.ok) {
        const data = await response.json().catch(() => ({}))
        throw new Error(data?.error || data?.message || `Failed to create checkout session (${response.status})`)
      }

      const data = await response.json()

      if (!data.checkout_url) {
        throw new Error('No checkout URL returned')
      }

      // Redirect to Stripe checkout
      window.location.href = data.checkout_url
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Something went wrong. Please try again.')
      setLoading(false)
    }
  }

  return (
    <>
      <button
        type="button"
        onClick={handleUpgrade}
        disabled={loading}
        className={className}
      >
        {loading ? 'Loading...' : label}
      </button>

      {error && (
        <div className="mt-2 text-sm text-red-400">
          {error}
        </div>
      )}

      <EmailCollectModal
        isOpen={showEmailModal}
        onClose={() => setShowEmailModal(false)}
        onEmailSubmit={handleEmailSubmit}
        tier={tier}
      />
    </>
  )
}
