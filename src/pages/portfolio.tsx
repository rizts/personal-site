import Head from 'next/head'
import Layout from '@/components/Layout'
import Portfolio from '@/components/Portfolio'

export default function PortfolioPage() {
  return (
    <Layout>
      <Head>
        <title>Portfolio – Risdy</title>
      </Head>
      <Portfolio />
    </Layout>
  )
}
