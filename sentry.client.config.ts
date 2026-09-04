// Configure initialization of Sentry on client (browser)

import * as Sentry from '@sentry/nextjs'

Sentry.init({
  dsn: process.env.NEXT_PUBLIC_SENTRY_DSN,

  // only send events in production — keep local/dev noise out of Sentry
  enabled: process.env.NODE_ENV === 'production',
})