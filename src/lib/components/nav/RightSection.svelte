<script lang="ts">
	import ThemeToggle from '../theme/ThemeToggle.svelte';
</script>

<div class="container">
	<ThemeToggle />
</div>

<style>
	.container {
		display: flex;
		justify-content: center;
		padding-right: 20px;
	}

	@media (min-width: 1024px) {
		.container {
			padding-right: 35px;
		}
	}
</style>
