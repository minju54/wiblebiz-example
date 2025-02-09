/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./app/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {
    extend: {
      colors: {
        background: '#ffffff',
        foreground: '#171717',
        'mint-900': '#70d7bf',
        'mint-700': '#8ddfcc',
        'midnight-900': '#05141f',
        'midnight-100': '#cdd0d2',
        red: '#ff0900',
        blue: '#4296e4',
        'gray-700': '#37434c',
        'gray-500': '#697278',
        'gray-400': '#82898f',
        'gray-300': '#b4b9bc',
        'gray-200': '#cdd0d2',
        'gray-100': '#e6e8e9',
        'gray-50': '#f6f6f9',
        'gray-10': '#f8f8f8',
      },
      screens: {
        sm: '744px', // 744px 이상
        md: '1024px', // 1024px 이상
        lg: '1440px', // 1440px 이상
      },
    },
  },
  plugins: [],
};
