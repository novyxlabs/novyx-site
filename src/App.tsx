import { Routes, Route, Navigate } from 'react-router-dom'
import Layout from './components/Layout'
import ScrollToTop from './components/ScrollToTop'
import Home from './pages/Home'
import Pricing from './pages/Pricing'
import Docs from './pages/Docs'
import About from './pages/About'

function App() {
  return (
    <Layout>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/pricing" element={<Pricing />} />
        <Route path="/docs" element={<Docs />} />
        <Route path="/about" element={<About />} />
        <Route path="/ram" element={<Navigate to="/" replace />} />
        <Route path="/sentinel" element={<Navigate to="/" replace />} />
        <Route path="/forge" element={<Navigate to="/" replace />} />
      </Routes>
    </Layout>
  )
}

export default App
