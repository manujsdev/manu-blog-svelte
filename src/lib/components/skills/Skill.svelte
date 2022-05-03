<script lang="ts">
	import Tooltip from '$lib/components/tooltip/index.svelte';
	export let color = '#1569c4';
	export let icon = '';
	export let title = '';
</script>

<Tooltip text={title}>
	<div style="--main-color-skill: {color}" class="skill-container">
		<span>{icon}</span>
	</div>
</Tooltip>

<style>
	.skill-container {
		display: flex;
		flex-direction: column;
		align-items: center;
		margin: 0 50px;
	}

	span {
		font-size: 4em;
	}

	span:hover {
		color: var(--main-color-skill);
		transition: 0.3s;
	}
</style>
