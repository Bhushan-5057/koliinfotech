import * as types from "../module/actionTypes";
import { 
  takeLatest,
  put,
  all,
  fork,
  call
 } from "redux-saga/effects";

import { 
  getAllOurClientSuccess,
  getAllOurClientError,
  getSingleClientSuccess,
  getSingleClientError
 } from "../module/getOurClientsAction";


import { getAllOurAllClientAPI,getSingleClientAPI } from "../services/api";

function* onGetALLClientStartAsync() {
  try {
    const response = yield call(getAllOurAllClientAPI);
    if (response.data.status == 200) {
      yield put(getAllOurClientSuccess(response.data));  
    }
  } catch (error) {
    yield put(getAllOurClientError(error.response));
  }
}

export function* getSingleClientSagatAsync({ payload }) {
  console.log('single client is~~~.',payload);
  try {
      const response = yield call(getSingleClientAPI, payload);
      if (response.data.status == 200) {
          yield put(getSingleClientSuccess(response));
      }
  } catch (error) {
      yield put(getSingleClientError(error.response));
  }
}

function* onGetAllClient() {
  yield takeLatest(types.GETALL_OUR_CLIENT_START, onGetALLClientStartAsync);
}

function* onGetSingleClient() {
  yield takeLatest(types.GET_SINGLE_CLIENT_START, getSingleClientSagatAsync);
}
const clientsSagas = [
  fork(onGetAllClient),
  fork(onGetSingleClient)
];

export default function* clientSaga() {
  yield all([...clientsSagas]);
}
