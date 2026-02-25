import { Link } from 'react-router-dom'
import CodeBlock from '../components/CodeBlock'

export default function Docs() {
  return (
    <div className="animate-fade-in py-16 md:py-24">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-bold mb-4">API Documentation</h1>
        <p className="text-gray-400 mb-4">
          Everything you need to integrate Novyx Core into your AI agents.
        </p>
        <p className="text-sm text-gray-500 mb-10">
          Using JavaScript? <Link to="/docs/js" className="text-primary hover:text-primary-hover">JS / TS SDK docs →</Link>{' · '}
          <Link to="/docs/replay" className="text-primary hover:text-primary-hover">Replay docs →</Link>
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

# Store a temporary memory (expires in 1 hour)
nx.remember("Session context: user is debugging auth flow",
            tags=["session"], ttl_seconds=3600)

# Store a permanent memory (default, no TTL)
nx.remember("User prefers dark mode", tags=["prefs"])

# Search memories (semantic)
results = nx.recall("communication preferences")
print(results.memories[0].observation)
# "User prefers dark mode and hates email follow-ups"

# Start trace session (Pro tier only)
nx.trace_create("agent-1", metadata={"task": "send_email"})

# Rollback (Free: 10/month, Starter: 50/month, Pro+: unlimited)
nx.rollback(target="2026-02-11T14:00:00Z")`}
            />
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-4">API Reference</h2>

          <div className="mb-8">
            <h3 className="text-lg font-medium mb-2">POST /v1/memories — Store Memory</h3>
            <CodeBlock
              language="bash"
              code={`curl -X POST https://novyx-ram-api.fly.dev/v1/memories \\
  -H "Authorization: Bearer YOUR_API_KEY" \\
  -H "Content-Type: application/json" \\
  -d '{
    "observation": "User prefers dark mode for all interfaces",
    "tags": ["preference", "ui"],
    "importance": 7,
    "context": "Settings discussion",
    "ttl_seconds": 86400,
    "auto_link": true
  }'`}
            />
            <div className="mt-4">
              <CodeBlock
                language="json"
                code={`{
  "id": "urn:uuid:a1b2c3d4-...",
  "uuid": "urn:uuid:a1b2c3d4-...",
  "hash": "sha256:9f86d08...",
  "created_at": "2026-02-20T18:30:00+00:00",
  "message": "Memory stored successfully",
  "conflict_detected": false,
  "conflict_metadata": null,
  "auto_links": ["urn:uuid:e5f6g7h8-..."]
}`}
              />
            </div>
            <p className="mt-3 text-sm text-gray-400">
              <strong className="text-gray-300">Optional fields:</strong> agent_id, space_id, ttl_seconds (auto-expire), auto_link (link to similar memories). Confidence is set server-side.
            </p>
          </div>

          <div className="mb-8">
            <h3 className="text-lg font-medium mb-2">GET /v1/memories/search — Semantic Search</h3>
            <CodeBlock
              language="bash"
              code={`curl "https://novyx-ram-api.fly.dev/v1/memories/search?q=user+preferences&limit=5&recency_weight=0.3&include_superseded=false" \\
  -H "Authorization: Bearer YOUR_API_KEY"`}
            />
            <div className="mt-4">
              <CodeBlock
                language="json"
                code={`{
  "query": "user preferences",
  "total_results": 3,
  "memories": [
    {
      "uuid": "urn:uuid:a1b2c3d4-...",
      "observation": "User prefers dark mode for all interfaces",
      "tags": ["preference", "ui"],
      "importance": 7,
      "confidence": 1.0,
      "score": 0.82,
      "similarity": 0.91,
      "match_confidence": 0.4928,
      "created_at": "2026-02-20T18:30:00+00:00",
      "expires_at": "2026-02-21T18:30:00+00:00",
      "superseded_by": null
    }
  ]
}`}
              />
            </div>
            <div className="mt-3 text-sm text-gray-400 space-y-1">
              <p><strong className="text-gray-300">Query params:</strong></p>
              <ul className="list-disc list-inside space-y-1 ml-2">
                <li><span className="font-mono text-gray-300">q</span> (required) — search query</li>
                <li><span className="font-mono text-gray-300">limit</span> — max results (default 5, max 100)</li>
                <li><span className="font-mono text-gray-300">min_score</span> — minimum similarity (0.0–1.0)</li>
                <li><span className="font-mono text-gray-300">tags</span> — comma-separated tag filter</li>
                <li><span className="font-mono text-gray-300">recency_weight</span> — blend recency into scoring (0.0 = disabled, 1.0 = fully recency-based)</li>
                <li><span className="font-mono text-gray-300">include_superseded</span> — include replaced memories (default false)</li>
              </ul>
            </div>
          </div>

          <div className="mb-8">
            <h3 className="text-lg font-medium mb-2">GET /v1/memories/{'{id}'} — Get Memory</h3>
            <CodeBlock
              language="bash"
              code={`curl "https://novyx-ram-api.fly.dev/v1/memories/urn:uuid:a1b2c3d4-..." \\
  -H "Authorization: Bearer YOUR_API_KEY"`}
            />
            <div className="mt-4">
              <CodeBlock
                language="json"
                code={`{
  "uuid": "urn:uuid:a1b2c3d4-...",
  "observation": "User prefers dark mode for all interfaces",
  "context": "Settings discussion",
  "agent_id": null,
  "tags": ["preference", "ui"],
  "importance": 7,
  "confidence": 1.0,
  "created_at": "2026-02-20T18:30:00+00:00",
  "expires_at": "2026-02-21T18:30:00+00:00",
  "superseded_by": null,
  "recall_count": 3,
  "last_recalled_at": "2026-02-20T19:45:00+00:00"
}`}
              />
            </div>
          </div>

          <div className="mb-8">
            <h3 className="text-lg font-medium mb-2">PATCH /v1/memories/{'{id}'} — Update Memory</h3>
            <CodeBlock
              language="bash"
              code={`curl -X PATCH "https://novyx-ram-api.fly.dev/v1/memories/urn:uuid:a1b2c3d4-..." \\
  -H "Authorization: Bearer YOUR_API_KEY" \\
  -H "Content-Type: application/json" \\
  -d '{
    "importance": 9,
    "tags": ["preference", "ui", "confirmed"]
  }'`}
            />
            <p className="mt-3 text-sm text-gray-400">
              Response has the same shape as GET /v1/memories/{'{id}'} with updated fields.
            </p>
            <p className="mt-2 text-sm text-gray-400">
              <strong className="text-gray-300">Updatable fields:</strong> observation, importance, confidence, tags, superseded_by (UUID of the memory that replaces this one — marks it as outdated).
            </p>
          </div>

          <div className="mb-8">
            <h3 className="text-lg font-medium mb-2">GET /v1/context/now — Temporal Context</h3>
            <CodeBlock
              language="bash"
              code={`curl "https://novyx-ram-api.fly.dev/v1/context/now" \\
  -H "Authorization: Bearer YOUR_API_KEY"`}
            />
            <div className="mt-4">
              <CodeBlock
                language="json"
                code={`{
  "server_time_utc": "2026-02-20T20:00:00+00:00",
  "recent_memories": [...],
  "recent_count": 5,
  "upcoming": [],
  "upcoming_count": 0,
  "last_session_at": "2026-02-20T19:45:00+00:00",
  "seconds_since_last_session": 900
}`}
              />
            </div>
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-4">Sessions</h2>
          <p className="text-gray-400 mb-4">
            Group memories by conversation or session. A scoped session automatically tags and filters memories so they stay isolated.
          </p>
          <CodeBlock
            language="python"
            code={`session = nx.session("chat-123")

# Memories are automatically scoped to this session
session.remember("User asked about pricing")
session.remember("User is on the Pro plan")

# Only searches memories in this session
memories = session.recall("pricing")
print(memories.memories[0].observation)
# "User asked about pricing"`}
          />
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-4">Memory Links</h2>
          <p className="text-gray-400 mb-4">
            Create explicit relationships between memories to build a knowledge graph. Links are directional edges with a relation label and optional weight.
          </p>
          <CodeBlock
            language="python"
            code={`# Link two memories
nx.link("memory-uuid-1", "memory-uuid-2",
        relation="caused_by", weight=0.9)

# Get all links for a memory
links = nx.links("memory-uuid-1")
print(links)
# {"memory_id": "memory-uuid-1", "edges": [{"target_id": "memory-uuid-2", "relation": "caused_by", "weight": 0.9}], "total": 1}

# Remove a link
nx.unlink("memory-uuid-1", "memory-uuid-2")`}
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
          <h2 className="text-2xl font-semibold mb-4">Knowledge Graph</h2>
          <p className="text-gray-400 mb-4">
            Store structured relationships as subject–predicate–object triples.
            Entities are auto-created by name and deduplicated per tenant.
            Available on <strong className="text-gray-300">Pro+</strong> plans.
            <span className="block mt-2 text-gray-400 text-xs">KG methods require SDK ≥ 2.6.1. Install: <span className="font-mono text-gray-300">pip install novyx&gt;=2.6.1</span></span>
          </p>
          <CodeBlock
            language="python"
            code={`# Create a triple (entities auto-created by name)
nx.triple("blake", "founded", "novyx labs",
          subject_type="person", object_type="company")

# Query triples
triples = nx.triples(subject="blake")
print(triples["triples"][0]["predicate"])  # "founded"

# Traverse an entity — all connections as subject or object
entity = nx.entity(entity_id)
print(entity["as_subject"])   # triples where entity is subject
print(entity["as_object"])    # triples where entity is object

# List entities
entities = nx.entities(entity_type="person")

# Delete a triple or entity (cascade deletes its triples)
nx.delete_triple(triple_id)
nx.delete_entity(entity_id)`}
          />

          <h3 className="text-lg font-medium mt-8 mb-4">REST Endpoints</h3>
          <div className="mb-4">
            <CodeBlock
              language="bash"
              code={`# Create a triple
curl -X POST https://novyx-ram-api.fly.dev/v1/knowledge/triples \\
  -H "Authorization: Bearer YOUR_API_KEY" \\
  -H "Content-Type: application/json" \\
  -d '{
    "subject": "blake",
    "predicate": "founded",
    "object": "novyx labs",
    "subject_type": "person",
    "object_type": "company"
  }'`}
            />
          </div>
          <div className="mb-4">
            <CodeBlock
              language="bash"
              code={`# List triples (filter by subject, predicate, object, source_memory_id)
curl "https://novyx-ram-api.fly.dev/v1/knowledge/triples?subject=blake&limit=10" \\
  -H "Authorization: Bearer YOUR_API_KEY"`}
            />
          </div>
          <div className="mb-4">
            <CodeBlock
              language="bash"
              code={`# Traverse entity — returns all triples where entity is subject or object
curl "https://novyx-ram-api.fly.dev/v1/knowledge/entities/{entity_id}" \\
  -H "Authorization: Bearer YOUR_API_KEY"`}
            />
          </div>
          <div>
            <CodeBlock
              language="bash"
              code={`# List entities (filter by entity_type, q= name prefix)
curl "https://novyx-ram-api.fly.dev/v1/knowledge/entities?entity_type=person" \\
  -H "Authorization: Bearer YOUR_API_KEY"`}
            />
          </div>
          <p className="mt-3 text-sm text-gray-400">
            Re-stating an existing triple updates its confidence and metadata instead of creating a duplicate.
            Entity names are normalized to lowercase.
          </p>
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
                  <td className="py-2 font-mono">nx.remember(observation, tags=None, on_conflict=None, ttl_seconds=None)</td>
                  <td className="py-2 text-gray-400">Store a memory. Optional TTL (60–7,776,000s) for auto-expiry.</td>
                  <td className="py-2 text-gray-400">All (REJECT only on Free)</td>
                </tr>
                <tr className="border-b border-border">
                  <td className="py-2 font-mono">nx.recall(query, limit=5)</td>
                  <td className="py-2 text-gray-400">Semantic search</td>
                  <td className="py-2 text-gray-400">All</td>
                </tr>
                <tr className="border-b border-border">
                  <td className="py-2 font-mono">nx.session(session_id)</td>
                  <td className="py-2 text-gray-400">Scoped session with .remember() and .recall()</td>
                  <td className="py-2 text-gray-400">All</td>
                </tr>
                <tr className="border-b border-border">
                  <td className="py-2 font-mono">nx.link(source_id, target_id, *, relation="related", weight=1.0)</td>
                  <td className="py-2 text-gray-400">Create a link between memories</td>
                  <td className="py-2 text-gray-400">All</td>
                </tr>
                <tr className="border-b border-border">
                  <td className="py-2 font-mono">nx.unlink(source_id, target_id)</td>
                  <td className="py-2 text-gray-400">Remove a link between memories</td>
                  <td className="py-2 text-gray-400">All</td>
                </tr>
                <tr className="border-b border-border">
                  <td className="py-2 font-mono">nx.links(memory_id)</td>
                  <td className="py-2 text-gray-400">Get all links for a memory</td>
                  <td className="py-2 text-gray-400">All</td>
                </tr>
                <tr className="border-b border-border">
                  <td className="py-2 font-mono">nx.memory(memory_id)</td>
                  <td className="py-2 text-gray-400">Get a memory by ID</td>
                  <td className="py-2 text-gray-400">All</td>
                </tr>
                <tr className="border-b border-border">
                  <td className="py-2 font-mono">nx.supersede(old_memory_id, new_memory_id)</td>
                  <td className="py-2 text-gray-400">Mark a memory as superseded by another memory</td>
                  <td className="py-2 text-gray-400">All</td>
                </tr>
                <tr className="border-b border-border">
                  <td className="py-2 font-mono">nx.context_now()</td>
                  <td className="py-2 text-gray-400">Temporal context — recent memories, last session, server time</td>
                  <td className="py-2 text-gray-400">All</td>
                </tr>
                <tr className="border-b border-border">
                  <td className="py-2 font-mono">nx.triple(subject, predicate, object, **opts)</td>
                  <td className="py-2 text-gray-400">Create a knowledge graph triple</td>
                  <td className="py-2 text-gray-400">Pro+</td>
                </tr>
                <tr className="border-b border-border">
                  <td className="py-2 font-mono">nx.triples(subject=, predicate=, object=)</td>
                  <td className="py-2 text-gray-400">List/filter triples</td>
                  <td className="py-2 text-gray-400">Pro+</td>
                </tr>
                <tr className="border-b border-border">
                  <td className="py-2 font-mono">nx.entities(entity_type=, q=)</td>
                  <td className="py-2 text-gray-400">List entities</td>
                  <td className="py-2 text-gray-400">Pro+</td>
                </tr>
                <tr className="border-b border-border">
                  <td className="py-2 font-mono">nx.entity(entity_id)</td>
                  <td className="py-2 text-gray-400">Traverse entity connections</td>
                  <td className="py-2 text-gray-400">Pro+</td>
                </tr>
                <tr className="border-b border-border">
                  <td className="py-2 font-mono">nx.delete_triple(triple_id)</td>
                  <td className="py-2 text-gray-400">Delete a triple</td>
                  <td className="py-2 text-gray-400">Pro+</td>
                </tr>
                <tr className="border-b border-border">
                  <td className="py-2 font-mono">nx.delete_entity(entity_id)</td>
                  <td className="py-2 text-gray-400">Delete entity + cascade triples</td>
                  <td className="py-2 text-gray-400">Pro+</td>
                </tr>
                <tr className="border-b border-border">
                  <td className="py-2 font-mono">nx.audit(limit, since)</td>
                  <td className="py-2 text-gray-400">Audit trail</td>
                  <td className="py-2 text-gray-400">All</td>
                </tr>
                <tr className="border-b border-border">
                  <td className="py-2 font-mono">nx.trace_create(agent_id)</td>
                  <td className="py-2 text-gray-400">Start trace session</td>
                  <td className="py-2 text-gray-400">Pro+</td>
                </tr>
                <tr className="border-b border-border">
                  <td className="py-2 font-mono">nx.rollback(target)</td>
                  <td className="py-2 text-gray-400">Magic Rollback</td>
                  <td className="py-2 text-gray-400">All (10/mo Free, 50/mo Starter, Unlimited Pro+)</td>
                </tr>
                <tr className="border-b border-border">
                  <td className="py-2 font-mono">nx.audit_export(format="csv")</td>
                  <td className="py-2 text-gray-400">Export audit logs</td>
                  <td className="py-2 text-gray-400">Starter+</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        <div className="mb-12 p-4 rounded-lg border border-border bg-[#18181B] text-sm text-gray-400">
          Looking for framework integrations (LangChain, CrewAI, MCP, OpenClaw)?{' '}
          <Link to="/integrations" className="text-primary hover:text-primary-hover">Integrations page →</Link>
        </div>

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
