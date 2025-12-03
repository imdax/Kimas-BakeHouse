/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          cream: '#FFF8F0',
          green: '#1A4D2E',
          orange: '#E85D04',
          peach: '#FFD6A5',
          brown: '#4A3B32',
          lightGreen: '#EDF7F0',
        }
      },
      fontFamily: {
        sans: ['Nunito', 'sans-serif'],
        display: ['Fredoka', 'sans-serif'],
      },
      animation: {
        shine: 'shine 2s infinite',
      },
      keyframes: {
        shine: {
          '0%': { left: '-100%' },
          '100%': { left: '100%' },
        }
      }
    },
  },
  plugins: [],
}
