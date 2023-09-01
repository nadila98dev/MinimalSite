/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primaryblack: '#222222',
        primaryyellowish: '#FFBE21',
        secondary: '#F4F4F4',
        secondarywhite: '#FFFFFF'
      },
      fontFamily: {
        mallory: ['Mallory']
      }
    },
  },
  plugins: [],
}

