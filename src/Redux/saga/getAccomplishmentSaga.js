import * as types from "../module/actionTypes";
import { takeLatest, put, all, fork, call } from "redux-saga/effects";
import {
    getAccomplishmentsSuccess,
    getAccomplishmentsError,
} from "../module/getAccomplishmentsAction";
import { getAccomplishmentsAPI } from "../services/api";

function* onGetAccomplishmentsStartAsync() {
    try {
        const response = yield call(getAccomplishmentsAPI);
        if (response.data.status == 200 || response.data.success) {
            yield put(getAccomplishmentsSuccess(response.data.data));
        }
    } catch (error) {
        yield put(getAccomplishmentsError(error.response));
    }
}

function* onGetAccomplishments() {
    yield takeLatest(types.GET_ACCOMPLISHMENTS_START, onGetAccomplishmentsStartAsync);
}

const accomplishmentSagas = [fork(onGetAccomplishments)];

export default function* accomplishmentSaga() {
    yield all([...accomplishmentSagas]);
}
