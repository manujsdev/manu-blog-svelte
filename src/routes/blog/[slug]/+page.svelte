<script lang="ts">
  import Article from '$lib/components/blog/Article.svelte';
  import type { ArticleType } from '$lib/types/articles';

  /** @type {import('./$types').PageData} */
  export let data: ArticleType;
  const { body } = data;
</script>

<Article {data} />
<svelte:component this={body} />
