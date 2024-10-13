/** @type {import('tailwindcss').Config} */
const { nextui } = require("@nextui-org/react");
import animations from '@midudev/tailwind-animations'

export default {
	content: [
		'./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}',
		"./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
	],
	theme: {
		extend: {},
	},
	plugins: [nextui(), animations]
}
