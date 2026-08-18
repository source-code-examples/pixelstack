import { getUmamiStats } from '@/lib/umami'

const AnalyticsWidget = async () => {
  // Server-side fetch — runs on every dashboard load, no client-side call
  const stats = await getUmamiStats()

  // Umami unreachable, misconfigured env vars, or login failed
  if (!stats) {
    return (
      <div className="mb-8 rounded-lg border border-gray-200 p-4 text-sm text-gray-400 dark:border-gray-800">
        Analytics unavailable.
      </div>
    )
  }

  // Visitors = unique people, Visits = sessions, Views = total pageviews
  const cards = [
    { label: 'Visitors', value: stats.visitors },
    { label: 'Visits', value: stats.visits },
    { label: 'Views', value: stats.pageviews },
  ]

  return (
    <div className="mb-8">
      <h2 className="mb-3 text-sm font-semibold text-gray-500">
        Analytics — all time
      </h2>
      <div className="grid grid-cols-3 gap-4">
        {cards.map((card) => (
          <div
            key={card.label}
            className="rounded-lg border border-gray-200 p-4 dark:border-gray-800"
          >
            <p className="text-2xl font-bold text-cyan-500">{card.value}</p>
            <p className="text-xs text-gray-500">{card.label}</p>
          </div>
        ))}
      </div>
    </div>
  )
}

export default AnalyticsWidget
