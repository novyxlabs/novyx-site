import { Link } from 'react-router-dom'

export default function Footer() {
  return (
    <footer className="border-t border-border py-12 mt-auto">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <svg viewBox="0 0 32 32" className="w-6 h-6" fill="none">
                <rect width="32" height="32" rx="6" fill="#6366f1"/>
                <path d="M8 12L16 8L24 12V20L16 24L8 20V12Z" stroke="white" strokeWidth="2" fill="none"/>
                <circle cx="16" cy="16" r="3" fill="white"/>
              </svg>
              <span className="font-semibold">Novyx</span>
            </div>
            <p className="text-sm text-gray-400">
              Memory infrastructure for AI agents.
            </p>
          </div>

          <div>
            <h4 className="font-medium mb-4">Products</h4>
            <ul className="space-y-2 text-sm text-gray-400">
              <li><Link to="/ram" className="hover:text-white transition-colors">RAM</Link></li>
              <li><Link to="/sentinel" className="hover:text-white transition-colors">Sentinel</Link></li>
              <li><Link to="/forge" className="hover:text-white transition-colors">Forge</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-medium mb-4">Resources</h4>
            <ul className="space-y-2 text-sm text-gray-400">
              <li><a href="https://novyx-ram-api.fly.dev" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">API Docs</a></li>
              <li><Link to="/pricing" className="hover:text-white transition-colors">Pricing</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-medium mb-4">Install</h4>
            <code className="text-sm text-accent-ram bg-gray-800 px-2 py-1 rounded">
              pip install novyx-langchain
            </code>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-border text-center text-sm text-gray-400">
          &copy; {new Date().getFullYear()} Novyx Labs. All rights reserved.
        </div>
      </div>
    </footer>
  )
}
