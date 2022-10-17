<script lang="ts">
  import { appStore } from '$lib/stores/AppStore';
</script>

<a
  href="/"
  class="w-full text-2xl font-bold no-underline hover:text-theme-bg1 xl:text-3xl"
  class:color-text-navbar-onscroll={$appStore.onScrolling}
  class:color-text-navbar-primary={!$appStore.onScrolling}>{'<Manu />'}</a
>
