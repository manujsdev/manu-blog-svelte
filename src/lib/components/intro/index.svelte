<script lang="ts">
  import { _ } from 'svelte-i18n';
  import { goto } from '$app/navigation';
  import GenericButton from '$lib/components/buttons/GenericButton.svelte';

  async function onAbout() {
    await goto('about');
  }
</script>

<div class="intro-index">
  <span>{$_('home.hello')}</span>
  <p>
    {$_('home.description')}
  </p>
  <GenericButton on:click={onAbout} text={$_('home.moreAboutMe')} />
</div>

<style>
  .intro-index {
    padding-top: 20vh;
    display: flex;
    flex-direction: column;
  }

  .intro-index > span {
    font-size: 1.38em;
  }

  @media (min-width: 768px) {
    .intro-index > span {
      font-size: 1.48em;
    }
    .intro-index > p {
      font-size: 1.24em;
    }
  }

  @media (min-width: 1024px) {
    .intro-index > span {
      font-size: 1.6em;
    }
    .intro-index > p {
      font-size: 1.3em;
      max-width: 26em;
    }
  }

  @media (min-width: 1440px) {
    .intro-index > span {
      font-size: 2.3em;
    }
    .intro-index > p {
      font-size: 1.7em;
    }
  }
</style>
