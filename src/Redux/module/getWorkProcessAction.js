import * as types from "./actionTypes";

export const getWorkProcessStart = () => ({
    type: types.GET_WORK_PROCESS_START,
});

export const getWorkProcessSuccess = (data) => ({
    type: types.GET_WORK_PROCESS_SUCCESS,
    payload: data,
});

export const getWorkProcessError = (error) => ({
    type: types.GET_WORK_PROCESS_ERROR,
    payload: error,
});
