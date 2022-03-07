module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        display: [ 'Bebas Neue'],
        body: ['Roberto']
      },
      colors: {
        'slate': '#0f2027',
      },
      boxShadow: {
        'movie': 'rgba(243, 244, 246, 0.35) 0px 5px 15px',
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