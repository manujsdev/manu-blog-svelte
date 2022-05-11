<script lang="ts">
	import SEO from '$lib/components/seo/index.svelte';
	import ContactSocials from '$lib/components/contactSocials/index.svelte';
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

<div class="container">
	<span class="my-name">Hello. I'm Manu</span>
	<h3>Javascript Developer</h3>
	<div class="socials">
		<ContactSocials icon="﯉" value="manujsdev@gmail.com" />
		<ContactSocials icon="" value="@manujsdev" />
		<ContactSocials icon="" value="@manujsdev" />
	</div>
</div>
<p>
	I am a developer who graduated from Software engineering with more than 9 years of experience in high-impact
	environments with very good results. I'm ready for software management and development.{' '}
</p>
<p>
	I have experience in web application development and database administration in distributions based on Debian and its
	respective administrations.
</p>
<p>
	I consider myself very passionate, responsible, organized and creative. I have ease of communication and I believe in
	teamwork.
</p>
<p>I have a high disposition to continue my professional development and I definitely like new challenges.</p>

<style>
	.container {
		display: flex;
		flex-direction: column;
		padding-top: 44px;
	}

	.my-name {
		font-size: 1.78em;
		font-weight: bold;
	}

	p {
		font-size: 1.443em;
		max-width: 80%;
		text-align: justify;
		margin: 1em;
	}

	.socials {
		margin: 3em 0;
		display: flex;
		flex-direction: column;
	}
</style>
