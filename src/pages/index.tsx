import Head from 'next/head'
import Layout from '@/components/Layout'
import Script from "next/script"
import Hero from '@/components/Hero'

export default function Home() {
  return (
    <Layout>
      <Head>
        <title>Risdy – Senior PHP & React Developer</title>
        <meta name="description" content="Portfolio & services" />
        <link rel="icon" href="/assets/images/rizts.png" type="image/png" />
      </Head>
      <Script
        async
        defer
        data-website-id="32599a5f-7c0f-43c3-992a-44c9b2892e15"
        src="https://umami-omega-lemon.vercel.app/script.js"
      />
      <Hero />
    </Layout>
  )
}
