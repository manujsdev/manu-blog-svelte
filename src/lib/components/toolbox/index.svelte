<script lang="ts">
	export let width = '12rem';
	export let extra = '';
	export let link: string | undefined = undefined;
	export let icon = '';
	export let text = '';
</script>

<div style="--main-toolbox-width: {width}" class="container">
	<span class="box-icon">{icon}</span>
	<span class="box-text">{text}</span>
	{extra}
	{#if link}
		<div class="corner-right">ress</div>
	{/if}
</div>

<style>
	.container {
		border-radius: 0.56em;
		transition: box-shadow 0.2s ease, border 0.2s ease;
		width: var(--main-toolbox-width);
		height: var(--main-toolbox-width);
		background-color: var(--theme-background);
		box-shadow: 0 0 35px 0 var(--theme-boxShadow);

		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: flex-start;
		text-align: center;
		margin: 20px;
		position: relative;
	}
	.container:hover {
		transition: box-shadow 0.2s ease;
	}

	.box-icon {
		font-size: 2.2em;
		margin: 17px 0;
	}

	.box-text {
		font-weight: bold;
		margin: 15px;
	}

	.corner-right {
		position: absolute;
		right: 18px;
		bottom: 10px;
		font-size: 1.8em;
	}
</style>
