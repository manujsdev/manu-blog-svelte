import { error } from '@sveltejs/kit';
import type { PageServerLoad } from './$types';
import { process } from '$lib/utils/markdown';
import readingTime from 'reading-time';

/** @type {import('./$types').PageServerLoad} */
export const load: PageServerLoad = async ({ params }: any) => {
  const { slug } = params;

  if (slug) {
    const { metadata, content } = process(`src/lib/articles/${slug}/index-en.md`);
    const readingArticleTime = Math.ceil(readingTime(content).minutes);

    const { datePublished, lastUpdated, title, excerpt, tags } = metadata;
    console.log('article: ', {
      datePublished,
      lastUpdated,
      title,
      excerpt,
      slug,
      content,
      tags,
      readingArticleTime
    });
    return {
      datePublished,
      lastUpdated,
      title,
      excerpt,
      slug,
      content,
      tags,
      readingArticleTime
    };
  }

  throw error(404, 'Not found');
};
