<script context="module">
  import { waitLocale } from 'svelte-i18n';
  import '../app.css';
  import '../gruvbox.css';

  export async function preload() {
    // awaits for the loading of the 'en-US' and 'en' dictionaries
    return waitLocale();
  }
</script>

<script lang="ts">
  import ThemeContext from '$lib/components/theme/ThemeContext.svelte';
  import NavBar from '$lib/components/nav/index.svelte';
  import Footer from '$lib/components/footer/index.svelte';
  import Analytics from '$lib/components/analytics/indext.svelte';
  import { setupI18n, isLocaleLoaded } from '$lib/i18n/i18n';
  console.log('begin set locale in layout');
  $: if (!$isLocaleLoaded) {
    setupI18n({ withLocale: 'en' });
  }
  // setupI18n({ withLocale: 'en' });
  console.log('set locale in layout');
</script>

<Analytics />
<ThemeContext>
  <NavBar />
  <main>
    <slot />
  </main>
  <Footer />
</ThemeContext>
