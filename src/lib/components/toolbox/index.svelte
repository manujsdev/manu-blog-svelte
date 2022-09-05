<script lang="ts">
  import Link from '$lib/components/Link/index.svelte';
  import ToolBoxContainer from './ToolBoxContainer.svelte';

  export let width = '12rem';
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
  <span class="box-icon">{icon}</span>
  <span class="box-text">{text}</span>
  {#if extra && extraProps}
    <svelte:component this={extra} {...extraProps} />
  {/if}
  {#if hasLeftContent}
    <div class="corner-left">
      <svelte:component this={leftContent} />
    </div>
  {/if}
  {#if link}
    <div class="corner-right">
      <Link {link} {iconOrTextLink} {target} {isIcon} />
    </div>
  {/if}
</ToolBoxContainer>

<style>
  .box-icon {
    font-size: 2.2em;
    margin: 17px 0;
  }

  .box-text {
    font-weight: bold;
    margin: 15px;
  }

  .corner-left {
    position: absolute;
    left: 0;
    bottom: 10px;
    font-size: 1.8em;
  }

  .corner-right {
    position: absolute;
    right: 18px;
    bottom: 10px;
    font-size: 1.8em;
  }
</style>
