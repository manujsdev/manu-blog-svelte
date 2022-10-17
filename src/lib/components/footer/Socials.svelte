<script lang="ts">
  import { socials } from '$lib/constants/socials';
  import Social from './social.svelte';
</script>

<div class="flex justify-around mr-6 w-24">
  {#each socials as [icon, href, textTooltip]}
    <Social {...{ icon, href, textTooltip }} />
  {/each}
</div>
