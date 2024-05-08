/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'roboto': ['Roboto', 'sans-serif'],
        'baloo2': ['Baloo 2', 'sans-serif'],
        'baloobhai2': ['Baloo Bhai 2', 'sans-serif'],
        'jersey25': ['Jersey 25', 'sans-serif'],
        'passionone': ['Passion One', 'sans-serif'],
        'robotoslab': ['Roboto Slab', 'sans-serif'],
        'frederickathegreat': ['Fredericka the Great', 'sans-serif'],
        'kodemono': ['Kode Mono', 'sans-serif'],
        'jaini' : ['Jaini', 'sans-serif'],
        'permanentmarker' : ['Permanent Marker', 'sans-serif'],
        'patuaone' : ['Patua One', 'sans-serif'],
        'russoone' : ['Russo One', 'sans-serif'],
      },
      screens: {
        'xs': '550px',
        'sm': '640px',
        'md': '768px',
        'lg': '1024px',
        'xl': '1280px',
      },
    },
  },
  plugins: [],
}

