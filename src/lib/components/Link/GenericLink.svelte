<script lang="ts">
  export let rel = '';
  export let target = '';
  export let href: any;
  export let ariaLabel: any;
</script>

<a aria-label={ariaLabel} {href} {rel} {target}><slot /></a>

<style>
  .link {
    color: var(--theme-text);
    text-decoration: none;
    transition: all 0.3s ease 0s;
  }

  .size-font {
    font-size: 1.145em;
  }

  @media (min-width: 768px) {
    .size-font {
      font-size: 0.8em;
    }
  }

  @media (min-width: 1920px) {
    .link {
      font-size: 18px;
    }
  }
</style>
