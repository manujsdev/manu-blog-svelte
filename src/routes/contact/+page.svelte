<script lang="ts">
	import SEO from '$lib/components/seo/index.svelte';
	import website from '$lib/config/website';
	import type { EntityMetaType } from '$lib/types';
	import { FAVICONSIZE } from '$lib/constants';

	const { author, siteUrl } = website;
	let title = 'Contact';
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
		slug: 'contact'
	};
</script>

<SEO {...seoProps} />
<h1>contact page</h1>
<a href="/">Home</a>
