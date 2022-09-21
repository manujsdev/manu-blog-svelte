import { getPosts } from '$lib/utils/getPosts';
import { error } from '@sveltejs/kit';
import type { PageLoad } from './$types';

export const load: PageLoad = async ({ params }) => {
  const { slug } = params;
  const post = getPosts().find(post => slug === post.metadata.slug);
  if (!post) {
    throw error(404, 'Post not found');
  }

  return {
    ...post.metadata,
    content: post.component
  };
};
