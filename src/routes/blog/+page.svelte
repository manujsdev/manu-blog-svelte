<script lang="ts">
  import SectionsCommon from '$lib/components/sectionsCommon/index.svelte';
  import ToolboxArticles from '$lib/components/toolbox/ToolboxArticles.svelte';

  /** @type {import('./$types').PageData} */
  export let data: any;
</script>

<SectionsCommon title="Articles">
  {#each data.posts as { path: link, metadata: { date, title, excerpt, tags } }}
    <ToolboxArticles width="21.6rem" {title} {excerpt} {date} {tags} link={`blog/${link.replace('.md', '')}`} />
  {/each}
</SectionsCommon>
