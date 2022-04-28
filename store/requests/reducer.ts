import initialState from "./initialState";
import { ActionTypes, Actions, State } from "./types";

export default (state: State = initialState, action: Actions): State => {
  switch (action.type) {
    case ActionTypes.ACTIVITY: {
      return {
        ...state,
        activities: action.payload.type
          ? [...state.activities, action.payload]
          : state.activities.filter(
              (activity) => action.payload.uuid !== activity.uuid
            ),
      };
    }

    case ActionTypes.ERROR: {
      return {
        ...state,
        errors: action.payload.type
          ? [...state.errors, action.payload]
          : state.errors.filter((error) => action.payload.uuid !== error.uuid),
      };
    }

    default: {
      return state;
    }
  }
};
