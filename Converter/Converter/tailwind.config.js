/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'custom-black': 'rgb(31,31,31)',
        'custom-black-2': 'rgb(23,23,23)',
      },
    },
  },
  plugins: [],
}

