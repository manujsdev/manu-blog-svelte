<script lang="ts">
  export let link: string | undefined = undefined;
  export let iconOrTextLink: string | undefined = undefined;
  export let target = '_self';
  export let isIcon = true;
</script>

<a class="link" class:size-icon={isIcon} class:size-font={!isIcon} {target} href={link}>{iconOrTextLink}</a>

<style>
  .link {
    color: var(--theme-text);
    text-decoration: none;
    transition: all 0.3s ease 0s;
  }

  .size-icon {
    font-size: 1.145em;
  }

  .size-font {
    font-size: 1.145em;
  }

  @media (min-width: 768px) {
    .size-icon {
      font-size: 1.145em;
    }

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
