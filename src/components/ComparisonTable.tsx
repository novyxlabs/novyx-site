const features = [
  {
    title: 'Execution Traces',
    description: 'RSA-4096 signed record of every agent step. Independently verifiable proof of what your agent did and why.',
  },
  {
    title: 'Circuit Breaker',
    description: 'Automatic protection against runaway loops, data exfiltration, and suspicious operations. Free on every plan.',
  },
  {
    title: 'Anomaly Detection',
    description: 'Behavioral baselines detect unusual agent activity. Get alerted before users notice.',
  },
  {
    title: 'Conflict Resolution',
    description: 'Vector clocks handle concurrent writes. Last-write-wins, reject, or flag for manual review.',
  },
]

export default function ComparisonTable() {
  return (
    <div className="grid md:grid-cols-2 gap-6">
      {features.map((feature) => (
        <div key={feature.title} className="rounded-xl border border-border bg-[#18181B] p-6 transition-all duration-300 hover:border-white/15 hover:shadow-lg hover:shadow-black/20">
          <h3 className="text-lg font-semibold mb-2">{feature.title}</h3>
          <p className="text-sm text-gray-400">{feature.description}</p>
        </div>
      ))}
    </div>
  )
}
