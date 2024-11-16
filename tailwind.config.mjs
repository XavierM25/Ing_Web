/** @type {import('tailwindcss').Config} */
const { nextui } = require('@nextui-org/react');
import animations from '@midudev/tailwind-animations';

export default {
  darkMode: ['class'],
  content: [
    './src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}',
    './node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    screens: {
      laptopL: '1440px',
      laptop: '1024px',
      tablet: '768px',
      L: '425px',
      M: '375px',
      S: '320px',
    },
    extend: {
      backgroundImage: {
        'custom-gradient':
          'radial-gradient(circle 1050px at 70% 5%, var(--tw-gradient-stops))',
      },
      animation: {
        fadeInBlurHorizontale: 'fadeInBlurHorizontal 1s  ease-out',
        scroll: 'scroll 40s linear infinite',
      },
      keyframes: {
        fadeInBlurHorizontale: {
          '0%': {
            opacity: '0',
            filter: 'blur(10px)',
          },
          '100%': {
            opacity: '1',
            filter: 'blur(0)',
          },
        },
        scroll: {
          '0%': {
            transform: 'translateX(0)',
          },
          '100%': {
            transform: 'translateX(-100%)',
          },
        },
      },
      borderRadius: {
        lg: 'var(--radius)',
        md: 'calc(var(--radius) - 2px)',
        sm: 'calc(var(--radius) - 4px)',
      },
      colors: {},
    },
  },
  plugins: [
    'tailwind-scrollbar',
    nextui(),
    animations,
    require('tailwindcss-animate'),
  ],
};
