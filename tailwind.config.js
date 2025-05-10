// tailwind.config.js
module.exports = {
    darkMode: 'class', // This enables class-based dark mode
    content: [
      './pages/**/*.{js,ts,jsx,tsx}',
      './components/**/*.{js,ts,jsx,tsx}',
    ],
    theme: {
      // extend: {},
      extend: {
        fontFamily: {
          sans: ['Inter', 'sans-serif'],
          body: ['Inter', 'sans-serif'],
          heading: ['Inter', 'sans-serif'],
        },
      }
      
    },
    // plugins: [],
    plugins: [require('@tailwindcss/typography')],
  }
  