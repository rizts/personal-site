import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface Skill {
  name: string;
  score: number;
  icon: string;
  x: number;
  y: number;
}

const skills: Skill[] = [
  { name: "Yii2", score: 80, icon: "🐘", x: 70, y: 120 },
  { name: "Laravel", score: 60, icon: "🌐", x: 150, y: 60 },
  { name: "Phalcon", score: 50, icon: "⚡", x: 60, y: 40 },
  { name: "ReactJS", score: 70, icon: "⚛️", x: 20, y: 80 },
  { name: "C#", score: 60, icon: "💻", x: 180, y: 150 },
  { name: "Java", score: 50, icon: "☕", x: 120, y: 30 },
  { name: "Tailwind", score: 50, icon: "🌊", x: 40, y: 160 },
  { name: "Bootstrap", score: 70, icon: "📐", x: 100, y: 180 },
  { name: "MySQL", score: 80, icon: "🗄️", x: 160, y: 100 },
  { name: "PostgreSQL", score: 30, icon: "🐦", x: 50, y: 90 },
];

function pickSkillWeighted(): number {
  const totalScore = skills.reduce((sum, skill) => sum + skill.score, 0);
  const rand = Math.random() * totalScore;
  let cumulative = 0;
  for (let i = 0; i < skills.length; i++) {
    cumulative += skills[i].score;
    if (rand < cumulative) return i;
  }
  return 0;
}

interface DigitalNomadMapProps {
  softColors?: boolean;
}

export default function DigitalNomadMap({ softColors = false }: DigitalNomadMapProps) {
  const [activeIndex, setActiveIndex] = useState<number>(pickSkillWeighted());
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const [isDark, setIsDark] = useState<boolean>(false);

  // detect dark mode
  useEffect(() => {
    const dark = document.documentElement.classList.contains("dark");
    setIsDark(dark);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => setActiveIndex(pickSkillWeighted()), 2000);
    return () => clearInterval(interval);
  }, []);

  const globeFill = softColors
    ? isDark
      ? "#2a2a3d"
      : "#dceefb"
    : isDark
    ? "#1b263b"
    : "#cce7ff";

  const globeStroke = softColors
    ? isDark
      ? "#4b4b6b"
      : "#a3c4dc"
    : isDark
    ? "#415a77"
    : "#7aa3c7";

  return (
    <div style={{ width: "100%", height: "100%" }}>
      <motion.svg
        viewBox="0 0 200 200"
        style={{ width: "100%", height: "100%" }}
        animate={{ rotate: 360 }}
        transition={{ repeat: Infinity, ease: "linear", duration: 30 }}
      >
        {/* Globe */}
        <circle cx="100" cy="100" r="95" fill={globeFill} stroke={globeStroke} strokeWidth="2" />
        {[...Array(6)].map((_, i) => (
          <circle
            key={`lat-${i}`}
            cx="100"
            cy="100"
            r={15 + i * 15}
            fill="none"
            stroke={globeStroke}
            strokeWidth="0.5"
          />
        ))}
        {[...Array(6)].map((_, i) => (
          <line
            key={`lon-${i}`}
            x1="100"
            y1="5"
            x2="100"
            y2="195"
            stroke={globeStroke}
            strokeWidth="0.5"
            transform={`rotate(${i * 30}, 100, 100)`}
          />
        ))}

        {skills.map((skill, i) => {
          const isActive = i === activeIndex;
          const isHovered = i === hoveredIndex;
          const glowColor = isDark ? "#8a5cf6" : "#3b82f6";

          return (
            <motion.g
              key={skill.name}
              onMouseEnter={() => setHoveredIndex(i)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              <motion.text
                x={skill.x}
                y={skill.y}
                fontSize={isActive ? 12 : 10}
                textAnchor="middle"
                alignmentBaseline="middle"
                fill={isActive ? "#ffb703" : isDark ? "#8ecae6" : "#1e3a8a"}
                animate={{
                  scale: isHovered ? 1.8 : isActive ? [1, 1.5, 1] : 1,
                  opacity: isHovered ? 1 : isActive ? [1, 0.6, 1] : 0.6,
                }}
                transition={{ duration: 0.5, repeat: isActive ? Infinity : 0 }}
              >
                {skill.icon}
              </motion.text>

              <AnimatePresence>
                {isHovered && (
                  <motion.g
                    initial={{ opacity: 0, y: skill.y - 14 }}
                    animate={{ opacity: 1, y: skill.y - 14 }}
                    exit={{ opacity: 0, y: skill.y - 12 }}
                    transition={{ duration: 0.2 }}
                  >
                    <circle
                      cx={skill.x}
                      cy={skill.y - 14}
                      r={12}
                      fill={glowColor}
                      fillOpacity={0.3}
                      style={{ filter: "blur(4px)" }}
                    />
                    <text
                      x={skill.x}
                      y={skill.y - 14}
                      fontSize={6}
                      textAnchor="middle"
                      alignmentBaseline="middle"
                      fill={isDark ? "#fff" : "#000"}
                    >
                      {skill.name}
                    </text>
                  </motion.g>
                )}
              </AnimatePresence>
            </motion.g>
          );
        })}
      </motion.svg>
    </div>
  );
}
