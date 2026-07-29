import * as types from "../module/actionTypes";
import { 
  takeLatest,
  put,
  all,
  fork,
  call
 } from "redux-saga/effects";

import {
  getAllOurProductSuccess,
  getAllOurProductError,
} from "../module/getOurProductAction";
import { getAllOurProductAPI } from "../services/api";

export function* onGetALLProductStartAsync() {
  try {
    const response = yield call(getAllOurProductAPI);
    if (response.data.status == 200) {
      yield put(getAllOurProductSuccess(response));
    }
  } catch (error) {
    yield put(getAllOurProductError(error.response));
  }
}

export function* onGetAllProduct() {
  yield takeLatest(types.GETALL_OUR_PRODUCT_START, onGetALLProductStartAsync);
}
const productsSagas = [fork(onGetAllProduct)];
export default function* productSaga() {
  yield all([...productsSagas]);
}
