import * as types from "../module/actionTypes";
import {
    takeLatest,
    put,
    all,
    fork,
    call
} from "redux-saga/effects";
import { createApplyJobSuccess, createApplyJobError } from "../module/createApplyJob";
import { createApplyJobAPI } from "../services/api";

export function* createApplyJobAsysn({ payload }) {
    try {
        const response = yield call(createApplyJobAPI, payload);
        if (response.data.status == 200) {
            yield put(createApplyJobSuccess(response));
        }
    } catch (error) {
        yield put(createApplyJobError(error.response));
    }
}

export function* reateApplyJob() {
    yield takeLatest(types.CREATE_APPLY_JOB_START, createApplyJobAsysn);
}

const reateApplyJobSagas = [fork(reateApplyJob)];

export default function* createApplyJobSaga() {
    yield all([...reateApplyJobSagas]);
}
