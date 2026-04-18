import type { Metadata } from 'next'
import { HomeClient } from './home-client'

export const metadata: Metadata = {
  title: 'SeiKai Kyo — Manufacturing AI Engineer | DashAI Portfolio',
  description: 'SeiKai Kyo — Manufacturing AI Engineer. 25 years hands-on from TSMC fabs to AMC filter lines. 26 live projects across manufacturing systems, industrial IoT, AI tooling, and developer platforms.',
  alternates: {
    canonical: 'https://portfolio.dashai.dev',
  },
}

export default function Home() {
  return <HomeClient />
}
