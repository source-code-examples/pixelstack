import type { NextConfig } from 'next'
import { withSentryConfig } from '@sentry/nextjs/config'

const nextConfig: NextConfig = {
  /* config options here */
  reactCompiler: false, // deactivate unstable React compiler for performance reasons
}

export default withSentryConfig(nextConfig, {
  // only relevant when SENTRY_AUTH_TOKEN is set — uploads source maps so
  // stack traces in Sentry show real file/line info instead of minified code
  org: process.env.SENTRY_ORG,
  project: process.env.SENTRY_PROJECT,
  authToken: process.env.SENTRY_AUTH_TOKEN,
  silent: true,

  // don't fail the build locally / in CI if Sentry env vars aren't configured
  sourcemaps: {
    disable: !process.env.SENTRY_AUTH_TOKEN,
  },
})
