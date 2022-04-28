import { Action } from "redux";

export interface State extends Account {
  token: string;
  // 3 types of accounts
}

export interface Account {
  first_name: string;
  last_name: string;
  email_address: string;
  token?: string;
  loggedIn: boolean;
}

export interface AccountRegister {
  avatar: {
    large: string;
  };
  id: string;
  dateRegistered: Date;
  online: false;
  _id: string;
  first_name: string;
  last_name: string;
  email: string;
  profile_URL: string;
  password: string;
  __v: number;
}

export enum ActionTypes {
  GET_ACCOUNT_DATA = "store/accounts/GET_ACCOUNT_DATA",
  POST_ACCOUNT_DATA = "store/accounts/POST_ACCOUNT_DATA",
  LOG_OUT = "store/accounts/LOG_OUT",
}

export interface GetAccountDataAction extends Action {
  type: ActionTypes.GET_ACCOUNT_DATA;
  payload: { data: Partial<Account> };
}

export interface PostAccountDataAction extends Action {
  type: ActionTypes.POST_ACCOUNT_DATA;
  payload: { data: Partial<AccountRegister> };
}

export interface LogOutUserAccountAction extends Action {
  type: ActionTypes.LOG_OUT;
  payload: { data: Partial<Account> };
}

export type Actions =
  | GetAccountDataAction
  | PostAccountDataAction
  | LogOutUserAccountAction;
