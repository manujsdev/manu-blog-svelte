<script lang="ts">
	import { appStore } from '$lib/stores/AppStore';

	import LogoNavbar from './Logo.svelte';
	import RightSection from './RightSection.svelte';

	let y = 0;
	$: appStore.updateValue('onScrolling', y > 0);
</script>

<nav
	style="--main-bg-navbar: {$appStore.onScrolling ? '#ffffff40' : 'transparent'}"
	class={$appStore.onScrolling ? 'scrolling' : ''}
>
	<LogoNavbar />
	<RightSection />
</nav>

<svelte:window bind:scrollY={y} />

<style>
	nav {
		display: flex;
		justify-content: space-between;
		align-items: center;
		position: fixed;
		max-width: 100vw;
		position: fixed;
		width: 100%;
		height: 60px;
		z-index: 4;
		padding: 0 5px;
		background: var(--main-bg-navbar);
		margin-top: 0;
		top: 0;
	}

	.scrolling {
		box-shadow: 0 0 4px 0 #071d28;
		transition: down 4.3s;
		backdrop-filter: blur(4px);
	}

	@media (min-width: 1366px) {
		nav {
			height: 82px;
			flex-direction: row;
			top: 0;
			left: 0;
			width: 100vw;
			transition: all 800ms ease;
			z-index: 10;
		}

		.scrolling {
			margin-top: 0;
		}
	}
</style>
