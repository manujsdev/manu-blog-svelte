import type { PageLoad } from './$types';
import { error } from '@sveltejs/kit';
import { init, locale, register } from 'svelte-i18n';
import { myLocale } from '$lib/i18n/i18n';
import { get } from 'svelte/store';

console.log('locale: ', get(locale));

async function parsePosts(postPromise: any) {
  const body: any[] = [];
  for (const path in postPromise) {
    const post = postPromise[path];
    const { metadata } = await post();
    console.log('ssssss: ', metadata);
    body.push({ path, metadata });
  }
  return body;
}

// async function getCurrentLocale() {
//   let currentLocale = null;
//   locale.subscribe(async value => {
//     currentLocale = value;
//     console.log('now: ', currentLocale);
//   });
//   get(locale)
//   return currentLocale;
// }
export const load: PageLoad = async () => {
  // const currentLocale = await getCurrentLocale();

  // console.log('myLocale: ', myLocale);
  const postsEn = import.meta.glob('../../lib/articles/*/*-en.{md, svx}');
  const postsEs = import.meta.glob('../../lib/articles/*/*-es.{md, svx}');
  console.log('current locale call: ', get(locale));
  // const resultPostsEn = await parsePosts(get(locale) === 'en' ? postsEn : postsEs);
  const resultPostsEn = await parsePosts(postsEn);
  const posts = await Promise.all(resultPostsEn);
  return { posts };
};
