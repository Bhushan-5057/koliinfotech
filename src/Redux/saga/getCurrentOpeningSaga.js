import * as types from "../module/actionTypes";
import { 
  takeLatest,
  put,
  all,
  fork,
  call
 } from "redux-saga/effects";

import {
  getAllCurrentOpeningsSuccess,
  getAllCurrentOpeningsError,
} from "../module/getAllCurrentOpenings";
import { getAllCurrentOpeningAPI } from "../services/api";

export function* onGetAllCurrentOpeningStartAsync() {
  try {
    const response = yield call(getAllCurrentOpeningAPI);
    if (response.data.status == 200) {
      yield put(getAllCurrentOpeningsSuccess(response));
    }
  } catch (error) {
    yield put(getAllCurrentOpeningsError(error.response));
  }
}

export function* onGetCurrentOpening() {
  yield takeLatest(
    types.GET_ALL_CURRENT_OPENINGS_START,
    onGetAllCurrentOpeningStartAsync
  );
}

const CurrentOpeningSagas = [fork(onGetCurrentOpening)];

export default function* COpeningSaga() {
  yield all([...CurrentOpeningSagas]);
}
