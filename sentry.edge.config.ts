// Configure initialization of Sentry for edge runtime,
// which src/middleware.ts (NextAuth admin route protection) runs on

import * as Sentry from '@sentry/nextjs'

Sentry.init({
  dsn: process.env.NEXT_PUBLIC_SENTRY_DSN,
  enabled: process.env.NODE_ENV === 'production',
})