import type { Post } from "../types/post.type";

export const mapPosts = (posts: Record<string, any>[]): Post[] => {
  const mappedPosts: Post[] = posts
    .map((v) => ({
      url: v["url"],
      frontmatter: v["frontmatter"],
    }))
    .sort(
      (a, b) =>
        new Date(b.frontmatter.pubDate).valueOf() -
        new Date(a.frontmatter.pubDate).valueOf()
    );

  return mappedPosts;
};

export const findTags = (posts: Post[]): string[] => {
  const uniqueTags = new Set<string>();

  posts.forEach((post) => {
    if (post.frontmatter.tags) {
      post.frontmatter.tags.forEach((tag: string) => {
        if (!uniqueTags.has(tag)) {
          uniqueTags.add(tag);
        }
      });
    }
  });

  const tags = Array.from(uniqueTags.values());

  return tags;
};

export const filterPostsByTag = (posts: Post[], tag: string): Post[] => {
  const filteredPosts = posts.filter((post) => {
    const postTags = new Set(post.frontmatter.tags);

    return postTags.has(tag);
  });

  return filteredPosts;
};
