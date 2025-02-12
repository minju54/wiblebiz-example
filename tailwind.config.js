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
        md2: '1060px', // 1060px 이상
        lg: '1440px', // 1440px 이상
      },
      keyframes: {
        expandFromLeft: {
          '0%': { transform: 'scaleX(0)', transformOrigin: 'left' },
          '100%': { transform: 'scaleX(1)', transformOrigin: 'left' },
        },
        shrinkToLeft: {
          '0%': { transform: 'scaleX(1)', transformOrigin: 'left' },
          '100%': { transform: 'scaleX(0)', transformOrigin: 'left' },
        },
        expandFromTop: {
          '0%': { height: '0', opacity: '0', transform: 'translateY(-20px)' },
          '100%': { height: 'auto', opacity: '1', transform: 'translateY(0)' },
        },
        shrinkToTop: {
          '0%': { height: 'auto', opacity: '1', transform: 'translateY(0)' },
          '100%': { height: '0', opacity: '0', transform: 'translateY(-20px)' },
        },
      },
      animation: {
        expandFromLeft: 'expandFromLeft 0.5s ease-out forwards',
        shrinkToLeft: 'shrinkToLeft 0.5s ease-out forwards',
        expandFromTop: 'expandFromTop 0.7s ease-in-out forwards',
        shrinkToTop: 'shrinkToTop 0.7s ease-in-out forwards',
      },
    },
  },
  plugins: [],
};
