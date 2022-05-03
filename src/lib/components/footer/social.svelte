<script lang="ts">
	import Tooltip from '$lib/components/tooltip/index.svelte';
	import Link from '$lib/components/Link/index.svelte';
	export let icon = '';
	export let href = '';
	export let textTooltip = '';
</script>

<Tooltip text={textTooltip}>
	<Link link={href} iconOrTextLink={icon} />
</Tooltip>
