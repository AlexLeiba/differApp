import { useActivity } from "../../hooks/activities/useActivity";
import { OperationResult } from "../../hooks/types";
import { useDispatch, useSelector } from "../../hooks";
import {
  ActionTypes,
  postAccountData,
  getAccountDataSelector,
} from "../../store/accounts";

export function useRegister(): OperationResult<
  string,
  (
    first_name: string,
    last_name: string,
    email: string,
    password: string
  ) => void
> {
  const dispatch = useDispatch();
  const data = useSelector((state) => getAccountDataSelector(state.myAccount));
  const [{ loading, error }] = useActivity(ActionTypes.POST_ACCOUNT_DATA);

  function handler(
    first_name: string,
    last_name: string,
    email: string,
    password: string
  ) {
    console.log(first_name, last_name, email, password);
    dispatch(postAccountData(first_name, last_name, email, password));
  }
  return [{ loading, error, data }, handler];
}
