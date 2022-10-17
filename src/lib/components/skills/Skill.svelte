<script lang="ts">
  import Tooltip from '$lib/components/tooltip/index.svelte';
  import GenericLink from '$lib/components/Link/GenericLink.svelte';

  export let color = '#1569c4';
  export let icon = '';
  export let title = '';
  export let link = '';
</script>

<Tooltip text={title}>
  <div style="--main-color-skill: {color}" class="flex flex-col mx-12">
    <GenericLink ariaLabel={title} href={link} target="_blank" underline={false}
      ><span class="text-8xl w-16">{icon}</span></GenericLink
    >
  </div>
</Tooltip>

<style>
  span:hover {
    color: var(--main-color-skill);
    transition: 0.3s;
  }
</style>
