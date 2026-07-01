import type { Metadata } from 'next'
import { HomeClient } from './home-client'

export const metadata: Metadata = {
  title: 'SeiKai Kyo | Manufacturing AI Engineer',
  description: 'SeiKai Kyo: Manufacturing AI Engineer. 25 years hands-on from TSMC fabs to AMC filter lines. 35 projects across manufacturing systems, industrial IoT, AI tooling, and developer platforms.',
  alternates: {
    canonical: 'https://portfolio.seikai.dev',
  },
}

export default function Home() {
  return <HomeClient />
}
