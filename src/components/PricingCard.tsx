interface PricingCardProps {
  tier: string
  price: string
  period?: string
  description: string
  features: string[]
  cta: string
  ctaLink?: string
  highlighted?: boolean
  accentColor?: string
}

export default function PricingCard({
  tier,
  price,
  period = '/mo',
  description,
  features,
  cta,
  ctaLink = '#',
  highlighted = false,
  accentColor = 'primary',
}: PricingCardProps) {
  const colorClasses: Record<string, string> = {
    primary: 'bg-primary hover:bg-primary-hover',
    ram: 'bg-accent-ram hover:bg-emerald-600',
    sentinel: 'bg-accent-sentinel hover:bg-amber-600',
    forge: 'bg-accent-forge hover:bg-pink-600',
  }

  const borderClasses: Record<string, string> = {
    primary: 'border-primary',
    ram: 'border-accent-ram',
    sentinel: 'border-accent-sentinel',
    forge: 'border-accent-forge',
  }

  return (
    <div
      className={`rounded-xl p-6 border transition-all ${
        highlighted
          ? `${borderClasses[accentColor]} border-2 scale-105`
          : 'border-border hover:border-gray-600'
      }`}
    >
      <div className="mb-4">
        <h3 className="text-lg font-semibold">{tier}</h3>
        <p className="text-sm text-gray-400 mt-1">{description}</p>
      </div>

      <div className="mb-6">
        <span className="text-4xl font-bold">{price}</span>
        {price !== 'Custom' && price !== 'Free' && (
          <span className="text-gray-400">{period}</span>
        )}
      </div>

      <ul className="space-y-3 mb-6">
        {features.map((feature, index) => (
          <li key={index} className="flex items-start gap-2 text-sm">
            <svg className="w-5 h-5 text-green-400 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
            <span className="text-gray-300">{feature}</span>
          </li>
        ))}
      </ul>

      <a
        href={ctaLink}
        className={`block w-full py-3 px-4 rounded-lg text-center font-medium transition-colors ${
          highlighted
            ? `${colorClasses[accentColor]} text-white`
            : 'bg-gray-800 hover:bg-gray-700 text-white'
        }`}
      >
        {cta}
      </a>
    </div>
  )
}
