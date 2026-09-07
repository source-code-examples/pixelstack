import type { NextConfig } from 'next'

// Content-Security-Policy scoped to what the app actually loads:
// - 'self' covers all first-party JS/CSS/fonts/images
// - Umami analytics is the only third-party script loaded in browser
// - Sentry's browser SDK reports errors via fetch to *.sentry.io
//   (DeepSeek/Resend/Upstash are called server-side only, from API routes,
//   and never reach the browser, so they don't need to appear here)
// - 'unsafe-eval' is only added in development: React/Turbopack use eval()
//   for dev-mode debugging (e.g. reconstructing call stacks) but never in
//   production, so production CSP stays strict
const isDev = process.env.NODE_ENV === 'development'

const csp =
  "default-src 'self'; " +
  `script-src 'self' 'unsafe-inline' ${isDev ? "'unsafe-eval' " : ''}https://umami-eta-tan.vercel.app; ` +
  "style-src 'self' 'unsafe-inline'; " +
  "img-src 'self' data: blob:; " +
  "connect-src 'self' https://umami-eta-tan.vercel.app https://*.sentry.io"

const nextConfig: NextConfig = {
  /* config options here */
  reactCompiler: false, // deactivate unstable React compiler for performance reasons

  async headers() {
    return [
      {
        source: '/:path*',
        headers: [
          // blocks clickjacking — site can't be embedded in <iframe>
          // elsewhere, which matters most for /admin login
          { key: 'X-Frame-Options', value: 'DENY' },

          // stops browser from guessing content types, closing off a
          // known vector for disguised-script attacks
          { key: 'X-Content-Type-Options', value: 'nosniff' },

          // enforces HTTPS for a year including subdomains — safe since
          // Vercel/IONOS only ever serve this site over HTTPS
          {
            key: 'Strict-Transport-Security',
            value: 'max-age=31536000; includeSubDomains',
          },

          { key: 'Content-Security-Policy', value: csp },
        ],
      },
    ]
  },
}

export default nextConfig
