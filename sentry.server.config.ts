// Configure initialization of Sentry on server
// Cover API routes and server components (e.g. /api/connect, /api/agent)

import * as Sentry from '@sentry/nextjs'

Sentry.init({
  dsn: process.env.NEXT_PUBLIC_SENTRY_DSN,
  enabled: process.env.NODE_ENV === 'production',
})