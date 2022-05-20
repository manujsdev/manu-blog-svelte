<script lang="ts">
	import { page } from '$app/stores';
	import { googleAnalytics } from '$lib/constants';
	import { onMount } from 'svelte';
	$: {
		if (typeof gtag !== 'undefined') {
			gtag('config', googleAnalytics, {
				page_title: document.title,
				page_path: $page.url.href
			});
		}
	}

	onMount(async () => {
		const script = document.createElement('script');
		script.innerHTML = `
	 window.dataLayer = window.dataLayer || [];
		function gtag() {
			dataLayer.push(arguments);
		}

		gtag('js', new Date());
		gtag('config', '${googleAnalytics}');
`;
		document.getElementsByTagName('body')[0].appendChild(script);
	});
</script>

<svelte:head>
	<script async src={`https://www.googletagmanager.com/gtag/js?id=${googleAnalytics}`}>
	</script>
</svelte:head>
