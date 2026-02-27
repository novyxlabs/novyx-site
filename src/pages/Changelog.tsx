export default function Changelog() {
  const releases = [
    {
      version: 'v2.9.0',
      date: 'Feb 26, 2026',
      title: 'SDK 2.9.0 — Context Spaces, Replay & Cortex Methods',
      changes: [
        '13 new SDK methods across Python and JS/TS',
        'Context Spaces: create_space(), list_spaces(), space_memories(), update_space(), delete_space(), share_space()',
        'Replay: replay_timeline(), replay_snapshot(), replay_lifecycle(), replay_diff()',
        'Cortex: cortex_status(), cortex_run(), cortex_insights()',
        'Full API parity between Python and JS/TS SDKs',
      ],
    },
    {
      version: 'MCP v2.0.0',
      date: 'Feb 26, 2026',
      title: 'MCP Server 2.0 — 23 Tools, Resources & Prompts',
      changes: [
        '23 MCP tools: core memory (10), context spaces (6), replay (4), cortex (3)',
        '6 resources: novyx://memories, novyx://stats, novyx://usage, novyx://spaces, and per-ID lookups',
        '3 prompts: memory-context, session-summary, space-context',
        'Context spaces for multi-agent collaboration via MCP',
        'Replay and Cortex tools now accessible via MCP, not just raw API',
        'Graceful tier gating — tools return clear upgrade messages on lower tiers',
      ],
    },
    {
      version: 'API Fixes',
      date: 'Feb 26, 2026',
      title: 'API Improvements — LWW, Tag Filtering & Limits',
      changes: [
        'Last-write-wins (LWW) conflict resolution now available on all tiers (was Starter+)',
        'Tag AND filtering: search memories matching all specified tags',
        'PATCH /v1/memories/{id} tag limit increased from 10 to 25',
      ],
    },
    {
      version: 'v2.8.0',
      date: 'Feb 25, 2026',
      title: 'Cortex — Autonomous Memory Intelligence',
      changes: [
        'Cortex API — autonomous memory maintenance for AI agents (Pro+)',
        'Consolidation: auto-merge near-duplicate memories using pgvector similarity',
        'Reinforcement: boost frequently-recalled memories, decay forgotten noise',
        'Insight Generation: pattern detection from memory corpus (Enterprise)',
        '5 new API endpoints: /v1/cortex/status, config (GET/PATCH), run, insights',
        'Configurable per-tenant: thresholds, decay age, feature toggles',
        'New /docs/cortex page with full endpoint documentation, Python + JS examples',
        'Cortex section added to homepage and pricing page',
        'SDK 2.8.0 — cortex_status(), cortex_config(), cortex_configure(), cortex_run(), cortex_insights()',
      ],
    },
    {
      version: 'v1.6.0',
      date: 'Feb 19, 2026',
      title: 'Replay — Time-Travel Debugging',
      changes: [
        'Replay API — memory-level observability for AI agents (Pro+)',
        'Memory Timeline: paginated feed of every create, update, delete, and rollback',
        'Point-in-Time Snapshots: reconstruct full memory + knowledge graph state at any timestamp',
        'Memory Lifecycle: track a single memory from creation to deletion with all events',
        'Memory Diff: compare memory state between two timestamps — added, removed, modified',
        'Counterfactual Recall (Enterprise): re-run semantic search against historical memory state',
        'Drift Analysis (Enterprise): track tag frequency shifts, importance changes, emerging/disappearing topics',
        'New /docs/replay page with full endpoint documentation, Python + JS examples',
        'Replay section added to homepage and pricing page',
        'SDK 2.7.0 — replay_timeline(), replay_snapshot(), replay_memory(), replay_diff(), replay_recall(), replay_drift()',
      ],
    },
    {
      version: 'v1.5.0',
      date: 'Feb 19, 2026',
      title: 'Integrations — LangChain, CrewAI, MCP & OpenClaw',
      changes: [
        'novyx-langchain v2.0.0 — LangChain memory backend with persistent semantic memory, rollback, and LangGraph checkpointer',
        'novyx-crewai v1.0.0 — CrewAI storage backend for all 3 memory types (short-term, long-term, entity)',
        'novyx-mcp v1.0.0 — MCP server for Claude Desktop, Cursor, and Claude Code with 10 tools',
        'New /integrations page with install instructions, quickstart snippets, and PyPI links for all packages',
        'OpenClaw section moved from docs to /integrations — 4 extensions, 26 tools',
        'Templates section: Customer Support Agent, Research Knowledge Agent, Trading Audit Agent',
        'Integrations added to navbar and footer navigation',
      ],
    },
    {
      version: 'v1.4.0',
      date: 'Feb 19, 2026',
      title: 'Knowledge Graph, JS/TS SDK & API Expansion',
      changes: [
        'Knowledge Graph API — store structured relationships as subject–predicate–object triples (Pro+)',
        'Entity traversal and filtering with auto-dedup and cascade deletes',
        'JavaScript / TypeScript SDK published to npm — full API parity with Python, zero dependencies, Node.js 18+ and browsers',
        'New JS/TS docs page at /docs/js with complete examples',
        'Session-scoped memories — nx.session() groups memories by conversation',
        'Memory Links — explicit directional relationships between memories with relation labels and weights',
        'New endpoints: GET /v1/memories/{id}, PATCH /v1/memories/{id}, GET /v1/context/now',
        'Search API expanded: recency_weight, match_confidence, superseded_by, tag filtering',
        'Store API expanded: importance, context, auto_link, confidence fields',
        'Python/JS SDK cards on homepage now link to PyPI and npm',
        'Hero code snippet upgraded to tabbed Python/JS toggle',
      ],
    },
    {
      version: 'v1.3.0',
      date: 'Feb 14, 2026',
      title: '4-Tier Pricing, Execution Traces & Feature Gating Updates',
      changes: [
        'New 4-tier pricing: Free ($0), Starter ($12/mo), Pro ($39/mo), Enterprise ($199/mo)',
        'Pro price reduced from $49 to $39/mo',
        'Enterprise price reduced from $299 to $199/mo',
        'Free tier rollbacks increased from 3/month to 10/month',
        'Execution Traces now live on Pro+ — RSA-4096 signed, hash-chained, independently verifiable',
        'Context Spaces (formerly Memory Namespaces) shipped on all tiers',
        'Memory Space Sharing live on Pro+',
        'Starter tier unlocks: all conflict resolution strategies, audit export, AI rollback suggestions',
        'Conflict resolution enforcement: Free tier now correctly restricted to reject-only strategy',
        'Circuit Breaker confirmed free on all tiers (safety is not a premium feature)',
        'Anomaly Alerts live on Pro+',
        '353 tests passing, 80 new E2E tests across all tier × feature combinations',
      ],
    },
    {
      version: 'v1.2.0',
      date: 'Feb 8, 2026',
      title: 'Pricing Simplification & Novyx Core Launch',
      changes: [
        'Simplified pricing: Free, Pro ($49/mo), Enterprise ($299/mo)',
        'Consolidated to three tiers (Free/Pro/Enterprise)',
        'Pro tier pricing reduced from $99 to $49',
        'Updated positioning: "Persistent memory + rollback for AI agents"',
        'Added Production Trust metrics and Integrations showcase',
      ],
    },
    {
      version: 'v1.1.0',
      date: 'Feb 2, 2026',
      title: 'Launch',
      changes: [
        'Novyx Core public launch',
        'SDK v0.1.2 published to PyPI',
        'Self-service API key generation',
        'Tier enforcement (Free/Pro/Enterprise)',
        'Magic Rollback with tier gating (3/month free, unlimited pro/enterprise)',
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
