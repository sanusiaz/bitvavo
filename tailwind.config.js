/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./src/**/*.{html,js}"],
    darkMode: 'class',
    theme: {
      extend: {
        colors: {
          'btn': '#0051ff',
          'btn-hover': '#002fa7',
          'az-light': '#8594a1',
          'az-dark': '#2f3a45',
          'section-bg': '#fafcff',
          'check': 'rgb(235, 244, 255)'
        },
        fontFamily: {
          'poppins': ['Poppins', 'sans-serif'],
          'outfit': ['Poppins', 'sans-serif'],
          'inter': ['Inter', 'sans-serif'],
          'gilroy': ['Gilroy', 'sans-serif'],
        }
      },
    },
    plugins: [],
  }
  