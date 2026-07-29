import { takeLatest, call, put } from "redux-saga/effects";
import { getLifeAtKoliAPI } from "../services/api";
import {
    getLifeAtKoliSuccess,
    getLifeAtKoliError,
} from "../module/getLifeAtKoliAction";
import { GET_LIFE_AT_KOLI_START } from "../module/actionTypes";

function* getLifeAtKoliSagaWorker(action) {
    try {
        const response = yield call(getLifeAtKoliAPI, action.payload);
        if (response.status === 200) {
            yield put(getLifeAtKoliSuccess(response.data));
        } else {
            yield put(getLifeAtKoliError(response.data));
        }
    } catch (error) {
        yield put(getLifeAtKoliError(error.message));
    }
}

export default function* getLifeAtKoliSaga() {
    yield takeLatest(GET_LIFE_AT_KOLI_START, getLifeAtKoliSagaWorker);
}
