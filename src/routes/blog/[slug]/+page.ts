import { error } from '@sveltejs/kit';
import type { PageLoad } from './$types';
import { init, locale, register } from 'svelte-i18n';

async function getCurrentLocale() {
  let currentLocale = null;
  locale.subscribe(async value => {
    currentLocale = value;
    console.log('now: ', currentLocale);
  });
  return currentLocale;
}

export const load: PageLoad = async ({ params }) => {
  const { slug } = params;

  if (slug) {
    const currentLocale = await getCurrentLocale();
    console.log('current locale call: ', currentLocale);
    const postPromise = await import(`../../../lib/articles/${slug}/index-en.md`);

    // const [postResult] = await Promise.all([postPromise]);
    const { default: content, metadata } = postPromise;
    const { datePublished, lastUpdated, title, excerpt } = metadata;

    return {
      datePublished,
      lastUpdated,
      title,
      excerpt,
      slug,
      content
    };
  }

  throw error(404, 'Not found');
};
