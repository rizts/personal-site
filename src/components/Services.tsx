import useTranslation from 'next-translate/useTranslation'
import { motion, Variants } from 'framer-motion'
import { useThemeStore } from '@/store/themeStore'

type Service = { title: string; desc: string }

export default function Services() {
  const { t } = useTranslation('services')
  const list = t('list', {}, { returnObjects: true }) as Service[]
  const { theme } = useThemeStore()

  const glowColor = theme === 'dark' ? 'rgba(168,85,247,0.5)' : 'rgba(59,130,246,0.5)'

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
      id="services"
      className="py-16 bg-gray-50 dark:bg-gray-900 flex flex-col justify-center w-full"
    >
      <div className="max-w-6xl mx-auto px-4 w-full text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-gray-900 dark:text-white">
          {t('title')}
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
          {list.map((s, i) => (
            <motion.div
              key={i}
              variants={hoverVariants}
              whileHover="hover"
              className="bg-white dark:bg-gray-800 rounded-xl p-6 flex flex-col justify-between cursor-pointer
                shadow-md dark:shadow-gray-900 transition-shadow duration-300"
            >
              <h3 className="text-lg md:text-xl font-semibold text-gray-900 dark:text-white">
                {s.title}
              </h3>
              <p className="mt-3 text-gray-700 dark:text-gray-300 leading-relaxed flex-1">
                {s.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
