<script lang="ts">
	import Socials from './Socials.svelte';
</script>

<footer class="container">
	<div class="copy-right"> 2022 - Manu</div>
	<Socials />
</footer>

<style>
	.container {
		display: flex;
		justify-content: center;
		align-items: center;
		color: var(--theme-text);

		max-width: 100vw;
		height: 55px;
		z-index: 4;
		justify-content: space-between;
		backdrop-filter: blur(4px);
		bottom: 0;
		position: fixed;
		width: 100vw;
	}

	.copy-right {
		margin-left: 22px;
	}
</style>
