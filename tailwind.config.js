/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}",],
  theme: {
    extend: {
      keyframes: {
        'fade-carousel': {
          '0% ,100%': { opacity: .4 },
          '50%': { opacity: 1 }
        }
      },
      animation: {
        'fade-carousel': 'fade-carousel 1.5s'
      }
    },
  },
  plugins: [],
}
