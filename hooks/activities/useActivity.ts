import { ActivityResult } from "../types";
import { useEffect, useState } from "react";
import { useSelector } from "../";
import { selectActivity, selectError } from "../../store/requests";

export function useActivity(type: string, payload?: any): ActivityResult {
  const [cancel, setCancel] = useState(false);
  const loading = useSelector((state) =>
    selectActivity(state.requests, { type, payload })
  );
  const error = useSelector((state) =>
    selectError(state.requests, { type, payload })
  );

  useEffect(() => {
    error && setCancel(true);
  }, [error]);

  function reset() {
    setCancel(false);
  }

  return [{ loading, error: cancel }, reset];
}
