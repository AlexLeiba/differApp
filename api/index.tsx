import { auth } from "./auth";
import { posts } from "./posts";

export const apiFactory = () => ({
  auth: () => auth(),
  posts: () => posts(),
});

export type ApiFactory = ReturnType<typeof apiFactory>;
