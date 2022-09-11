<script lang="ts">
  import hash from 'object-hash';
  import type { EntityMetaType } from '$lib/types';

  /**
   * @type {{ url: string; faviconWidth: number; faviconHeight: number } | null}
   */
  export let entityMeta: EntityMetaType = null;
  export let siteUrl;
  export let url;
  export let author;
  export let siteLanguage;
  export let twitterUsername;
  export let githubPage;
  export let telegramUsername;
  export let linkedinProfile;
  export let siteTitle;
  export let siteShortTitle;

  export let isArticle = false;
  export let lastUpdated = '';
  export let datePublished = '';
  export let facebookPage = '';
  export let title = '';
  export let metadescription;
  export let entity = '';

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

  const schemaOrgWebPage = {
    '@type': 'WebPage',
    '@id': `${url}#webpage`,
    url,
    name: title,
    isPartOf: {
      '@id': `${siteUrl}/#website`
    },
    primaryImageOfPage: {
      '@id': `${url}#primaryimage`
    },
    datePublished,
    dateModified: lastUpdated,
    author: {
      '@id': `${siteUrl}/#/schema/person/${entityHash}`
    },
    description: metadescription,
    breadcrumb: {
      '@id': `${url}#breadcrumb`
    },
    inLanguage: siteLanguage,
    potentialAction: [
      {
        '@type': 'ReadAction',
        target: [url]
      }
    ]
  };

  let schemaOrgArticle = null;
  if (isArticle) {
    schemaOrgArticle = {
      '@type': 'Article',
      '@id': `${url}#article`,
      isPartOf: {
        '@id': `${url}#webpage`
      },
      author: {
        '@id': `${siteUrl}/#/schema/person/${entityHash}`
      },
      headline: title,
      datePublished,
      dateModified: lastUpdated,
      mainEntityOfPage: {
        '@id': `${url}#webpage`
      },
      publisher: {
        '@id': `${siteUrl}/#/schema/person/${entityHash}`
      },
      image: {
        '@id': `${url}#primaryimage`
      },
      articleSection: ['blog'],
      inLanguage: siteLanguage
    };
  }

  const schemaOrgPublisher = {
    '@type': ['Person', 'Organization'],
    '@id': `${siteUrl}/#/schema/person/${entityHash}`,
    name: entity,
    image: {
      '@type': 'ImageObject',
      '@id': `${siteUrl}/#personlogo`,
      inLanguage: siteLanguage,
      url: `${siteUrl}/favicon.svg`,
      contentUrl: `${siteUrl}/favicon.svg`,
      width: 512,
      height: 512,
      caption: entity
    },
    logo: {
      '@id': `${siteUrl}/#personlogo`
    },
    sameAs: [
      `https://twitter.com/${twitterUsername}`,
      `https://github.com/${githubPage}`,
      `https://t.me/${telegramUsername}`,
      `https://uk.linkedin.com/in/${linkedinProfile}`,
      facebookPage
    ]
  };

  const schemaOrgArray = [
    schemaOrgEntity,
    schemaOrgWebsite,
    schemaOrgWebPage,
    ...(isArticle ? [schemaOrgArticle] : []),
    schemaOrgPublisher
  ];
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
