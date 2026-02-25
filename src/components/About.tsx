import useTranslation from 'next-translate/useTranslation'
import { motion } from 'framer-motion'
import { FaPhp, FaReact, FaJava, FaDocker, FaLinux, FaGitAlt, FaPython, FaNodeJs } from 'react-icons/fa'
import { SiTailwindcss, SiJquery, SiPostgresql, SiBootstrap, SiMysql, SiOracle, SiZod, SiSwr } from 'react-icons/si'

export default function About() {
  const { t } = useTranslation('about')

  const techItems = [
    {
      category: 'Backend',
      items: [
        { name: 'PHP', icon: <FaPhp /> },
        { name: 'Python', icon: <FaPython /> },
        { name: 'Node', icon: <FaNodeJs /> },
        { name: 'Java', icon: <FaJava /> },
      ]
    },
    {
      category: 'Frontend',
      items: [
        { name: 'ReactJS', icon: <FaReact /> },
        { name: 'jQuery', icon: <SiJquery /> },
        { name: 'Tailwind', icon: <SiTailwindcss /> },
        { name: 'Bootstrap', icon: <SiBootstrap /> },
      ]
    },
    {
      category: 'Database',
      items: [
        { name: 'MySQL', icon: <SiMysql /> },
        { name: 'PostgreSQL', icon: <SiPostgresql /> },
        { name: 'Oracle', icon: <SiOracle /> },
      ]
    },
    {
      category: 'Other',
      items: [
        { name: 'REST API', icon: <span className="text-lg">API</span> },
        { name: 'Git', icon: <FaGitAlt /> },
        { name: 'Linux Server', icon: <FaLinux /> },
        { name: 'SWR', icon: <SiSwr /> },
        { name: 'Zod', icon: <SiZod /> },
        { name: 'Docker', icon: <FaDocker /> },
      ]
    }
  ]

  return (
    <section
      id="about"
      className="
        bg-gray-50 dark:bg-gray-900
        pt-[10vh] pb-[6vh] 
        min-h-[calc(100vh-6rem)]
      "
    >
      <div className="max-w-6xl mx-auto px-4 w-full">
        {/* Judul */}
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-3xl sm:text-4xl md:text-4xl lg:text-5xl font-bold text-center mb-12 text-gray-900 dark:text-white"
        >
          {t('title')}
        </motion.h2>

        {/* Grid Utama */}
        <div className="grid gap-8 md:gap-10 lg:gap-16 
                        grid-cols-1 md:grid-cols-[1fr_1.7fr] items-start">
          {/* Kolom Kiri: Foto */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex justify-center items-start"
          >
            <div className="
              relative 
              w-[65vw] sm:w-[50vw] md:w-[30vw] lg:w-[25vw] xl:w-[22vw] 
              max-w-[350px] 
              h-full
              flex-shrink-0
              group
            ">
              <div className="absolute inset-0 rounded-xl animate-pulse-slow-light dark:animate-pulse-slow-dark"></div>
              <div className="absolute inset-0 rounded-xl border-4 border-blue-400 dark:border-purple-500 opacity-0 group-hover:opacity-100 group-hover:animate-spin-slow transition-all"></div>
              <div className="relative overflow-hidden rounded-xl border-4 border-gray-300 dark:border-gray-700 shadow-lg transform transition duration-300 group-hover:scale-105 group-hover:shadow-[0_0_40px_rgba(59,130,246,0.6)] dark:group-hover:shadow-[0_0_40px_rgba(168,85,247,0.6)] h-full">
                <img
                  src="/assets/images/profile2.jpeg"
                  alt="Profil"
                  className="w-full h-full object-cover rounded-xl"
                />
              </div>
            </div>
          </motion.div>

          {/* Kolom Kanan: Deskripsi + Tech Stack */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex flex-col justify-between h-full"
          >
            {/* Deskripsi */}
            <div className="mb-8 text-left flex-1">
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed">{t('p1')}</p>
              <p className="mt-4 text-gray-700 dark:text-gray-300 leading-relaxed">{t('p2')}</p>
              <p className="mt-4 text-gray-700 dark:text-gray-300">{t('p3')}</p>
              <p className="mt-4 text-gray-700 dark:text-gray-300">{t('p4')}</p>
            </div>

            {/* Tech Stack */}
            <div className="bg-white dark:bg-gray-800 rounded-xl shadow-md p-3 md:p-4 mt-auto max-h-[calc(100%-2rem)]">
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4 text-center">
                TECH STACK
              </h3>

              <div className="grid gap-3 sm:grid-cols-2">
                {techItems.map((group, idx) => (
                  <div key={idx}>
                    <p className="font-medium text-gray-800 dark:text-gray-200 mb-2">{group.category}:</p>
                    <div className="overflow-x-auto scrollbar-thin scrollbar-thumb-gray-400 dark:scrollbar-thumb-gray-600 scrollbar-track-transparent hover:scrollbar-thumb-gray-500 transition-all">
                      <ul className="flex gap-3 min-w-max pb-2">
                        {group.items.map((tech, i) => (
                          <motion.li
                            key={i}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.4, delay: i * 0.05 }}
                            className="flex flex-col items-center cursor-pointer group"
                          >
                            <span className="text-3xl group-hover:scale-125 transition-transform duration-300 group-hover:shadow-[0_0_15px_rgba(59,130,246,0.8)] dark:group-hover:shadow-[0_0_15px_rgba(168,85,247,0.8)]">
                              {tech.icon}
                            </span>
                            <span className="mt-1 text-sm text-gray-600 dark:text-gray-400 group-hover:text-blue-500 dark:group-hover:text-purple-400 transition-colors duration-300">
                              {tech.name}
                            </span>
                          </motion.li>
                        ))}
                      </ul>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
