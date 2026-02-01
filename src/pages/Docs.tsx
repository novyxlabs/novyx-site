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
nx.rollback(to="2025-01-30T14:00:00Z")`}
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
                  <td className="py-2 text-gray-400">Magic Rollback™</td>
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
      </div>
    </div>
  )
}
