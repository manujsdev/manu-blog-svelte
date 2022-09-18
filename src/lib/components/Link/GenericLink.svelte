<script lang="ts">
  export let link: string | undefined = undefined;
  export let text: string | undefined = undefined;
  export let target = '_self';
</script>

<a class="link size-font" {target} href={link}>{text}</a>

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
