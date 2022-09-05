<script lang="ts">
  import { themes as _themes } from '$lib/constants/themes';
  import { setContext, onMount } from 'svelte';
  import { writable } from 'svelte/store';
  // expose props for customization and set default values
  export let themes = [..._themes];
  // set state of current theme's name
  let _current = themes[0].name;

  // utility to get current theme from name
  const getCurrentTheme = (name: string) => themes.find(h => h.name === name);
  // set up Theme store, holding current theme object
  const Theme = writable(getCurrentTheme(_current));

  setContext('theme', {
    // provide Theme store through context
    theme: Theme,
    toggle: () => {
      // update internal state
      let _currentIndex = themes.findIndex(h => h.name === _current);
      _current = themes[_currentIndex === themes.length - 1 ? 0 : (_currentIndex += 1)].name;
      // update Theme store
      const currentTheme = getCurrentTheme(_current);
      Theme.update(t => ({ ...t, ...currentTheme }));
      setRootColors(currentTheme);
    }
  });

  onMount(() => {
    // set CSS vars on mount
    setRootColors(getCurrentTheme(_current));
  });

  // sets CSS vars for easy use in components
  // ex: var(--theme-background)
  const setRootColors = (theme: any) => {
    for (const [prop, color] of Object.entries(theme.colors)) {
      const varString = `--theme-${prop}`;
      document.documentElement.style.setProperty(varString, color as any);
    }
    document.documentElement.style.setProperty('--theme-name', theme.name);
  };
</script>

<slot>
  <!-- content will go here -->
</slot>
