/** @type {import('tailwindcss').Config} */
const withMT = require("@material-tailwind/react/utils/withMT");

export default withMT({
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],

  theme: {
    extend: {
      backgroundImage: {
        'hero-pattern': "url('./src/images/hero_bg.png')",
      },
      fontFamily: {
      'display': ['Montserrat',],
      },
      colors: {
        'white': '#ffffff',
        'yellow': '#F9A51A',
        'black':'#000'
      },

    },
  },
  plugins: [],
})

