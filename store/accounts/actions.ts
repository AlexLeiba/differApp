import { ActionCreator } from "redux";
import { Thunk } from "../types";
import { Account, AccountRegister } from "./types";
import {
  ActionTypes,
  GetAccountDataAction,
  PostAccountDataAction,
  LogOutUserAccountAction,
} from "./types";
import "react-native-get-random-values";
import { v4 as uuid } from "uuid";
import { beginActivity, endActivity, setError } from "../requests";
import AsyncStorage from "@react-native-async-storage/async-storage";

export const getAccountDataAction: ActionCreator<GetAccountDataAction> = (
  data: Partial<Account>
) => ({
  type: ActionTypes.GET_ACCOUNT_DATA,
  payload: {
    data: data,
  },
});

export const postAccountDataAction: ActionCreator<PostAccountDataAction> = (
  data: Partial<AccountRegister>
) => ({
  type: ActionTypes.POST_ACCOUNT_DATA,
  payload: {
    data: data,
  },
});

export const logOutUserAccountAction: ActionCreator<LogOutUserAccountAction> = (
  data: Partial<Account>
) => ({
  type: ActionTypes.LOG_OUT,
  payload: {
    data: data,
  },
});

export const postAccountData =
  (
    first_name: string,
    last_name: string,
    email: string,
    password: string
  ): Thunk =>
  async (dispatch, getState, context) => {
    const activityId = uuid();
    try {
      await dispatch(
        beginActivity({ type: ActionTypes.POST_ACCOUNT_DATA, uuid: activityId })
      );
      const data = await context.api
        .auth()
        .register(first_name, last_name, email, password);
      dispatch(
        postAccountDataAction({
          first_name: data.first_name,
          last_name: data.last_name,
          email: data.email,
          password: data.password,
        })
      );
    } catch (e: any) {
      await dispatch(
        setError({
          type: ActionTypes.POST_ACCOUNT_DATA,
          error: e.message,
          uuid: activityId,
        })
      );
    } finally {
      await dispatch(endActivity({ uuid: activityId }));
    }
  };

export const getAccountData =
  (phoneNumber: string, code: string): Thunk =>
  async (dispatch, getState, context) => {
    const activityId = uuid();
    try {
      await dispatch(
        beginActivity({ type: ActionTypes.GET_ACCOUNT_DATA, uuid: activityId })
      );
      // const { token } = await context.api.auth().login(phoneNumber, code);
      // sessionStorage.setItem("token", token);
      const token = await AsyncStorage.getItem("@token");
      dispatch(getAccountDataAction({ token: token, loggedIn: true }));
    } catch (e: any) {
      await dispatch(
        setError({
          type: ActionTypes.GET_ACCOUNT_DATA,
          error: e.message,
          uuid: activityId,
        })
      );
    } finally {
      await dispatch(endActivity({ uuid: activityId }));
    }
  };

export const logUserOut = (): Thunk => async (dispatch, getState, context) => {
  const activityId = uuid();
  try {
    await dispatch(
      beginActivity({ type: ActionTypes.LOG_OUT, uuid: activityId })
    );
    await AsyncStorage.setItem("@token", "");
    dispatch(logOutUserAccountAction({ loggedIn: false, token: undefined }));
  } catch (e: any) {
    await dispatch(
      setError({
        type: ActionTypes.LOG_OUT,
        error: e.message,
        uuid: activityId,
      })
    );
  } finally {
    await dispatch(endActivity({ uuid: activityId }));
  }
};
