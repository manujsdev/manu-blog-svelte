<script lang="ts">
	import TitleSection from '$lib/components/titleSection/index.svelte';

	export let title = '';
</script>

<div class="container">
	<TitleSection>{title}</TitleSection>
	<slot />
</div>

<style>
	.container {
		display: flex;
		flex-direction: column;
		margin: 75px 0;
	}
</style>
