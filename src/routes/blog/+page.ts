import type { PageLoad } from './$types';

const allPosts = import.meta.glob('../../lib/articles/*/*.{md, svx}');
const body: any[] = [];
for (const path in allPosts) {
  const post = allPosts[path];
  body.push(
    post().then(({ metadata }: any) => {
      return { path, metadata };
    })
  );
}
export const load: PageLoad = async () => {
  const posts = await Promise.all(body);
  return { posts };
};
