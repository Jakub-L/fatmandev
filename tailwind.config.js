import defaultTheme from 'tailwindcss/defaultTheme';

export default {
	content: ['./src/**/*.{html,js,svelte,ts}'],
	theme: {
		screens: {
			xs: '475px',
			...defaultTheme.screens
		},
		extend: {}
	},
	plugins: []
};
