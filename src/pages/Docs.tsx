import CodeBlock from '../components/CodeBlock'

export default function Docs() {
  return (
    <div className="animate-fade-in py-16 md:py-24">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-bold mb-4">API Documentation</h1>
        <p className="text-gray-400 mb-12">
          Everything you need to integrate Novyx RAM into your AI agents.
        </p>

        {/* API Key Notice */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-4">Get a Free API Key</h2>
          <p className="text-gray-400">
            To get your free API key, email <span className="text-white">blake@novyxlabs.com</span>{' '}
            with subject <span className="text-white">RAM API Key Request</span>.
          </p>
        </section>

        {/* Authentication */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-4">Authentication</h2>
          <p className="text-gray-400 mb-4">
            All API requests require a Bearer token in the Authorization header.
          </p>
          <CodeBlock
            language="bash"
            code={`curl https://novyx-ram-api.fly.dev/v1/memories \\
  -H "Authorization: Bearer YOUR_API_KEY"`}
          />
        </section>

        {/* Base URL */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-4">Base URL</h2>
          <div className="p-4 rounded-lg bg-[#0D1117] border border-[#30363D]">
            <code className="text-accent-ram font-mono">https://novyx-ram-api.fly.dev</code>
          </div>
        </section>

        {/* Store Memory */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-4">Store a Memory</h2>
          <div className="mb-4">
            <span className="inline-flex items-center px-2 py-1 rounded text-xs font-medium bg-blue-500/20 text-blue-400 mr-2">
              POST
            </span>
            <code className="text-sm font-mono">/v1/memories</code>
          </div>
          <p className="text-gray-400 mb-4">
            Store an observation in your agent's memory. Observations are automatically embedded for semantic search.
          </p>
          <CodeBlock
            language="bash"
            code={`curl -X POST https://novyx-ram-api.fly.dev/v1/memories \\
  -H "Authorization: Bearer YOUR_API_KEY" \\
  -H "Content-Type: application/json" \\
  -d '{"observation": "User prefers dark mode"}'`}
          />
          <h3 className="text-lg font-medium mt-6 mb-3">Request Body</h3>
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-border">
                  <th className="text-left py-2 text-gray-400">Field</th>
                  <th className="text-left py-2 text-gray-400">Type</th>
                  <th className="text-left py-2 text-gray-400">Description</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-border">
                  <td className="py-2 font-mono">observation</td>
                  <td className="py-2 text-gray-400">string</td>
                  <td className="py-2 text-gray-400">The memory to store (required)</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        {/* Search Memories */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-4">Search Memories</h2>
          <div className="mb-4">
            <span className="inline-flex items-center px-2 py-1 rounded text-xs font-medium bg-green-500/20 text-green-400 mr-2">
              GET
            </span>
            <code className="text-sm font-mono">/v1/memories/search</code>
          </div>
          <p className="text-gray-400 mb-4">
            Search memories by meaning, not just keywords. Returns the most relevant memories for your query.
          </p>
          <CodeBlock
            language="bash"
            code={`curl "https://novyx-ram-api.fly.dev/v1/memories/search?q=user%20preferences" \\
  -H "Authorization: Bearer YOUR_API_KEY"`}
          />
          <h3 className="text-lg font-medium mt-6 mb-3">Query Parameters</h3>
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-border">
                  <th className="text-left py-2 text-gray-400">Parameter</th>
                  <th className="text-left py-2 text-gray-400">Type</th>
                  <th className="text-left py-2 text-gray-400">Description</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-border">
                  <td className="py-2 font-mono">q</td>
                  <td className="py-2 text-gray-400">string</td>
                  <td className="py-2 text-gray-400">Search query (required)</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        {/* List Memories */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-4">List All Memories</h2>
          <div className="mb-4">
            <span className="inline-flex items-center px-2 py-1 rounded text-xs font-medium bg-green-500/20 text-green-400 mr-2">
              GET
            </span>
            <code className="text-sm font-mono">/v1/memories</code>
          </div>
          <p className="text-gray-400 mb-4">
            Retrieve all stored memories for your agent.
          </p>
          <CodeBlock
            language="bash"
            code={`curl https://novyx-ram-api.fly.dev/v1/memories \\
  -H "Authorization: Bearer YOUR_API_KEY"`}
          />
        </section>

        {/* Python SDK */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-4">Python SDK</h2>
          <p className="text-gray-400 mb-4">
            Install the official Python SDK for easier integration.
          </p>
          <CodeBlock language="bash" code="pip install novyx-langchain" />
          <h3 className="text-lg font-medium mt-6 mb-3">Usage</h3>
          <CodeBlock
            language="python"
            code={`from novyx_langchain import NovyxMemory

memory = NovyxMemory(api_key="YOUR_KEY")

# Store a memory
memory.save("User prefers dark mode")

# Search memories
results = memory.search("preferences")
for result in results:
    print(result.observation)`}
          />
        </section>

        {/* Rate Limits */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-4">Rate Limits</h2>
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-border">
                  <th className="text-left py-2 text-gray-400">Plan</th>
                  <th className="text-left py-2 text-gray-400">Requests/min</th>
                  <th className="text-left py-2 text-gray-400">Memories</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-border">
                  <td className="py-2">Free</td>
                  <td className="py-2 text-gray-400">60</td>
                  <td className="py-2 text-gray-400">1,000</td>
                </tr>
                <tr className="border-b border-border">
                  <td className="py-2">Pro</td>
                  <td className="py-2 text-gray-400">600</td>
                  <td className="py-2 text-gray-400">25,000</td>
                </tr>
                <tr className="border-b border-border">
                  <td className="py-2">Enterprise</td>
                  <td className="py-2 text-gray-400">Unlimited</td>
                  <td className="py-2 text-gray-400">Unlimited</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>
      </div>
    </div>
  )
}
