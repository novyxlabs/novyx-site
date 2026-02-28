import { Link } from 'react-router-dom'
import CodeBlock from '../components/CodeBlock'

export default function DocsCortex() {
  return (
    <div className="animate-fade-in py-16 md:py-24">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-bold mb-4">Cortex — Autonomous Memory Intelligence</h1>
        <p className="text-gray-400 mb-4">
          Your agent&apos;s memory doesn&apos;t just store — it thinks. Cortex automatically consolidates near-duplicate memories, reinforces frequently-recalled knowledge, decays forgotten noise, and generates pattern insights from the memory corpus.
        </p>
        <p className="text-sm text-gray-500 mb-10">
          Back to <Link to="/docs" className="text-primary hover:text-primary-hover">Python SDK docs</Link> · <Link to="/docs/js" className="text-primary hover:text-primary-hover">JS/TS SDK docs</Link>
        </p>

        <div className="mb-12 rounded-lg border border-border bg-[#18181B] p-4 text-sm text-gray-300 space-y-2">
          <p><strong>Requirements:</strong></p>
          <ul className="list-disc list-inside space-y-1 ml-2">
            <li>Pro plan or above</li>
            <li>SDK 2.9.2+ — <span className="font-mono text-gray-300">pip install novyx&gt;=2.9.2</span> / <span className="font-mono text-gray-300">npm install novyx@latest</span></li>
          </ul>
        </div>

        {/* Status */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-2">GET /v1/cortex/status</h2>
          <p className="text-gray-400 mb-4">
            Returns the current Cortex status including whether it&apos;s enabled, the last run timestamp, and aggregate stats.
          </p>
          <p className="text-sm text-primary mb-4">Tier: Pro+</p>

          <div className="mb-4">
            <CodeBlock
              language="bash"
              code={`curl "https://novyx-ram-api.fly.dev/v1/cortex/status" \\
  -H "Authorization: Bearer YOUR_API_KEY"`}
            />
          </div>
          <div className="mb-4">
            <CodeBlock
              language="json"
              code={`{
  "enabled": true,
  "last_run_at": "2026-02-25T08:00:00Z",
  "next_scheduled_run": "2026-02-25T12:00:00Z",
  "total_runs": 47,
  "stats": {
    "total_consolidated": 134,
    "total_boosted": 289,
    "total_decayed": 76,
    "total_insights_generated": 12
  }
}`}
            />
          </div>
          <CodeBlock
            language="python"
            code={`status = nx.cortex_status()
print(f"Cortex enabled: {status['enabled']}, last run: {status['last_run_at']}")
print(f"Consolidated: {status['stats']['total_consolidated']}, Boosted: {status['stats']['total_boosted']}")`}
          />
          <div className="mt-4">
            <CodeBlock
              language="typescript"
              code={`const status = await nx.cortexStatus();
console.log(\`Cortex enabled: \${status.enabled}, last run: \${status.last_run_at}\`);
console.log(\`Consolidated: \${status.stats.total_consolidated}, Boosted: \${status.stats.total_boosted}\`);`}
            />
          </div>
        </section>

        {/* Get Config */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-2">GET /v1/cortex/config</h2>
          <p className="text-gray-400 mb-4">
            Returns the current Cortex configuration for your tenant.
          </p>
          <p className="text-sm text-primary mb-4">Tier: Pro+</p>

          <div className="mb-4">
            <CodeBlock
              language="bash"
              code={`curl "https://novyx-ram-api.fly.dev/v1/cortex/config" \\
  -H "Authorization: Bearer YOUR_API_KEY"`}
            />
          </div>
          <div className="mb-4">
            <CodeBlock
              language="json"
              code={`{
  "enabled": true,
  "consolidation_enabled": true,
  "consolidation_threshold": 0.85,
  "reinforcement_enabled": true,
  "decay_enabled": true,
  "decay_age_days": 30,
  "insight_generation_enabled": false
}`}
            />
          </div>
          <CodeBlock
            language="python"
            code={`config = nx.cortex_config()
print(f"Consolidation threshold: {config['consolidation_threshold']}")
print(f"Decay after {config['decay_age_days']} days")`}
          />
          <div className="mt-4">
            <CodeBlock
              language="typescript"
              code={`const config = await nx.cortexConfig();
console.log(\`Consolidation threshold: \${config.consolidation_threshold}\`);
console.log(\`Decay after \${config.decay_age_days} days\`);`}
            />
          </div>
        </section>

        {/* Update Config */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-2">PATCH /v1/cortex/config</h2>
          <p className="text-gray-400 mb-4">
            Update Cortex configuration. Partial updates — only send the fields you want to change.
          </p>
          <p className="text-sm text-primary mb-4">Tier: Pro+</p>

          <div className="mb-4">
            <h3 className="text-lg font-medium mb-3">Body Fields</h3>
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
                  <tr className="border-b border-border"><td className="py-2 font-mono">enabled</td><td className="py-2 text-gray-400">boolean</td><td className="py-2 text-gray-400">Enable/disable Cortex entirely</td></tr>
                  <tr className="border-b border-border"><td className="py-2 font-mono">consolidation_enabled</td><td className="py-2 text-gray-400">boolean</td><td className="py-2 text-gray-400">Enable auto-merge of near-duplicate memories</td></tr>
                  <tr className="border-b border-border"><td className="py-2 font-mono">consolidation_threshold</td><td className="py-2 text-gray-400">float</td><td className="py-2 text-gray-400">Similarity threshold for merging (0.5–1.0, default 0.85)</td></tr>
                  <tr className="border-b border-border"><td className="py-2 font-mono">reinforcement_enabled</td><td className="py-2 text-gray-400">boolean</td><td className="py-2 text-gray-400">Boost frequently-recalled memories</td></tr>
                  <tr className="border-b border-border"><td className="py-2 font-mono">decay_enabled</td><td className="py-2 text-gray-400">boolean</td><td className="py-2 text-gray-400">Decay unreferenced memories over time</td></tr>
                  <tr className="border-b border-border"><td className="py-2 font-mono">decay_age_days</td><td className="py-2 text-gray-400">int</td><td className="py-2 text-gray-400">Days before unreferenced memories start decaying (1–365, default 30)</td></tr>
                  <tr className="border-b border-border"><td className="py-2 font-mono">insight_generation_enabled</td><td className="py-2 text-gray-400">boolean</td><td className="py-2 text-gray-400">Enable pattern detection (Enterprise only)</td></tr>
                </tbody>
              </table>
            </div>
          </div>

          <div className="mb-4">
            <CodeBlock
              language="bash"
              code={`curl -X PATCH "https://novyx-ram-api.fly.dev/v1/cortex/config" \\
  -H "Authorization: Bearer YOUR_API_KEY" \\
  -H "Content-Type: application/json" \\
  -d '{
    "consolidation_threshold": 0.9,
    "decay_age_days": 60
  }'`}
            />
          </div>
          <div className="mb-4">
            <CodeBlock
              language="json"
              code={`{
  "enabled": true,
  "consolidation_enabled": true,
  "consolidation_threshold": 0.9,
  "reinforcement_enabled": true,
  "decay_enabled": true,
  "decay_age_days": 60,
  "insight_generation_enabled": false
}`}
            />
          </div>
          <CodeBlock
            language="python"
            code={`updated = nx.cortex_configure(consolidation_threshold=0.9, decay_age_days=60)
print(f"Updated: threshold={updated['consolidation_threshold']}, decay={updated['decay_age_days']}d")`}
          />
          <div className="mt-4">
            <CodeBlock
              language="typescript"
              code={`const updated = await nx.cortexConfigure({ consolidation_threshold: 0.9, decay_age_days: 60 });
console.log(\`Updated: threshold=\${updated.consolidation_threshold}, decay=\${updated.decay_age_days}d\`);`}
            />
          </div>
        </section>

        {/* Run */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-2">POST /v1/cortex/run</h2>
          <p className="text-gray-400 mb-4">
            Trigger a manual Cortex cycle. Runs consolidation, reinforcement, decay, and (if Enterprise) insight generation based on your current configuration. Returns counts of affected memories.
          </p>
          <p className="text-sm text-primary mb-4">Tier: Pro+</p>

          <div className="mb-4">
            <CodeBlock
              language="bash"
              code={`curl -X POST "https://novyx-ram-api.fly.dev/v1/cortex/run" \\
  -H "Authorization: Bearer YOUR_API_KEY"`}
            />
          </div>
          <div className="mb-4">
            <CodeBlock
              language="json"
              code={`{
  "run_id": "run-abc-123",
  "started_at": "2026-02-25T14:30:00Z",
  "completed_at": "2026-02-25T14:30:02Z",
  "consolidated": 3,
  "boosted": 12,
  "decayed": 5,
  "insights_generated": 0,
  "duration_ms": 2140
}`}
            />
          </div>
          <CodeBlock
            language="python"
            code={`result = nx.cortex_run()
print(f"Cortex cycle complete in {result['duration_ms']}ms")
print(f"  Consolidated: {result['consolidated']}")
print(f"  Boosted: {result['boosted']}")
print(f"  Decayed: {result['decayed']}")
print(f"  Insights: {result['insights_generated']}")`}
          />
          <div className="mt-4">
            <CodeBlock
              language="typescript"
              code={`const result = await nx.cortexRun();
console.log(\`Cortex cycle complete in \${result.duration_ms}ms\`);
console.log(\`  Consolidated: \${result.consolidated}\`);
console.log(\`  Boosted: \${result.boosted}\`);
console.log(\`  Decayed: \${result.decayed}\`);
console.log(\`  Insights: \${result.insights_generated}\`);`}
            />
          </div>
        </section>

        {/* Insights */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-2">GET /v1/cortex/insights</h2>
          <p className="text-gray-400 mb-4">
            Retrieve pattern insights generated by Cortex. Insights are patterns detected across your agent&apos;s memory corpus — recurring themes, correlations, and emerging trends.
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
                  <tr className="border-b border-border"><td className="py-2 font-mono">since</td><td className="py-2 text-gray-400">ISO datetime</td><td className="py-2 text-gray-400">No</td><td className="py-2 text-gray-400">Only return insights generated after this timestamp</td></tr>
                  <tr className="border-b border-border"><td className="py-2 font-mono">limit</td><td className="py-2 text-gray-400">int</td><td className="py-2 text-gray-400">No</td><td className="py-2 text-gray-400">1–100, default 20</td></tr>
                  <tr className="border-b border-border"><td className="py-2 font-mono">offset</td><td className="py-2 text-gray-400">int</td><td className="py-2 text-gray-400">No</td><td className="py-2 text-gray-400">Default 0</td></tr>
                </tbody>
              </table>
            </div>
          </div>

          <div className="mb-4">
            <CodeBlock
              language="bash"
              code={`curl "https://novyx-ram-api.fly.dev/v1/cortex/insights?limit=5" \\
  -H "Authorization: Bearer YOUR_API_KEY"`}
            />
          </div>
          <div className="mb-4">
            <CodeBlock
              language="json"
              code={`{
  "insights": [
    {
      "insight_id": "ins-001",
      "generated_at": "2026-02-25T08:00:00Z",
      "type": "recurring_theme",
      "title": "Billing questions spike on Mondays",
      "description": "72% of billing-tagged memories were created on Mondays over the past 30 days.",
      "confidence": 0.87,
      "supporting_memory_ids": ["mem-1", "mem-2", "mem-3"],
      "tags": ["billing", "temporal-pattern"]
    },
    {
      "insight_id": "ins-002",
      "generated_at": "2026-02-25T08:00:00Z",
      "type": "emerging_trend",
      "title": "Growing interest in API key management",
      "description": "Memories tagged with 'api-keys' increased 3x in the past 14 days.",
      "confidence": 0.79,
      "supporting_memory_ids": ["mem-4", "mem-5"],
      "tags": ["api-keys", "growth"]
    }
  ],
  "total_count": 12,
  "has_more": true
}`}
            />
          </div>
          <CodeBlock
            language="python"
            code={`insights = nx.cortex_insights(limit=5)
for insight in insights["insights"]:
    print(f"[{insight['confidence']:.0%}] {insight['title']}")
    print(f"  {insight['description']}")
    print(f"  Based on {len(insight['supporting_memory_ids'])} memories\\n")`}
          />
          <div className="mt-4">
            <CodeBlock
              language="typescript"
              code={`const insights = await nx.cortexInsights({ limit: 5 });
for (const insight of insights.insights) {
  console.log(\`[\${(insight.confidence * 100).toFixed(0)}%] \${insight.title}\`);
  console.log(\`  \${insight.description}\`);
  console.log(\`  Based on \${insight.supporting_memory_ids.length} memories\\n\`);
}`}
            />
          </div>
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
                <tr className="border-b border-border"><td className="py-2 font-mono">403</td><td className="py-2 text-gray-400">Free/Starter tier</td><td className="py-2 text-gray-400">Cortex requires Pro plan or above</td></tr>
                <tr className="border-b border-border"><td className="py-2 font-mono">403</td><td className="py-2 text-gray-400">Pro hitting Enterprise endpoint</td><td className="py-2 text-gray-400">Insight generation requires Enterprise plan</td></tr>
                <tr className="border-b border-border"><td className="py-2 font-mono">422</td><td className="py-2 text-gray-400">Invalid config value</td><td className="py-2 text-gray-400">consolidation_threshold must be between 0.5 and 1.0</td></tr>
                <tr className="border-b border-border"><td className="py-2 font-mono">422</td><td className="py-2 text-gray-400">Invalid decay days</td><td className="py-2 text-gray-400">decay_age_days must be between 1 and 365</td></tr>
                <tr className="border-b border-border"><td className="py-2 font-mono">429</td><td className="py-2 text-gray-400">Run rate limit</td><td className="py-2 text-gray-400">Cortex run already in progress</td></tr>
              </tbody>
            </table>
          </div>
        </section>

        {/* Need Help */}
        <section className="mb-12 p-6 rounded-lg border border-border bg-[#18181B]">
          <h2 className="text-lg font-semibold mb-2">Need Help?</h2>
          <p className="text-gray-400 mb-4">
            Having trouble with Cortex? Check the{' '}
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
