import { ADD_DATA } from "../actions/types";

const cityData = (state = [], action) => {
  switch (action.type) {
    case ADD_DATA:
      return [...(action.data || [])];
    default:
      return state;
  }
};

export default cityData;
