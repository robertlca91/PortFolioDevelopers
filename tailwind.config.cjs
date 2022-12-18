/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: '#706FE5',
        secondary: '#EAEAFC',
      },
    },
  },
  plugins: [require('daisyui')],
  darkMode: 'class',
  daisyui: {
    themes: ['coffee', 'dark', 'acid', 'light'],
  },
  // module,
  // exports: {
  //   darkMode: 'class',
  //   // ...
  // },
}
