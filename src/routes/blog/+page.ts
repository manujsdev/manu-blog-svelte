import { getPosts } from '$lib/utils/getPosts';
import type { PageLoad } from './$types';

export const load: PageLoad = async () => {
  console.log(
    'sasdgdfgg: ',
    getPosts().map(post => post.metadata)
  );
  return {
    posts: getPosts().map(post => post.metadata)
  };
};
