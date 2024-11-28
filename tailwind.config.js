/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  darkMode: 'class', // Enable dark mode
  theme: {
    extend: {
      colors: {
        saffron: '#FFB347',  // Primary color
        deepBlue: '#1C3A63', // Custom deepBlue color
        mutedWhite: '#F9F9F9', // Custom mutedWhite color
        warmGrey: '#7D7D7D',  // Custom warmGrey color
        brickRed: '#D64545',  // Custom brickRed color
        lightGold: '#E8C878', // Custom lightGold color
        black: '#000000',     // Additional color
        lightGray: '#D3D3D3', // Additional light gray color
      },
      spacing: {
        'card-padding': '20px', // Example spacing utility
      },
      fontFamily: {
        heading: ['Sacramento', 'cursive'],   // Font for headings
        body: ['Montserrat', 'sans-serif'],   // Font for body text
        accent: ['Dancing Script', 'cursive'], // Font for accents
      },
    },
  },
  plugins: [],
}
