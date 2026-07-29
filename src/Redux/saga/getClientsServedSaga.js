import * as types from "../module/actionTypes";
import { takeLatest, put, all, fork, call } from "redux-saga/effects";
import {
    getClientsServedSuccess,
    getClientsServedError,
} from "../module/getClientsServedAction";
import { getClientsWeServedAPI } from "../services/api";

function* onGetClientsServedStartAsync() {
    try {
        const response = yield call(getClientsWeServedAPI);
        if (response.data.status == 200 || response.data.success) {
            yield put(getClientsServedSuccess(response.data.data));
        }
    } catch (error) {
        yield put(getClientsServedError(error.response));
    }
}

function* onGetClientsServed() {
    yield takeLatest(types.GET_CLIENTS_SERVED_START, onGetClientsServedStartAsync);
}

const clientsServedSagas = [fork(onGetClientsServed)];

export default function* getClientsServedSaga() {
    yield all([...clientsServedSagas]);
}
