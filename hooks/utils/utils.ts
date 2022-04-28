import { ApplicationState } from "../../store";
import {
  useDispatch as useReduxDispatch,
  useSelector as useReduxSelector,
} from "react-redux";

export function useSelector<T>(selector: (state: ApplicationState) => T) {
  return useReduxSelector((state: ApplicationState) => selector(state));
}

export function useDispatch() {
  const dispatch = useReduxDispatch();
  return dispatch;
}
