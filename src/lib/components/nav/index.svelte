<script lang="ts">
  import { appStore } from '$lib/stores/AppStore';
  import LogoNavbar from './Logo.svelte';
  import RightSection from './RightSection.svelte';

  let y = 0;
  $: appStore.updateValue('onScrolling', y > 0);
</script>

<nav
  class="flex justify-between items-center fixed w-full h-[60px] py-0 px-[5px] mt-0 top-0 z-10 transition duration-700 ease-out xl:h-[82px]"
  class:shadow-navBar={$appStore.onScrolling}
  class:backdrop-blur-sm={$appStore.onScrolling}
  class:bg-theme-bgNavBar={$appStore.onScrolling}
  class:transition-all={$appStore.onScrolling}
  class:bg-theme-colorTransparent={!$appStore.onScrolling}
>
  <LogoNavbar />
  <RightSection />
</nav>

<svelte:window bind:scrollY={y} />
