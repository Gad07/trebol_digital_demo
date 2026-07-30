/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        'trebol': '#5C9E43',
        'trebol-claro': '#8DC63F',
        'carbon': '#2D2E2D',
        'gris-claro': '#BFBFBF',
        'hueso': '#F5F5F5',
        'gris': '#666666',
        'blanco': '#FFFFFF'
      },
      fontFamily: {
        sans: ['var(--font-roboto)', 'sans-serif'],
        serif: ['var(--font-playfair)', 'Georgia', 'serif'],
      }
    },
  },
  plugins: [],
}
