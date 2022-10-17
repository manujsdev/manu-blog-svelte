<script lang="ts">
  import { appStore } from '$lib/stores/AppStore';

  import { getContext } from 'svelte';
  const { theme, toggle }: any = getContext('theme');
</script>

<div
  class:color-text-navbar-onscroll={$appStore.onScrolling}
  class:color-text-navbar-primary={!$appStore.onScrolling}
  class="text-xl font-bold cursor-pointer"
  on:click={toggle}
>
  {$theme.name === 'dark' ? '盛' : ''}
</div>
