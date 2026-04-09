/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        carbono: '#0E1C2D',
        grafito: '#132238',
        piedra: '#1A2D47',
        crema: '#F1EDEE',
        niebla: '#8899AA',
        linea: '#1E3050',
        amber: {
          DEFAULT: '#B7CE14',
          dark: '#8FA810',
          light: '#CDE015',
          subtle: 'rgba(183,206,20,0.08)',
        },
      },
      fontFamily: {
        display: ['Plus Jakarta Sans', 'sans-serif'],
        body: ['DM Sans', 'sans-serif'],
      },
      fontSize: {
        'display-xl': ['72px', { lineHeight: '1.05', letterSpacing: '-0.03em' }],
        'h1': ['56px', { lineHeight: '1.1' }],
        'h2': ['40px', { lineHeight: '1.15' }],
        'h3': ['28px', { lineHeight: '1.2' }],
        'h4': ['20px', { lineHeight: '1.3' }],
        'body-lg': ['18px', { lineHeight: '1.7' }],
        'body': ['16px', { lineHeight: '1.6' }],
        'body-sm': ['14px', { lineHeight: '1.5' }],
        'caption': ['12px', { lineHeight: '1', letterSpacing: '0.04em' }],
      },
      fontWeight: {
        'display-bold': '800',
        'display-semibold': '700',
        'display-medium': '600',
      },
      backgroundImage: {
        'dot-grid': 'radial-gradient(circle, #1E3050 1px, transparent 1px)',
        'amber-radial': 'radial-gradient(ellipse at right center, rgba(183,206,20,0.12) 0%, transparent 60%)',
        'amber-center': 'radial-gradient(ellipse at center, rgba(183,206,20,0.10) 0%, transparent 70%)',
      },
      backgroundSize: {
        'dot-grid': '32px 32px',
      },
      animation: {
        'fade-in-up': 'fadeInUp 0.5s ease-out forwards',
        'pulse-cta': 'pulseCta 2s ease-in-out infinite',
        'counter': 'counter 2s ease-out forwards',
      },
      keyframes: {
        fadeInUp: {
          '0%': { opacity: '0', transform: 'translateY(16px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        pulseCta: {
          '0%, 100%': { boxShadow: '0 0 0 0 rgba(183, 206, 20, 0.4)' },
          '50%': { boxShadow: '0 0 0 12px rgba(183, 206, 20, 0)' },
        },
      },
      transitionTimingFunction: {
        'smooth': 'cubic-bezier(0.4, 0, 0.2, 1)',
      },
      backdropBlur: {
        'xs': '4px',
      },
      borderColor: {
        DEFAULT: '#1E3050',
      },
    },
  },
  plugins: [],
}
