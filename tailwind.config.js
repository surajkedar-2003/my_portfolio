/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        navBar: '#1d1e25',
        primary: '#121316',
        textBase: '#8f9091',
      },
    },
  },
  plugins: [],
}

