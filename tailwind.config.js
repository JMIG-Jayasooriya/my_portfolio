/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        obsidian: {
          950: '#0B0F19',
          900: '#0E1424',
          850: '#111827',
          800: '#131B2E',
          750: '#182239',
          700: '#1C2844',
        },
        brand: {
          indigo: '#6366F1',
          'indigo-deep': '#4F46E5',
          'indigo-glow': '#818CF8',
          cyan: '#38BDF8',
          'cyan-deep': '#0EA5E9',
        }
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', '-apple-system', 'sans-serif'],
      },
      boxShadow: {
        'glow-sm': '0 0 15px rgba(99, 102, 241, 0.25)',
        'glow': '0 0 25px rgba(99, 102, 241, 0.35)',
        'glow-lg': '0 0 40px rgba(99, 102, 241, 0.45)',
        'glow-cyan': '0 0 25px rgba(56, 189, 248, 0.35)',
      },
      animation: {
        'pulse-slow': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'float': 'float 4s ease-in-out infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-8px)' },
        }
      }
    },
  },
  plugins: [],
}
