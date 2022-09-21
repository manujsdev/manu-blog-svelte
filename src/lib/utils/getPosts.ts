export function getPosts() {
  const posts: any[] = Object.entries(import.meta.globEager('../articles/**/*-en.md'))
    .filter(([, post]: any) => post.metadata.show)
    .map(([, post]: any) => ({
      metadata: post.metadata,
      component: post.default,
      date: new Date(post.metadata.datePublished)
    }));

  return posts.sort((a, b) => b.date - a.date);
}
