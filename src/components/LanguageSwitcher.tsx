import { useState, useEffect } from 'react'
import { useRouter } from 'next/router'
import { FiChevronDown } from 'react-icons/fi'
import { useLanguageStore } from '@/store/languageStore'

type Lang = { code: string; label: string; flag: string }

export default function LanguageSwitcher() {
  const router = useRouter()
  const { pathname, query, asPath } = router
  const { lang, setLang } = useLanguageStore()
  const [open, setOpen] = useState(false)

  const languages: Lang[] = [
    { code: 'en', label: 'English', flag: '🇺🇸' },
    { code: 'id', label: 'Indonesia', flag: '🇮🇩' },
  ]

  const currentLang = languages.find(l => l.code === lang) || languages[0]

  // Sync bahasa dari store ke router saat komponen pertama kali mount
  useEffect(() => {
    if (router.locale !== lang) {
      router.push({ pathname, query }, asPath, { locale: lang })
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  const switchLang = async (newLang: string) => {
    setOpen(false)
    if (newLang !== lang) {
      setLang(newLang)
      await router.push({ pathname, query }, asPath, { locale: newLang })
    }
  }

  return (
    <div className="relative inline-block text-left">
      <button
        onClick={() => setOpen(o => !o)}
        className="inline-flex items-center gap-2 px-3 py-1 border rounded-lg text-sm hover:scale-105 transition bg-white dark:bg-gray-800 text-gray-900 dark:text-white"
      >
        <span>{currentLang.flag} {currentLang.label}</span>
        <FiChevronDown className="w-4 h-4" />
      </button>

      {open && (
        <div className="absolute right-0 mt-2 w-32 rounded-md shadow-lg bg-white dark:bg-gray-800 ring-1 ring-black/5 dark:ring-white/10 focus:outline-none z-20">
          <div className="py-1">
            {languages.map(langOpt => (
              <button
                key={langOpt.code}
                onClick={() => switchLang(langOpt.code)}
                className={`w-full flex items-center gap-2 px-4 py-2 text-sm transition ${
                  langOpt.code === lang
                    ? 'opacity-50 cursor-default'
                    : 'hover:bg-gray-100 dark:hover:bg-gray-700 text-gray-900 dark:text-white'
                }`}
              >
                <span>{langOpt.flag}</span>
                <span>{langOpt.label}</span>
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  )
}
