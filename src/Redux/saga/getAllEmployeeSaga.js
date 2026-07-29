import * as types from "../module/actionTypes";
import { 
  takeLatest,
  put,
  all,
  fork,
  call
 } from "redux-saga/effects";

import {
  getAllEmployeeSuccess,
  getAllEmployeeError,
} from "../module/getAllEmployee";

import { getAllEmployeeAPI } from "../services/api";

export function* onGetAllEmployeeAsync() {
  try {
    const response = yield call(getAllEmployeeAPI);
    if (response.data.status == 200) {
      yield put(getAllEmployeeSuccess(response));
      console.log("response from saga",response);
    }
  } catch (error) {
    yield put(getAllEmployeeError(error.response));
  }
}

export function* onGetAllEmployee() {
  yield takeLatest(types.GETALL_EMPLOYEE_START, onGetAllEmployeeAsync);
}

const employeeSagas = [fork(onGetAllEmployee)];

export default function* employeesSaga() {
  yield all([...employeeSagas]);
}
