import { defineMDSveXConfig as defineConfig } from 'mdsvex';
import readingTime from 'remark-reading-time';

const config = defineConfig({
  extensions: ['.svelte.md', '.md', '.svx'],

  smartypants: {
    dashes: 'oldschool'
  },

  remarkPlugins: [
    // adds a `readingTime` frontmatter attribute
    readingTime()
  ]
});

export default config;
