import type { AppProps } from 'next/app'
import '@styles/globals.css'
import { AnimatePresence, motion } from 'framer-motion'
import { useRouter } from 'next/router'
import { useEffect } from 'react'
import { useThemeStore } from '@/store/themeStore'
import Script from 'next/script'

export default function MyApp({ Component, pageProps }: AppProps) {
  const router = useRouter()
  const { initThemeByTime } = useThemeStore()

  useEffect(() => {
    initThemeByTime()
  }, [initThemeByTime])

  // Tambahkan hook Umami SPA tracking
  useEffect(() => {
    const handleRouteChange = (url: string) => {
      if ((window as any).umami) {
        (window as any).umami.track(url)
      }
    }

    router.events.on('routeChangeComplete', handleRouteChange)
    return () => {
      router.events.off('routeChangeComplete', handleRouteChange)
    }
  }, [router.events])

  return (
    <>
      {/* Script Umami */}
      <Script
        src="https://umami-omega-lemon.vercel.app/script.js"
        data-website-id="32599a5f-7c0f-43c3-992a-44c9b2892e15"
        strategy="afterInteractive"
      />

      <AnimatePresence mode="wait">
        <motion.div
          key={router.asPath}
          initial={{ x: '100%' }}
          animate={{ x: 0 }}
          exit={{ x: '-100%' }}
          transition={{ duration: 0.5, ease: 'easeInOut' }}
        >
          <Component {...pageProps} />
        </motion.div>
      </AnimatePresence>
    </>
  )
}
