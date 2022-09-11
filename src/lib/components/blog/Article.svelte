<script lang="ts">
  import SEO from '$lib/components/seo/index.svelte';
  import website from '$lib/config/website';
  import type { ArticleType } from '$lib/types/articles';

  export let data: ArticleType;
  const { title, slug, datePublished, lastUpdated, excerpt } = data;

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
