<script lang="ts">
  import SEO from '$lib/components/seo/index.svelte';
  import type { ArticleType } from '$lib/types/articles';
  import LabelItem from '$lib/components/Label/index.svelte';

  export let data: ArticleType;
  const { title, slug, datePublished, lastUpdated, excerpt, tags } = data;

  const seoProps = {
    title,
    datePublished,
    lastUpdated,
    isArticle: true,
    slug: `blog/${slug}`,
    metadescription: excerpt,
    timeToRead: '8 min'
  };
</script>

<SEO {...seoProps} />
<h1>{title}</h1>
<span>{datePublished}</span>
<div class="section-tags">
  {#each tags as { name, background }}
    <LabelItem label={{ name, background }} />
  {/each}
</div>

<style>
  .section-tags {
    display: flex;
    flex-wrap: wrap;
    justify-content: left;
    bottom: 10px;
    margin-top: 2rem;
  }
</style>
