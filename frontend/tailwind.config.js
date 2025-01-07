/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/**/*.{html,js,jsx,ts,tsx}", // Add paths to your source files
  ],
  theme: {
    extend: {
      fontFamily: {
        rubik: ['Rubik', 'Rubik Distressed', 'Rubik Marker Hatch', 'Sirin Stencil', 'Athiti', 'sans-serif'],
        'sub-heading-font': ['Sirin Stencil', 'sans-serif'],
        stylishHeading: ['"Jersey 10"', 'cursive'], // Add the Jersey 10 font correctly
      },
    },
  },
  plugins: [],
};
