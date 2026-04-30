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
          gold: '#F5A623',
          'gold-light': '#FFD275',
          'gold-dark': '#C47D0B',
          cyan: '#00D4FF',
          'cyan-light': '#7EEEFF',
          'cyan-dark': '#0099BB',
          dark: '#050A14',
          'dark-2': '#0A1628',
          'dark-3': '#0F1F3D',
          'dark-card': '#0D1B35',
          'glass': 'rgba(13, 27, 53, 0.6)',
        },
      },
      fontFamily: {
        display: ['Outfit', 'sans-serif'],
        body: ['Plus Jakarta Sans', 'Inter', 'sans-serif'],
        mono: ['JetBrains Mono', 'monospace'],
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'hero-gradient': 'radial-gradient(ellipse at 30% 50%, rgba(0,212,255,0.15) 0%, transparent 60%), radial-gradient(ellipse at 70% 20%, rgba(245,166,35,0.12) 0%, transparent 50%)',
      },
      animation: {
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'float': 'float 6s ease-in-out infinite',
        'scan': 'scan 3s linear infinite',
        'glow-pulse': 'glow-pulse 2s ease-in-out infinite',
        'shimmer': 'shimmer 2.5s ease-in-out infinite',
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
          '0%, 100%': { boxShadow: '0 0 20px rgba(0,212,255,0.3)' },
          '50%': { boxShadow: '0 0 40px rgba(0,212,255,0.6), 0 0 60px rgba(0,212,255,0.2)' },
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
