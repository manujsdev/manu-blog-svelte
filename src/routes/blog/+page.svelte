<script lang="ts" context="module">
  import type { Load } from '@sveltejs/kit';

  const allPosts = import.meta.glob('./*.{md, svx}');

  const body: any[] = [];
  for (let path in allPosts) {
    const post = allPosts[path];
    body.push(
      post().then(({ metadata }) => {
        return { path, metadata };
      })
    );
  }
  export const load: Load = async () => {
    const posts = await Promise.all(body);
    return {
      props: { posts }
    };
  };
</script>

<script lang="ts">
  import SectionsCommon from '$lib/components/sectionsCommon/index.svelte';
  import ToolboxArticles from '$lib/components/toolbox/ToolboxArticles.svelte';

  export let posts: any;
</script>

<SectionsCommon title="Articles">
  {#each posts as { path: link, metadata: { date, title, excerpt, tags } }}
    <ToolboxArticles width="21.6rem" {title} {excerpt} {date} {tags} link={`blog/${link.replace('.md', '')}`} />
  {/each}
</SectionsCommon>
