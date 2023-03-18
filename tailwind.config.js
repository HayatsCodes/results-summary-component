/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["*.html"],
  theme: {
    extend: {
      fontFamily: {
        custom: ['HankenGrotesk'],
      },
      width: {
        '210': '210px',
        '420': '420px',
      },
      height: {
        '300': '300px',
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
