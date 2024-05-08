/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: "class", // or 'media' or 'class'    in media mode, the dark mode is activated when the user's system is in dark mode in class mode, the dark mode is activated when the class dark is added to the html tag
  theme: {
    extend: {},
  },
  plugins: [],
}

