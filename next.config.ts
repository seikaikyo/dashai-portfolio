import type { NextConfig } from 'next'

// Content-Security-Policy: only the origins this site actually talks to.
// The site is a static portfolio with no API routes and no backend calls, so
// connect-src holds only 'self' plus the Vercel telemetry hosts:
// - va.vercel-scripts.com: @vercel/analytics + @vercel/speed-insights loader
// - vitals.vercel-insights.com: Speed Insights reporting endpoint
// Outbound links to GitHub, LinkedIn and the seikai.dev sites are plain
// navigation, which CSP fetch directives do not govern.
// Project videos live in /public, so media-src stays on 'self'.
// Fonts come from next/font/google, which self-hosts at build time, so
// font-src stays on 'self'.
// 'unsafe-inline' / 'unsafe-eval' stay for now: Next.js App Router hydration
// still needs them. Tightening those is a separate change.
const csp = [
  "default-src 'self'",
  "script-src 'self' 'unsafe-inline' 'unsafe-eval' https://va.vercel-scripts.com",
  "style-src 'self' 'unsafe-inline'",
  "img-src 'self' data: blob: https:",
  "font-src 'self' data:",
  "media-src 'self'",
  "connect-src 'self' https://va.vercel-scripts.com https://vitals.vercel-insights.com",
  "worker-src 'self' blob:",
  "frame-ancestors 'none'",
  "base-uri 'self'",
  "form-action 'self'",
  "object-src 'none'",
  "upgrade-insecure-requests",
].join('; ')

const securityHeaders = [
  // DENY, matching the platform-level header already set in vercel.json and
  // the frame-ancestors 'none' below. Nothing on this site frames itself.
  { key: 'X-Frame-Options', value: 'DENY' },
  { key: 'X-Content-Type-Options', value: 'nosniff' },
  { key: 'Referrer-Policy', value: 'strict-origin-when-cross-origin' },
  { key: 'Permissions-Policy', value: 'camera=(), microphone=(), geolocation=()' },
  { key: 'Strict-Transport-Security', value: 'max-age=63072000; includeSubDomains; preload' },
  { key: 'Content-Security-Policy', value: csp },
]

const nextConfig: NextConfig = {
  async headers() {
    return [
      {
        source: '/:path*',
        headers: securityHeaders,
      },
    ]
  },
}

export default nextConfig
