<script>
	import { onMount } from 'svelte';
	export let url;

	const redirects = {
		idle: 'https://idle.sebastianogirotto.me',
		guesstheelement: 'https://gte.sebastianogirotto.me',
		gte: 'https://gte.sebastianogirotto.me',
	};

	onMount(() => {
		if (redirects[url.toLowerCase()]) {
			location.href = redirects[url.toLowerCase()];
		} else {
			location.href = '/';
		}
	});
</script>