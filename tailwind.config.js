const plugin = require('tailwindcss/plugin');

module.exports = {
	purge: {
		layers: ['components', 'utilities'],
		content: [
			'./src/**/*.twig',
			'./src/**/*.vue',
			'./src/**/*.js',
			'./templates/**/*.twig'],
	},
	theme: {
		borderWidth: {
			DEFAULT: '1px',
			'0': '0',
			'2': '2px',
			'3': '3px',
			'4': '4px',
			'6': '6px',
			'8': '8px',
			'12': '12px',
			'16': '16px',
		},
		colors: {
			'transparent': 'transparent',
			'current': 'currentColor',
			'black': '#000',
			'white': '#fff',
			'primary': 'var(--color-primary)',
			'primary-light': 'var(--color-primary-light)',
			'primary-dark': 'var(--color-primary-dark)',
			grey: {
				50: '#fafafa',
				100: '#f5f5f5',
				200: '#eee',
				300: '#e0e0e0',
				400: '#bdbdbd',
				500: '#9e9e9e',
				600: '#757575',
				700: '#616161',
				800: '#424242',
				900: '#212121',
			},
		},
		fontFamily: {
			sans: [
				'Montserrat',
				'sans-serif',
			],
			serif: [
				'EB Garamond',
				'serif',
			],
			mono: [
				'Menlo',
				'Monaco',
				'Consolas',
				'"Liberation Mono"',
				'"Courier New"',
				'monospace',
			],
		},
		borderColor: theme => {
			return global.Object.assign({
				DEFAULT: theme('colors.grey.300', 'currentColor')
			}, theme('colors'))
		},
		extend: {},
	},
	variants: {
		extend: {},
	},
	plugins: [
		require('@tailwindcss/forms'),
	],
};
