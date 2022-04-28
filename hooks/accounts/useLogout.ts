import { useActivity } from "../../hooks/activities/useActivity";
import { useDispatch, useSelector } from "../../hooks";
import {
  ActionTypes,
  getAccountDataSelector,
  logUserOut,
} from "../../store/accounts";

export function useLogOut() {
  const dispatch = useDispatch();
  const data = useSelector((state) => getAccountDataSelector(state.myAccount));
  const [{ loading, error }] = useActivity(ActionTypes.LOG_OUT);

  function handler() {
    dispatch(logUserOut());
  }

  return [{ loading, error, data }, handler];
}
