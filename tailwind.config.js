/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx,html}"
  ],
  theme: {
    extend: {
      colors: {
        transparent: 'transparent',
        white: '#ffffff',
        black: '#000000',
        tahiti: '#3ab7bf',
        'oklch-bg': 'oklch(71.4% 0.014 41.2)',
      },
    },
  },
  plugins: [],
};
