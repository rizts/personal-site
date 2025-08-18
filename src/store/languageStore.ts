import { create } from 'zustand'
import { persist } from 'zustand/middleware'

type LanguageState = {
  lang: string
  setLang: (lang: string) => void
}

export const useLanguageStore = create<LanguageState>()(
  persist(
    (set) => ({
      lang: 'en', // default bahasa
      setLang: (lang) => set({ lang })
    }),
    {
      name: 'language-storage', // key di localStorage
    }
  )
)
