/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        'brand': '#b94653',
        'brand-hover': '#a03d49',
        'brand-light': '#c55a67',
      }
    },
  },
  plugins: [],
};