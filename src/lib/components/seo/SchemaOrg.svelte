<script lang="ts">
	import hash from 'object-hash';
	import type { EntityMetaType } from '$lib/types';

	/**
	 * @type {{ url: string; faviconWidth: number; faviconHeight: number } | null}
	 */
	export let entityMeta: EntityMetaType = null;
	export let siteUrl;
	// export let url; // commented by the moment
	export let author;
	export let siteLanguage;
	export let twitterUsername;
	export let githubPage;
	export let telegramUsername;
	export let linkedinProfile;
	export let siteTitle;
	export let siteShortTitle;

	const entityHash = hash({ author }, { algorithm: 'md5' });

	const schemaOrgEntity =
		entityMeta !== null
			? {
					'@type': ['Person', 'Organization'],
					'@id': `${siteUrl}/#/schema/person/${entityHash}`,
					name: author,
					image: {
						'@type': 'ImageObject',
						'@id': `${siteUrl}/#personlogo`,
						inLanguage: siteLanguage,
						url: entityMeta.url,
						width: entityMeta.faviconWidth,
						height: entityMeta.faviconHeight,
						caption: author
					},
					logo: {
						'@id': `${siteUrl}/#personlogo`
					},
					sameAs: [
						`https://twitter.com/${twitterUsername}`,
						`https://github.com/${githubPage}`,
						`https://t.me/${telegramUsername}`,
						`https://linkedin.com/in/${linkedinProfile}`
					]
			  }
			: null;

	const schemaOrgWebsite = {
		'@type': 'WebSite',
		'@id': `${siteUrl}/#website`,
		url: siteUrl,
		name: siteTitle,
		description: siteShortTitle,
		publisher: {
			'@id': `${siteUrl}/#/schema/person/${entityHash}`
		},
		potentialAction: [
			{
				'@type': 'SearchAction',
				target: `${siteUrl}/?s={search_term_string}`,
				'query-input': 'required name=search_term_string'
			}
		],
		inLanguage: siteLanguage
	};

	const schemaOrgArray = [schemaOrgEntity, schemaOrgWebsite];
	const schemaOrgObject = {
		'@context': 'https://schema.org',
		'@graph': schemaOrgArray
	};
	let jsonLdString = JSON.stringify(schemaOrgObject);
	let jsonLdScript = `
		<script type="application/ld+json">
			${jsonLdString}
		${'<'}/script>
	`;
</script>

<svelte:head>
	{@html jsonLdScript}
</svelte:head>
