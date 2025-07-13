/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      gridTemplateColumns: {
        '24': 'repeat(24, minmax(0, 1fr))',
      },
      gridTemplateRows: {
        '16': 'repeat(16, minmax(0, 1fr))',
      },
      gridColumn: {
        'span-24': 'span 24 / span 24',
      },
      colors: {
        vintage: {
          cream: '#f4f0e6',
          beige: '#d4c4a8',
          brown: '#8b6f47',
          darkbrown: '#4a5d3a', 
          forest: '#4a5d3a',
          border: '#d4c4a8',
        },
      },
    },
  },
  plugins: [],
};
