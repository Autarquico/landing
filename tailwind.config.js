/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        ink: '#0a0a0a',
        paper: '#fafaf7',
        muted: '#6b6b6b',
        hairline: '#e8e8e3',
        black: '#000000',
        white: '#FFFFFF',
        gray: {
          50: '#FAFAFA',
          100: '#F5F5F5',
          200: '#E5E5E5',
          300: '#D4D4D4',
          400: '#A3A3A3',
          500: '#737373',
          600: '#525252',
          700: '#404040',
          800: '#262626',
          900: '#171717',
        },
        green: '#10B981',
        red: '#EF4444',
        delta: {
          DEFAULT: '#5DBCD0',
          hover: '#4FA8BB',
          soft: '#E6F4F7',
        },
        sigma: {
          DEFAULT: '#5DBC83',
          hover: '#4FA86E',
          soft: '#E6F7ED',
        },
      },
      fontFamily: {
        display: ['Fraunces', '"Iowan Old Style"', 'Georgia', 'serif'],
        body: ['Inter', 'system-ui', '-apple-system', 'sans-serif'],
      },
      fontSize: {
        'display': ['72px', { lineHeight: '1.2' }],
      },
    },
  },
  plugins: [],
}
