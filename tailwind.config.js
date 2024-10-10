/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,js}",
    "./node_modules/tw-elements/dist/js/**/*.js"
  ],
  theme: {
    extend: {
      transitionDuration: {
        '400': '400ms'
      }
    },
    safelist: [
      'animate-[slide-right_1s_ease-in-out]'
    ]
  },
  plugins: [require("tw-elements/dist/plugin")],
};
