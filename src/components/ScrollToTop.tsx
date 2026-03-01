import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'

const pageTitles: Record<string, string> = {
  '/': 'Novyx — Persistent Memory + Rollback for AI Agents',
  '/features': 'Features — Novyx',
  '/pricing': 'Pricing — Novyx',
  '/docs': 'Python SDK Docs — Novyx',
  '/docs/js': 'JS/TS SDK Docs — Novyx',
  '/docs/replay': 'Replay Docs — Novyx',
  '/docs/cortex': 'Cortex Docs — Novyx',
  '/integrations': 'Integrations — Novyx',
  '/dashboard': 'Dashboard — Novyx',
  '/status': 'API Status — Novyx',
  '/story': 'Our Story — Novyx',
  '/privacy': 'Privacy Policy — Novyx',
  '/terms': 'Terms of Service — Novyx',
  '/errors': 'Error Reference — Novyx',
  '/changelog': 'Changelog — Novyx',
}

export default function ScrollToTop() {
  const { pathname } = useLocation()

  useEffect(() => {
    window.scrollTo(0, 0)
    document.title = pageTitles[pathname] || 'Novyx — Persistent Memory + Rollback for AI Agents'
  }, [pathname])

  return null
}
