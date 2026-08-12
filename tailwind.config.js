/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        'trebol': '#5C9E43', // Verde Oscuro (C:69 M:0 Y:100 K:2)
        'trebol-claro': '#8DC63F', // Verde Trébol Identificador (C:50 M:0 Y:100 K:0)
        'carbon': '#2D2E2D', // Gris / Carbón Primario (C:70 M:64 Y:63 K:63)
        'gris-claro': '#C0BFBF', // Gris Claro Apoyo (C:25 M:20 Y:20 K:0)
        'hueso': '#F5F5F5',
        'gris': '#666666',
        'blanco': '#FFFFFF'
      },
      fontFamily: {
        sans: ['var(--font-manrope)', 'Helvetica', 'Arial', 'sans-serif'],
        mono: ['var(--font-manrope)', 'Helvetica', 'Arial', 'sans-serif'],
        manrope: ['var(--font-manrope)', 'sans-serif'],
        helvetica: ['Helvetica', 'Arial', 'sans-serif'],
      }
    },
  },
  plugins: [],
}
