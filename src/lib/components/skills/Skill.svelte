<script lang="ts">
  import Tooltip from '$lib/components/tooltip/index.svelte';
  import GenericLink from '$lib/components/Link/GenericLink.svelte';

  export let color = '#1569c4';
  export let icon = '';
  export let title = '';
  export let link = '';
</script>

<Tooltip text={title}>
  <div style="--main-color-skill: {color}" class="skill-container">
    <GenericLink ariaLabel={title} href={link} target="_blank" withDecoration><span>{icon}</span></GenericLink>
  </div>
</Tooltip>

<style>
  .skill-container {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 0 50px;
  }

  span {
    font-size: 4em;
    width: 65px;
  }

  span:hover {
    color: var(--main-color-skill);
    transition: 0.3s;
  }
</style>
