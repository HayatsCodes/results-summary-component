/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["*.html"],
  theme: {
    extend: {
      width: {
        '200': '200px',
        '300': '300px',
        '400': '400px',
      },
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
