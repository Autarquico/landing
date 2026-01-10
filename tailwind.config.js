/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        black: '#000000',
        white: '#FFFFFF',
        gray: {
          50: '#F5F5F5',
          100: '#E5E5E5',
          700: '#737373',
        },
        green: '#10B981',
        red: '#EF4444',
      },
      fontFamily: {
        display: ['"Archivo Black"', 'sans-serif'],
        body: ['Inter', 'sans-serif'],
      },
      fontSize: {
        'display': ['72px', { lineHeight: '1.2' }],
      },
    },
  },
  plugins: [],
}
