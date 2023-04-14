/** @type {import('tailwindcss').Config} */
module.exports = {
  purge: {
    enabled: true,
    content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
    
  },
  // content: [],
  theme: {
    extend: {
      gridTemplateRows: {
        'three-part': '2fr 8fr 1fr'
      },
      flexGrow: {
        '8': '8'
      },
      height: {
        '80vh': '80vh'
      }
    },
  },
  variants: {
    extend: {
      maxHeight: ['focus']
    }
  },
  plugins: [],
}

