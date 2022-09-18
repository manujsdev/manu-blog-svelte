<script lang="ts">
  import Article from '$lib/components/blog/Article.svelte';
  import type { ArticleType } from '$lib/types/articles';

  /** @type {import('./$types').PageData} */
  export let data: ArticleType;
  const { content } = data;

  console.log('article in the view: ', content);
</script>

<article>
  <Article {data} />
  {@html content}
</article>
