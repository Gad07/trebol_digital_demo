/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        'trebol': '#5C9E31',
        'carbon': '#2D2D2D',
        'hueso': '#F5F5F5',
        'gris': '#666666'
      },
      fontFamily: {
        sans: ['var(--font-roboto)', 'sans-serif'],
      }
    },
  },
  plugins: [],
}
