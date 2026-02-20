import { Link } from 'react-router-dom'
import CodeBlock from '../components/CodeBlock'

export default function DocsJS() {
  return (
    <div className="animate-fade-in py-16 md:py-24">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-bold mb-4">JavaScript / TypeScript SDK</h1>
        <p className="text-gray-400 mb-4">
          Everything you need to integrate Novyx Core into your AI agents with JavaScript or TypeScript.
        </p>
        <p className="text-sm text-gray-500 mb-10">
          Looking for Python? <Link to="/docs" className="text-primary hover:text-primary-hover">Python SDK docs →</Link>
        </p>

        <div className="mb-12 rounded-lg border border-border bg-[#18181B] p-4 text-sm text-gray-300">
          <strong>Requirements:</strong> Node.js 18+ or any modern browser. Zero dependencies. Full API parity with the Python SDK.
        </div>

        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-4">Quick Start</h2>
          <CodeBlock language="bash" code="npm install novyx" />
          <div className="mt-6">
            <CodeBlock
              language="typescript"
              code={`import { Novyx } from 'novyx';

// Initialize with your API key
const nx = new Novyx({ apiKey: 'nram_your_key_here' });

// Store a temporary memory (expires in 1 hour)
await nx.remember('Session context: user is debugging auth flow', {
  tags: ['session'],
  ttlSeconds: 3600,
});

// Store a permanent memory (default, no TTL)
await nx.remember('User prefers dark mode', { tags: ['prefs'] });

// Search memories (semantic)
const results = await nx.recall('communication preferences');
console.log(results.memories[0].observation);
// "User prefers dark mode"

// Start trace session (Pro tier only)
await nx.traceCreate('agent-1', { metadata: { task: 'send_email' } });

// Rollback (Free: 10/month, Starter: 50/month, Pro+: unlimited)
await nx.rollback({ target: '2026-02-11T14:00:00Z' });`}
            />
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-4">Sessions</h2>
          <p className="text-gray-400 mb-4">
            Group memories by conversation or session. A scoped session automatically tags and filters memories so they stay isolated.
          </p>
          <CodeBlock
            language="typescript"
            code={`const session = nx.session('chat-123');

// Memories are automatically scoped to this session
await session.remember('User asked about pricing');
await session.remember('User is on the Pro plan');

// Only searches memories in this session
const memories = await session.recall('pricing');
console.log(memories.memories[0].observation);
// "User asked about pricing"`}
          />
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-4">Memory Links</h2>
          <p className="text-gray-400 mb-4">
            Create explicit relationships between memories to build a knowledge graph. Links are directional edges with a relation label and optional weight.
          </p>
          <CodeBlock
            language="typescript"
            code={`// Link two memories
await nx.link('memory-uuid-1', 'memory-uuid-2', {
  relation: 'caused_by',
  weight: 0.9,
});

// Get all links for a memory
const links = await nx.links('memory-uuid-1');
console.log(links);
// [{ source_id: "memory-uuid-1", target_id: "memory-uuid-2", relation: "caused_by", weight: 0.9 }]

// Remove a link
await nx.unlink('memory-uuid-1', 'memory-uuid-2');`}
          />

          <h3 className="text-lg font-medium mt-8 mb-4">REST Endpoints</h3>
          <div className="mb-4">
            <CodeBlock
              language="bash"
              code={`# Create a link
curl -X POST https://novyx-ram-api.fly.dev/v1/memories/link \\
  -H "Authorization: Bearer YOUR_API_KEY" \\
  -H "Content-Type: application/json" \\
  -d '{"source_id": "uuid-1", "target_id": "uuid-2", "relation": "caused_by", "weight": 0.9}'`}
            />
          </div>
          <div className="mb-4">
            <CodeBlock
              language="bash"
              code={`# Get links for a memory
curl "https://novyx-ram-api.fly.dev/v1/memories/uuid-1/links" \\
  -H "Authorization: Bearer YOUR_API_KEY"`}
            />
          </div>
          <div>
            <CodeBlock
              language="bash"
              code={`# Delete a link
curl -X DELETE https://novyx-ram-api.fly.dev/v1/memories/link \\
  -H "Authorization: Bearer YOUR_API_KEY" \\
  -H "Content-Type: application/json" \\
  -d '{"source_id": "uuid-1", "target_id": "uuid-2"}'`}
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
  -d '{"observation": "User prefers dark mode", "ttl_seconds": 3600}'`}
            />
            <div className="mt-4">
              <CodeBlock
                language="json"
                code={`{
  "id": "urn:uuid:abc123...",
  "uuid": "abc123...",
  "hash": "sha256:def456...",
  "created_at": "2026-02-11T12:00:00Z",
  "expires_at": "2026-02-11T13:00:00Z",
  "message": "Memory stored successfully",
  "conflict_detected": false,
  "conflict_metadata": null
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
      "created_at": "2026-02-11T12:00:00Z",
      "expires_at": null
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
                  <td className="py-2 font-mono">nx.remember(observation, opts?)</td>
                  <td className="py-2 text-gray-400">Store a memory. Options: tags, onConflict, ttlSeconds (60–7,776,000).</td>
                  <td className="py-2 text-gray-400">All (REJECT only on Free)</td>
                </tr>
                <tr className="border-b border-border">
                  <td className="py-2 font-mono">nx.recall(query, opts?)</td>
                  <td className="py-2 text-gray-400">Semantic search. Options: limit (default 5).</td>
                  <td className="py-2 text-gray-400">All</td>
                </tr>
                <tr className="border-b border-border">
                  <td className="py-2 font-mono">nx.session(sessionId)</td>
                  <td className="py-2 text-gray-400">Scoped session with .remember() and .recall()</td>
                  <td className="py-2 text-gray-400">All</td>
                </tr>
                <tr className="border-b border-border">
                  <td className="py-2 font-mono">nx.link(sourceId, targetId, opts?)</td>
                  <td className="py-2 text-gray-400">Create a link between memories. Options: relation, weight.</td>
                  <td className="py-2 text-gray-400">All</td>
                </tr>
                <tr className="border-b border-border">
                  <td className="py-2 font-mono">nx.unlink(sourceId, targetId)</td>
                  <td className="py-2 text-gray-400">Remove a link between memories</td>
                  <td className="py-2 text-gray-400">All</td>
                </tr>
                <tr className="border-b border-border">
                  <td className="py-2 font-mono">nx.links(memoryId)</td>
                  <td className="py-2 text-gray-400">Get all links for a memory</td>
                  <td className="py-2 text-gray-400">All</td>
                </tr>
                <tr className="border-b border-border">
                  <td className="py-2 font-mono">nx.audit(opts?)</td>
                  <td className="py-2 text-gray-400">Audit trail. Options: limit, since.</td>
                  <td className="py-2 text-gray-400">All</td>
                </tr>
                <tr className="border-b border-border">
                  <td className="py-2 font-mono">nx.traceCreate(agentId, opts?)</td>
                  <td className="py-2 text-gray-400">Start trace session</td>
                  <td className="py-2 text-gray-400">Pro+</td>
                </tr>
                <tr className="border-b border-border">
                  <td className="py-2 font-mono">nx.rollback(opts)</td>
                  <td className="py-2 text-gray-400">Magic Rollback. Options: target (ISO timestamp).</td>
                  <td className="py-2 text-gray-400">All (10/mo Free, 50/mo Starter, Unlimited Pro+)</td>
                </tr>
                <tr className="border-b border-border">
                  <td className="py-2 font-mono">nx.auditExport(opts)</td>
                  <td className="py-2 text-gray-400">Export audit logs. Options: since, until.</td>
                  <td className="py-2 text-gray-400">Starter+</td>
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
