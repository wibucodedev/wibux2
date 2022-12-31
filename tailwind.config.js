module.exports = {
  purge: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  darkMode: 'class', // or 'media' or 'class'
  mode: 'jit',
  theme: {
    extend: {
      colors: {
        wibux2: {
          red: '#A64652',
          blue: '#03A7EF'
        },
        gray: {
          100: '#F1F1F1'
        }
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
