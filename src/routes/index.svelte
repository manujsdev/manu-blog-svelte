<script lang="ts">
	import SEO from '$lib/components/seo/index.svelte';
	import Intro from '$lib/components/intro/index.svelte';
	import Skills from '$lib/components/skills/index.svelte';
	import CoreQualifications from '$lib/components/coreQualifications/index.svelte';
	import website from '$lib/config/website';
	import type { EntityMetaType } from '$lib/types';
	import { FAVICONSIZE } from '$lib/constants';

	const { author, siteUrl } = website;
	let title = 'Home';
	let metadescription = 'manujsdev`s portfolio: this is my postfolio';
	const entityMeta: EntityMetaType = {
		...FAVICONSIZE,
		url: `${siteUrl}/`,
		caption: author
	};
	const seoProps = {
		title,
		entityMeta,
		metadescription,
		slug: ''
	};
</script>

<SEO {...seoProps} />
<Intro />
<Skills />
<CoreQualifications />
