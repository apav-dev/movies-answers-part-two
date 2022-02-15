const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        display: [ 'Bebas Neue', ...defaultTheme.fontFamily.sans]
      },
      colors: {
        'slate': '#64748b'
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [ 
    require("@tailwindcss/forms")({
      strategy: 'class',
    }),
  ],
}