import { useActivity } from "../activities/useActivity";
import { OperationResult } from "../types";
import { useDispatch, useSelector } from "../";
import {
  ActionTypes,
  getAccountData,
  getAccountDataSelector,
} from "../../store/accounts";

export function useLogin(): OperationResult<
  string,
  (email: string, password: string) => void
> {
  const dispatch = useDispatch();
  const data = useSelector(
    (state: {
      myAccount: {
        token: string;
        first_name: string;
        last_name: string;
        email_address: string;
        loggedIn: boolean;
      };
    }) => getAccountDataSelector(state.myAccount)
  );
  const [{ loading, error }] = useActivity(ActionTypes.GET_ACCOUNT_DATA);

  function handler(email: string, password: string) {
    dispatch(getAccountData(email, password));
  }

  return [{ loading, error, data }, handler];
}
