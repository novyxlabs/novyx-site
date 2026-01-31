import { useState } from 'react'

interface CodeTab {
  language: string
  label: string
  code: string
}

interface CodeBlockProps {
  tabs?: CodeTab[]
  code?: string
  language?: string
}

export default function CodeBlock({ tabs, code, language = 'bash' }: CodeBlockProps) {
  const [activeTab, setActiveTab] = useState(0)
  const [copied, setCopied] = useState(false)

  const currentCode = tabs ? tabs[activeTab].code : code || ''
  const currentLabel = tabs ? tabs[activeTab].label : language

  const handleCopy = async () => {
    await navigator.clipboard.writeText(currentCode)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  return (
    <div className="rounded-lg overflow-hidden bg-[#0D1117] border border-[#30363D]">
      {/* Header with tabs or language label */}
      <div className="flex justify-between items-center px-4 py-2 bg-[#161B22] border-b border-[#30363D]">
        {tabs && tabs.length > 1 ? (
          <div className="flex gap-1">
            {tabs.map((tab, index) => (
              <button
                key={tab.language}
                onClick={() => setActiveTab(index)}
                className={`px-3 py-1 text-xs rounded transition ${
                  activeTab === index
                    ? 'text-white bg-[#30363D]'
                    : 'text-gray-400 hover:text-white'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        ) : (
          <span className="text-xs text-gray-400">{currentLabel}</span>
        )}
        <button
          onClick={handleCopy}
          className="text-xs text-gray-400 hover:text-white transition"
        >
          {copied ? 'Copied!' : 'Copy'}
        </button>
      </div>

      {/* Code content */}
      <pre className="p-4 overflow-x-auto">
        <code className="text-sm text-gray-300 font-mono whitespace-pre">{currentCode}</code>
      </pre>
    </div>
  )
}
