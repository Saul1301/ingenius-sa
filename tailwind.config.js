/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          // Primary — Azul eléctrico
          blue: '#3B82F6',
          'blue-light': '#60A5FA',
          'blue-dark': '#1D4ED8',
          'blue-bright': '#2563EB',
          // Secondary — Cyan tech
          cyan: '#06B6D4',
          'cyan-light': '#67E8F9',
          'cyan-dark': '#0891B2',
          // Tertiary — Violeta
          violet: '#8B5CF6',
          'violet-light': '#A78BFA',
          'violet-dark': '#6D28D9',
          // Neon accents
          neon: '#00F5FF',
          'neon-green': '#00FF88',
          // Background system
          dark: '#030712',
          'dark-2': '#060F1F',
          'dark-3': '#0A1628',
          'dark-card': '#080F20',
          'glass': 'rgba(8, 15, 32, 0.7)',
          // Legacy compat
          gold: '#60A5FA',
          'gold-light': '#93C5FD',
        },
      },
      fontFamily: {
        display: ['Outfit', 'sans-serif'],
        body: ['Plus Jakarta Sans', 'Inter', 'sans-serif'],
        mono: ['JetBrains Mono', 'monospace'],
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'hero-gradient': 'radial-gradient(ellipse at 30% 50%, rgba(6,182,212,0.18) 0%, transparent 60%), radial-gradient(ellipse at 70% 20%, rgba(59,130,246,0.15) 0%, transparent 50%), radial-gradient(ellipse at 50% 80%, rgba(139,92,246,0.10) 0%, transparent 50%)',
      },
      animation: {
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'float': 'float 6s ease-in-out infinite',
        'scan': 'scan 3s linear infinite',
        'glow-pulse': 'glow-pulse 2s ease-in-out infinite',
        'shimmer': 'shimmer 2.5s ease-in-out infinite',
        'cube-spin': 'cube-spin 20s linear infinite',
        'beam-slide': 'beam-slide 4s ease-in-out infinite',
        'holo-shimmer': 'holo-shimmer 3s ease infinite',
        'glitch': 'glitch 3s infinite',
        'orbit': 'orbit 8s linear infinite',
        'radar-sweep': 'radar-sweep 4s linear infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        scan: {
          '0%': { transform: 'translateY(-100%)' },
          '100%': { transform: 'translateY(100vh)' },
        },
        'glow-pulse': {
          '0%, 100%': { boxShadow: '0 0 20px rgba(6,182,212,0.3)' },
          '50%': { boxShadow: '0 0 40px rgba(6,182,212,0.6), 0 0 60px rgba(139,92,246,0.2)' },
        },
        'cube-spin': {
          '0%': { transform: 'rotateX(0deg) rotateY(0deg)' },
          '100%': { transform: 'rotateX(360deg) rotateY(360deg)' },
        },
        'beam-slide': {
          '0%': { transform: 'translateX(-100%) skewX(-15deg)', opacity: '0' },
          '30%': { opacity: '1' },
          '70%': { opacity: '1' },
          '100%': { transform: 'translateX(200%) skewX(-15deg)', opacity: '0' },
        },
        'holo-shimmer': {
          '0%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' },
          '100%': { backgroundPosition: '0% 50%' },
        },
        'glitch': {
          '0%, 100%': { textShadow: '2px 0 #06B6D4, -2px 0 #8B5CF6', transform: 'translate(0)' },
          '20%': { textShadow: '-3px 0 #06B6D4, 3px 0 #8B5CF6', transform: 'translate(-2px, 1px)' },
          '40%': { textShadow: '3px 0 #8B5CF6, -3px 0 #3B82F6', transform: 'translate(2px, -1px)' },
          '60%': { textShadow: '-2px 0 #3B82F6, 2px 0 #06B6D4', transform: 'translate(-1px, 2px)' },
          '80%': { textShadow: '2px 0 #8B5CF6, -2px 0 #06B6D4', transform: 'translate(1px, -1px)' },
        },
        'orbit': {
          '0%': { transform: 'rotateZ(0deg) translateX(80px) rotateZ(0deg)' },
          '100%': { transform: 'rotateZ(360deg) translateX(80px) rotateZ(-360deg)' },
        },
        'radar-sweep': {
          '0%': { transform: 'rotate(0deg)' },
          '100%': { transform: 'rotate(360deg)' },
        },
        shimmer: {
          '0%': { transform: 'translateX(-100%)' },
          '100%': { transform: 'translateX(100%)' },
        },
      },
    },
  },
  plugins: [],
}
