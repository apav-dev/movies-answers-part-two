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
        'slate': '#64748b',
        'light-gray': '#CAD3E3',
      },
      dropShadow: {
        'xl': '0 0 25px rgba(0, 0, 0, 0.6)'
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