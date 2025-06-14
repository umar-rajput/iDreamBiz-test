/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    extend: {
      colors: {
        'light-blue-50': 'rgb(246 251 254)',
        'light-blue-100': 'rgb(236 247 248)',
        'light-blue-500': 'rgb(53 71 81)',
        'light-blue-900': 'rgb(32 52 63)',
      }
    },
  },
  plugins: [],
}

