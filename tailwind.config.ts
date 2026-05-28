import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        navy: '#12192B',
        'navy-light': '#1a2540',
        'navy-dark': '#0d1520',
        ocean: '#297479',
        'ocean-light': '#3a9ba1',
        'ocean-dark': '#1d5558',
        coral: '#D56C30',
        'coral-light': '#e07d45',
        'coral-dark': '#b85a24',
      },
      fontFamily: {
        sans: ['var(--font-montserrat)', 'system-ui', 'sans-serif'],
        montserrat: ['var(--font-montserrat)', 'sans-serif'],
      },
      backgroundImage: {
        'hero-gradient': `
          radial-gradient(ellipse at 50% 0%, rgba(41,116,121,0.22) 0%, transparent 60%),
          radial-gradient(ellipse at 15% 70%, rgba(41,116,121,0.10) 0%, transparent 40%),
          linear-gradient(180deg, #0d1520 0%, #12192B 45%, #162235 100%)
        `,
        'ocean-gradient': 'linear-gradient(135deg, #297479 0%, #1d5558 100%)',
        'card-gradient': 'linear-gradient(135deg, rgba(41,116,121,0.08) 0%, rgba(18,25,43,0.6) 100%)',
      },
      animation: {
        'bubble-rise': 'bubbleRise linear infinite',
        'pulse-glow': 'pulseGlow 2.5s ease-in-out infinite',
        'wave-sway': 'waveSway 8s ease-in-out infinite',
        'shaft-pulse': 'shaftPulse 4s ease-in-out infinite',
      },
      keyframes: {
        bubbleRise: {
          '0%': { transform: 'translateY(0) translateX(0) scale(1)', opacity: '0' },
          '5%': { opacity: '0.65' },
          '90%': { opacity: '0.25' },
          '100%': { transform: 'translateY(-110vh) translateX(18px) scale(0.6)', opacity: '0' },
        },
        pulseGlow: {
          '0%, 100%': { boxShadow: '0 4px 20px rgba(213,108,48,0.35)' },
          '50%': { boxShadow: '0 4px 45px rgba(213,108,48,0.7)' },
        },
        waveSway: {
          '0%, 100%': { transform: 'translateX(0)' },
          '50%': { transform: 'translateX(-28px)' },
        },
        shaftPulse: {
          '0%, 100%': { opacity: '0.03' },
          '50%': { opacity: '0.08' },
        },
      },
      screens: {
        xs: '390px',
      },
    },
  },
  plugins: [],
}

export default config
