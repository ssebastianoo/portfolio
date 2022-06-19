import adapter from '@sveltejs/adapter-auto';
import preprocess from 'svelte-preprocess';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	kit: {
		adapter: adapter(),

		// Override http methods in the Todo forms
		methodOverride: {
			allowed: ['PATCH', 'DELETE']
		},
		vite: {
			ssr: {
				noExternal: ['@fortawesome/*']
			},
		}
	},
	preprocess: [
        preprocess(),
    ],
};

export default config;
