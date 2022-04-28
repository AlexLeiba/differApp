import { Actions, ActionTypes } from "./types";
import { initialState } from "./initialState";
import produce from "immer";

export default (state = initialState, action: Actions) => {
  switch (action.type) {
    case ActionTypes.GET_ACCOUNT_DATA: {
      const { data } = action.payload;
      return produce(state, (draft) => {
        draft.email_address = data.email_address || "";
        draft.loggedIn = data.loggedIn || false;
        draft.token = data.token || "";
      });
    }
    case ActionTypes.POST_ACCOUNT_DATA: {
      const { data } = action.payload;
      return produce(state, (draft) => {
        draft.email_address = data.email || "";
        draft.first_name = data.first_name || "";
        draft.last_name = data.last_name || "";
      });
    }

    default:
      return state;
  }
};
