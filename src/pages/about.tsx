import Head from 'next/head'
import Layout from '@/components/Layout'
import About from '@/components/About'

export default function AboutPage() {
  return (
    <Layout>
      <Head>
        <title>About – Risdy</title>
      </Head>
      <About />
    </Layout>
  )
}
