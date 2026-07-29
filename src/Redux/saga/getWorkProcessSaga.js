import * as types from "../module/actionTypes";
import { takeLatest, put, all, fork, call } from "redux-saga/effects";
import { getWorkProcessSuccess, getWorkProcessError } from "../module/getWorkProcessAction";
import { getWorkProcessAPI } from "../services/api";

function* onGetWorkProcessStartAsync() {
    try {
        const response = yield call(getWorkProcessAPI);
        if (response.data.status == 200 || response.data.success) {
            yield put(getWorkProcessSuccess(response.data.data));
        }
    } catch (error) {
        yield put(getWorkProcessError(error.response));
    }
}

function* onGetWorkProcess() {
    yield takeLatest(types.GET_WORK_PROCESS_START, onGetWorkProcessStartAsync);
}

const workProcessSagas = [fork(onGetWorkProcess)];

export default function* workProcessSaga() {
    yield all([...workProcessSagas]);
}
