export default function Errors() {
  const errors = [
    {
      code: '401',
      error: 'Invalid API key',
      meaning: "Key doesn't exist or is malformed",
      fix: 'Check your key starts with nram_ and was generated at novyxlabs.com',
    },
    {
      code: '403',
      error: 'Memory limit reached',
      meaning: "Hit your tier's memory cap",
      fix: 'Delete old memories or upgrade at /pricing',
    },
    {
      code: '403',
      error: 'Rollback limit reached',
      meaning: 'Used all rollbacks for your tier (Free: 10/mo, Starter: 50/mo)',
      fix: 'Upgrade to Starter ($12/mo) for 50/month, or Pro ($39/mo) for unlimited',
    },
    {
      code: '429',
      error: 'Rate limit exceeded',
      meaning: 'Too many requests per minute',
      fix: 'Slow down request frequency',
    },
    {
      code: '429',
      error: 'API calls exhausted',
      meaning: 'Monthly API call quota reached',
      fix: 'Wait for monthly reset or upgrade tier',
    },
    {
      code: '409',
      error: 'Conflict detected',
      meaning: 'Memory conflicts with existing data',
      fix: 'Use conflict_strategy: "lww" or "manual" (Starter+ only. Free: reject only)',
    },
    {
      code: '500',
      error: 'Server error',
      meaning: 'Something broke on our end',
      fix: 'Contact support@novyxlabs.com or ask in Discord',
    },
  ]

  const errorDetails = [
    {
      code: '401',
      title: 'Invalid API Key',
      description: 'Your API key is either missing, malformed, or has been revoked.',
      response: `{
  "error": "novyx_ram.v1.auth.invalid_key",
  "code": "novyx_ram.v1.auth.invalid_key",
  "message": "Invalid API key",
  "detail": "Invalid API key format",
  "docs": "https://novyxlabs.com/errors#auth-invalid_key",
  "error_key": "invalid_api_key"
}`,
      steps: [
        'Verify your key starts with nram_',
        'Check for extra whitespace or line breaks',
        'Generate a new key at novyxlabs.com if needed',
        'Ensure the Authorization header format is: Bearer YOUR_KEY',
      ],
    },
    {
      code: '403',
      title: 'Memory Limit Reached',
      description: "You've hit the memory storage limit for your current tier.",
      response: `{
  "error": "novyx_ram.v1.quota.memory_limit_reached",
  "code": "novyx_ram.v1.quota.memory_limit_reached",
  "message": "Memory limit of 5000 reached for Free tier.",
  "current": 5000,
  "limit": 5000,
  "docs": "https://novyxlabs.com/errors#quota-memory_limit_reached"
}`,
      steps: [
        'Delete old or unused memories via the API',
        'Upgrade to Starter (25,000 memories) or Pro (unlimited) at /pricing',
        'Use tags to organize and bulk-delete old memories',
      ],
    },
    {
      code: '403',
      title: 'Rollback Limit Reached',
      description: "You've used all rollbacks available on your tier.",
      response: `{
  "error": "novyx_ram.v1.quota.rollback_limit_reached",
  "code": "novyx_ram.v1.quota.rollback_limit_reached",
  "message": "Free tier allows 10 rollbacks per month. Upgrade for more.",
  "used": 10,
  "limit": 10,
  "docs": "https://novyxlabs.com/errors#quota-rollback_limit_reached"
}`,
      steps: [
        'Free tier: 10 rollbacks per month (resets monthly)',
        'Starter: 50 rollbacks per month',
        'Pro/Enterprise: Unlimited rollbacks',
        'Upgrade at /pricing to restore rollback access',
      ],
    },
    {
      code: '429',
      title: 'Rate Limit Exceeded',
      description: "You're sending too many requests per minute.",
      response: `{
  "error": "novyx_ram.v1.rate_limit.exceeded",
  "code": "novyx_ram.v1.rate_limit.exceeded",
  "message": "Too many requests. Please slow down.",
  "docs": "https://novyxlabs.com/errors#rate_limit-exceeded"
}`,
      steps: [
        'Add a short delay between requests',
        'Implement exponential backoff on retries',
        'Batch operations where possible',
      ],
    },
    {
      code: '429',
      title: 'API Calls Exhausted',
      description: "You've exceeded your monthly API call quota.",
      response: `{
  "error": "novyx_ram.v1.quota.api_calls_exhausted",
  "code": "novyx_ram.v1.quota.api_calls_exhausted",
  "message": "Monthly API limit reached. Resets on the 1st.",
  "used": 5000,
  "limit": 5000,
  "resets_at": "2026-03-01T00:00:00Z",
  "docs": "https://novyxlabs.com/errors#quota-api_calls_exhausted"
}`,
      steps: [
        'Wait for your monthly quota to reset on the 1st',
        'Upgrade your tier for higher limits',
        'Optimize your code to reduce unnecessary API calls',
        'Use caching on your end for frequently-accessed memories',
      ],
    },
    {
      code: '409',
      title: 'Conflict Detected',
      description: 'A memory write conflicts with existing data (e.g., duplicate ID or concurrent writes).',
      response: `{
  "error": "Conflict detected",
  "existing_memory_id": "abc123...",
  "existing_observation": "User prefers dark mode",
  "similarity_score": 0.92,
  "message": "Similar memory already exists. Use conflict_strategy=lww to overwrite."
}`,
      steps: [
        'Use conflict_strategy: "lww" (last-write-wins) to overwrite (Starter+ only)',
        'Use conflict_strategy: "manual" to flag for human review (Starter+ only)',
        'Free tier only supports conflict_strategy: "reject" (returns 409, no write occurs)',
        'Generate a new unique ID for your memory',
        'Check if the memory already exists before writing',
      ],
    },
    {
      code: '500',
      title: 'Server Error',
      description: 'An unexpected error occurred on our servers.',
      response: `{
  "error": "novyx_ram.v1.internal_server_error",
  "code": "novyx_ram.v1.internal_server_error",
  "message": "Something went wrong. Please try again.",
  "docs": "https://novyxlabs.com/errors#internal_server_error"
}`,
      steps: [
        'Wait a moment and retry your request',
        'Check /status for any ongoing incidents',
        'Include the request_id when contacting support',
        'Email support@novyxlabs.com or ask in Discord',
      ],
    },
  ]

  return (
    <div className="animate-fade-in py-16 md:py-24">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-bold mb-4">Error Reference</h1>
        <p className="text-gray-400 mb-10">
          Common API errors and how to fix them.
        </p>

        {/* Quick Reference Table */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-4">Quick Reference</h2>
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-border">
                  <th className="text-left py-3 px-4 text-gray-400 font-medium">Code</th>
                  <th className="text-left py-3 px-4 text-gray-400 font-medium">Error</th>
                  <th className="text-left py-3 px-4 text-gray-400 font-medium">Meaning</th>
                  <th className="text-left py-3 px-4 text-gray-400 font-medium">Fix</th>
                </tr>
              </thead>
              <tbody>
                {errors.map((err, idx) => (
                  <tr key={idx} className="border-b border-border">
                    <td className="py-3 px-4 font-mono text-red-400">{err.code}</td>
                    <td className="py-3 px-4 text-white">{err.error}</td>
                    <td className="py-3 px-4 text-gray-400">{err.meaning}</td>
                    <td className="py-3 px-4 text-gray-300">{err.fix}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        {/* Detailed Error Explanations */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-6">Error Details</h2>
          <div className="space-y-8">
            {errorDetails.map((err) => (
              <div key={err.code + err.title} className="p-6 rounded-lg border border-border bg-[#18181B]">
                <div className="flex items-center gap-3 mb-3">
                  <span className="px-2 py-1 rounded bg-red-500/20 text-red-400 font-mono text-sm">
                    {err.code}
                  </span>
                  <h3 className="text-lg font-semibold">{err.title}</h3>
                </div>
                <p className="text-gray-400 mb-4">{err.description}</p>

                <div className="mb-4">
                  <p className="text-sm text-gray-500 mb-2">Example response:</p>
                  <pre className="p-4 rounded-lg bg-[#0D1117] border border-[#30363D] overflow-x-auto">
                    <code className="text-sm text-gray-300 font-mono">{err.response}</code>
                  </pre>
                </div>

                <div>
                  <p className="text-sm text-gray-500 mb-2">How to fix:</p>
                  <ul className="list-disc list-inside space-y-1 text-gray-300">
                    {err.steps.map((step, idx) => (
                      <li key={idx}>{step}</li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Discord CTA */}
        <section className="p-6 rounded-lg border border-indigo-500/30 bg-indigo-500/10 text-center">
          <h3 className="text-lg font-semibold mb-2">Still stuck?</h3>
          <p className="text-gray-400 mb-4">
            Ask in our Discord community. We're happy to help.
          </p>
          <a
            href="https://discord.gg/PCxZ3tMj"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 bg-indigo-600 hover:bg-indigo-500 text-white font-medium rounded-lg transition-colors"
          >
            <svg viewBox="0 0 24 24" className="w-5 h-5" fill="currentColor">
              <path d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0 12.64 12.64 0 0 0-.617-1.25.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 0 0 .031.057 19.9 19.9 0 0 0 5.993 3.03.078.078 0 0 0 .084-.028 14.09 14.09 0 0 0 1.226-1.994.076.076 0 0 0-.041-.106 13.107 13.107 0 0 1-1.872-.892.077.077 0 0 1-.008-.128 10.2 10.2 0 0 0 .372-.292.074.074 0 0 1 .077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 0 1 .078.01c.12.098.246.198.373.292a.077.077 0 0 1-.006.127 12.299 12.299 0 0 1-1.873.892.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028 19.839 19.839 0 0 0 6.002-3.03.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.03zM8.02 15.33c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.956-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.956 2.418-2.157 2.418zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.955-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.946 2.418-2.157 2.418z"/>
            </svg>
            Join Novyx Discord
          </a>
        </section>
      </div>
    </div>
  )
}
