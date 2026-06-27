/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        gold: '#D4AF37',
        black: '#111111',
        'secondary-black': '#1a1a1a',
        'text-gray': '#555555',
        'light-bg': '#FAF9F6',
      },
      fontFamily: {
        heading: ['"Playfair Display"', 'serif'],
        body: ['"Montserrat"', 'sans-serif'],
        script: ['"Great Vibes"', 'cursive'],
      }
    },
  },
  plugins: [],
}
