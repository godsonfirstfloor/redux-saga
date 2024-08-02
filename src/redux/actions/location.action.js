import { LIST_ALL_LOCATION } from "./types";

export const setCardsList = (onSuccess, onError) => {
  return {
    type: LIST_ALL_LOCATION,
    onSuccess,
    onError,
  };
};
