<script lang="ts">
	import { AppStore } from '$lib/stores/AppStore';

	import { getContext } from 'svelte';
	const { theme, toggle } = getContext('theme');

	let isScrolling = false;
	AppStore.subscribe(({ onScrolling }: any) => {
		isScrolling = onScrolling;
	});
</script>

<div class={`toggle color-text-navbar-${isScrolling ? 'onscroll' : 'primary'}`} on:click={toggle}>
	{$theme.name === 'dark' ? '' : '盛'}
</div>

<style>
	.toggle {
		font-size: 22px;
		cursor: pointer;
	}
</style>
