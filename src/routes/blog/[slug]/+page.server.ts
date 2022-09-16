import { error } from '@sveltejs/kit';
import type { PageServerLoad } from './$types';
import { process } from '$lib/utils/markdown';

/** @type {import('./$types').PageServerLoad} */
export const load: PageServerLoad = async ({ params }: any) => {
  const { slug } = params;

  if (slug) {
    const { metadata, content } = process(`src/lib/articles/${slug}/index-en.md`);

    // TODO review later
    // const currentLocale = await getCurrentLocale();
    // const postPromise = await import(`../../../lib/articles/${slug}/index-en.md`);

    // const [postResult] = await Promise.all([postPromise]);
    // const { default: content, metadata } = postPromise;
    const { datePublished, lastUpdated, title, excerpt, tags } = metadata;

    return {
      datePublished,
      lastUpdated,
      title,
      excerpt,
      slug,
      content,
      tags
    };
  }

  throw error(404, 'Not found');
};
