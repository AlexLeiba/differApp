import { createSelector } from "reselect";
import { isEqual } from "lodash";

import { State } from "./types";

interface SelectOneProps {
  type: string;
  payload?: any;
}

interface SelectMultipleProps {
  types: Array<string | null>;
  payload?: any;
}

export const selectActivity = createSelector(
  ({ activities }: State, { type, payload }: SelectOneProps) => {
    if (payload !== undefined) {
      return !!activities.find(
        (activity) =>
          activity.type === type && isEqual(activity.payload, payload)
      );
    }

    return !!activities.find((activity) => activity.type === type);
  },
  (activity) => activity
);

export const selectActivityPayload = createSelector(
  (state: State, { type }: SelectOneProps) =>
    state.activities.find((activity) => activity.type === type),
  (activity) => (activity ? activity.payload : null)
);

export const selectActivities = createSelector(
  ({ activities }: State, { types, payload }: SelectMultipleProps) => {
    if (payload !== undefined) {
      return (
        activities.filter(
          (activity) =>
            types.includes(activity.type) && activity.payload === payload
        ).length > 0
      );
    }

    return (
      activities.filter((activity) => types.includes(activity.type)).length > 0
    );
  },
  (activities) => activities
);

export const selectError = createSelector(
  ({ errors }: State, { type, payload }: SelectOneProps) => {
    if (payload !== undefined) {
      return !!errors.find(
        (error) => error.type === type && isEqual(error.payload, payload)
      );
    }

    return !!errors.find((error) => error.type === type);
  },
  (error) => error
);

export const selectErrorMessage = createSelector(
  (state: State, { type }: SelectOneProps) =>
    state.errors.find((error) => error.type === type),
  (err) => (err ? err.error : null)
);

export const selectErrors = createSelector(
  ({ errors }: State, { types, payload }: SelectMultipleProps) => {
    if (payload !== undefined) {
      return (
        errors.filter(
          (error) => types.includes(error.type) && error.payload === payload
        ).length > 0
      );
    }

    return errors.filter((error) => types.includes(error.type)).length > 0;
  },
  (errors) => errors
);

export const selectAllErrors = createSelector(
  (state: State) => state.errors,
  (errors) => errors
);

export const selectLatestError = createSelector(
  (state: State) =>
    state.errors.length ? state.errors[state.errors.length - 1] : null,
  (error) => error
);
