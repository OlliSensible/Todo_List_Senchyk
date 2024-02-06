const colors = require('tailwindcss/colors');

 module.exports = {
  content: ["./**/*.html"],
  theme: {
    extend: {
      colors: {
        'background': '#0A2E36',
        'dark': '#00494d',
        'light': '#448e9267',
        'text': '#F0F4F8', 
        'logo': '#efc75e',
      },
      fontFamily: {
        tangerine: ["Tangerine", "cursive"], 
      },
    },
  },
  variants: {},
  plugins: [],
};