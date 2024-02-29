const { fontFamily } = require('tailwindcss/defaultTheme')
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    screens: {
      sm: '640px',
      md: '768px',
      lg: '1024px',
      xl: '1192px',
    },
    extend: {
      fontFamily: {
        sans: ['var(--font-custom)', ...fontFamily.sans],
        primary: ['var(--font-custom)', ...fontFamily.sans],
        secondary: ['var(--font-custom)', ...fontFamily.sans],
      },
      colors: {
        primary: '#0E1112',
        grey: '#484B4B',
        secondary: '#696c6d',
        accent: '#EEF7F9',
      },
    },
  },
  plugins: [],
}

