/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["*"],
  theme: {
    extend: {
      fontFamily: {
        ggsans: ["ggsans", "sans-serif"],
        Whitney: ['whitney', 'sans-serif'],
        Ginto: ["Ginto", "sans-serif"],
        GintoNord: ["GintoNord", "sans-serif"],
      },
      colors: {
        deepBlue: "#02042a",
        darkBlue :"#404eed",
        bluedeep: "#5865f2",
        lightBlack: "#23272a",
        lightgray: "#f6f6f6"

      },
    },
  },
  plugins: [],
}
