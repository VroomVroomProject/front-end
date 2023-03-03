/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./pages/**/*.{ts,tsx}', './components/**/*.{ts,tsx}'],
  theme: {
    extend: {
      spacing: {
        '34rem': '34rem',
      },
    },
  },
  plugins: [],
};
