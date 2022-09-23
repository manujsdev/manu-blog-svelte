<script lang="ts">
  import SEO from '$lib/components/seo/index.svelte';
  import Intro from '$lib/components/intro/index.svelte';
  import Skills from '$lib/components/skills/index.svelte';
  import CoreQualifications from '$lib/components/coreQualifications/index.svelte';
  import Projects from '$lib/components/projects/index.svelte';
  import website from '$lib/config/website';
  import type { EntityMetaType } from '$lib/types';
  import { FAVICONSIZE } from '$lib/constants';

  const { author, siteUrl } = website;
  let title = 'Home';
  let metadescription = 'manujsdev`s portfolio: this is my portfolio';
  const entityMeta: EntityMetaType = {
    ...FAVICONSIZE,
    url: `${siteUrl}/`,
    caption: author
  };
  const seoProps = {
    title,
    entityMeta,
    metadescription,
    slug: '',
    datePublished: new Date().toLocaleDateString(),
    lastUpdated: new Date().toLocaleDateString(),
    timeToRead: {
      text: '3 mins',
      time: 3.4,
      words: 300,
      minutes: 4
    }
  };
</script>

<SEO {...seoProps} />
<Intro />
<Skills />
<CoreQualifications />
<Projects />
