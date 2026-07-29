import * as types from "../module/actionTypes";
import {
    takeLatest,
    put,
    all,
    fork,
    call
} from "redux-saga/effects";

import { getSingleOpeningsSuccess, getSingleOpeningsError } from "../module/getSingleOpenings";
import { getSingleOpeningsAPI } from "../services/api";

export function* getSingleOpeningsSagatAsync({ payload }) {
    try {
        const response = yield call(getSingleOpeningsAPI, payload.Id);
        if (response.data.status == 200) {
            yield put(getSingleOpeningsSuccess(response));
        }
    } catch (error) {
        yield put(getSingleOpeningsError(error.response));
    }
}

export function* onGetSingleOpenings() {
    yield takeLatest(
        types.GET_SINGLE_OPENINGS,
        getSingleOpeningsSagatAsync
    );
}

const SingleOpeningSagas = [fork(onGetSingleOpenings)];

export default function* SingleOpeningSaga() {
    yield all([...SingleOpeningSagas]);
}
