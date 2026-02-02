import { Link } from 'react-router-dom'
import ContactModal from './ContactModal'

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
              <li><Link to="/status" className="hover:text-white transition-colors">API Status</Link></li>
              <li>
                <a
                  href="https://github.com/novyxlabs"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white transition-colors"
                >
                  GitHub
                </a>
              </li>
              <li><Link to="/blog" className="hover:text-white transition-colors">Blog</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-medium mb-4">Company</h4>
            <ul className="space-y-2 text-sm text-gray-400">
              <li>
                <ContactModal
                  label="Contact"
                  plan="General Inquiry"
                  className="hover:text-white transition-colors cursor-pointer"
                />
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-medium mb-4">Legal</h4>
            <ul className="space-y-2 text-sm text-gray-400">
              <li><Link to="/privacy" className="hover:text-white transition-colors">Privacy Policy</Link></li>
              <li><Link to="/terms" className="hover:text-white transition-colors">Terms of Service</Link></li>
            </ul>
            <div className="mt-4 flex items-center gap-3 text-gray-400">
              <a
                href="https://x.com/NovyxLabs"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-white transition-colors"
                aria-label="Novyx Labs on X"
              >
                <svg viewBox="0 0 24 24" className="w-5 h-5" fill="currentColor">
                  <path d="M13.7 10.6L20 3h-1.5l-5.5 6.7L8.4 3H3l6.7 9.9L3 21h1.5l5.9-7.1L15.6 21H21l-7.3-10.4zm-2.3 2.8l-.7-1L5 4.5h2.4l4.3 6.1.7 1L18.9 19h-2.4l-5.4-7.6z" />
                </svg>
              </a>
              <a
                href="https://github.com/novyxlabs"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-white transition-colors"
                aria-label="Novyx Labs on GitHub"
              >
                <svg viewBox="0 0 24 24" className="w-5 h-5" fill="currentColor">
                  <path d="M12 2C6.48 2 2 6.58 2 12.26c0 4.5 2.87 8.32 6.84 9.67.5.1.68-.22.68-.5 0-.24-.01-.88-.01-1.73-2.78.62-3.37-1.37-3.37-1.37-.46-1.2-1.12-1.52-1.12-1.52-.91-.64.07-.63.07-.63 1 .07 1.53 1.06 1.53 1.06.9 1.58 2.36 1.12 2.94.86.09-.67.35-1.12.63-1.38-2.22-.26-4.56-1.15-4.56-5.12 0-1.13.39-2.05 1.02-2.77-.1-.26-.44-1.3.1-2.7 0 0 .84-.28 2.75 1.05a9.2 9.2 0 0 1 2.5-.35c.85 0 1.7.12 2.5.35 1.9-1.33 2.74-1.05 2.74-1.05.54 1.4.2 2.44.1 2.7.64.72 1.02 1.64 1.02 2.77 0 3.98-2.35 4.86-4.58 5.11.36.32.68.94.68 1.9 0 1.38-.01 2.5-.01 2.84 0 .28.18.6.69.5A10.02 10.02 0 0 0 22 12.26C22 6.58 17.52 2 12 2z" />
                </svg>
              </a>
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
