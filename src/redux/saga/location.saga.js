import { call, takeLatest } from "redux-saga/effects";
import { LIST_ALL_LOCATION } from "../actions/types";
import { locationApi } from "../api/location.api";

export function* locationGetAll(action) {
  try {
    const res = yield call(locationApi);
    console.log(res);
    if (res.status == "200") {
      yield action.onSuccess(res);
    } else {
      yield action.onError(res);
    }
  } catch (error) {
    yield action.onError({
      data: {
        message: "Something went wrong",
      },
    });
  }
}

export function* allLocations() {
  yield takeLatest(LIST_ALL_LOCATION, locationGetAll);
}
