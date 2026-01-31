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
  showLineNumbers?: boolean
}

export default function CodeBlock({ tabs, code, language, showLineNumbers = false }: CodeBlockProps) {
  const [activeTab, setActiveTab] = useState(0)
  const [copied, setCopied] = useState(false)

  const currentCode = tabs ? tabs[activeTab].code : code || ''
  const currentLanguage = tabs ? tabs[activeTab].language : language || 'text'

  const handleCopy = async () => {
    await navigator.clipboard.writeText(currentCode)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  const highlightCode = (code: string, lang: string) => {
    // Simple syntax highlighting
    let highlighted = code
      .replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;')

    if (lang === 'python') {
      highlighted = highlighted
        .replace(/(from|import|def|class|return|if|else|for|in|as|with|try|except|None|True|False)\b/g, '<span class="text-purple-400">$1</span>')
        .replace(/(["'])(.*?)\1/g, '<span class="text-green-400">$1$2$1</span>')
        .replace(/(#.*$)/gm, '<span class="text-gray-500">$1</span>')
    } else if (lang === 'javascript' || lang === 'js') {
      highlighted = highlighted
        .replace(/\b(const|let|var|function|return|if|else|for|in|of|async|await|new|this|class|export|import|from)\b/g, '<span class="text-purple-400">$1</span>')
        .replace(/(["'`])(.*?)\1/g, '<span class="text-green-400">$1$2$1</span>')
        .replace(/(\/\/.*$)/gm, '<span class="text-gray-500">$1</span>')
    } else if (lang === 'bash' || lang === 'shell') {
      highlighted = highlighted
        .replace(/(curl|pip|npm|yarn|pnpm|install|export)\b/g, '<span class="text-purple-400">$1</span>')
        .replace(/(-[A-Za-z]+)/g, '<span class="text-blue-400">$1</span>')
        .replace(/(["'])(.*?)\1/g, '<span class="text-green-400">$1$2$1</span>')
        .replace(/(#.*$)/gm, '<span class="text-gray-500">$1</span>')
    }

    return highlighted
  }

  const lines = currentCode.split('\n')

  return (
    <div className="rounded-lg overflow-hidden bg-gray-900 border border-border">
      {/* Tabs header */}
      {tabs && tabs.length > 1 && (
        <div className="flex border-b border-border bg-gray-800/50">
          {tabs.map((tab, index) => (
            <button
              key={tab.language}
              onClick={() => setActiveTab(index)}
              className={`px-4 py-2 text-sm font-medium transition-colors ${
                activeTab === index
                  ? 'text-white bg-gray-900 border-b-2 border-primary'
                  : 'text-gray-400 hover:text-white'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>
      )}

      {/* Code content */}
      <div className="relative">
        <button
          onClick={handleCopy}
          className="absolute top-3 right-3 p-2 rounded-md bg-gray-800 hover:bg-gray-700 transition-colors text-gray-400 hover:text-white"
          aria-label="Copy code"
        >
          {copied ? (
            <svg className="w-4 h-4 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
          ) : (
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" />
            </svg>
          )}
        </button>

        <pre className="p-4 overflow-x-auto text-sm">
          <code>
            {showLineNumbers ? (
              lines.map((line, i) => (
                <div key={i} className="flex">
                  <span className="text-gray-600 select-none w-8 text-right pr-4">{i + 1}</span>
                  <span dangerouslySetInnerHTML={{ __html: highlightCode(line, currentLanguage) }} />
                </div>
              ))
            ) : (
              <span dangerouslySetInnerHTML={{ __html: highlightCode(currentCode, currentLanguage) }} />
            )}
          </code>
        </pre>
      </div>
    </div>
  )
}
