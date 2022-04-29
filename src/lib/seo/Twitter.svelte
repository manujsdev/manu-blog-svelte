<script>
	export let twitterUsername = '';
</script>

<svelte:head>
	<meta name="twitter:card" content="summary_large_image" />
	{#if twitterUsername}
		<meta name="twitter:creator" content={`@${twitterUsername}`} />
		<meta name="twitter:site" content={`@${twitterUsername}`} />
	{/if}
</svelte:head>
