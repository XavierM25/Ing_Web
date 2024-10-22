/** @type {import('tailwindcss').Config} */
const { nextui } = require('@nextui-org/react');
import animations from '@midudev/tailwind-animations';

export default {
  content: [
    './src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}',
    './node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'custom-gradient':
          'radial-gradient(circle 1050px at 70% 5%, var(--tw-gradient-stops))',
      },
      animation: {
        fadeInBlurHorizontal: 'fadeInBlurHorizontal 1s ease-out',
        scroll: 'scroll 40s linear infinite',
      },
      keyframes: {
        fadeInBlurHorizontal: {
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
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-100%)' },
        },
      },
    },
  },
  plugins: [nextui(), animations],
};
