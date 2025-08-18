import type { AppProps } from 'next/app'
import '@styles/globals.css'
import { AnimatePresence, motion } from 'framer-motion'
import { useRouter } from 'next/router'
import { useEffect } from 'react'
import { useThemeStore } from '@/store/themeStore'

export default function MyApp({ Component, pageProps }: AppProps) {
  const router = useRouter()
  const { initThemeByTime } = useThemeStore()

  useEffect(() => {
    initThemeByTime()
  }, [initThemeByTime])

  return (
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
  )
}
