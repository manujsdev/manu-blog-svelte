<script lang="ts">
  import SEO from '$lib/components/seo/index.svelte';
  import SectionsCommon from '$lib/components/sectionsCommon/index.svelte';
  import ToolboxArticles from '$lib/components/toolbox/ToolboxArticles.svelte';
  import type { EntityMetaType } from '$lib/types';
  import website from '$lib/config/website';
  import { FAVICONSIZE, H_ELLIPSIS_ENTITY } from '$lib/constants';

  /** @type {import('./$types').PageData} */
  export let data: any;
  export let initialPosts = 1;
  const postCount = data.posts.length;

  const { author, siteUrl } = website;

  let title = 'Blog';
  let metadescription = 'manujsdev`s Blog';
  const entityMeta: EntityMetaType = {
    ...FAVICONSIZE,
    url: `${siteUrl}`,
    caption: author
  };
  const seoProps = {
    title,
    entityMeta,
    metadescription,
    slug: 'blog',
    datePublished: new Date().toLocaleDateString(),
    lastUpdated: new Date().toLocaleDateString()
  };

  $: showPosts = initialPosts;
  $: displayPosts = data.posts.slice(0, showPosts);

  const onMoreArticles = () => {
    showPosts += initialPosts;
  };
</script>

<SEO {...seoProps} />
<SectionsCommon title="Articles">
  {#if postCount}
    {#each displayPosts as { path: link, metadata: { datePublished, title, excerpt, tags, slug } }}
      <ToolboxArticles width="21.6rem" {title} {excerpt} date={datePublished} {tags} link={`blog/${slug}`} />
    {/each}
  {:else}
    <p>No articles yet...</p>
  {/if}
</SectionsCommon>
<!-- review later... -->
<!-- {#if showPosts < postCount}
  <AboutMeButton  />
  <button type="submit" on:click={onMoreArticles}>See more {H_ELLIPSIS_ENTITY}</button>
{/if} -->
