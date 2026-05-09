/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        primary: {
          50:  '#f0faf9',
          100: '#d9f2ef',
          200: '#b3e5e0',
          300: '#7dd0c9',
          400: '#3fb4aa',
          500: '#1a9990',
          600: '#117b73',
          700: '#0d625c',
          800: '#0c4f4a',
          900: '#0b413d',
          950: '#062825',
        },
        teal: {
          deep: '#0d5c58',
          mid:  '#1a9990',
          light:'#3fb4aa',
        },
        warm: {
          50:  '#fdf8f2',
          100: '#faefd8',
        }
      },
      fontFamily: {
        display: ['"Playfair Display"', 'Georgia', 'serif'],
        body:    ['"DM Sans"', 'sans-serif'],
        arabic:  ['"Noto Nastaliq Urdu"', 'serif'],
      },
      animation: {
        'fade-up':      'fadeUp 0.7s ease forwards',
        'fade-in':      'fadeIn 0.6s ease forwards',
        'slide-right':  'slideRight 0.7s ease forwards',
        'float':        'float 6s ease-in-out infinite',
        'pulse-slow':   'pulse 4s ease-in-out infinite',
      },
      keyframes: {
        fadeUp: {
          from: { opacity: '0', transform: 'translateY(30px)' },
          to:   { opacity: '1', transform: 'translateY(0)' },
        },
        fadeIn: {
          from: { opacity: '0' },
          to:   { opacity: '1' },
        },
        slideRight: {
          from: { opacity: '0', transform: 'translateX(-30px)' },
          to:   { opacity: '1', transform: 'translateX(0)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%':      { transform: 'translateY(-12px)' },
        },
      },
      backgroundImage: {
        'hero-pattern': "url('/images/hero-bg.jpg')",
        'wave-pattern': "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1440 120'%3E%3Cpath fill='%230d5c58' fill-opacity='0.05' d='M0,64L80,69.3C160,75,320,85,480,80C640,75,800,53,960,48C1120,43,1280,53,1360,58.7L1440,64L1440,120L1360,120C1280,120,1120,120,960,120C800,120,640,120,480,120C320,120,160,120,80,120L0,120Z'/%3E%3C/svg%3E\")",
      },
    },
  },
  plugins: [],
};
