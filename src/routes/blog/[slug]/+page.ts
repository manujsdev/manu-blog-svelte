import { error } from '@sveltejs/kit';
import type { PageLoad } from './$types';

export const load: PageLoad = async ({ params }) => {
  const { slug } = params;

  if (slug) {
    const postPromise = import(`../../../lib/articles/${slug}/index.md`);

    const [postResult] = await Promise.all([postPromise]);
    const { default: body, metadata } = postResult;
    const { datePublished, lastUpdated, title, excerpt } = metadata;

    return {
      datePublished,
      lastUpdated,
      title,
      excerpt,
      slug,
      body
    };
  }

  throw error(404, 'Not found');
};
