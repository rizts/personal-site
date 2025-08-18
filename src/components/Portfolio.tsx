import useTranslation from 'next-translate/useTranslation'
import { motion, Variants } from 'framer-motion'
import { useThemeStore } from '@/store/themeStore'

type Item = { title: string; description: string; tech: string; result?: string }

export default function Portfolio() {
  const { t } = useTranslation('portfolio')
  const items = t('items', {}, { returnObjects: true }) as Item[]
  const { theme } = useThemeStore()

  // Glow color berdasarkan theme
  const glowColor = theme === 'dark' ? 'rgba(168,85,247,0.5)' : 'rgba(59,130,246,0.5)'

  // Variants untuk efek glow berdenyut
  const hoverVariants: Variants = {
    hover: {
      scale: 1.05,
      y: -5,
      boxShadow: [
        `0 10px 20px ${glowColor}`,
        `0 20px 40px ${glowColor}`,
        `0 10px 20px ${glowColor}`,
      ],
      transition: {
        duration: 1.2,
        repeat: Infinity,
        repeatType: 'loop',
        ease: 'easeInOut',
      },
    },
  }

  return (
    <section
      id="portfolio"
      className="py-16 bg-gray-50 dark:bg-gray-900 flex flex-col justify-center w-full"
    >
      <div className="max-w-6xl mx-auto px-4 w-full text-center">
        {/* Judul */}
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-gray-900 dark:text-white">
          {t('title')}
        </h2>

        {/* Grid Projects */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {items.map((p, i) => (
            <motion.div
              key={i}
              variants={hoverVariants}
              whileHover="hover"
              className="bg-white dark:bg-gray-800 rounded-xl p-6 flex flex-col justify-between cursor-pointer
                shadow-md dark:shadow-gray-900 transition-shadow duration-300"
            >
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                {p.title}
              </h3>
              <p className="mt-3 text-gray-700 dark:text-gray-300 leading-relaxed flex-1">
                {p.description}
              </p>
              <p className="mt-4 text-sm text-gray-500 dark:text-gray-400">
                <strong>Tech:</strong> {p.tech}
              </p>
              {p.result && (
                <p className="mt-2 text-sm text-gray-500 dark:text-gray-400">
                  <strong>Result:</strong> {p.result}
                </p>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
