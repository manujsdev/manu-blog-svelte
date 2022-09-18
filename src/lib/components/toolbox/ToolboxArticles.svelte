<script lang="ts">
  import ToolBoxContainer from './ToolBoxContainer.svelte';
  import LabelItem from '$lib/components/Label/index.svelte';
  import { formatDate } from '$lib/utils/format';

  export let width = '12rem';
  export let title = 'Title';
  export let excerpt = 'excerpt';
  export let date = '';
  export let tags: any[] = [];
  export let link = '';
</script>

<ToolBoxContainer {width}>
  <div class="space">
    <div class="date">{formatDate(date)}</div>
    <h2 class="title"><a class="color-text-navbar-primary" href={link}>{title}</a></h2>
    <span class="excerpt excerpt-margin">{excerpt}</span>
    <div class="section-tags">
      {#each tags as { name, background }}
        <LabelItem label={{ name, background }} />
      {/each}
    </div>
  </div>
</ToolBoxContainer>

<style>
  .space {
    margin: 0.7rem;
    width: 100%;
  }
  .date,
  .excerpt {
    text-align: left;
    display: block;
  }

  .section-tags {
    display: flex;
    flex-wrap: wrap;
    justify-content: left;
    position: absolute;
    bottom: 10px;
  }

  .excerpt-margin {
    margin: 3rem 0;
  }

  a {
    font-weight: bold;
    text-decoration: none;
    transition: all 0.3s ease 0s;
  }

  a:hover {
    transition: 0.5s;
    border-radius: 3px;
    color: var(--theme-bg1);
  }
</style>
