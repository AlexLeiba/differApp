import { useActivity } from "hooks/activities/useActivity";
import { OperationResult } from "hooks/types";
import { useDispatch, useSelector } from "hooks";
import {
  ActionTypes,
  getPostsSelector,
  getPostsData,
  Posts,
} from "store/posts";

export function useGetPosts(): OperationResult<Array<Posts>, () => void> {
  const dispatch = useDispatch();
  const data = useSelector((state) => getPostsSelector(state.posts));
  const [{ loading, error }] = useActivity(ActionTypes.GET_POSTS_DATA);

  function handler() {
    dispatch(getPostsData());
  }

  return [{ loading, error, data }, handler];
}
