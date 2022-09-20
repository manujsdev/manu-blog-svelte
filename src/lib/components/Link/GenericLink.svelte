<script lang="ts">
  export let rel = '';
  export let target = '';
  export let href: any;
  export let ariaLabel: any;
  export let withDecoration = false;
</script>

<a aria-label={ariaLabel} {href} {rel} {target} class:decoration={withDecoration}><slot /></a>

<style>
  .decoration {
    text-decoration: none;
  }
</style>
