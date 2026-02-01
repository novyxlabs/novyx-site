import { Link } from 'react-router-dom'

export default function Footer() {
  return (
    <footer className="border-t border-border py-12 mt-auto">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-5 gap-8">
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
              Constitutional infrastructure for AI agents.
            </p>
          </div>

          <div>
            <h4 className="font-medium mb-4">Products</h4>
            <ul className="space-y-2 text-sm text-gray-400">
              <li><Link to="/" className="hover:text-white transition-colors">Novyx Core</Link></li>
              <li><Link to="/docs" className="hover:text-white transition-colors">Documentation</Link></li>
              <li><Link to="/pricing" className="hover:text-white transition-colors">Pricing</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-medium mb-4">Resources</h4>
            <ul className="space-y-2 text-sm text-gray-400">
              <li><span className="text-gray-500">API Status (coming soon)</span></li>
              <li>
                <a
                  href="https://github.com/novyxlabs"
                  className="hover:text-white transition-colors"
                >
                  GitHub
                </a>
              </li>
              <li><span className="text-gray-500">Blog (coming soon)</span></li>
            </ul>
          </div>

          <div>
            <h4 className="font-medium mb-4">Company</h4>
            <ul className="space-y-2 text-sm text-gray-400">
              <li><Link to="/about" className="hover:text-white transition-colors">About</Link></li>
              <li>
                <a
                  href="mailto:blake@novyxlabs.com"
                  className="hover:text-white transition-colors"
                >
                  Contact
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-medium mb-4">Legal</h4>
            <ul className="space-y-2 text-sm text-gray-400">
              <li><span className="text-gray-500">Privacy Policy (coming soon)</span></li>
              <li><span className="text-gray-500">Terms of Service (coming soon)</span></li>
            </ul>
            <div className="mt-4 flex items-center gap-3 text-gray-400">
              <a
                href="https://x.com/NovyxLabs"
                className="hover:text-white transition-colors"
                aria-label="Novyx Labs on X"
              >
                <svg viewBox="0 0 24 24" className="w-5 h-5" fill="currentColor">
                  <path d="M13.7 10.6L20 3h-1.5l-5.5 6.7L8.4 3H3l6.7 9.9L3 21h1.5l5.9-7.1L15.6 21H21l-7.3-10.4zm-2.3 2.8l-.7-1L5 4.5h2.4l4.3 6.1.7 1L18.9 19h-2.4l-5.4-7.6z" />
                </svg>
              </a>
              <a
                href="https://github.com/novyxlabs"
                className="hover:text-white transition-colors"
                aria-label="Novyx Labs on GitHub"
              >
                <svg viewBox="0 0 24 24" className="w-5 h-5" fill="currentColor">
                  <path d="M12 2C6.48 2 2 6.58 2 12.26c0 4.5 2.87 8.32 6.84 9.67.5.1.68-.22.68-.5 0-.24-.01-.88-.01-1.73-2.78.62-3.37-1.37-3.37-1.37-.46-1.2-1.12-1.52-1.12-1.52-.91-.64.07-.63.07-.63 1 .07 1.53 1.06 1.53 1.06.9 1.58 2.36 1.12 2.94.86.09-.67.35-1.12.63-1.38-2.22-.26-4.56-1.15-4.56-5.12 0-1.13.39-2.05 1.02-2.77-.1-.26-.44-1.3.1-2.7 0 0 .84-.28 2.75 1.05a9.2 9.2 0 0 1 2.5-.35c.85 0 1.7.12 2.5.35 1.9-1.33 2.74-1.05 2.74-1.05.54 1.4.2 2.44.1 2.7.64.72 1.02 1.64 1.02 2.77 0 3.98-2.35 4.86-4.58 5.11.36.32.68.94.68 1.9 0 1.38-.01 2.5-.01 2.84 0 .28.18.6.69.5A10.02 10.02 0 0 0 22 12.26C22 6.58 17.52 2 12 2z" />
                </svg>
              </a>
              <span className="text-gray-500" aria-label="LinkedIn coming soon">
                <svg viewBox="0 0 24 24" className="w-5 h-5" fill="currentColor">
                  <path d="M4.98 3.5C4.98 4.88 3.9 6 2.5 6S0 4.88 0 3.5 1.08 1 2.5 1 5 2.12 5 3.5zM0 8h5v16H0V8zm7.5 0H12v2.2h.1c.6-1.1 2.1-2.2 4.4-2.2C21 8 24 10.1 24 15.1V24h-5v-7.7c0-1.8 0-4.1-2.5-4.1-2.5 0-2.9 2-2.9 4v7.8h-5V8z" />
                </svg>
              </span>
            </div>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-border text-center text-sm text-gray-400">
          © 2026 Novyx Labs. All rights reserved.
        </div>
      </div>
    </footer>
  )
}
