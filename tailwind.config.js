/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./*.html'],
  theme: {
    screens: {
      sm: '480px',
      md: '768px',
      lg: '976px',
    },
    extend: {
      colors: {
        def_bg: `#060023f4`,
      }
    },
  },
  plugins: [],
}
