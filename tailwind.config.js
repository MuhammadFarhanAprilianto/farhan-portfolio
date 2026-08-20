/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        darkBg: '#0f0f11',
        darkCard: '#141417',
        darkCardHover: '#18181c',
        darkBorder: '#1f1f23',
        darkBorderGlow: '#2a2a32',
        accentBlue: '#3b82f6',
        accentCyan: '#06b6d4',
      },
      fontFamily: {
        heading: ['var(--font-outfit)', 'Outfit', 'sans-serif'],
        sans: ['var(--font-inter)', 'Inter', 'sans-serif'],
      },
      backgroundImage: {
        'light-trails': "radial-gradient(ellipse at 50% -20%, rgba(59, 130, 246, 0.25), transparent 70%), radial-gradient(ellipse at 80% 120%, rgba(6, 182, 212, 0.15), transparent 60%), linear-gradient(180deg, rgba(15, 15, 17, 0.95) 0%, rgba(20, 20, 23, 1) 100%)",
        'grid-pattern': "linear-gradient(to right, rgba(255, 255, 255, 0.03) 1px, transparent 1px), linear-gradient(to bottom, rgba(255, 255, 255, 0.03) 1px, transparent 1px)",
      },
      boxShadow: {
        'neon-glow': '0 0 25px -5px rgba(59, 130, 246, 0.3)',
        'cyan-glow': '0 0 20px -3px rgba(6, 182, 212, 0.4)',
        'bento-card': '0 4px 20px -2px rgba(0, 0, 0, 0.5)',
      },
      animation: {
        'pulse-glow': 'pulseGlow 4s ease-in-out infinite',
        'light-flow': 'lightFlow 8s linear infinite',
      },
      keyframes: {
        pulseGlow: {
          '0%, 100%': { opacity: '0.4' },
          '50%': { opacity: '0.8' },
        },
        lightFlow: {
          '0%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' },
          '100%': { backgroundPosition: '0% 50%' },
        },
      },
    },
  },
  plugins: [],
};
