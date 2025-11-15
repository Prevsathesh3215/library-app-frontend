/** @type {import('tailwindcss').Config} */
const defaultTheme = require("tailwindcss/defaultTheme")


export default {
  content: ["public.*", "./index.html", "./src/**/*.{vue, js, ts }"],
  theme: {
    extend: {
      backgroundColor: {
        'my-color': 'rgb(252, 254, 200)'
      },

      fontFamily:{
        medieval: ['medieval', 'sans-serif']
      }
    },
  },
  plugins: [],
}

