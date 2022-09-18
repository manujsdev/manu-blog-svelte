<script lang="ts">
  import SEO from '$lib/components/seo/index.svelte';
  import type { ArticleType } from '$lib/types/articles';
  import LabelItem from '$lib/components/Label/index.svelte';
  import { formatDate } from '$lib/utils/format';

  export let data: ArticleType;
  const { title, slug, datePublished, lastUpdated, excerpt, tags, readingArticleTime } = data;

  const seoProps = {
    title,
    datePublished,
    lastUpdated,
    isArticle: true,
    slug: `blog/${slug}`,
    metadescription: excerpt,
    timeToRead: `${readingArticleTime} min`
  };
</script>

<SEO {...seoProps} />
<h1>{title}</h1>
<span>{formatDate(datePublished)}</span>
<p class="time">Reading time: {readingArticleTime} min</p>
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

  .time {
    font-size: 0.9em;
    font-weight: bold;
  }
</style>
