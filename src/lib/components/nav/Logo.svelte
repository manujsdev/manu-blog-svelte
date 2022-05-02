<script lang="ts">
	import { appStore } from '$lib/stores/AppStore';
</script>

<a href="/" class={`logo-navbar-container color-text-navbar-${$appStore.onScrolling ? 'onscroll' : 'primary'}`}
	>{'<Manu />'}</a
>

<style>
	.logo-navbar-container {
		font-size: 25px;
		line-height: 17px;
		margin: 0 2vw;
		font-weight: bold;
		text-decoration: none;
		transition: all 0.3s ease 0s;
	}
	.logo-navbar-container:hover {
		transition: 0.5s;
		border-radius: 3px;
		color: var(--theme-bg1);
	}

	@media (min-width: 1366px) {
		.logo-navbar-container {
			font-size: 30px;
		}
	}
</style>
