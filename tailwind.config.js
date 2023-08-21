/** @type {import('tailwindcss').Config} */
const withMT = require("@material-tailwind/react/utils/withMT");

export default withMT({
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],

  theme: {
    extend: {
      backgroundImage: {
        "hero-pattern":
          "url('https://storage.googleapis.com/msgsndr/vJVPkXKI0ujMBULtlF3Q/media/64e3b8e7d6dc5bbef57458ed.png')",
      },
      fontFamily: {
        display: ["KoHo"],
      },
      colors: {
        white: "#ffffff",
        yellow: "#F9A51A",
        black: "#000",
        Amber: {
          600: "#F9A51A",
        },
      },
    },
  },
  plugins: [],
});
