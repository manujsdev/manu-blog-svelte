<script lang="ts">
	import SEO from '$lib/components/seo/index.svelte';
	import website from '$lib/config/website';
	import type { EntityMetaType } from '$lib/types';
	import { FAVICONSIZE } from '$lib/constants';

	const { author, siteUrl } = website;
	let title = 'About me';
	let metadescription = 'manujsdev`s portfolio: this is my postfolio. I show you who I am';
	const entityMeta: EntityMetaType = {
		...FAVICONSIZE,
		url: `${siteUrl}/`,
		caption: author
	};
	const seoProps = {
		title,
		entityMeta,
		metadescription,
		slug: 'about'
	};
</script>

<SEO {...seoProps} />
<h1>About me page</h1>
<a href="/">Home</a>
