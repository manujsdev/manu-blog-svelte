<script lang="ts">
  import Link from '$lib/components/Link/index.svelte';
  import ToolBoxContainer from './ToolBoxContainer.svelte';

  export let width = '13rem';
  export let extra: any = undefined;
  export let extraProps: any = undefined;
  export let link: string | undefined = undefined;
  export let iconOrTextLink: string | undefined = undefined;
  export let icon = '';
  export let text = '';
  export let target = '_selft';
  export let isIcon = true;
  export let hasLeftContent = false;
  export let leftContent: any = undefined;
</script>

<ToolBoxContainer {width}>
  <span class="text-4xl mt-4">{icon}</span>
  <span class="font-bold m-4">{text}</span>
  {#if extra && extraProps}
    <svelte:component this={extra} {...extraProps} />
  {/if}
  {#if hasLeftContent}
    <div class="absolute left-0 bottom-2 text-3xl">
      <svelte:component this={leftContent} />
    </div>
  {/if}
  {#if link}
    <div class="absolute right-4 bottom-2 text-3xl">
      <Link {link} {iconOrTextLink} {target} {isIcon} />
    </div>
  {/if}
</ToolBoxContainer>
