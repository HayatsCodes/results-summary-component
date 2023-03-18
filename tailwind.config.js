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
        '250': '250px',
        '420': '420px',
        '500': '500px',
      },
      height: {
        '300': '300px',
        '330': '330px',
        '350': '350px',
      },
      spacing: {
        '26': '6.5rem',
        '68': '17rem',
        // Add your custom left properties here
      },
      fontSize: {
        '11': '11px',
        '20': '20px',
        '100': '100px',
        '5xl': '3rem'
      },
      colors: {
        'card-color': 'hsl(228, 45%, 44%)',
        'card-color-light': 'hsl(210, 41%, 40%)',
        'light-slate-blue': 'hsl(252, 100%, 67%)',
        'light-royal-blue': 'hsl(241, 81%, 54%)',
        'violet-blue': 'hsla(256, 72%, 46%, 1)',
        'persian-blue': 'hsla(241, 72%, 46%, 1)',
        'light-red': 'hsl(0, 100%, 67%)',
        'orangey-yellow': 'hsl(39, 100%, 56%)',
        'green-teal': 'hsl(166, 100%, 37%)',
        'light-lavender': 'hsl(241, 100%, 89%)',
        'dark-gray-blue': 'hsl(224, 30%, 27%)',
      },
    },
  },
  plugins: [],
}
