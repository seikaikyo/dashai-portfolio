import type { Metadata } from 'next'
import { Inter, JetBrains_Mono, Noto_Serif_JP } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import { I18nProvider } from '@/lib/i18n'
import './globals.css'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-sans',
  display: 'swap',
})

const jetbrainsMono = JetBrains_Mono({
  subsets: ['latin'],
  variable: '--font-mono',
  display: 'swap',
})

const notoSerifJP = Noto_Serif_JP({
  subsets: ['latin'],
  weight: ['400', '600', '700'],
  variable: '--font-serif',
  display: 'swap',
})

export const metadata: Metadata = {
  metadataBase: new URL('https://portfolio.dashai.dev'),
  title: 'DashAI Portfolio',
  description: 'SeiKai Kyo — Manufacturing AI Engineer. 25 years hands-on from TSMC fabs to AMC filter lines. 26 live projects across manufacturing systems, industrial IoT, AI tooling, and developer platforms.',
  openGraph: {
    title: 'DashAI Portfolio',
    description: 'SeiKai Kyo — Manufacturing AI Engineer. 25 years hands-on from TSMC fabs to AMC filter lines. 26 live projects across manufacturing systems, industrial IoT, AI tooling, and developer platforms.',
    url: 'https://portfolio.dashai.dev',
    siteName: 'DashAI',
    images: ['/og-image.png'],
    type: 'website',
  },
  robots: {
    index: true,
    follow: true,
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${jetbrainsMono.variable} ${notoSerifJP.variable}`}
    >
      <body>
        <I18nProvider>
          {children}
        </I18nProvider>
        <Analytics />
      </body>
    </html>
  )
}
