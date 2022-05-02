<script>
	import ThemeContext from '$lib/components/theme/ThemeContext.svelte';
	import NavBar from '$lib/components/nav/index.svelte';
</script>

<ThemeContext>
	<NavBar />
	<main>
		<slot />
	</main>
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
		margin: 5rem 2rem 0px;
	}

	:global(.color-text-navbar-primary) {
		color: var(--theme-text);
	}

	:global(.color-text-navbar-onscroll) {
		color: var(--theme-colorNavBarScroll);
	}
</style>
