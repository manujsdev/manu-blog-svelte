<script lang="ts">
  export let rel = '';
  export let target = '';
  export let href: any;
  export let ariaLabel: any;
  export let underline = true;
</script>

<a aria-label={ariaLabel} {href} {rel} {target} class:underline><slot /></a>
