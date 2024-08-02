import { all } from "redux-saga/effects";
import { allLocations } from "./location.saga";

export default function* rootSaga() {
  yield all([allLocations()]);
}
