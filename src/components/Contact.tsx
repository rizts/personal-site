import { useState } from 'react'
import useTranslation from 'next-translate/useTranslation'
import { FaLinkedin, FaGithub, FaWhatsapp } from 'react-icons/fa'
import { MdEmail } from 'react-icons/md'
import { motion, Variants } from 'framer-motion'
import { useThemeStore } from '@/store/themeStore'

export default function Contact() {
  const { t } = useTranslation('contact')
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')
  const { theme } = useThemeStore()

  const glowColor = theme === 'dark' ? 'rgba(168,85,247,0.5)' : 'rgba(59,130,246,0.5)'

  const iconVariants: Variants = {
    hover: {
      scale: 1.2,
      textShadow: `0 0 8px ${glowColor}, 0 0 16px ${glowColor}`,
      transition: { duration: 0.6, repeat: Infinity, repeatType: 'mirror' },
    },
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    const mailtoLink = `mailto:someone@example.com?subject=Message from ${encodeURIComponent(
      name
    )}&body=${encodeURIComponent(message)}%0A%0AFrom: ${encodeURIComponent(email)}`
    window.location.href = mailtoLink
  }

  return (
    <section id="contact" className="py-16 bg-gray-50 dark:bg-gray-900 flex justify-center w-full">
      <div className="max-w-3xl mx-auto px-4 w-full text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-8 text-gray-900 dark:text-white">
          {t('title')}
        </h2>
        <p className="text-gray-700 dark:text-gray-300 mb-10">{t('desc')}</p>

        <form className="space-y-4" onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder={t('form.name')}
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="w-full border px-4 py-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 dark:bg-gray-800 dark:border-gray-700 dark:text-white transition"
          />
          <input
            type="email"
            placeholder={t('form.email')}
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full border px-4 py-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 dark:bg-gray-800 dark:border-gray-700 dark:text-white transition"
          />
          <textarea
            placeholder={t('form.message')}
            rows={5}
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            className="w-full border px-4 py-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 dark:bg-gray-800 dark:border-gray-700 dark:text-white transition"
          />
          <motion.button
            type="submit"
            whileHover={{ scale: 1.05, boxShadow: `0 0 15px ${glowColor}` }}
            className="bg-black dark:bg-white text-white dark:text-black px-6 py-3 rounded-lg font-semibold w-full transition"
          >
            {t('form.submit')}
          </motion.button>
        </form>

        {/* Social Media */}
        <div className="flex justify-center gap-6 mt-10">
          <motion.a
            href={t('whatsapp')}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Whatsapp"
            variants={iconVariants}
            whileHover="hover"
            className="text-blue-600 text-2xl"
          >
            <FaWhatsapp />
          </motion.a>
          <motion.a
            href={"mailto:"+t('email')}
            aria-label="Email"
            variants={iconVariants}
            whileHover="hover"
            className="text-red-500 text-2xl"
          >
            <MdEmail />
          </motion.a>
          <motion.a
            href={t('linkedin')}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            variants={iconVariants}
            whileHover="hover"
            className="text-blue-600 text-2xl"
          >
            <FaLinkedin />
          </motion.a>
          <motion.a
            href={t('github')}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
            variants={iconVariants}
            whileHover="hover"
            className="text-gray-900 dark:text-white text-2xl"
          >
            <FaGithub />
          </motion.a>
        </div>
      </div>
    </section>
  )
}
