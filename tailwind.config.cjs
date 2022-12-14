// /** @type {import('tailwindcss').Config} */
// module.exports = {
//   content: [],
//   theme: {
//     extend: {},
//   },
//   plugins: [],
// }


/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ['./src/**/*.{html,js,svelte,ts}'],
    theme: {
      extend: {
        colors: {
            'bg-main': '#1c242d',
            'primary': '#242f39',
            'secondary': '#2d3741',
            'tertiary': '#242f41',

          },
      }
    },
    plugins: []
  };