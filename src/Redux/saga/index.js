import { all } from "redux-saga/effects";
import employeesSaga from "./getAllEmployeeSaga";
import createApplyJobSaga from "./createApplyJobSaga";

export default function* rootSaga() {
  yield all([employeesSaga(), createApplyJobSaga()]);
}
