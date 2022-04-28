import { ActionCreator } from "redux";
import { Thunk } from "../types";
import { Posts, ActionTypes, GetPostsDataAction } from "./types";
import "react-native-get-random-values";
import { v4 as uuid } from "uuid";
import { beginActivity, endActivity, setError } from "../requests";

export const getPostsDataAction: ActionCreator<GetPostsDataAction> = (
  data: Posts[]
) => ({
  type: ActionTypes.GET_POSTS_DATA,
  payload: {
    data: data,
  },
});

export const getPostsData =
  (): Thunk => async (dispatch, getState, context) => {
    const activityId = uuid();
    try {
      await dispatch(
        beginActivity({
          type: ActionTypes.GET_POSTS_DATA,
          uuid: activityId,
        })
      );
      const token = sessionStorage.token;
      const posts = await context.api.posts().getPosts(token);
      dispatch(getPostsDataAction(posts));
    } catch (e: any) {
      await dispatch(
        setError({
          type: ActionTypes.GET_POSTS_DATA,
          error: e.message,
          uuid: activityId,
        })
      );
    } finally {
      await dispatch(endActivity({ uuid: activityId }));
    }
  };
