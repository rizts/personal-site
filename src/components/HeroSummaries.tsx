import { motion } from "framer-motion";
import { useState, useEffect } from "react";

function Typewriter({ text, delayStart = 0, speed = 50 }: { text: string; delayStart?: number; speed?: number }) {
  const [displayedText, setDisplayedText] = useState("");

  useEffect(() => {
    const startTimeout = setTimeout(() => {
      let i = 0;
      const interval = setInterval(() => {
        setDisplayedText(text.slice(0, i + 1));
        i++;
        if (i === text.length) clearInterval(interval);
      }, speed);
    }, delayStart * 1000);

    return () => clearTimeout(startTimeout);
  }, [text, delayStart, speed]);

  return (
    <motion.p
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.3 }}
      className="text-md text-gray-600 dark:text-gray-400 leading-relaxed"
    >
      {displayedText}
    </motion.p>
  );
}

export default function HeroSummaries({ t }: { t: (key: string) => string }) {
  return (
    <div className="flex flex-col gap-2 mt-2">
      <Typewriter text={t("hero.summary_1")} delayStart={1} speed={40} />
      <Typewriter text={t("hero.summary_2")} delayStart={3} speed={40} />
      <Typewriter text={t("hero.summary_3")} delayStart={5} speed={40} />
    </div>
  );
}
