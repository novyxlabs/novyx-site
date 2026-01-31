import { Link } from 'react-router-dom'
import CodeBlock from '../components/CodeBlock'

const codeExamples = [
  {
    language: 'bash',
    label: 'cURL',
    code: `curl -X POST https://novyx-ram-api.fly.dev/v1/memories \\
  -H "Authorization: Bearer YOUR_API_KEY" \\
  -H "Content-Type: application/json" \\
  -d '{"observation": "User prefers dark mode"}'`,
  },
  {
    language: 'python',
    label: 'Python',
    code: `from novyx_langchain import NovyxMemory

memory = NovyxMemory(api_key="YOUR_KEY")
memory.save("User prefers dark mode")
results = memory.search("preferences")`,
  },
  {
    language: 'javascript',
    label: 'JavaScript',
    code: `fetch('https://novyx-ram-api.fly.dev/v1/memories', {
  method: 'POST',
  headers: {
    'Authorization': 'Bearer YOUR_API_KEY',
    'Content-Type': 'application/json'
  },
  body: JSON.stringify({ observation: 'User prefers dark mode' })
})`,
  },
]

const endpoints = [
  {
    method: 'POST',
    path: '/v1/memories',
    description: 'Store a new memory observation',
  },
  {
    method: 'GET',
    path: '/v1/memories/search?q=X',
    description: 'Search memories semantically',
  },
  {
    method: 'GET',
    path: '/v1/memories',
    description: 'List all stored memories',
  },
]

export default function Ram() {
  return (
    <div className="animate-fade-in">
      {/* Hero */}
      <section className="py-16 md:py-24">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-3 mb-6">
            <div className="p-3 rounded-lg bg-accent-ram/20">
              <svg className="w-8 h-8 text-accent-ram" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z" />
              </svg>
            </div>
            <span className="text-xs font-medium px-2 py-1 rounded-full bg-green-500/20 text-green-400">
              Live
            </span>
          </div>

          <h1 className="text-4xl md:text-5xl font-bold mb-4">RAM</h1>
          <p className="text-xl text-gray-400 mb-4 max-w-2xl">
            Memory-as-a-Service for AI agents.
          </p>
          <p className="text-gray-400 mb-8 max-w-2xl">
            Your AI remembers every conversation, preference, and context. Search by meaning, not keywords. Never lose context again.
          </p>

          <div className="flex flex-wrap gap-4">
            <Link
              to="/pricing"
              className="inline-flex items-center gap-2 bg-accent-ram hover:bg-emerald-600 text-white px-6 py-3 rounded-lg font-medium transition-colors"
            >
              Start Free
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </Link>
            <Link
              to="/docs"
              className="inline-flex items-center gap-2 bg-gray-800 hover:bg-gray-700 text-white px-6 py-3 rounded-lg font-medium transition-colors"
            >
              View Docs
            </Link>
          </div>
        </div>
      </section>

      {/* Install */}
      <section className="py-12 border-t border-border">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-semibold mb-6">Installation</h2>
          <CodeBlock code="pip install novyx-langchain" language="bash" />
        </div>
      </section>

      {/* Code Examples */}
      <section className="py-12 border-t border-border">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-semibold mb-6">Usage Examples</h2>
          <CodeBlock tabs={codeExamples} />
        </div>
      </section>

      {/* API Endpoints */}
      <section className="py-12 border-t border-border">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-semibold mb-6">API Endpoints</h2>
          <p className="text-gray-400 mb-6">
            Base URL: <code className="text-accent-ram bg-gray-800 px-2 py-1 rounded">https://novyx-ram-api.fly.dev</code>
          </p>

          <div className="space-y-4">
            {endpoints.map((endpoint) => (
              <div
                key={endpoint.path}
                className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4 p-4 rounded-lg bg-[#0D1117] border border-[#30363D]"
              >
                <span className={`inline-flex items-center justify-center w-16 px-2 py-1 rounded text-xs font-medium ${
                  endpoint.method === 'POST' ? 'bg-blue-500/20 text-blue-400' : 'bg-green-500/20 text-green-400'
                }`}>
                  {endpoint.method}
                </span>
                <code className="text-sm font-mono text-gray-300">{endpoint.path}</code>
                <span className="text-gray-400 text-sm sm:ml-auto">{endpoint.description}</span>
              </div>
            ))}
          </div>

          <div className="mt-6">
            <Link to="/docs" className="text-primary hover:text-primary-hover font-medium">
              Full API documentation →
            </Link>
          </div>
        </div>
      </section>

      {/* Pricing Summary */}
      <section className="py-12 border-t border-border">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-semibold mb-6">Pricing</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="p-6 rounded-lg border border-border">
              <h3 className="font-semibold mb-2">Free</h3>
              <p className="text-3xl font-bold mb-2">$0</p>
              <p className="text-sm text-gray-400">1,000 memories</p>
            </div>
            <div className="p-6 rounded-lg border border-accent-ram border-2">
              <h3 className="font-semibold mb-2">Pro</h3>
              <p className="text-3xl font-bold mb-2">$29<span className="text-lg text-gray-400">/mo</span></p>
              <p className="text-sm text-gray-400">25,000 memories</p>
            </div>
            <div className="p-6 rounded-lg border border-border">
              <h3 className="font-semibold mb-2">Enterprise</h3>
              <p className="text-3xl font-bold mb-2">Custom</p>
              <p className="text-sm text-gray-400">Unlimited + SLA</p>
            </div>
          </div>
          <div className="mt-6 text-center">
            <Link
              to="/pricing"
              className="text-primary hover:text-primary-hover font-medium"
            >
              Compare all plans →
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
