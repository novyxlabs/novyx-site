const rows = [
  { feature: 'Persistent memory', mem0: true, langsmith: false, novyx: true },
  { feature: 'Semantic search', mem0: true, langsmith: false, novyx: true },
  { feature: 'Security layer', mem0: false, langsmith: false, novyx: true },
  { feature: 'Rollback', mem0: false, langsmith: false, novyx: true },
  { feature: 'Tamper detection', mem0: false, langsmith: false, novyx: true },
  { feature: 'Cryptographic audit', mem0: false, langsmith: 'Basic', novyx: true },
  { feature: 'Circuit breaker', mem0: false, langsmith: false, novyx: true },
]

function Cell({ value }: { value: boolean | string }) {
  if (value === true) {
    return <span className="text-green-500">✓</span>
  }
  if (value === false) {
    return <span className="text-gray-600">—</span>
  }
  return <span className="text-gray-300">{value}</span>
}

export default function ComparisonTable() {
  return (
    <div className="overflow-x-auto rounded-xl border border-border bg-[#0D1117]">
      <table className="w-full text-left text-sm">
        <thead className="bg-[#111827] text-gray-300">
          <tr>
            <th className="px-4 py-3 font-medium">Feature</th>
            <th className="px-4 py-3 font-medium">Mem0</th>
            <th className="px-4 py-3 font-medium">LangSmith</th>
            <th className="px-4 py-3 font-medium text-white">Novyx</th>
          </tr>
        </thead>
        <tbody>
          {rows.map((row) => (
            <tr key={row.feature} className="border-t border-border">
              <td className="px-4 py-3 text-gray-300">{row.feature}</td>
              <td className="px-4 py-3"><Cell value={row.mem0} /></td>
              <td className="px-4 py-3"><Cell value={row.langsmith} /></td>
              <td className="px-4 py-3"><Cell value={row.novyx} /></td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}
