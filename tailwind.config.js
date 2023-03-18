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
        '500': '500px',
      },
      height: {
        '300': '300px',
      },
      fontSize: {
        '11': '11px',
        '10': '10px',
        '5xl': '3rem'
      },
      colors: {
        'card-color': 'hsl(228, 45%, 44%)',
        'card-color-light': 'hsl(210, 41%, 40%)',
        'light-slate-blue': 'hsl(252, 100%, 67%)',
        'light-royal-blue': 'hsl(241, 81%, 54%)',
        'violet-blue': 'hsla(256, 72%, 46%, 1)',
        'persian-blue': 'hsla(241, 72%, 46%, 1)',
      },
    },
  },
  plugins: [],
}
