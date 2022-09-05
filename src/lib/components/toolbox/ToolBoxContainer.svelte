<script lang="ts">
  export let width = '12rem';
</script>

<div style="--main-toolbox-width: {width}" class="container">
  <slot />
</div>

<style>
  .container {
    border-radius: 0.56em;
    transition: box-shadow 0.2s ease, border 0.2s ease;
    width: var(--main-toolbox-width);
    height: var(--main-toolbox-width);
    background-color: var(--theme-background);
    filter: drop-shadow(0 0 2px var(--theme-text));

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
    text-align: center;
    margin: 20px;
    padding: 0.7rem;
    position: relative;
  }
  .container:hover {
    transition: box-shadow 0.2s ease;
    filter: drop-shadow(0 0 3px var(--theme-text));
  }
</style>
