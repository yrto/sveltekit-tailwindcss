const config = {
	mode: 'jit',
	purge: ['./src/**/*.{html,js,svelte,ts}'],
	theme: {
		fontFamily: {
			sans: ['Inter', 'sans-serif']
			// serif: ['Merriweather', 'serif'],
		},
		extend: {}
	},
	plugins: []
};

module.exports = config;
