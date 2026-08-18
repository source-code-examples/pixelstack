/**
 * Server-only helper for fetching all-time visitor stats from
 * self-hosted Umami instance -> Logs in with admin credentials to obtain
 * token (NOTE: self-hosted Umami doesn't expose persistent API keys)
 */

interface UmamiStats {
  pageviews: number
  visitors: number
  visits: number
  bounces: number
  totaltime: number
  comparison: {
    pageviews: number
    visitors: number
    visits: number
    bounces: number
    totaltime: number
  }
}

async function getUmamiToken(apiUrl: string): Promise<string | null> {
  const username = process.env.UMAMI_USERNAME
  const password = process.env.UMAMI_PASSWORD

  if (!username || !password) {
    console.error('Umami credentials are not configured.')
    return null
  }

  try {
    const res = await fetch(`${apiUrl}/api/auth/login`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ username, password }),
      cache: 'no-store',
    })

    if (!res.ok) {
      console.error('Umami login failed:', res.status)
      return null
    }

    const data = await res.json()
    return data.token as string
  } catch (error) {
    console.error('Umami login error:', error)
    return null
  }
}

export async function getUmamiStats(): Promise<UmamiStats | null> {
  const apiUrl = process.env.UMAMI_API_URL
  const websiteId = process.env.UMAMI_WEBSITE_ID

  if (!apiUrl || !websiteId) {
    console.error('Umami env vars are not fully configured.')
    return null
  }

  const token = await getUmamiToken(apiUrl)
  if (!token) return null

  const endAt = Date.now()
  // Jan 1, 2026 as a safe starting point — well before PixelStack existed
  const startAt = new Date('2026-01-01').getTime()

  try {
    const res = await fetch(
      `${apiUrl}/api/websites/${websiteId}/stats?startAt=${startAt}&endAt=${endAt}`,
      {
        headers: { Authorization: `Bearer ${token}` },
        cache: 'no-store',
      },
    )

    if (!res.ok) {
      console.error('Umami stats request failed:', res.status)
      return null
    }

    const data = await res.json()
    console.log('UMAMI RAW RESPONSE:', JSON.stringify(data, null, 2)) // temporararily log

    return data as UmamiStats
  } catch (error) {
    console.error('Umami stats fetch error:', error)
    return null
  }
}
