<script lang="ts">
  import ToolBoxContainer from './ToolBoxContainer.svelte';
  import LabelItem from '$lib/components/Label/index.svelte';
  import { formatDate } from '$lib/utils/format';

  export let width = '12rem';
  export let title = 'Title';
  export let excerpt = 'excerpt';
  export let date = '2019/05/05';
  export let tags: any[] = [];
  export let link = '';
  export let readingTime: any;
</script>

<ToolBoxContainer {width}>
  <div class="m-2 w-full">
    <span>{readingTime.text}, Published on {formatDate(date)}</span>
    <h2><a href={link}>{title}</a></h2>
    <span class="text-left block my-12">{excerpt}</span>
    <div class="flex flex-wrap justify-start absolute bottom-3">
      {#each tags as { name, background }}
        <LabelItem label={{ name, background }} />
      {/each}
    </div>
  </div>
</ToolBoxContainer>
