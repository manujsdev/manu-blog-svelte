<script lang="ts">
  import SEO from '$lib/components/seo/index.svelte';
  import SectionsCommon from '$lib/components/sectionsCommon/index.svelte';
  import ToolboxArticles from '$lib/components/toolbox/ToolboxArticles.svelte';
  import type { EntityMetaType } from '$lib/types';
  import website from '$lib/config/website';
  import { defaultTimeToRead, FAVICONSIZE } from '$lib/constants';
  import { _ } from 'svelte-i18n';
  import GenericButton from '$lib/components/buttons/GenericButton.svelte';

  /** @type {import('./$types').PageData} */
  export let data: any;

  export let initialPosts = 4;
  $: postCount = data.posts?.length;

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
    lastUpdated: new Date().toLocaleDateString(),
    timeToRead: defaultTimeToRead
  };

  $: showPosts = initialPosts;
  $: displayPosts = data.posts?.slice(0, showPosts);

  const onMoreArticles = () => {
    showPosts += initialPosts;
  };
</script>

<SEO {...seoProps} />
<SectionsCommon title={$_('articles.title')}>
  {#if postCount}
    {#each displayPosts as post}
      <ToolboxArticles
        width="21.6rem"
        title={post?.title}
        excerpt={post?.excerpt ?? ''}
        date={post?.datePublished ?? ''}
        tags={post?.tags ?? []}
        link={`blog/${post?.slug}`}
        readingTime={post.readingTime}
      />
    {/each}
  {:else}
    <p>{$_('articles.noArticles')}</p>
  {/if}
</SectionsCommon>
{#if showPosts < postCount}
  <GenericButton on:click={onMoreArticles} text={$_('articles.seeMore')} />
{/if}
