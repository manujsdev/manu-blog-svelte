import { defineMDSveXConfig as defineConfig } from 'mdsvex';
import { fileURLToPath } from 'url';
import path from 'path';

const dirname = path.resolve(fileURLToPath(import.meta.url), '../');

function highlighter(code, lang) {
  return `<pre><code>${code}</code></pre>`;
}

const config = defineConfig({
  extensions: ['.svelte.md', '.md', '.svx'],

  smartypants: {
    dashes: 'oldschool'
  },
  layout: { blog: path.join(dirname, './src/routes/blog/+layout.svelte') },

  remarkPlugins: [],
  rehypePlugins: []
  // highlight: {
  //   highlighter
  // }
});

export default config;
