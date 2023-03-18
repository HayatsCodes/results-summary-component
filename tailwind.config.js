/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['index.html'],
  theme: {
    extend: {
      fontSize: {
        '11': '11px',
      },
      colors: {
        'card-color': 'hsl(228, 45%, 44%)',
      },
    },
  },
  plugins: [],
}
