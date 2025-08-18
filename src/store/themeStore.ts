import { create } from 'zustand'
import { persist } from 'zustand/middleware'

type ThemeState = {
  theme: 'light' | 'dark'
  userSelected: boolean
  toggleTheme: () => void
  setTheme: (theme: 'light' | 'dark') => void
  initThemeByTime: () => void
}

export const useThemeStore = create<ThemeState>()(
  persist(
    (set, get) => ({
      theme: 'light',
      userSelected: false, // default belum dipilih manual
      toggleTheme: () => {
        const newTheme = get().theme === 'dark' ? 'light' : 'dark'
        document.documentElement.classList.toggle('dark', newTheme === 'dark')
        set({ theme: newTheme, userSelected: true }) // tandai user sudah pilih
      },
      setTheme: (theme) => {
        document.documentElement.classList.toggle('dark', theme === 'dark')
        set({ theme, userSelected: true }) // tandai user sudah pilih
      },
      initThemeByTime: () => {
        if (get().userSelected) return // kalau sudah pernah pilih manual, skip deteksi

        const hour = new Date().getHours()
        const preferredTheme = hour >= 18 || hour < 6 ? 'dark' : 'light'
        document.documentElement.classList.toggle('dark', preferredTheme === 'dark')
        set({ theme: preferredTheme })
      }
    }),
    {
      name: 'theme-storage',
    }
  )
)
