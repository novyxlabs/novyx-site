import { useState } from 'react'

interface PlanInquiryModalProps {
  label: string
  plan: string
  className?: string
}

export default function PlanInquiryModal({ label, plan, className }: PlanInquiryModalProps) {
  const [open, setOpen] = useState(false)
  const [email, setEmail] = useState('')
  const [company, setCompany] = useState('')
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')
  const [submitted, setSubmitted] = useState(false)

  const closeModal = () => {
    setOpen(false)
    setError('')
    setSubmitted(false)
    setEmail('')
    setCompany('')
  }

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault()
    setLoading(true)
    setError('')

    try {
      const response = await fetch('https://formspree.io/f/xbdyeprl', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          email,
          company,
          plan,
          source: `pricing-${plan.toLowerCase()}`,
        }),
      })

      if (response.ok) {
        setSubmitted(true)
      } else {
        setError('Something went wrong. Please try again.')
      }
    } catch {
      setError('Something went wrong. Please try again.')
    } finally {
      setLoading(false)
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
                <h2 className="text-xl font-semibold">Get Started with {plan}</h2>
                <p className="text-sm text-gray-400">
                  Enter your details and we'll reach out within 24 hours.
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

            {submitted ? (
              <div className="space-y-4">
                <div className="rounded-lg border border-green-500/30 bg-green-500/10 p-4">
                  <p className="text-green-400 font-medium">Request received!</p>
                  <p className="text-sm text-gray-400 mt-1">
                    We'll email you at {email} within 24 hours to get you set up on the {plan} plan.
                  </p>
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
                <input
                  type="text"
                  value={company}
                  onChange={(event) => setCompany(event.target.value)}
                  placeholder="Company name (optional)"
                  disabled={loading}
                  className="w-full px-4 py-3 rounded-lg bg-[#0D1117] border border-[#30363D] focus:border-primary focus:outline-none transition-colors disabled:opacity-50"
                />
                {error && <p className="text-sm text-red-400">{error}</p>}
                <button
                  type="submit"
                  disabled={loading}
                  className="w-full bg-primary hover:bg-primary-hover text-white py-3 rounded-lg font-medium transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {loading ? 'Submitting...' : `Request ${plan} Access`}
                </button>
              </form>
            )}
          </div>
        </div>
      )}
    </>
  )
}
