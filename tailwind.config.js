/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
    fontFamily: {
      vietnam: ['Be Vietnam Pro', 'sans-serif']
    },
    colors:{
      'black': '#1B1D1F',
      'dark-gray': '#282B30',
      'blue': '#4E80EE',
      'light-gray': '#6C727F',
      'white': '#D2D5DA'
    }
  },
  plugins: [],
}

