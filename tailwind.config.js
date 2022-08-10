const colors = require('tailwindcss/colors');
const defaultTheme = require('tailwindcss/defaultTheme');
const theme = require('./ui/theming/theme.json');


// cf: https://projects.invisionapp.com/d/main/default/#/console/21567667/458233093/preview
module.exports = {
  mode: 'jit',
  purge: ['./ui/**/*.{ts,tsx}'],
  theme: {
    colors: {
      black: colors.black,
      white: colors.white,
      ...theme.colors
    },
    fontFamily: {
      sans: [ 'Inter', ...defaultTheme.fontFamily.sans],
    },
    extend: {
      ...theme.extend
    }
  }
};
