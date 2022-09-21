<script lang="ts">
  import type { ReadTimeResults } from '$lib/types/articles';

  export let twitterUsername = '';
  export let isArticle = false;
  export let author = 'Manu';
  export let timeToRead: ReadTimeResults;
</script>

<svelte:head>
  <meta name="twitter:card" content="summary_large_image" />
  {#if twitterUsername}
    <meta name="twitter:creator" content={`@${twitterUsername}`} />
    <meta name="twitter:site" content={`@${twitterUsername}`} />
  {/if}
  <meta name="twitter:label1" content="Written by" />
  <meta name="twitter:data1" content={author} />
  {#if isArticle && timeToRead.minutes > 0}
    <meta name="twitter:label2" content="Est. reading time" />
    <meta name="twitter:data2" content={timeToRead.minutes > 1 ? `${timeToRead.text}` : '1 minute'} />
  {/if}
</svelte:head>
