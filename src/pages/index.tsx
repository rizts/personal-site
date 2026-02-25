import Head from 'next/head'
import Layout from '@/components/Layout'
import Hero from '@/components/Hero'

export default function Home() {
  return (
    <Layout>
      <Head>
        <title>Risdy – Senior Fullstack Developer | AI Integration Specialist | RAG Systems</title>
        <meta name="description" content="Portfolio & services" />
        <link rel="icon" href="/assets/images/rizts.png" type="image/png" />
      </Head>
      <Hero />
    </Layout>
  )
}
