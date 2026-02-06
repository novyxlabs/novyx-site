import { Link, useLocation } from 'react-router-dom'
import { useState } from 'react'
import GetApiKeyModal from './GetApiKeyModal'

const navLinks = [
  { name: 'Docs', path: '/docs' },
  { name: 'Dashboard', path: '/dashboard' },
  { name: 'Pricing', path: '/pricing' },
]

export default function Navbar() {
  const location = useLocation()
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <nav className="border-b border-border sticky top-0 bg-background/80 backdrop-blur-sm z-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          <Link to="/" className="flex items-center gap-3">
            <img
              src="/logo.png"
              alt="Novyx Labs"
              className="h-10 w-auto opacity-95 hover:opacity-100 transition-opacity"
              style={{ mixBlendMode: 'lighten' }}
            />
          </Link>

          {/* Desktop nav */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`text-sm transition-colors hover:text-white ${
                  location.pathname === link.path
                    ? 'text-white'
                    : 'text-gray-400'
                }`}
              >
                {link.name}
              </Link>
            ))}
            <GetApiKeyModal
              label="Get Free API Key"
              className="bg-primary hover:bg-primary-hover text-white px-4 py-2 rounded-lg text-sm font-medium transition-colors"
            />
          </div>

          {/* Mobile menu button */}
          <button
            className="md:hidden p-2"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {mobileMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile nav */}
        {mobileMenuOpen && (
          <div className="md:hidden py-4 border-t border-border">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`block py-2 text-sm transition-colors hover:text-white ${
                  location.pathname === link.path
                    ? 'text-white'
                    : 'text-gray-400'
                }`}
                onClick={() => setMobileMenuOpen(false)}
              >
                {link.name}
              </Link>
            ))}
            <div onClick={() => setMobileMenuOpen(false)}>
              <GetApiKeyModal
                label="Get Free API Key"
                className="block mt-4 bg-primary hover:bg-primary-hover text-white px-4 py-2 rounded-lg text-sm font-medium transition-colors text-center w-full"
              />
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}
