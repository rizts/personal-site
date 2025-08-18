/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{ts,tsx}",
    "./src/components/**/*.{ts,tsx}"
  ],
  theme: {
    extend: {
      keyframes: {
        'gradient-xy': {
          '0%, 100%': { 'background-position': '0% 50%' },
          '50%': { 'background-position': '100% 50%' },
        },
        'pulse-slow-light': {
          '0%, 100%': { boxShadow: '0 0 0px rgba(59,130,246,0.5)' },
          '50%': { boxShadow: '0 0 20px rgba(59,130,246,0.7)' },
        },
        'pulse-slow-dark': {
          '0%, 100%': { boxShadow: '0 0 0px rgba(139,92,246,0.5)' },
          '50%': { boxShadow: '0 0 20px rgba(139,92,246,0.7)' },
        },
      },
      animation: {
        'gradient-xy': 'gradient-xy 5s ease infinite',
        'pulse-slow-light': 'pulse-slow-light 2.5s infinite ease-in-out',
        'pulse-slow-dark': 'pulse-slow-dark 2.5s infinite ease-in-out',
      },
    },
  },
  plugins: [],
  darkMode: 'class',
}
