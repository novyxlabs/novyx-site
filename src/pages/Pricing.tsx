import { useState } from 'react'
import PricingCard from '../components/PricingCard'

type ProductTab = 'ram' | 'sentinel' | 'forge'

const pricingData = {
  ram: {
    name: 'RAM',
    tagline: 'Memory-as-a-Service',
    tiers: [
      {
        tier: 'Free',
        price: '$0',
        period: '',
        description: 'For hobby projects and experimentation',
        features: [
          '1,000 memories',
          'Semantic search',
          'REST API access',
          'Community support',
        ],
        cta: 'Get Started',
        ctaLink: 'https://novyx-ram-api.fly.dev',
      },
      {
        tier: 'Pro',
        price: '$29',
        period: '/mo',
        description: 'For production applications',
        features: [
          '25,000 memories',
          'Semantic search',
          'REST API + Python SDK',
          'Priority support',
          'Analytics dashboard',
        ],
        cta: 'Start Pro',
        ctaLink: 'https://novyx-ram-api.fly.dev',
        highlighted: true,
      },
      {
        tier: 'Enterprise',
        price: 'Custom',
        period: '',
        description: 'For large-scale deployments',
        features: [
          'Unlimited memories',
          'Dedicated infrastructure',
          'Custom SLA',
          'SSO / SAML',
          'Dedicated support',
          'On-premise option',
        ],
        cta: 'Contact Sales',
        ctaLink: 'mailto:sales@novyx.dev',
      },
    ],
  },
  sentinel: {
    name: 'Sentinel',
    tagline: 'AI Security',
    tiers: [
      {
        tier: 'Free Trial',
        price: '$0',
        period: '',
        description: '7 days full access',
        features: [
          'Full feature access',
          'Up to 100K events',
          'Email support',
          'Basic reports',
        ],
        cta: 'Start Trial',
        ctaLink: '#',
      },
      {
        tier: 'Pro',
        price: '$499',
        period: '/mo',
        description: 'For production AI systems',
        features: [
          'Unlimited events',
          'Real-time threat detection',
          'Magic Rollback™',
          'Behavioral analysis',
          'Compliance reports',
          'Priority support',
        ],
        cta: 'Coming Soon',
        ctaLink: '#',
        highlighted: true,
      },
      {
        tier: 'Enterprise',
        price: '$2,500',
        period: '/mo',
        description: 'For mission-critical systems',
        features: [
          'Everything in Pro',
          'Dedicated infrastructure',
          '99.99% SLA',
          'Custom integrations',
          'Dedicated CSM',
          'On-premise option',
        ],
        cta: 'Contact Sales',
        ctaLink: 'mailto:sales@novyx.dev',
      },
    ],
  },
  forge: {
    name: 'Forge',
    tagline: 'Personal Transformation',
    tiers: [
      {
        tier: 'Free',
        price: '$0',
        period: '',
        description: 'Start your transformation',
        features: [
          '3 active builds',
          'Basic consumption tracking',
          'Daily check-ins',
          'Community access',
        ],
        cta: 'Join Waitlist',
        ctaLink: '#',
      },
      {
        tier: 'Pro',
        price: '$9',
        period: '/mo',
        description: 'For serious builders',
        features: [
          '10 active builds',
          'Advanced analytics',
          'Weekly reflection prompts',
          'Export data',
          'Priority support',
        ],
        cta: 'Join Waitlist',
        ctaLink: '#',
        highlighted: true,
      },
    ],
  },
}

export default function Pricing() {
  const [activeTab, setActiveTab] = useState<ProductTab>('ram')

  const tabs: { id: ProductTab; label: string; color: string }[] = [
    { id: 'ram', label: 'RAM', color: 'accent-ram' },
    { id: 'sentinel', label: 'Sentinel', color: 'accent-sentinel' },
    { id: 'forge', label: 'Forge', color: 'accent-forge' },
  ]

  const currentProduct = pricingData[activeTab]

  return (
    <div className="animate-fade-in py-16 md:py-24">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Pricing</h1>
          <p className="text-xl text-gray-400">
            Simple, transparent pricing for every stage of growth
          </p>
        </div>

        {/* Product Tabs */}
        <div className="flex justify-center mb-12">
          <div className="inline-flex rounded-lg bg-gray-900 p-1 border border-border">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`px-6 py-2 rounded-md text-sm font-medium transition-all ${
                  activeTab === tab.id
                    ? `bg-${tab.color} text-white`
                    : 'text-gray-400 hover:text-white'
                }`}
                style={
                  activeTab === tab.id
                    ? {
                        backgroundColor:
                          tab.id === 'ram'
                            ? '#10b981'
                            : tab.id === 'sentinel'
                            ? '#f59e0b'
                            : '#ec4899',
                      }
                    : undefined
                }
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        {/* Product Info */}
        <div className="text-center mb-8">
          <h2 className="text-2xl font-semibold">{currentProduct.name}</h2>
          <p className="text-gray-400">{currentProduct.tagline}</p>
        </div>

        {/* Pricing Cards */}
        <div
          className={`grid gap-6 ${
            currentProduct.tiers.length === 2
              ? 'md:grid-cols-2 max-w-3xl mx-auto'
              : 'md:grid-cols-3'
          }`}
        >
          {currentProduct.tiers.map((tier) => (
            <PricingCard
              key={tier.tier}
              {...tier}
              accentColor={activeTab}
            />
          ))}
        </div>

        {/* FAQ */}
        <div className="mt-20">
          <h2 className="text-2xl font-semibold text-center mb-8">
            Frequently Asked Questions
          </h2>
          <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            <div className="p-6 rounded-lg border border-border">
              <h3 className="font-semibold mb-2">Can I switch plans anytime?</h3>
              <p className="text-sm text-gray-400">
                Yes, you can upgrade or downgrade your plan at any time. Changes
                take effect immediately, and we'll prorate the difference.
              </p>
            </div>
            <div className="p-6 rounded-lg border border-border">
              <h3 className="font-semibold mb-2">What happens if I exceed my limit?</h3>
              <p className="text-sm text-gray-400">
                We'll notify you when you're approaching your limit. You can
                upgrade your plan or we'll pause new writes until the next
                billing cycle.
              </p>
            </div>
            <div className="p-6 rounded-lg border border-border">
              <h3 className="font-semibold mb-2">Do you offer discounts?</h3>
              <p className="text-sm text-gray-400">
                We offer 20% off annual billing for all products. Startups and
                non-profits may qualify for additional discounts.
              </p>
            </div>
            <div className="p-6 rounded-lg border border-border">
              <h3 className="font-semibold mb-2">How do I get Enterprise pricing?</h3>
              <p className="text-sm text-gray-400">
                Contact our sales team at sales@novyx.dev to discuss your needs.
                We'll create a custom plan that fits your requirements.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
