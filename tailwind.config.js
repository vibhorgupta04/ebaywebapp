/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        'custom-blue': '#3665f3',
        'blue-1':'#4e6491',
        'blue-2':'#324169'
      }
    },
  },
  plugins: [],
}
