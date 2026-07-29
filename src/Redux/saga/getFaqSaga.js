import * as types from "../module/actionTypes";
import { takeLatest, put, all, fork, call } from "redux-saga/effects";
import {
    getFaqSuccess,
    getFaqError,
} from "../module/getFaqAction";
import { getWhoWeAreFaqAPI } from "../services/api";

function* onGetFaqStartAsync() {
    try {
        const response = yield call(getWhoWeAreFaqAPI);
        if (response.data.status == 200 || response.data.success) {
            yield put(getFaqSuccess(response.data.data));
        }
    } catch (error) {
        yield put(getFaqError(error.response));
    }
}

function* onGetFaq() {
    yield takeLatest(types.GET_FAQ_START, onGetFaqStartAsync);
}

const faqSagas = [fork(onGetFaq)];

export default function* getFaqSaga() {
    yield all([...faqSagas]);
}
