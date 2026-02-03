export default function Changelog() {
  const releases = [
    {
      version: 'v1.1.0',
      date: 'Feb 2, 2026',
      title: 'Launch',
      changes: [
        'Novyx Core public launch',
        'SDK v0.1.2 published to PyPI',
        'Self-service API key generation',
        'Tier enforcement (Free/Starter/Pro/Enterprise)',
        'Magic Rollback with tier gating (3 free, 5 starter, unlimited pro)',
        'Sentinel security API with CORS',
        'Status page with live health checks',
      ],
    },
    {
      version: 'v1.0.0',
      date: 'Jan 2026',
      title: 'Beta',
      changes: [
        'Initial RAM API deployment',
        'Sentinel threat detection',
        'Cryptographic audit trail',
        'SDK beta',
      ],
    },
  ]

  return (
    <div className="animate-fade-in py-16 md:py-24">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-bold mb-4">Changelog</h1>
        <p className="text-gray-400 mb-10">
          What's new in Novyx Core.
        </p>

        <div className="space-y-8">
          {releases.map((release) => (
            <div
              key={release.version}
              className="p-6 rounded-lg border border-border bg-[#18181B]"
            >
              <div className="flex flex-wrap items-center gap-3 mb-4">
                <span className="px-3 py-1 rounded-full bg-primary/20 text-primary font-mono text-sm">
                  {release.version}
                </span>
                <span className="text-gray-400">{release.date}</span>
                <span className="text-white font-medium">— {release.title}</span>
              </div>
              <ul className="space-y-2">
                {release.changes.map((change, idx) => (
                  <li key={idx} className="flex items-start gap-2 text-gray-300">
                    <span className="text-primary mt-1">•</span>
                    {change}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Stay Updated */}
        <div className="mt-12 p-6 rounded-lg border border-border bg-[#18181B] text-center">
          <h3 className="text-lg font-semibold mb-2">Stay Updated</h3>
          <p className="text-gray-400 mb-4">
            Get notified about new releases and features.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a
              href="https://discord.gg/PCxZ3tMj"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 bg-indigo-600 hover:bg-indigo-500 text-white font-medium rounded-lg transition-colors"
            >
              <svg viewBox="0 0 24 24" className="w-5 h-5" fill="currentColor">
                <path d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0 12.64 12.64 0 0 0-.617-1.25.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 0 0 .031.057 19.9 19.9 0 0 0 5.993 3.03.078.078 0 0 0 .084-.028 14.09 14.09 0 0 0 1.226-1.994.076.076 0 0 0-.041-.106 13.107 13.107 0 0 1-1.872-.892.077.077 0 0 1-.008-.128 10.2 10.2 0 0 0 .372-.292.074.074 0 0 1 .077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 0 1 .078.01c.12.098.246.198.373.292a.077.077 0 0 1-.006.127 12.299 12.299 0 0 1-1.873.892.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028 19.839 19.839 0 0 0 6.002-3.03.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.03zM8.02 15.33c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.956-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.956 2.418-2.157 2.418zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.955-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.946 2.418-2.157 2.418z"/>
              </svg>
              Join Discord
            </a>
            <a
              href="https://x.com/NovyxLabs"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 bg-zinc-700 hover:bg-zinc-600 text-white font-medium rounded-lg transition-colors"
            >
              <svg viewBox="0 0 24 24" className="w-5 h-5" fill="currentColor">
                <path d="M13.7 10.6L20 3h-1.5l-5.5 6.7L8.4 3H3l6.7 9.9L3 21h1.5l5.9-7.1L15.6 21H21l-7.3-10.4zm-2.3 2.8l-.7-1L5 4.5h2.4l4.3 6.1.7 1L18.9 19h-2.4l-5.4-7.6z" />
              </svg>
              Follow on X
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}
