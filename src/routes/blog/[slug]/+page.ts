import { error } from '@sveltejs/kit';

export const load = async ({ params }: any) => {
  const { slug } = params;

  if (slug) {
    const postPromise = import(`../../../lib/articles/${slug}/index-en.md`);
    const [postResult] = await Promise.all([postPromise]);
    const { default: content, metadata } = postResult;

    const { datePublished, lastUpdated, title, excerpt, tags } = metadata;

    return {
      datePublished,
      lastUpdated,
      title,
      excerpt,
      slug,
      content,
      tags,
      readingArticleTime: 6
    };
  }

  throw error(404, 'Not found');
};
