import { useState } from 'react'
import GetApiKeyModal from './GetApiKeyModal'

interface UpgradeButtonProps {
  tier: string
  label: string
  className?: string
}

export default function UpgradeButton({ tier, label, className }: UpgradeButtonProps) {
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')
  const [showApiKeyModal, setShowApiKeyModal] = useState(false)

  const handleUpgrade = async () => {
    setError('')

    // Check if user has API key and email in localStorage
    const apiKey = localStorage.getItem('novyx_api_key')
    const email = localStorage.getItem('novyx_email')

    console.log('[UpgradeButton] API Key exists:', !!apiKey)
    console.log('[UpgradeButton] Email exists:', !!email)

    if (!apiKey || !email) {
      // Prompt user to get API key first
      console.log('[UpgradeButton] Showing API key modal')
      setShowApiKeyModal(true)
      return
    }

    // Proceed with checkout
    await initiateCheckout(apiKey, email)
  }

  const initiateCheckout = async (apiKey: string, email: string) => {
    setLoading(true)
    setError('')

    const payload = {
      tier: tier.toLowerCase(),
      email: email,
      api_key: apiKey,
      success_url: `${window.location.origin}/dashboard?upgraded=true`,
      cancel_url: `${window.location.origin}/pricing`,
    }

    console.log('[UpgradeButton] Initiating checkout with payload:', payload)

    try {
      const response = await fetch('https://novyx-ram-api.fly.dev/v1/checkout', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${apiKey}`,
        },
        body: JSON.stringify(payload),
      })

      console.log('[UpgradeButton] Response status:', response.status)

      if (!response.ok) {
        const data = await response.json().catch(() => ({}))
        console.error('[UpgradeButton] Error response:', data)
        throw new Error(data?.error || data?.message || `Failed to create checkout session (${response.status})`)
      }

      const data = await response.json()
      console.log('[UpgradeButton] Success response:', data)

      if (!data.checkout_url) {
        throw new Error('No checkout URL returned')
      }

      // Redirect to Stripe checkout
      console.log('[UpgradeButton] Redirecting to:', data.checkout_url)
      window.location.href = data.checkout_url
    } catch (err) {
      console.error('[UpgradeButton] Checkout error:', err)
      setError(err instanceof Error ? err.message : 'Something went wrong. Please try again.')
      setLoading(false)
    }
  }

  const handleApiKeyObtained = (key: string, email: string) => {
    console.log('[UpgradeButton] API key obtained, email:', email)

    // Store API key and email in localStorage
    localStorage.setItem('novyx_api_key', key)
    localStorage.setItem('novyx_email', email)
    setShowApiKeyModal(false)

    // Now initiate checkout
    initiateCheckout(key, email)
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
