<script lang="ts">
	import { socials } from '$lib/constants/socials';
	import Social from './social.svelte';
</script>

<div class="container">
	{#each socials as [icon, href, textTooltip]}
		<Social {...{ icon, href, textTooltip }} />
	{/each}
</div>

<style>
	.container {
		display: flex;
		justify-content: space-around;
		width: 90px;
		margin-right: 22px;
	}
</style>
