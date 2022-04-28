import { ThunkAction, ThunkDispatch as Dispatch } from "redux-thunk";
import { ApiFactory } from "api";
import { ApplicationState } from "./root";

import { Actions as AccountsActions } from "./accounts";
import { Actions as PostActions } from "./posts";
import { Actions as ActivitiesActions } from "./requests";

type ApplicationAction = AccountsActions | PostActions | ActivitiesActions;

export type Thunk = ThunkAction<
  Promise<void>,
  ApplicationState,
  ThunkContext,
  ApplicationAction
>;
export type ThunkDispatch = Dispatch<
  ApplicationState,
  ThunkContext,
  ApplicationAction
>;

export interface ThunkContext {
  api: ApiFactory;
}
