import { useState, useEffect } from 'react'

interface ServiceStatus {
  name: string
  url: string
  status: 'operational' | 'degraded' | 'down' | 'checking'
}

const INITIAL_SERVICES: ServiceStatus[] = [
  { name: 'RAM API', url: 'https://novyx-ram-api.fly.dev/health', status: 'checking' },
  { name: 'Novyx Core API', url: 'https://novyx-ram-api.fly.dev/health', status: 'checking' },
]

export default function Status() {
  const [services, setServices] = useState<ServiceStatus[]>(INITIAL_SERVICES)
  const [lastChecked, setLastChecked] = useState<Date | null>(null)

  useEffect(() => {
    const checkServices = async () => {
      const results = await Promise.all(
        INITIAL_SERVICES.map(async (service) => {
          try {
            const response = await fetch(service.url, { method: 'GET' })
            return {
              ...service,
              status: response.ok ? 'operational' : 'degraded',
            } as ServiceStatus
          } catch {
            return { ...service, status: 'down' } as ServiceStatus
          }
        })
      )
      setServices(results)
      setLastChecked(new Date())
    }

    checkServices()
  }, [])

  const allOperational = services.every((s) => s.status === 'operational')
  const anyDown = services.some((s) => s.status === 'down')

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'operational':
        return 'bg-green-500'
      case 'degraded':
        return 'bg-yellow-500'
      case 'down':
        return 'bg-red-500'
      default:
        return 'bg-gray-500 animate-pulse'
    }
  }

  const getStatusText = (status: string) => {
    switch (status) {
      case 'operational':
        return 'Operational'
      case 'degraded':
        return 'Degraded'
      case 'down':
        return 'Down'
      default:
        return 'Checking...'
    }
  }

  return (
    <div className="animate-fade-in py-16 md:py-24">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-bold mb-4">System Status</h1>
        <p className="text-gray-400 mb-10">
          Current operational status of Novyx services.
        </p>

        {/* Overall Status */}
        <div
          className={`mb-8 p-6 rounded-xl border ${
            allOperational
              ? 'border-green-500/30 bg-green-500/10'
              : anyDown
              ? 'border-red-500/30 bg-red-500/10'
              : 'border-yellow-500/30 bg-yellow-500/10'
          }`}
        >
          <div className="flex items-center gap-3">
            <div
              className={`w-4 h-4 rounded-full ${
                allOperational ? 'bg-green-500' : anyDown ? 'bg-red-500' : 'bg-yellow-500'
              }`}
            />
            <span className="text-xl font-semibold">
              {allOperational
                ? 'All Systems Operational'
                : anyDown
                ? 'Service Disruption'
                : 'Partial Degradation'}
            </span>
          </div>
        </div>

        {/* Individual Services */}
        <div className="space-y-4">
          {services.map((service) => (
            <div
              key={service.name}
              className="flex items-center justify-between p-4 rounded-lg border border-border bg-[#18181B]"
            >
              <div className="flex items-center gap-3">
                <div className={`w-3 h-3 rounded-full ${getStatusColor(service.status)}`} />
                <span className="font-medium">{service.name}</span>
              </div>
              <span className="text-sm text-gray-400">{getStatusText(service.status)}</span>
            </div>
          ))}
        </div>

        {/* Last Checked */}
        {lastChecked && (
          <p className="mt-8 text-sm text-gray-500 text-center">
            Last checked: {lastChecked.toLocaleString()}
          </p>
        )}
      </div>
    </div>
  )
}
