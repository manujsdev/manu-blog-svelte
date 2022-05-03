<script lang="ts">
	export let text = '';
</script>

<div class="tooltip-container">
	<slot />
	<span class="tooltiptext">{text}</span>
</div>

<style>
	.tooltip-container {
		position: relative;
		display: inline-block;
		cursor: pointer;
	}

	.tooltip-container:hover .tooltiptext {
		visibility: visible;
		opacity: 1;
	}

	span {
		visibility: hidden;
		width: 120px;
		background-color: var(--theme-tooltip);
		color: #fff;
		text-align: center;
		border-radius: 6px;
		padding: 5px 0;
		position: absolute;
		z-index: 1;
		bottom: 96%;
		left: 50%;
		margin-left: -60px;
		opacity: 0;
		transition: opacity 1s;
	}

	span:after {
		content: '';
		position: absolute;
		top: 100%;
		left: 50%;
		margin-left: -5px;
		border-width: 5px;
		border-style: solid;
		border-color: var(--theme-tooltip) transparent transparent transparent;
	}
</style>
