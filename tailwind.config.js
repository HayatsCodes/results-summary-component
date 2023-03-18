/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["*.html"],
  theme: {
    extend: {
      fontFamily: {
        custom: ['HankenGrotesk'],
      },
      fontWeight: {
        thin: 100,
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
        'card-color-light': 'hsl(210, 41%, 40%)',
        'light-slate-blue': 'hsl(252, 100%, 67%)',
        'light-royal-blue': 'hsl(252, 100%, 67%)',
      },
    },
  },
  plugins: [],
}
