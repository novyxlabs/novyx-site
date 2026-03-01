import { Routes, Route, Navigate } from 'react-router-dom'
import Layout from './components/Layout'
import ScrollToTop from './components/ScrollToTop'
import Home from './pages/Home'
import Pricing from './pages/Pricing'
import Docs from './pages/Docs'
import Status from './pages/Status'
import Blog from './pages/Blog'
import Privacy from './pages/Privacy'
import Terms from './pages/Terms'
import Errors from './pages/Errors'
import Changelog from './pages/Changelog'
import Dashboard from './pages/Dashboard'
import DocsJS from './pages/DocsJS'
import Integrations from './pages/Integrations'
import DocsReplay from './pages/DocsReplay'
import DocsCortex from './pages/DocsCortex'
import Features from './pages/Features'

function App() {
  return (
    <Layout>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/pricing" element={<Pricing />} />
        <Route path="/docs" element={<Docs />} />
        <Route path="/docs/js" element={<DocsJS />} />
        <Route path="/features" element={<Features />} />
        <Route path="/integrations" element={<Integrations />} />
        <Route path="/docs/replay" element={<DocsReplay />} />
        <Route path="/docs/cortex" element={<DocsCortex />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/status" element={<Status />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/privacy" element={<Privacy />} />
        <Route path="/terms" element={<Terms />} />
        <Route path="/errors" element={<Errors />} />
        <Route path="/changelog" element={<Changelog />} />
        <Route path="/docs/errors" element={<Navigate to="/errors" replace />} />
        <Route path="/about" element={<Navigate to="/docs" replace />} />
        <Route path="/ram" element={<Navigate to="/" replace />} />
        <Route path="/sentinel" element={<Navigate to="/" replace />} />
        <Route path="/forge" element={<Navigate to="/" replace />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </Layout>
  )
}

export default App
