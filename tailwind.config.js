/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        display: ['"Cormorant Garamond"', 'Georgia', '"Times New Roman"', 'serif'],
        sans: ['"DM Sans"', '"Helvetica Neue"', 'Helvetica', 'Arial', 'sans-serif'],
      },
      colors: {
        ivory: '#FAF7F2',
        cream: '#F2EBE0',
        champagne: '#E8D5B0',
        gold: {
          DEFAULT: '#B8860B',
          light: '#D4A843',
        },
        burgundy: '#3D0C11',
        charcoal: '#2A2A2A',
        muted: '#7A6E65',
      },
    },
  },
  plugins: [],
};
