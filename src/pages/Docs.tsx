import CodeBlock from '../components/CodeBlock'

export default function Docs() {
  return (
    <div className="animate-fade-in py-16 md:py-24">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-bold mb-4">API Documentation</h1>
        <p className="text-gray-400 mb-10">
          Everything you need to integrate Novyx Core into your AI agents.
        </p>

        <div className="mb-12 rounded-lg border border-border bg-[#18181B] p-4 text-sm text-gray-300">
          Use the <span className="text-white">Get Free API Key</span> button to generate a key.
          Save it immediately — you won&apos;t see it again.
        </div>

        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-4">Quick Start</h2>
          <CodeBlock language="bash" code="pip3 install novyx" />
          <div className="mt-6">
            <CodeBlock
              language="python"
              code={`from novyx import Novyx

# Initialize with your API key
nx = Novyx(api_key="YOUR_API_KEY")

# Store a memory
nx.remember("User prefers dark mode and hates email follow-ups")

# Search memories (semantic)
results = nx.recall("communication preferences")
print(results)
# [{"content": "User prefers dark mode and hates email follow-ups", "score": 0.89}]

# Protected action (Pro tier - requires Sentinel)
try:
    nx.act("send_email", {"to": "user@example.com"})
except NovyxSecurityError as e:
    print(f"Blocked: {e}")

# Rollback (Pro tier)
nx.rollback(target="2025-01-30T14:00:00Z")`}
            />
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-4">API Reference</h2>

          <div className="mb-8">
            <h3 className="text-lg font-medium mb-2">Store Memory</h3>
            <CodeBlock
              language="bash"
              code={`curl -X POST https://novyx-ram-api.fly.dev/v1/memories \\
  -H "Authorization: Bearer YOUR_API_KEY" \\
  -H "Content-Type: application/json" \\
  -d '{"observation": "User prefers dark mode"}'`}
            />
            <div className="mt-4">
              <CodeBlock
                language="json"
                code={`{
  "id": "urn:uuid:abc123...",
  "hash": "sha256:def456...",
  "created_at": "2025-01-31T12:00:00Z"
}`}
              />
            </div>
          </div>

          <div className="mb-8">
            <h3 className="text-lg font-medium mb-2">Search Memories</h3>
            <CodeBlock
              language="bash"
              code={`curl "https://novyx-ram-api.fly.dev/v1/memories/search?q=preferences&limit=5" \\
  -H "Authorization: Bearer YOUR_API_KEY"`}
            />
            <div className="mt-4">
              <CodeBlock
                language="json"
                code={`{
  "query": "preferences",
  "total_results": 1,
  "memories": [
    {
      "observation": "User prefers dark mode",
      "score": 0.85,
      "created_at": "2025-01-31T12:00:00Z"
    }
  ]
}`}
              />
            </div>
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-4">SDK Reference</h2>
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-border">
                  <th className="text-left py-2 text-gray-400">Method</th>
                  <th className="text-left py-2 text-gray-400">Description</th>
                  <th className="text-left py-2 text-gray-400">Tier</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-border">
                  <td className="py-2 font-mono">nx.remember(content, tags=[])</td>
                  <td className="py-2 text-gray-400">Store a memory</td>
                  <td className="py-2 text-gray-400">All</td>
                </tr>
                <tr className="border-b border-border">
                  <td className="py-2 font-mono">nx.recall(query, limit=5)</td>
                  <td className="py-2 text-gray-400">Semantic search</td>
                  <td className="py-2 text-gray-400">All</td>
                </tr>
                <tr className="border-b border-border">
                  <td className="py-2 font-mono">nx.act(action, params)</td>
                  <td className="py-2 text-gray-400">Protected action</td>
                  <td className="py-2 text-gray-400">Pro+</td>
                </tr>
                <tr className="border-b border-border">
                  <td className="py-2 font-mono">nx.rollback(target)</td>
                  <td className="py-2 text-gray-400">Magic Rollback</td>
                  <td className="py-2 text-gray-400">Pro+</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-4">Error Codes</h2>
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-border">
                  <th className="text-left py-2 text-gray-400">Code</th>
                  <th className="text-left py-2 text-gray-400">Meaning</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-border">
                  <td className="py-2 font-mono">401</td>
                  <td className="py-2 text-gray-400">Invalid API key</td>
                </tr>
                <tr className="border-b border-border">
                  <td className="py-2 font-mono">403</td>
                  <td className="py-2 text-gray-400">Feature not available on your tier</td>
                </tr>
                <tr className="border-b border-border">
                  <td className="py-2 font-mono">422</td>
                  <td className="py-2 text-gray-400">Invalid request parameters</td>
                </tr>
                <tr className="border-b border-border">
                  <td className="py-2 font-mono">429</td>
                  <td className="py-2 text-gray-400">Rate limit exceeded</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        <section className="mb-12 p-6 rounded-lg border border-border bg-[#18181B]">
          <h2 className="text-lg font-semibold mb-2">Need Help?</h2>
          <p className="text-gray-400 mb-4">
            Having trouble with the API? Check the{' '}
            <a href="/errors" className="text-primary hover:text-primary-hover">
              Error Reference
            </a>
            {' '}or reach out to{' '}
            <a href="mailto:support@novyxlabs.com" className="text-primary hover:text-primary-hover">
              support@novyxlabs.com
            </a>
          </p>
          <a
            href="https://discord.gg/PCxZ3tMj"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-4 py-2 bg-indigo-600 hover:bg-indigo-500 text-white text-sm font-medium rounded-lg transition-colors"
          >
            <svg viewBox="0 0 24 24" className="w-4 h-4" fill="currentColor">
              <path d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0 12.64 12.64 0 0 0-.617-1.25.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 0 0 .031.057 19.9 19.9 0 0 0 5.993 3.03.078.078 0 0 0 .084-.028 14.09 14.09 0 0 0 1.226-1.994.076.076 0 0 0-.041-.106 13.107 13.107 0 0 1-1.872-.892.077.077 0 0 1-.008-.128 10.2 10.2 0 0 0 .372-.292.074.074 0 0 1 .077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 0 1 .078.01c.12.098.246.198.373.292a.077.077 0 0 1-.006.127 12.299 12.299 0 0 1-1.873.892.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028 19.839 19.839 0 0 0 6.002-3.03.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.03zM8.02 15.33c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.956-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.956 2.418-2.157 2.418zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.955-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.946 2.418-2.157 2.418z"/>
            </svg>
            Join our Discord
          </a>
        </section>
      </div>
    </div>
  )
}
