import React from "react";
import useTranslation from "next-translate/useTranslation";
import HeroSummaries from "./HeroSummaries";
import DigitalNomadMap from "./DigitalNomadMap";
import Image from "next/image";
import { motion } from "framer-motion";
import { trackEvent } from "@/utils/umami";

export default function Hero() {
  const { t } = useTranslation("common");
  const particles = Array.from({ length: 30 });

  return (
    <section className="relative flex flex-col items-center text-black dark:text-white overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-r from-blue-100 via-pink-50 to-blue-100 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 animate-gradient-xy -z-20" />

      {/* Particles */}
      <div className="absolute inset-0 pointer-events-none -z-10">
        {particles.map((_, i) => (
          <div
            key={i}
            className="w-1 h-1 bg-white/50 dark:bg-purple-500 rounded-full absolute animate-pulse"
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              animationDuration: `${2 + Math.random() * 3}s`,
            }}
          />
        ))}
      </div>

      {/* Konten */}
      <div className="relative z-10 max-w-6xl mx-auto px-4 w-full flex flex-col items-center gap-10 pt-20 md:pt-28 pb-10">
        {/* Foto profil */}
        <motion.div
          initial={{ y: 50, opacity: 0, scale: 0.8 }}
          animate={{ y: 0, opacity: 1, scale: 1 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="relative w-40 h-40 md:w-52 md:h-52 rounded-full overflow-hidden
            border-4 border-transparent dark:border-white
            animate-pulse-light dark:animate-pulse-dark
            hover:scale-105 hover:shadow-[0_0_20px_rgba(59,130,246,0.7)] dark:hover:shadow-[0_0_20px_rgba(139,92,246,0.7)] z-10"
        >
          <Image
            src="/assets/images/profile1.jpeg"
            alt="Profil"
            fill
            style={{ objectFit: "cover" }}
            className="rounded-full"
          />
        </motion.div>

        {/* Teks hero */}
        <div className="text-center md:text-left flex flex-col gap-4 mt-4">
          {/* Judul */}
          <motion.h1
            initial={{ y: -20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="text-3xl md:text-5xl font-bold"
          >
            {t("hero.title")}
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="text-lg text-gray-700 dark:text-gray-300"
          >
            {t("hero.subtitle")}
          </motion.p>

          {/* Summary */}
          <HeroSummaries t={t} />

          {/* CTA buttons */}
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.6, duration: 0.6 }}
            className="mt-6 flex flex-col sm:flex-row justify-center md:justify-start gap-4"
          >
            <motion.a
              href="/portfolio"
              whileHover={{ scale: 1.05 }}
              onClick={() => trackEvent("CTA Portfolio Click", { location: "Hero" })}
              className="bg-white text-black dark:bg-gray-800 dark:text-white px-6 py-2 rounded-lg font-semibold transition-shadow"
            >
              {t("cta.portfolio")}
            </motion.a>

            <motion.a
              href="/contact"
              whileHover={{ scale: 1.05 }}
              onClick={() => trackEvent("CTA Contact Click", { location: "Hero" })}
              className="border border-black dark:border-white px-6 py-2 rounded-lg font-semibold transition-shadow"
            >
              {t("cta.contact")}
            </motion.a>

            <motion.a
              href="/assets/resume/risdy.pdf"
              download
              whileHover={{ scale: 1.05 }}
              onClick={() => trackEvent("CTA Resume Download", { location: "Hero" })}
              className="border border-green-500 text-green-500 dark:border-green-400 dark:text-green-400 px-6 py-2 rounded-lg font-semibold transition-shadow"
            >
              {t("cta.resume")}
            </motion.a>
          </motion.div>
        </div>

        {/* Globe skill map di desktop */}
        <div
          className="hidden md:block md:w-full md:h-[520px] absolute top-16 left-1/2 -translate-x-1/2 -z-10 
          opacity-40 dark:opacity-30 transition-opacity duration-500"
        >
          <DigitalNomadMap softColors />
        </div>
      </div>
    </section>
  );
}
