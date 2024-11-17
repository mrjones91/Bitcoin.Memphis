/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./css/**/*.css",
    "./js/**/*.js"
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        // You can add custom colors here if needed
      },
      spacing: {
        // Custom spacing if needed
      },
      fontFamily: {
        // Custom fonts if needed
      }
    },
  },
  plugins: [],
} 