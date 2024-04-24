/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{html,js,svelte,ts}'],
	theme: {
		extend: {
			colors: {
				primary: {
					DEFAULT: '#179f8b',
					100: '#d1ece8',
					200: '#a2d9d1',
					300: '#74c5b9',
					400: '#45b2a2',
					500: '#179f8b',
					600: '#127f6f',
					700: '#0e5f53',
					800: '#094038',
					900: '#05201c'
				},
				secondary: {
					DEFAULT: '#12556e',
					100: '#d0dde2',
					200: '#a0bbc5',
					300: '#7199a8',
					400: '#41778b',
					500: '#12556e',
					600: '#0e4458',
					700: '#0b3342',
					800: '#07222c',
					900: '#041116'
				}
			}
		}
	},
	// eslint-disable-next-line @typescript-eslint/no-var-requires
	plugins: [require('tailwind-scrollbar')({ nocompatible: true })],
	darkMode: 'class'
};
