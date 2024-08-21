import { colors } from './src/assets/styles'
/** @type {import('tailwindcss').Config} */
module.exports = {
  important: true,
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    fontFamily: {
      notosans: ['Noto Sans', 'sans-serif'],
      poppins: ['Poppins', 'sans-serif']
    },
    extend: {
      colors: colors
    }
  },
  plugins: []
}
