import { createSelector } from "reselect";
import { State } from "./types";

export const getAccountDataSelector = createSelector(
  (state: State) => {
    return state.token;
  },
  (token) => token
);

export const getLoggedInSelector = createSelector(
  (state: State) => {
    return state.loggedIn;
  },
  (loggedIn) => loggedIn
);
