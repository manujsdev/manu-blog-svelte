import type { PageLoad } from './$types';
// import { init, locale, register } from 'svelte-i18n';
// import { myLocale } from '$lib/i18n/i18n';

async function parsePosts(postPromise: any) {
  const body: any[] = [];
  for (const path in postPromise) {
    const post = postPromise[path];
    const { metadata } = await post();
    if (metadata.show) {
      body.push({ path, metadata, date: new Date(metadata.datePublished) });
    }
  }
  return body.sort((a, b) => a.date - b.date);
}

export const load: PageLoad = async () => {
  // const currentLocale = await getCurrentLocale();

  // console.log('myLocale: ', myLocale);
  const postsEn = import.meta.glob('../../lib/articles/*/*-en.{md, svx}');
  // const postsEs = import.meta.glob('../../lib/articles/*/*-es.{md, svx}');
  // console.log('current locale call: ', get(locale));
  // const resultPostsEn = await parsePosts(get(locale) === 'en' ? postsEn : postsEs);
  const resultPostsEn = await parsePosts(postsEn);
  const posts = await Promise.all(resultPostsEn);
  return { posts };
};
