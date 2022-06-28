/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './templates/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        'title': ['Sansita', 'sans-serif'],
        'body': ['Lato', 'sans-serif']
      },
      colors: {
        "primary": "#081F4D",
        "secondary": "#0083FF",
        "general": "#384D71",
        "background": "#D9E6FF",
      }
    },
  },
  plugins: [],
}
