<script lang="ts">
	import ThemeContext from '$lib/components/theme/ThemeContext.svelte';
	import NavBar from '$lib/components/nav/index.svelte';
	import Footer from '$lib/components/footer/index.svelte';
	import Analytics from '$lib/components/analytics/indext.svelte';
</script>

<Analytics />
<ThemeContext>
	<NavBar />
	<main>
		<slot />
	</main>
	<Footer />
</ThemeContext>

<style>
	:global(html) {
		background-color: var(--theme-background);
		color: var(--theme-text);
	}
	:global(body) {
		margin: 0;
	}

	main {
		margin: 5rem 2rem 5rem;
	}

	:global(.color-text-navbar-primary) {
		color: var(--theme-text);
	}

	:global(.color-text-navbar-onscroll) {
		color: var(--theme-colorNavBarScroll);
	}
</style>
