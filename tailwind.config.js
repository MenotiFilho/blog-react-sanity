module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    screens: {
      xlm: { max: '1279px' },
      // => @media (max-width: 1279px) { ... }

      lgm: { max: '1023px' },
      // => @media (max-width: 1023px) { ... }

      mdm: { max: '767px' },
      // => @media (max-width: 767px) { ... }

      smm: { max: '639px' },
      // => @media (max-width: 639px) { ... }
    },
    extend: {},
  },
  plugins: [],
}
