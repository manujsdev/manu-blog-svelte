<script>
	import ThemeContext from '$lib/components/theme/ThemeContext.svelte';
	import ThemeToggle from '$lib/components/theme/ThemeToggle.svelte';
</script>

<ThemeContext>
	<ThemeToggle />
	<slot />
</ThemeContext>

<style>
	:global(html) {
		background-color: var(--theme-background);
		color: var(--theme-text);
	}
</style>
