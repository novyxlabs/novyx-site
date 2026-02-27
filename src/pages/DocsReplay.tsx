import { Link } from 'react-router-dom'
import CodeBlock from '../components/CodeBlock'

export default function DocsReplay() {
  return (
    <div className="animate-fade-in py-16 md:py-24">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-bold mb-4">Replay — Time-Travel Debugging</h1>
        <p className="text-gray-400 mb-4">
          Memory-level observability for AI agents. While tools like LangSmith and Langfuse show you LLM traces (what your agent <em>said</em>), Replay shows you what your agent <em>knew</em> — the memories, links, and knowledge state that informed its decisions.
        </p>
        <p className="text-sm text-gray-500 mb-10">
          Back to <Link to="/docs" className="text-primary hover:text-primary-hover">Python SDK docs</Link> · <Link to="/docs/js" className="text-primary hover:text-primary-hover">JS/TS SDK docs</Link>
        </p>

        <div className="mb-12 rounded-lg border border-border bg-[#18181B] p-4 text-sm text-gray-300 space-y-2">
          <p><strong>Requirements:</strong></p>
          <ul className="list-disc list-inside space-y-1 ml-2">
            <li>Pro plan or above</li>
            <li>Postgres backend (all cloud-hosted Novyx accounts use Postgres)</li>
            <li>SDK 2.9.0+ — <span className="font-mono text-gray-300">pip install novyx&gt;=2.9.0</span> / <span className="font-mono text-gray-300">npm install novyx@latest</span></li>
          </ul>
        </div>

        {/* Timeline */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-2">GET /v1/replay/timeline</h2>
          <p className="text-gray-400 mb-4">
            Paginated timeline of all memory operations. The tape you scrub through.
          </p>
          <p className="text-sm text-primary mb-4">Tier: Pro+</p>

          <div className="mb-4">
            <h3 className="text-lg font-medium mb-3">Query Parameters</h3>
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b border-border">
                    <th className="text-left py-2 text-gray-400">Param</th>
                    <th className="text-left py-2 text-gray-400">Type</th>
                    <th className="text-left py-2 text-gray-400">Required</th>
                    <th className="text-left py-2 text-gray-400">Description</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b border-border"><td className="py-2 font-mono">since</td><td className="py-2 text-gray-400">ISO datetime</td><td className="py-2 text-gray-400">No</td><td className="py-2 text-gray-400">Start of time range</td></tr>
                  <tr className="border-b border-border"><td className="py-2 font-mono">until</td><td className="py-2 text-gray-400">ISO datetime</td><td className="py-2 text-gray-400">No</td><td className="py-2 text-gray-400">End of time range</td></tr>
                  <tr className="border-b border-border"><td className="py-2 font-mono">operations</td><td className="py-2 text-gray-400">string</td><td className="py-2 text-gray-400">No</td><td className="py-2 text-gray-400">Comma-separated filter: create, update, delete, rollback</td></tr>
                  <tr className="border-b border-border"><td className="py-2 font-mono">agent_id</td><td className="py-2 text-gray-400">string</td><td className="py-2 text-gray-400">No</td><td className="py-2 text-gray-400">Filter by agent ID</td></tr>
                  <tr className="border-b border-border"><td className="py-2 font-mono">limit</td><td className="py-2 text-gray-400">int</td><td className="py-2 text-gray-400">No</td><td className="py-2 text-gray-400">1–1000, default 100</td></tr>
                  <tr className="border-b border-border"><td className="py-2 font-mono">offset</td><td className="py-2 text-gray-400">int</td><td className="py-2 text-gray-400">No</td><td className="py-2 text-gray-400">Default 0</td></tr>
                </tbody>
              </table>
            </div>
          </div>

          <div className="mb-4">
            <CodeBlock
              language="bash"
              code={`curl "https://novyx-ram-api.fly.dev/v1/replay/timeline?since=2026-02-19T00:00:00Z&limit=10" \\
  -H "Authorization: Bearer YOUR_API_KEY"`}
            />
          </div>
          <div className="mb-4">
            <CodeBlock
              language="json"
              code={`{
  "entries": [
    {
      "timestamp": "2026-02-20T14:30:00Z",
      "operation": "create",
      "memory_id": "abc-123",
      "observation_preview": "User prefers dark mode and...",
      "agent_id": "support-bot",
      "importance": 7,
      "content_hash": "sha256:...",
      "metadata": {}
    }
  ],
  "total_count": 42,
  "has_more": true,
  "period_start": "2026-02-19T00:00:00Z",
  "period_end": "2026-02-20T00:00:00Z"
}`}
            />
          </div>
          <CodeBlock
            language="python"
            code={`timeline = nx.replay_timeline(since="2026-02-19T00:00:00Z", limit=10)
for entry in timeline["entries"]:
    print(f"{entry['timestamp']} — {entry['operation']} — {entry['observation_preview']}")`}
          />
          <div className="mt-4">
            <CodeBlock
              language="typescript"
              code={`const timeline = await nx.replayTimeline({ since: "2026-02-19T00:00:00Z", limit: 10 });
for (const entry of timeline.entries) {
  console.log(\`\${entry.timestamp} — \${entry.operation} — \${entry.observation_preview}\`);
}`}
            />
          </div>
        </section>

        {/* Snapshot */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-2">GET /v1/replay/snapshot</h2>
          <p className="text-gray-400 mb-4">
            Reconstruct the full memory + link graph state at any timestamp.
          </p>
          <p className="text-sm text-primary mb-4">Tier: Pro+</p>

          <div className="mb-4">
            <h3 className="text-lg font-medium mb-3">Query Parameters</h3>
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b border-border">
                    <th className="text-left py-2 text-gray-400">Param</th>
                    <th className="text-left py-2 text-gray-400">Type</th>
                    <th className="text-left py-2 text-gray-400">Required</th>
                    <th className="text-left py-2 text-gray-400">Description</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b border-border"><td className="py-2 font-mono">at</td><td className="py-2 text-gray-400">ISO datetime</td><td className="py-2 text-gray-400 font-semibold">Yes</td><td className="py-2 text-gray-400">The timestamp to reconstruct</td></tr>
                  <tr className="border-b border-border"><td className="py-2 font-mono">limit</td><td className="py-2 text-gray-400">int</td><td className="py-2 text-gray-400">No</td><td className="py-2 text-gray-400">1–5000, default 500</td></tr>
                  <tr className="border-b border-border"><td className="py-2 font-mono">offset</td><td className="py-2 text-gray-400">int</td><td className="py-2 text-gray-400">No</td><td className="py-2 text-gray-400">Default 0</td></tr>
                </tbody>
              </table>
            </div>
          </div>

          <div className="mb-4">
            <CodeBlock
              language="bash"
              code={`curl "https://novyx-ram-api.fly.dev/v1/replay/snapshot?at=2026-02-19T12:00:00Z" \\
  -H "Authorization: Bearer YOUR_API_KEY"`}
            />
          </div>
          <div className="mb-4">
            <CodeBlock
              language="json"
              code={`{
  "snapshot_at": "2026-02-19T12:00:00Z",
  "total_memories": 128,
  "memories": [
    {
      "uuid": "abc-123",
      "observation": "User prefers dark mode",
      "context": "settings-conversation",
      "agent_id": "support-bot",
      "tags": ["ui", "preference"],
      "importance": 7,
      "confidence": 0.95,
      "created_at": "2026-02-18T10:00:00Z",
      "space_id": null
    }
  ],
  "edges": [
    {
      "edge_id": "edge-456",
      "source_id": "abc-123",
      "target_id": "def-789",
      "relation": "related_to",
      "weight": 0.85
    }
  ],
  "total_edges": 45
}`}
            />
          </div>
          <CodeBlock
            language="python"
            code={`snapshot = nx.replay_snapshot(at="2026-02-19T12:00:00Z")
print(f"Agent had {snapshot['total_memories']} memories and {snapshot['total_edges']} links at noon yesterday")`}
          />
          <div className="mt-4">
            <CodeBlock
              language="typescript"
              code={`const snapshot = await nx.replaySnapshot({ at: "2026-02-19T12:00:00Z" });
console.log(\`Agent had \${snapshot.total_memories} memories and \${snapshot.total_edges} links\`);`}
            />
          </div>
        </section>

        {/* Memory Lifecycle */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-2">GET /v1/replay/memory/{'{memory_id}'}</h2>
          <p className="text-gray-400 mb-4">
            Full lifecycle of a single memory — from creation to deletion.
          </p>
          <p className="text-sm text-primary mb-4">Tier: Pro+</p>

          <div className="mb-4">
            <CodeBlock
              language="bash"
              code={`curl "https://novyx-ram-api.fly.dev/v1/replay/memory/abc-123" \\
  -H "Authorization: Bearer YOUR_API_KEY"`}
            />
          </div>
          <div className="mb-4">
            <CodeBlock
              language="json"
              code={`{
  "memory_id": "abc-123",
  "observation": "User prefers dark mode",
  "created_at": "2026-02-18T10:00:00Z",
  "current_state": "active",
  "events": [
    { "timestamp": "2026-02-18T10:00:00Z", "event_type": "created", "detail": {} },
    { "timestamp": "2026-02-18T14:00:00Z", "event_type": "recalled", "detail": { "query": "user preferences" } },
    { "timestamp": "2026-02-19T09:00:00Z", "event_type": "updated", "detail": { "field": "importance", "from": 5, "to": 8 } }
  ],
  "versions": [
    { "version": 1, "observation": "User prefers dark mode", "timestamp": "2026-02-18T10:00:00Z" }
  ],
  "links": [
    { "edge_id": "edge-456", "source_id": "abc-123", "target_id": "def-789", "relation": "related_to", "weight": 0.85 }
  ],
  "recall_count": 3,
  "last_recalled_at": "2026-02-19T16:30:00Z"
}`}
            />
          </div>
          <CodeBlock
            language="python"
            code={`lifecycle = nx.replay_memory("abc-123")
print(f"Memory recalled {lifecycle['recall_count']} times, currently {lifecycle['current_state']}")
for event in lifecycle["events"]:
    print(f"  {event['timestamp']}: {event['event_type']}")`}
          />
        </section>

        {/* Diff */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-2">GET /v1/replay/diff</h2>
          <p className="text-gray-400 mb-4">
            Compare memory state between two timestamps. What was added, removed, modified.
          </p>
          <p className="text-sm text-primary mb-4">Tier: Pro+</p>

          <div className="mb-4">
            <h3 className="text-lg font-medium mb-3">Query Parameters</h3>
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b border-border">
                    <th className="text-left py-2 text-gray-400">Param</th>
                    <th className="text-left py-2 text-gray-400">Type</th>
                    <th className="text-left py-2 text-gray-400">Required</th>
                    <th className="text-left py-2 text-gray-400">Description</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b border-border"><td className="py-2 font-mono">from</td><td className="py-2 text-gray-400">ISO datetime</td><td className="py-2 text-gray-400 font-semibold">Yes</td><td className="py-2 text-gray-400">Start timestamp</td></tr>
                  <tr className="border-b border-border"><td className="py-2 font-mono">to</td><td className="py-2 text-gray-400">ISO datetime</td><td className="py-2 text-gray-400 font-semibold">Yes</td><td className="py-2 text-gray-400">End timestamp (must be after from)</td></tr>
                </tbody>
              </table>
            </div>
          </div>

          <div className="mb-4">
            <CodeBlock
              language="bash"
              code={`curl "https://novyx-ram-api.fly.dev/v1/replay/diff?from=2026-02-19T00:00:00Z&to=2026-02-20T00:00:00Z" \\
  -H "Authorization: Bearer YOUR_API_KEY"`}
            />
          </div>
          <div className="mb-4">
            <CodeBlock
              language="json"
              code={`{
  "from_timestamp": "2026-02-19T00:00:00Z",
  "to_timestamp": "2026-02-20T00:00:00Z",
  "added": [
    { "memory_id": "new-1", "change_type": "added", "observation_preview": "New memory...", "importance": 6 }
  ],
  "removed": [
    { "memory_id": "old-1", "change_type": "removed", "observation_preview": "Deleted memory...", "importance": 3 }
  ],
  "modified": [
    { "memory_id": "mod-1", "change_type": "modified", "observation_preview": "Updated memory...", "importance": 8 }
  ],
  "summary": { "added": 5, "removed": 2, "modified": 3 }
}`}
            />
          </div>
          <CodeBlock
            language="python"
            code={`diff = nx.replay_diff(from_ts="2026-02-19T00:00:00Z", to_ts="2026-02-20T00:00:00Z")
print(f"+{diff['summary']['added']} / -{diff['summary']['removed']} / ~{diff['summary']['modified']}")`}
          />
        </section>

        {/* Counterfactual Recall */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-2">POST /v1/replay/recall</h2>
          <p className="text-gray-400 mb-4">
            Counterfactual recall — what would the agent have recalled at time T? Re-runs semantic search (same embedding model, same scoring) against the historical memory snapshot.
          </p>
          <p className="text-sm text-yellow-400/80 mb-4">Tier: Enterprise</p>

          <div className="mb-4">
            <CodeBlock
              language="bash"
              code={`curl -X POST "https://novyx-ram-api.fly.dev/v1/replay/recall" \\
  -H "Authorization: Bearer YOUR_API_KEY" \\
  -H "Content-Type: application/json" \\
  -d '{
    "query": "What are the user'\\''s UI preferences?",
    "at": "2026-02-19T12:00:00Z",
    "limit": 5
  }'`}
            />
          </div>
          <div className="mb-4">
            <CodeBlock
              language="json"
              code={`{
  "query": "What are the user's UI preferences?",
  "snapshot_at": "2026-02-19T12:00:00Z",
  "total_results": 3,
  "results": [
    {
      "uuid": "abc-123",
      "observation": "User prefers dark mode",
      "similarity": 0.89,
      "score": 0.78,
      "importance": 7,
      "confidence": 0.95,
      "created_at": "2026-02-18T10:00:00Z"
    }
  ]
}`}
            />
          </div>
          <CodeBlock
            language="python"
            code={`result = nx.replay_recall("user UI preferences", at="2026-02-19T12:00:00Z")
for r in result["results"]:
    print(f"  [{r['score']:.2f}] {r['observation']}")`}
          />
        </section>

        {/* Drift Analysis */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-2">GET /v1/replay/drift</h2>
          <p className="text-gray-400 mb-4">
            Analyze how memory composition evolves over time. Tag frequency shifts, importance distribution changes, emerging and disappearing topics.
          </p>
          <p className="text-sm text-yellow-400/80 mb-4">Tier: Enterprise</p>

          <div className="mb-4">
            <h3 className="text-lg font-medium mb-3">Query Parameters</h3>
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b border-border">
                    <th className="text-left py-2 text-gray-400">Param</th>
                    <th className="text-left py-2 text-gray-400">Type</th>
                    <th className="text-left py-2 text-gray-400">Required</th>
                    <th className="text-left py-2 text-gray-400">Description</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b border-border"><td className="py-2 font-mono">from</td><td className="py-2 text-gray-400">ISO datetime</td><td className="py-2 text-gray-400 font-semibold">Yes</td><td className="py-2 text-gray-400">Start timestamp</td></tr>
                  <tr className="border-b border-border"><td className="py-2 font-mono">to</td><td className="py-2 text-gray-400">ISO datetime</td><td className="py-2 text-gray-400 font-semibold">Yes</td><td className="py-2 text-gray-400">End timestamp</td></tr>
                </tbody>
              </table>
            </div>
          </div>

          <div className="mb-4">
            <CodeBlock
              language="bash"
              code={`curl "https://novyx-ram-api.fly.dev/v1/replay/drift?from=2026-02-01T00:00:00Z&to=2026-02-20T00:00:00Z" \\
  -H "Authorization: Bearer YOUR_API_KEY"`}
            />
          </div>
          <div className="mb-4">
            <CodeBlock
              language="json"
              code={`{
  "from_timestamp": "2026-02-01T00:00:00Z",
  "to_timestamp": "2026-02-20T00:00:00Z",
  "memory_count_from": 85,
  "memory_count_to": 142,
  "memory_count_delta": 57,
  "avg_importance_from": 5.2,
  "avg_importance_to": 6.1,
  "avg_importance_delta": 0.9,
  "tag_shifts": [
    { "tag": "billing", "count_from": 3, "count_to": 18, "delta": 15 },
    { "tag": "onboarding", "count_from": 12, "count_to": 4, "delta": -8 }
  ],
  "importance_distribution_from": { "1-2": 5, "3-4": 20, "5-6": 35, "7-8": 20, "9-10": 5 },
  "importance_distribution_to": { "1-2": 3, "3-4": 15, "5-6": 40, "7-8": 55, "9-10": 29 },
  "top_new_topics": ["billing", "enterprise", "api-keys"],
  "top_lost_topics": ["onboarding", "setup", "tutorial"]
}`}
            />
          </div>
          <CodeBlock
            language="python"
            code={`drift = nx.replay_drift(from_ts="2026-02-01T00:00:00Z", to_ts="2026-02-20T00:00:00Z")
print(f"Memory grew by {drift['memory_count_delta']} ({drift['memory_count_from']} → {drift['memory_count_to']})")
print(f"Avg importance shifted by {drift['avg_importance_delta']:+.1f}")
for shift in drift["tag_shifts"][:5]:
    print(f"  {shift['tag']}: {shift['count_from']} → {shift['count_to']} ({shift['delta']:+d})")`}
          />
        </section>

        {/* Error Codes */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-4">Error Responses</h2>
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-border">
                  <th className="text-left py-2 text-gray-400">Code</th>
                  <th className="text-left py-2 text-gray-400">When</th>
                  <th className="text-left py-2 text-gray-400">Message</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-border"><td className="py-2 font-mono">401</td><td className="py-2 text-gray-400">No auth header</td><td className="py-2 text-gray-400">Missing Authorization header</td></tr>
                <tr className="border-b border-border"><td className="py-2 font-mono">403</td><td className="py-2 text-gray-400">Free/Starter tier</td><td className="py-2 text-gray-400">Replay requires Pro plan or above</td></tr>
                <tr className="border-b border-border"><td className="py-2 font-mono">403</td><td className="py-2 text-gray-400">Pro hitting Enterprise endpoint</td><td className="py-2 text-gray-400">This replay feature requires Enterprise plan</td></tr>
                <tr className="border-b border-border"><td className="py-2 font-mono">404</td><td className="py-2 text-gray-400">Memory not found (lifecycle)</td><td className="py-2 text-gray-400">Memory not found</td></tr>
                <tr className="border-b border-border"><td className="py-2 font-mono">422</td><td className="py-2 text-gray-400">from &gt;= to on diff/drift</td><td className="py-2 text-gray-400">&apos;from&apos; must be before &apos;to&apos;</td></tr>
                <tr className="border-b border-border"><td className="py-2 font-mono">501</td><td className="py-2 text-gray-400">Non-Postgres backend</td><td className="py-2 text-gray-400">Replay features require Postgres backend</td></tr>
              </tbody>
            </table>
          </div>
        </section>

        {/* Need Help */}
        <section className="mb-12 p-6 rounded-lg border border-border bg-[#18181B]">
          <h2 className="text-lg font-semibold mb-2">Need Help?</h2>
          <p className="text-gray-400 mb-4">
            Having trouble with Replay? Check the{' '}
            <Link to="/docs" className="text-primary hover:text-primary-hover">
              API docs
            </Link>
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
