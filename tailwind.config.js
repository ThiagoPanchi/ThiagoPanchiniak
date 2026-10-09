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
        dark: {
          bg: '#0a0d12',
          surface: '#161b22',
          card: '#1c2128',
          border: '#30363d',
          hover: '#262c36',
        },
        accent: {
          emerald: '#10b981',
          neon: '#00ff88',
          dark: '#065f46',
          glow: 'rgba(0, 255, 136, 0.15)',
        },
        text: {
          primary: '#f0f6fc',
          muted: '#8b949e',
          subtle: '#6e7681',
        }
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', '-apple-system', 'sans-serif'],
        mono: ['JetBrains Mono', 'Fira Code', 'monospace'],
      },
      animation: {
        'pulse-slow': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'float': 'float 4s ease-in-out infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-6px)' },
        }
      }
    },
  },
  plugins: [],
}
