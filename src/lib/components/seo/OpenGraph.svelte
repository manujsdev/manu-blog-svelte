<script lang="ts">
  export let metadescription: string;
  export let siteLanguage: string;
  export let pageTitle: string;
  export let siteTitle = '';
  export let url: string;
  export let isArticle = false;
  export let lastUpdated = '';
  export let datePublished = '';
  export let facebookAuthorPage = '';
  export let facebookPage = '';
</script>

<svelte:head>
  <meta property="og:site_name" content={siteTitle} />
  <meta property="og:locale" content={siteLanguage} />
  <meta property="og:url" content={url} />
  <meta property="og:type" content={'website'} />
  <meta property="og:title" content={pageTitle} />
  <meta property="og:description" content={metadescription} />
  {#if isArticle}
    <meta property="article:publisher" content={facebookPage} />
    <meta property="article:author" content={facebookAuthorPage} />
    <meta property="article:published_time" content={datePublished} />
    <meta property="article:modified_time" content={lastUpdated} />
  {/if}
</svelte:head>
