<script lang="ts">
  export let width = '12rem';
</script>

<div
  style="--main-toolbox-width: {width}"
  class="container flex flex-col items-center justify-start m-5 p-2 relative bg-theme-background rounded drop-shadow-lg text-center"
>
  <slot />
</div>

<style>
  .container {
    width: var(--main-toolbox-width);
    height: auto;
  }

  .container:hover {
    transition: box-shadow 0.2s ease;
    filter: drop-shadow(0 0 3px var(--theme-text));
  }
</style>
