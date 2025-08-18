import Head from 'next/head'
import Layout from '@/components/Layout'
import Hero from '@/components/Hero'

export default function Home() {
  return (
    <Layout>
      <Head>
        <title>Risdy – Senior PHP & React Developer</title>
        <meta name="description" content="Portfolio & services" />
        <link rel="icon" href="/assets/images/rizts.png" type="image/png" />
      </Head>
      <Hero />
    </Layout>
  )
}
