<script lang="ts">
  import { _ } from 'svelte-i18n';
  import { goto } from '$app/navigation';
  import GenericButton from '$lib/components/buttons/GenericButton.svelte';

  async function onAbout() {
    await goto('about');
  }
</script>

<div class="pt-32 flex flex-col">
  <span class="text-2xl xl:text-4xl">{$_('home.hello')}</span>
  <p class="text-xl py-3 xl:text-2xl md:max-w-xl">
    {$_('home.description')}
  </p>
  <GenericButton on:click={onAbout} text={$_('home.moreAboutMe')} />
</div>
