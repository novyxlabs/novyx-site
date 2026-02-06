import { useState } from 'react'
import GetApiKeyModal from './GetApiKeyModal'

interface UpgradeButtonProps {
  tier: string
  priceId: string
  label: string
  className?: string
}

export default function UpgradeButton({ tier, priceId, label, className }: UpgradeButtonProps) {
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')
  const [showApiKeyModal, setShowApiKeyModal] = useState(false)

  const handleUpgrade = async () => {
    setError('')

    // Check if user has API key in localStorage
    const apiKey = localStorage.getItem('novyx_api_key')

    if (!apiKey) {
      // Prompt user to get API key first
      setShowApiKeyModal(true)
      return
    }

    // Proceed with checkout
    await initiateCheckout(apiKey)
  }

  const initiateCheckout = async (apiKey: string) => {
    setLoading(true)
    setError('')

    try {
      const response = await fetch('https://novyx-ram-api.fly.dev/v1/checkout', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${apiKey}`,
        },
        body: JSON.stringify({
          tier,
          price_id: priceId,
          api_key: apiKey,
        }),
      })

      if (!response.ok) {
        const data = await response.json().catch(() => ({}))
        throw new Error(data?.error || data?.message || 'Failed to create checkout session')
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

  const handleApiKeyObtained = (key: string) => {
    // Store API key in localStorage
    localStorage.setItem('novyx_api_key', key)
    setShowApiKeyModal(false)

    // Now initiate checkout
    initiateCheckout(key)
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

      {showApiKeyModal && (
        <GetApiKeyModal
          isOpen={showApiKeyModal}
          onClose={() => setShowApiKeyModal(false)}
          onKeyGenerated={handleApiKeyObtained}
        />
      )}
    </>
  )
}
