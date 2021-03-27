module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      backgroundImage: theme => ({
        'hero-pattern': "url('/src/bg/pexels-instawalli-176851.jpg')",
      })
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
