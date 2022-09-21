<script lang="ts">
  import Article from '$lib/components/blog/Article.svelte';
  import type { ArticleType } from '$lib/types/articles';

  export let data: ArticleType;
  const { content } = data;
</script>

<article>
  <Article {data} />
  <svelte:component this={content} />
</article>
