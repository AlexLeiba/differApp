import { combineReducers } from "redux";

import { State as Activities, reducer as activities } from "./requests";
import { State as Accounts, reducer as myAccount } from "./accounts";
import { State as Posts, reducer as posts } from "./posts";

export interface ApplicationState {
  myAccount: Accounts;
  posts: Posts;
  requests: Activities;
}

export default combineReducers<ApplicationState>({
  myAccount,
  posts,
  requests: activities,
});
