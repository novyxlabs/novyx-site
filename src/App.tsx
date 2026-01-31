import { Routes, Route } from 'react-router-dom'
import Layout from './components/Layout'
import Home from './pages/Home'
import Ram from './pages/Ram'
import Sentinel from './pages/Sentinel'
import Forge from './pages/Forge'
import Pricing from './pages/Pricing'

function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/ram" element={<Ram />} />
        <Route path="/sentinel" element={<Sentinel />} />
        <Route path="/forge" element={<Forge />} />
        <Route path="/pricing" element={<Pricing />} />
      </Routes>
    </Layout>
  )
}

export default App
