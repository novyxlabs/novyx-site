import { useState } from 'react'

interface ContactModalProps {
  label: string
  plan: string
  className?: string
}

export default function ContactModal({ label, plan, className }: ContactModalProps) {
  const [open, setOpen] = useState(false)
  const [copied, setCopied] = useState(false)

  const email = 'sales@novyxlabs.com'
  const subject = plan === 'Enterprise' ? 'Novyx Enterprise' : `Novyx ${plan} Plan`

  const closeModal = () => {
    setOpen(false)
    setCopied(false)
  }

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(email)
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    } catch {
      // Fallback: select text
      const textArea = document.createElement('textarea')
      textArea.value = email
      document.body.appendChild(textArea)
      textArea.select()
      document.execCommand('copy')
      document.body.removeChild(textArea)
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    }
  }

  const gmailLink = `https://mail.google.com/mail/?view=cm&fs=1&to=${email}&su=${encodeURIComponent(subject)}`
  const outlookLink = `https://outlook.live.com/mail/0/deeplink/compose?to=${email}&subject=${encodeURIComponent(subject)}`
  const mailtoLink = `mailto:${email}?subject=${encodeURIComponent(subject)}`

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
            className="w-full max-w-md rounded-xl border border-zinc-700 bg-zinc-900 p-6"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-start justify-between mb-4">
              <div>
                <h2 className="text-xl font-semibold text-white">Contact Us</h2>
                <p className="text-sm text-gray-400">
                  Interested in {plan}? Reach out below.
                </p>
              </div>
              <button
                type="button"
                onClick={closeModal}
                className="p-2 text-gray-400 hover:text-white hover:bg-zinc-700 rounded-lg transition-colors"
                aria-label="Close"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="18" y1="6" x2="6" y2="18"></line>
                  <line x1="6" y1="6" x2="18" y2="18"></line>
                </svg>
              </button>
            </div>

            <div className="space-y-4">
              {/* Email with copy button */}
              <div className="rounded-lg border border-zinc-700 bg-zinc-800 p-4">
                <p className="text-xs text-gray-400 mb-2">Email us at:</p>
                <div className="flex items-center justify-between gap-2">
                  <code className="text-white font-medium">{email}</code>
                  <button
                    type="button"
                    onClick={handleCopy}
                    className="px-3 py-1 text-sm bg-zinc-700 hover:bg-zinc-600 text-white rounded transition-colors"
                  >
                    {copied ? 'Copied!' : 'Copy'}
                  </button>
                </div>
              </div>

              {/* Quick open buttons */}
              <div className="space-y-2">
                <p className="text-xs text-gray-400">Or open in:</p>
                <div className="grid grid-cols-3 gap-2">
                  <a
                    href={gmailLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-2 px-3 py-2 bg-zinc-800 hover:bg-zinc-700 text-white text-sm rounded-lg transition-colors"
                  >
                    Gmail
                  </a>
                  <a
                    href={outlookLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-2 px-3 py-2 bg-zinc-800 hover:bg-zinc-700 text-white text-sm rounded-lg transition-colors"
                  >
                    Outlook
                  </a>
                  <a
                    href={mailtoLink}
                    className="flex items-center justify-center gap-2 px-3 py-2 bg-zinc-800 hover:bg-zinc-700 text-white text-sm rounded-lg transition-colors"
                  >
                    Default
                  </a>
                </div>
              </div>

              <button
                type="button"
                onClick={closeModal}
                className="w-full bg-zinc-700 hover:bg-zinc-600 text-white py-2 rounded-lg transition-colors mt-2"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  )
}
