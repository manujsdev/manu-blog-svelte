<script lang="ts">
	import website from '$lib/config/website';
	import { VERTICAL_LINE_ENTITY } from '$lib/constants/index';
	import type { EntityMetaType } from '$lib/types';
	import OpenGraph from './OpenGraph.svelte';
	import SchemaOrg from './SchemaOrg.svelte';
	import Twitter from './Twitter.svelte';

	// props
	export let metadescription = '';
	export let title = '';
	export let entityMeta: EntityMetaType = null;
	export let slug = '';

	// local variables
	const {
		author,
		siteLanguage,
		siteTitle,
		githubPage,
		twitterUsername,
		siteUrl,
		linkedinProfile,
		telegramUsername,
		siteShortTitle
	} = website;
	const url = `${siteUrl}/${slug}`;
	const pageTitle = `${siteTitle} ${VERTICAL_LINE_ENTITY} ${title}`;

	const twitterProps = {
		twitterUsername
	};

	const schemaOrgProps = {
		author,
		entityMeta,
		metadescription,
		siteLanguage,
		siteTitle,
		siteUrl,
		title: pageTitle,
		githubPage,
		linkedinProfile,
		telegramUsername,
		twitterUsername,
		siteShortTitle
	};

	const openGraphProps = {
		metadescription,
		siteLanguage,
		pageTitle,
		siteTitle,
		url
	};
</script>

<svelte:head>
	<title>{pageTitle}</title>
	<meta name="description" content={metadescription} />
	<meta name="robots" content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1" />
	<html lang={siteLanguage} />
</svelte:head>
<Twitter {...twitterProps} />
<SchemaOrg {...schemaOrgProps} />
<OpenGraph {...openGraphProps} />
