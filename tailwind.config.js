/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      width: {
        pw: "36rem"
      },
      colors: {
        yellow: "#d7aa26db"
      }
    },
  },
  plugins: [],
}
