import { Link } from 'react-router-dom'
import CodeBlock from '../components/CodeBlock'

export default function Integrations() {
  return (
    <div className="animate-fade-in py-16 md:py-24">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-bold mb-4">Integrations</h1>
        <p className="text-gray-400 mb-10">
          Drop-in integrations for popular AI frameworks. All packages are on PyPI and npm.
        </p>

        {/* JS/TS SDK */}
        <section id="js-sdk" className="mb-12">
          <div className="flex flex-wrap items-center gap-3 mb-4">
            <h2 className="text-2xl font-semibold">JS / TS SDK</h2>
            <a
              href="https://www.npmjs.com/package/novyx"
              target="_blank"
              rel="noopener noreferrer"
              className="px-3 py-1 rounded-full bg-primary/20 text-primary font-mono text-sm hover:bg-primary/30 transition-colors"
            >
              novyx v2.9.0
            </a>
          </div>
          <CodeBlock language="bash" code="npm install novyx" />
          <div className="mt-6">
            <CodeBlock
              language="typescript"
              code={`import { Novyx } from "novyx";

const nx = new Novyx({ apiKey: "nram_your_key" });

await nx.remember({ observation: "User prefers dark mode", tags: ["prefs"] });

const results = await nx.recall("user preferences");`}
            />
          </div>
          <ul className="mt-4 space-y-1 text-sm text-gray-400">
            <li>• Full TypeScript support with complete type definitions</li>
            <li>• Zero dependencies</li>
            <li>• 37 methods — full API parity with Python SDK</li>
            <li>• Dual CJS/ESM — works in Node.js 18+ and browsers</li>
          </ul>
        </section>

        {/* LangChain */}
        <section id="langchain" className="mb-12">
          <div className="flex flex-wrap items-center gap-3 mb-4">
            <h2 className="text-2xl font-semibold">LangChain</h2>
            <a
              href="https://pypi.org/project/novyx-langchain/2.0.0/"
              target="_blank"
              rel="noopener noreferrer"
              className="px-3 py-1 rounded-full bg-primary/20 text-primary font-mono text-sm hover:bg-primary/30 transition-colors"
            >
              novyx-langchain v2.0.0
            </a>
          </div>
          <CodeBlock language="bash" code="pip install novyx-langchain" />
          <div className="mt-6">
            <CodeBlock
              language="python"
              code={`from novyx_langchain import NovyxMemory
from langchain.chains import ConversationChain
from langchain_openai import ChatOpenAI

memory = NovyxMemory(api_key="nram_your_key", session_id="user-123")
chain = ConversationChain(llm=ChatOpenAI(), memory=memory)
response = chain.invoke({"input": "Hello!"})`}
            />
          </div>
          <ul className="mt-4 space-y-1 text-sm text-gray-400">
            <li>• Persistent semantic memory across conversations</li>
            <li>• Rollback support — revert agent state to any point</li>
            <li>• Full audit trail for every memory operation</li>
            <li>• LangGraph checkpointer for stateful workflows</li>
          </ul>
        </section>

        {/* CrewAI */}
        <section id="crewai" className="mb-12">
          <div className="flex flex-wrap items-center gap-3 mb-4">
            <h2 className="text-2xl font-semibold">CrewAI</h2>
            <a
              href="https://pypi.org/project/novyx-crewai/1.0.0/"
              target="_blank"
              rel="noopener noreferrer"
              className="px-3 py-1 rounded-full bg-primary/20 text-primary font-mono text-sm hover:bg-primary/30 transition-colors"
            >
              novyx-crewai v1.0.0
            </a>
          </div>
          <CodeBlock language="bash" code="pip install novyx-crewai" />
          <div className="mt-6">
            <CodeBlock
              language="python"
              code={`from novyx_crewai import NovyxStorage
from crewai import Crew

storage = NovyxStorage(api_key="nram_your_key", memory_type="short_term")
crew = Crew(agents=[...], tasks=[...], memory=True, storage=storage)`}
            />
          </div>
          <ul className="mt-4 space-y-1 text-sm text-gray-400">
            <li>• Works with all 3 CrewAI memory types (short-term, long-term, entity)</li>
            <li>• Semantic search across agent memories</li>
            <li>• Tag-based filtering for scoped recall</li>
          </ul>
        </section>

        {/* MCP Server */}
        <section id="mcp" className="mb-12">
          <div className="flex flex-wrap items-center gap-3 mb-4">
            <h2 className="text-2xl font-semibold">MCP Server</h2>
            <span className="text-sm text-gray-400">Claude Desktop / Cursor / Claude Code</span>
            <a
              href="https://pypi.org/project/novyx-mcp/2.0.0/"
              target="_blank"
              rel="noopener noreferrer"
              className="px-3 py-1 rounded-full bg-primary/20 text-primary font-mono text-sm hover:bg-primary/30 transition-colors"
            >
              novyx-mcp v2.0.0
            </a>
          </div>
          <CodeBlock language="bash" code="pip install novyx-mcp" />

          <div className="mt-6">
            <h3 className="text-lg font-medium mb-3">Claude Desktop / Cursor</h3>
            <CodeBlock
              language="json"
              code={`{
  "mcpServers": {
    "novyx-memory": {
      "command": "python",
      "args": ["-m", "novyx_mcp"],
      "env": { "NOVYX_API_KEY": "nram_your_key_here" }
    }
  }
}`}
            />
          </div>
          <div className="mt-4">
            <h3 className="text-lg font-medium mb-3">Claude Code</h3>
            <CodeBlock
              language="bash"
              code="claude mcp add novyx-memory -- python -m novyx_mcp"
            />
          </div>

          <div className="mt-6">
            <h3 className="text-lg font-medium mb-3">23 Tools</h3>
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b border-border">
                    <th className="text-left py-2 text-gray-400">Category</th>
                    <th className="text-left py-2 text-gray-400">Tools</th>
                    <th className="text-left py-2 text-gray-400">Tier</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b border-border"><td className="py-2 text-gray-300">Core Memory</td><td className="py-2 text-gray-400">remember, recall, forget, list_memories, memory_stats, rollback, audit, link_memories, add_triple, query_triples</td><td className="py-2 text-gray-400">Free+</td></tr>
                  <tr className="border-b border-border"><td className="py-2 text-gray-300">Context Spaces</td><td className="py-2 text-gray-400">create_space, list_spaces, space_memories, update_space, delete_space, share_space</td><td className="py-2 text-gray-400">Free+</td></tr>
                  <tr className="border-b border-border"><td className="py-2 text-gray-300">Replay</td><td className="py-2 text-gray-400">replay_timeline, replay_snapshot, replay_lifecycle, replay_diff</td><td className="py-2 text-gray-400">Pro+</td></tr>
                  <tr className="border-b border-border"><td className="py-2 text-gray-300">Cortex</td><td className="py-2 text-gray-400">cortex_status, cortex_run, cortex_insights</td><td className="py-2 text-gray-400">Pro+</td></tr>
                </tbody>
              </table>
            </div>
          </div>

          <div className="mt-6">
            <h3 className="text-lg font-medium mb-3">6 Resources &amp; 3 Prompts</h3>
            <div className="grid sm:grid-cols-2 gap-4">
              <ul className="space-y-1 text-sm text-gray-400">
                <li>• <span className="font-mono text-gray-300">novyx://memories</span> — list all memories</li>
                <li>• <span className="font-mono text-gray-300">novyx://memories/{'{id}'}</span> — get by UUID</li>
                <li>• <span className="font-mono text-gray-300">novyx://stats</span> — memory statistics</li>
                <li>• <span className="font-mono text-gray-300">novyx://usage</span> — usage and plan info</li>
                <li>• <span className="font-mono text-gray-300">novyx://spaces</span> — list context spaces</li>
                <li>• <span className="font-mono text-gray-300">novyx://spaces/{'{id}'}</span> — get space</li>
              </ul>
              <ul className="space-y-1 text-sm text-gray-400">
                <li>• <span className="font-mono text-gray-300">memory-context</span> — recall + format as context</li>
                <li>• <span className="font-mono text-gray-300">session-summary</span> — list session memories</li>
                <li>• <span className="font-mono text-gray-300">space-context</span> — recall from a context space</li>
              </ul>
            </div>
          </div>
        </section>

        {/* OpenClaw */}
        <section id="openclaw" className="mb-12">
          <h2 className="text-2xl font-semibold mb-4">OpenClaw</h2>
          <p className="text-gray-400 mb-4">
            Novyx ships <strong className="text-white">4 OpenClaw extensions</strong> with <strong className="text-white">26 tools</strong>. Install and your agent gets persistent memory, rollback, and audit with zero configuration.
          </p>

          <div className="mb-6">
            <h3 className="text-lg font-medium mb-3">Extensions</h3>
            <ul className="space-y-2 text-gray-300 text-sm">
              <li><span className="font-mono text-primary">novyx-memory</span> — store, search, forget, status</li>
              <li><span className="font-mono text-primary">novyx-handoff</span> — multi-agent context sharing via spaces</li>
              <li><span className="font-mono text-primary">novyx-reflect</span> — memory health, pruning, boosting</li>
              <li><span className="font-mono text-primary">novyx-compliance</span> — audit export, verification, compliance reports</li>
            </ul>
          </div>

          <div className="mb-6">
            <h3 className="text-lg font-medium mb-3">Install</h3>
            <CodeBlock
              language="bash"
              code={`git clone https://github.com/novyxlabs/novyx-memory-skill.git extensions/novyx-memory
cd extensions/novyx-memory && npm install`}
            />
          </div>

          <div className="mb-6">
            <h3 className="text-lg font-medium mb-3">Add to your OpenClaw config.json</h3>
            <CodeBlock
              language="json"
              code={`{
  "extensions": {
    "novyx-memory": {
      "apiKey": "nram_your_key_here"
    }
  }
}`}
            />
            <p className="mt-3 text-sm text-gray-400">
              Repeat for each extension (novyx-handoff, novyx-reflect, novyx-compliance).
            </p>
          </div>

          <div>
            <h3 className="text-lg font-medium mb-3">GitHub Repos</h3>
            <ul className="space-y-1 text-sm">
              <li><a href="https://github.com/novyxlabs/novyx-memory-skill" target="_blank" rel="noopener noreferrer" className="text-primary hover:text-primary-hover">novyx-memory-skill</a></li>
              <li><a href="https://github.com/novyxlabs/novyx-handoff" target="_blank" rel="noopener noreferrer" className="text-primary hover:text-primary-hover">novyx-handoff</a></li>
              <li><a href="https://github.com/novyxlabs/novyx-reflect" target="_blank" rel="noopener noreferrer" className="text-primary hover:text-primary-hover">novyx-reflect</a></li>
              <li><a href="https://github.com/novyxlabs/novyx-compliance" target="_blank" rel="noopener noreferrer" className="text-primary hover:text-primary-hover">novyx-compliance</a></li>
            </ul>
          </div>
        </section>

        {/* Templates */}
        <section id="templates" className="mb-12">
          <h2 className="text-2xl font-semibold mb-4">Templates</h2>
          <p className="text-gray-400 mb-6">
            Ready-to-run examples to get started fast.
          </p>
          <div className="grid gap-4 sm:grid-cols-3">
            <a
              href="https://github.com/novyxlabs/novyx-starter-kit/tree/main/templates/customer-support-agent"
              target="_blank"
              rel="noopener noreferrer"
              className="p-4 rounded-lg border border-border bg-[#18181B] hover:border-primary/50 transition-colors"
            >
              <h3 className="font-medium mb-1">Customer Support Agent</h3>
              <p className="text-sm text-gray-400">Persistent context across support tickets with rollback.</p>
            </a>
            <a
              href="https://github.com/novyxlabs/novyx-starter-kit/tree/main/templates/research-knowledge-agent"
              target="_blank"
              rel="noopener noreferrer"
              className="p-4 rounded-lg border border-border bg-[#18181B] hover:border-primary/50 transition-colors"
            >
              <h3 className="font-medium mb-1">Research Knowledge Agent</h3>
              <p className="text-sm text-gray-400">Knowledge graph + semantic memory for research workflows.</p>
            </a>
            <a
              href="https://github.com/novyxlabs/novyx-starter-kit/tree/main/templates/trading-audit-agent"
              target="_blank"
              rel="noopener noreferrer"
              className="p-4 rounded-lg border border-border bg-[#18181B] hover:border-primary/50 transition-colors"
            >
              <h3 className="font-medium mb-1">Trading Audit Agent</h3>
              <p className="text-sm text-gray-400">Cryptographic audit trail for every decision and trade.</p>
            </a>
          </div>
        </section>

        {/* Need Help */}
        <section className="mb-12 p-6 rounded-lg border border-border bg-[#18181B]">
          <h2 className="text-lg font-semibold mb-2">Need Help?</h2>
          <p className="text-gray-400 mb-4">
            Having trouble with an integration? Check the{' '}
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
