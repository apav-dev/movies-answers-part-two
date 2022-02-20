const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        display: [ 'Bebas Neue', ...defaultTheme.fontFamily.sans],
        body: ['Roberto Serif', ...defaultTheme.fontFamily.sans]
      },
      colors: {
        'slate': '#0f2027',
      },
      boxShadow: {
        'movie': 'rgba(243, 244, 246, 0.35) 0px 5px 15px',
        'headshot': 'rgb(38, 57, 77) 0px 20px 30px -10px',
        'bio': 'rgba(0, 0, 0, 0.56) 0px 22px 70px 4px'
      },
      minWidth: {
        '1/3': '33.3333333%'
      }
    },
  },
  variants: {
    extend: {
      dropShadow: ['hover']
    },
  },
  plugins: [ 
    require("@tailwindcss/forms")({
      strategy: 'class',
    }),
  ],
}