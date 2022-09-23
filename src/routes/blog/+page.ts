import { getPosts } from '$lib/utils/getPosts';
import type { PageLoad } from './$types';

export const load: PageLoad = async () => {
  return {
    posts: getPosts().map(post => post.metadata)
  };
};
