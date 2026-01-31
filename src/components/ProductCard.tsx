import { Link } from 'react-router-dom'

interface ProductCardProps {
  name: string
  tagline: string
  description: string
  status: 'live' | 'coming-soon' | 'waitlist'
  link: string
  accentColor: string
  icon: React.ReactNode
}

export default function ProductCard({
  name,
  tagline,
  description,
  status,
  link,
  accentColor,
  icon,
}: ProductCardProps) {
  const statusBadge = {
    live: { text: 'Live', class: 'bg-green-500/20 text-green-400' },
    'coming-soon': { text: 'Coming Soon', class: 'bg-amber-500/20 text-amber-400' },
    waitlist: { text: 'Waitlist', class: 'bg-pink-500/20 text-pink-400' },
  }

  return (
    <Link
      to={link}
      className="group block p-6 rounded-xl border border-border hover:border-gray-600 transition-all hover:scale-[1.02]"
    >
      <div className="flex items-start justify-between mb-4">
        <div className={`p-3 rounded-lg ${accentColor}`}>
          {icon}
        </div>
        <span className={`text-xs font-medium px-2 py-1 rounded-full ${statusBadge[status].class}`}>
          {statusBadge[status].text}
        </span>
      </div>

      <h3 className="text-xl font-semibold mb-1 group-hover:text-white transition-colors">
        {name}
      </h3>
      <p className="text-sm text-gray-400 mb-3">{tagline}</p>
      <p className="text-sm text-gray-500">{description}</p>

      <div className="mt-4 flex items-center text-sm font-medium text-primary group-hover:text-primary-hover transition-colors">
        Learn more
        <svg className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
        </svg>
      </div>
    </Link>
  )
}
