import { Action } from "redux";

export interface Activity {
  uuid: string;
  type: string | null;
  payload?: any;
}

export interface ActivityError extends Activity {
  error: string | null;
  timeout?: number;
}

export interface State {
  activities: Activity[];
  errors: ActivityError[];
}

export enum ActionTypes {
  ACTIVITY = "store/requests/ACTIVITY",
  ERROR = "store/requests/ERROR",
}

export interface ActivityAction extends Action {
  type: ActionTypes.ACTIVITY;
  payload: Activity;
}

export interface ActivityErrorAction extends Action {
  type: ActionTypes.ERROR;
  payload: ActivityError;
}

export type Actions = ActivityAction | ActivityErrorAction;
