module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      boxShadow: {
        '3xl': '0px -2px 12px -5px rgba(0, 0, 0, 0.5)',
      },
      // use monserrat as the default font
      fontFamily: {
        'sans': ['Montserrat', 'sans-serif'],
      }
    },
  },
  plugins: [],
  
}
