/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    colors: {
      black: '#000000',
      white: '#FFFFFF',
      mobbexWhite: '#FFFFFF',
      mobbexTag: {
        Light: '#6A6969',
        Dark: '#B5B5B5',
      },
      mobbexGreen: {
        light: '#0A8A4A',
        dark: '#00A64D',
      },
      mobbexPrimary: {
        Soft: '#7000FF',
        Medium: '#e02400',
        DarkMode: '#9B4DFF',
      },
      mobbexGrey: {
        Soft: '#E2E2E1',
        Medium: '#D1DAE6',
        Dark: '#2B2A2A',
      },
    },
    extend: {},
  },
  plugins: [],
};
