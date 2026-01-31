import CodeBlock from '../components/CodeBlock'
import ProductCard from '../components/ProductCard'

const quickStartCode = `pip install novyx-langchain`

const pythonExample = `from novyx_langchain import NovyxMemory

memory = NovyxMemory(api_key="YOUR_KEY")
memory.save("User prefers dark mode")`

export default function Home() {
  return (
    <div className="animate-fade-in">
      {/* Hero Section */}
      <section className="py-20 md:py-32">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent">
            Memory infrastructure for AI agents
          </h1>
          <p className="text-xl md:text-2xl text-gray-400 mb-8 max-w-2xl mx-auto">
            Persistent, semantic, tamper-proof.
          </p>
          <a
            href="https://novyx-ram-api.fly.dev"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-primary hover:bg-primary-hover text-white px-6 py-3 rounded-lg font-medium transition-colors text-lg"
          >
            Get Free API Key
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
            </svg>
          </a>
        </div>
      </section>

      {/* Quick Start */}
      <section className="py-16 border-t border-border">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-semibold mb-6 text-center">Quick Start</h2>
          <div className="space-y-4">
            <CodeBlock code={quickStartCode} language="bash" />
            <CodeBlock code={pythonExample} language="python" />
          </div>
        </div>
      </section>

      {/* Products */}
      <section className="py-16 border-t border-border">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-semibold mb-8 text-center">Products</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <ProductCard
              name="RAM"
              tagline="Memory-as-a-Service"
              description="Persistent memory for AI agents. Store, search, and retrieve observations with semantic understanding."
              status="live"
              link="/ram"
              accentColor="bg-accent-ram/20"
              icon={
                <svg className="w-6 h-6 text-accent-ram" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z" />
                </svg>
              }
            />
            <ProductCard
              name="Sentinel"
              tagline="AI Security"
              description="Real-time threat detection for AI systems. Magic Rollback™ technology for instant recovery."
              status="coming-soon"
              link="/sentinel"
              accentColor="bg-accent-sentinel/20"
              icon={
                <svg className="w-6 h-6 text-accent-sentinel" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              }
            />
            <ProductCard
              name="Forge"
              tagline="Personal Transformation"
              description="Build better habits with consumption debt tracking. Max 3 builds at a time to maintain focus."
              status="waitlist"
              link="/forge"
              accentColor="bg-accent-forge/20"
              icon={
                <svg className="w-6 h-6 text-accent-forge" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 18.657A8 8 0 016.343 7.343S7 9 9 10c0-2 .5-5 2.986-7C14 5 16.09 5.777 17.656 7.343A7.975 7.975 0 0120 13a7.975 7.975 0 01-2.343 5.657z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.879 16.121A3 3 0 1012.015 11L11 14H9c0 .768.293 1.536.879 2.121z" />
                </svg>
              }
            />
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-16 border-t border-border">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8 text-center">
            <div>
              <div className="w-12 h-12 mx-auto mb-4 rounded-lg bg-gray-800 flex items-center justify-center">
                <svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="font-semibold mb-2">Fast</h3>
              <p className="text-sm text-gray-400">Sub-100ms latency for all memory operations</p>
            </div>
            <div>
              <div className="w-12 h-12 mx-auto mb-4 rounded-lg bg-gray-800 flex items-center justify-center">
                <svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                </svg>
              </div>
              <h3 className="font-semibold mb-2">Secure</h3>
              <p className="text-sm text-gray-400">End-to-end encryption with tamper-proof storage</p>
            </div>
            <div>
              <div className="w-12 h-12 mx-auto mb-4 rounded-lg bg-gray-800 flex items-center justify-center">
                <svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4" />
                </svg>
              </div>
              <h3 className="font-semibold mb-2">Scalable</h3>
              <p className="text-sm text-gray-400">From prototype to production with zero config changes</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
