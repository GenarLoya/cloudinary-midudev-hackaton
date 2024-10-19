/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			fontFamily: {
				'qwitcher-grypen': ['Qwitcher Grypen', 'sans-serif']
			},
			backgroundImage: {
				'history-background': "url('/history-text.svg')",
				'title-background': "url('/title-background.svg')",
				'history-profile': "url('/history-profile.svg')",
			}
		},
	},
	plugins: [],
}
