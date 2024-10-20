/** @type {import('tailwindcss').Config} */
const { nextui } = require("@nextui-org/react");
import animations from '@midudev/tailwind-animations'

export default {
	content: [
		'./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}',
		"./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
	  ],
	theme: {
		extend: {
			backgroundImage: {
				'custom-gradient': 'radial-gradient(circle 1050px at 70% 5%, var(--tw-gradient-stops))',
			  },
			  animation: {
				scroll: 'scroll 40s linear infinite',
			  },
			  keyframes: {
				scroll: {
				  '0%': { transform: 'translateX(0)' },
				  '100%': { transform: 'translateX(-100%)' },
				},
			  },
			  
		},
	},
	plugins: [nextui(), animations],
}
