import * as types from "../module/actionTypes";
import { 
  takeLatest,
  put,
  all,
  fork,
  call
 } from "redux-saga/effects";

import {
  getAllOurBlogSuccess,
  getAllOurBlogError,
} from "../module/getOurBlogAction";

import { getAllOurblogAPI } from "../services/api";

export function* onGetALLBlogStartAsync() {
  try {
    const response = yield call(getAllOurblogAPI);
    if (response.data.status == 200) {
      yield put(getAllOurBlogSuccess(response));
    }
  } catch (error) {
    yield put(getAllOurBlogError(error.response));
  }
}

export function* onGetAllBlog() {
  yield takeLatest(types.GETALL_OUR_BLOG_START, onGetALLBlogStartAsync);
}

const blogSagas = [fork(onGetAllBlog)];

export default function* blogSaga() {
  yield all([...blogSagas]);
}
