<script lang="ts">
  import { appStore } from '$lib/stores/AppStore';
</script>

<div class="lg:flex lg:justify-around lg:items-center lg:w-auto lg:p-0">
  <a
    href="/blog"
    class:color-text-navbar-onscroll={$appStore.onScrolling}
    class:color-text-navbar-primary={!$appStore.onScrolling}
    class="text-lg mx-5 font-bold no-underline transition duration-75 hover:text-theme-bg1">blog</a
  >
</div>
