import { takeLatest, put, call, fork, all } from "redux-saga/effects";
import * as types from "../module/actionTypes";
import { getOurCultureAPI } from "../services/api";
import { getAllOurCultureSuccess, getAllOurCultureError } from "../module/getOurCultureAction";

function* onLoadOurCultureAsync() {
    try {
        const response = yield call(getOurCultureAPI);
        if (response.status === 200) {
            yield put(getAllOurCultureSuccess(response.data));
        }
    } catch (error) {
        yield put(getAllOurCultureError(error.response?.data));
    }
}

function* watchOnLoadOurCulture() {
    yield takeLatest(types.GETALL_OUR_CULTURE_START, onLoadOurCultureAsync);
}

const cultureSagas = [fork(watchOnLoadOurCulture)];

export default function* ourCultureSaga() {
    yield all([...cultureSagas]);
}
