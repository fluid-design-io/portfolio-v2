import { PostCard } from "./post.card";
import { PostDate } from "./post.date";
import { PostNav } from "./post.nav";

/**
 * Everything the blog routes compose around a post: `Post.Card` for the index
 * grid, `Post.Date` for the rule-and-date treatment, `Post.Nav` for the
 * previous/next links at the foot of a post.
 */
export const Post = {
  Card: PostCard,
  Date: PostDate,
  Nav: PostNav,
};
