import { useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import LanguageSwitcher from './LanguageSwitcher'
import useTranslation from 'next-translate/useTranslation'
import { FaSun, FaMoon, FaLinkedin, FaGithub, FaWhatsapp } from 'react-icons/fa'
import { MdEmail } from 'react-icons/md'
import { useThemeStore } from '@/store/themeStore'

export default function Layout({ children }: { children: React.ReactNode }) {
  const { t } = useTranslation('common')
  const { theme, toggleTheme } = useThemeStore()

  useEffect(() => {
    const root = window.document.documentElement
    root.classList.toggle('dark', theme === 'dark')
  }, [theme])

  return (
    <div
      className="min-h-screen flex flex-col transition-colors duration-500
      bg-gradient-to-br from-blue-50 via-white to-pink-50 text-black
      dark:bg-gradient-to-br dark:from-gray-900 dark:via-gray-800 dark:to-gray-700 dark:text-white"
    >
      <header className="sticky top-0 z-10 bg-white/80 dark:bg-gray-800/80 backdrop-blur border-b dark:border-gray-700 transition-colors">
        <div className="max-w-6xl mx-auto flex items-center justify-between py-3 px-4 flex-wrap gap-y-2">
          {/* Logo */}
          <Link href="/" className="flex items-center">
            <Image
              src="/assets/images/rizts.png"
              alt="Risdy Logo"
              title="Risdy"
              width={40}
              height={40}
              priority
              className="rounded-full"
            />
          </Link>

          {/* Navigation - selalu terlihat */}
          <nav className="flex gap-6 text-sm">
            <a href="/portfolio" className="hover:opacity-80">{t('nav.portfolio')}</a>
            <a href="/services" className="hover:opacity-80">{t('nav.services')}</a>
            <a href="/about" className="hover:opacity-80">{t('nav.about')}</a>
            <a href="/contact" className="hover:opacity-80">{t('nav.contact')}</a>
          </nav>

          {/* Right section */}
          <div className="flex items-center gap-3">
            {/* Social media & kontak - hanya md ke atas */}
            <div className="hidden md:flex items-center gap-3">
              <a
                href={t('whatsapp')}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 hover:opacity-80 text-2xl"
                aria-label="Whatsapp"
              >
                <FaWhatsapp />
              </a>
              <a
                href={"mailto:"+t('email')}
                className="text-red-500 hover:opacity-80 text-2xl"
                aria-label="Email"
              >
                <MdEmail />
              </a>
              <a
                href={t('linkedin')}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 hover:opacity-80 text-2xl"
                aria-label="LinkedIn"
              >
                <FaLinkedin />
              </a>
              <a
                href={t('github')}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-900 dark:text-white hover:opacity-80 text-2xl"
                aria-label="GitHub"
              >
                <FaGithub />
              </a>
            </div>

            {/* Language switch & theme toggle - selalu tampil */}
            <LanguageSwitcher />
            <button
              onClick={toggleTheme}
              className="px-3 py-1 border rounded text-sm border-gray-300 dark:border-gray-500 hover:bg-gray-200 dark:hover:bg-gray-700 transition flex items-center gap-1"
            >
              {theme === 'dark' ? <FaSun /> : <FaMoon />}
            </button>
          </div>
        </div>
      </header>

      <main className="flex-1">{children}</main>

      <footer className="border-t border-gray-200 dark:border-gray-700 py-6 text-center text-sm text-gray-600 dark:text-gray-300 transition-colors">
        © {new Date().getFullYear()} — {t('footer.rights')}
      </footer>
    </div>
  )
}
