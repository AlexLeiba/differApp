import { Actions, ActionTypes } from "./types";
import { initialState } from "./initialState";
import produce from "immer";

export default (state = initialState, action: Actions) => {
  switch (action.type) {
    case ActionTypes.GET_POSTS_DATA: {
      const { data } = action.payload;
      return produce(state, (draft) => {
        draft.posts = data;
      });
    }

    default:
      return state;
  }
};
