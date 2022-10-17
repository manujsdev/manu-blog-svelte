<script lang="ts">
  import TitleSection from '$lib/components/titleSection/index.svelte';

  export let title = '';
</script>

<div class="flex flex-col mt-24">
  <TitleSection>{title}</TitleSection>
  <div class="flex flex-wrap justify-center">
    <slot />
  </div>
</div>
