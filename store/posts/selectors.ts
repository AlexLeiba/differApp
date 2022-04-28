import { createSelector } from "reselect";
import { State } from "./types";

export const getPostsSelector = createSelector(
  (state: State) => {
    return state.posts;
  },
  (posts) => posts
);
