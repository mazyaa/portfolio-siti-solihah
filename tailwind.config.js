import {heroui} from "@heroui/theme"

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    './src/layouts/**/*.{js,ts,jsx,tsx,mdx}',
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    "./node_modules/@heroui/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        cream: {
          DEFAULT: "#F6F1EB",
          50: "#FDFCFA",
          100: "#FAF8F5",
          200: "#F5F0E8",
          300: "#F0E8DE",
          400: "#EBE0D3",
          500: "#F6F1EB",
          600: "#E5D8C8",
          700: "#D9C9B5",
          800: "#CDBAA2",
          900: "#C1AB8F",
        },
        rose: {
          pastel: "#F4C2C2",
          light: "#FADADD",
          soft: "#F8E8E8",
          muted: "#E8C4C4",
        },
        brown: {
          warm: "#8D6E63",
          light: "#A1887F",
          dark: "#6D4C41",
          muted: "#BCAAA4",
        },
        neutral: {
          text: "#4A4A4A",
          light: "#757575",
          dark: "#2D2D2D",
        }
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', '-apple-system', 'sans-serif'],
      },
      boxShadow: {
        'soft': '0 4px 20px -2px rgba(141, 110, 99, 0.1)',
        'soft-lg': '0 10px 40px -10px rgba(141, 110, 99, 0.15)',
        'glow': '0 0 30px -5px rgba(244, 194, 194, 0.4)',
      },
      spacing: {
        '18': '4.5rem',
        '22': '5.5rem',
      },
      animation: {
        'fade-in': 'fadeIn 0.5s ease-out',
        'slide-up': 'slideUp 0.5s ease-out',
        'pulse-soft': 'pulseSoft 3s ease-in-out infinite',
        'float': 'float 6s ease-in-out infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        pulseSoft: {
          '0%, 100%': { opacity: '1' },
          '50%': { opacity: '0.7' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        },
      },
    },
  },
  darkMode: "class",
  plugins: [heroui()],
}
