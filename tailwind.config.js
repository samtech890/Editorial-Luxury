/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        ivory: '#f5f0e8',
        sand: '#e9decd',
        burgundy: '#5c2b2d',
        terracotta: '#b8674d',
        forest: '#243b32',
        charcoal: '#1d1b1a',
      },
      fontFamily: {
        sans: ['Manrope', 'sans-serif'],
        display: ['Cormorant Garamond', 'serif'],
      },
      boxShadow: {
        soft: '0 25px 70px rgba(29,27,26,0.08)',
      },
    },
  },
  plugins: [],
};
