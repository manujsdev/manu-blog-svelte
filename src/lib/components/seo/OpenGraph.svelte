<script lang="ts">
	export let metadescription: string;
	export let siteLanguage: string;
	export let pageTitle: string;
	export let siteTitle = '';
	export let url: string;
</script>

<svelte:head>
	<meta property="og:site_name" content={siteTitle} />
	<meta property="og:locale" content={siteLanguage} />
	<meta property="og:url" content={url} />
	<meta property="og:type" content={'website'} />
	<meta property="og:title" content={pageTitle} />
	<meta property="og:description" content={metadescription} />
</svelte:head>
