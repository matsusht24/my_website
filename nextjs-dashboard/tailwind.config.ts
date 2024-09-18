import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      gridTemplateColumns: {
        '13': 'repeat(13, minmax(0, 1fr))',
      },
      colors: {
        blue: {
          100: '#1C3144',
          200: '#3F88C5',
          300: '#BFCDE0',
          400: '#42bcf4',
        },
        white: {
          100: '#FEFCFD'
        },
        orange: {
          100: '#D00000'
        },
        gray: {
          100: '#A2AEBB'
        },
        yellow: {
          100: '#FFBA08',
          200: '#e0d8b0 '
        },
      },
    },
    keyframes: {
      shimmer: {
        '100%': {
          transform: 'translateX(100%)',
        },
      },
    },
  },
  plugins: [require('@tailwindcss/forms')],
};
export default config;
