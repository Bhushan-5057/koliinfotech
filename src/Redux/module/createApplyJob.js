import * as types from "./actionTypes";

export const createApplyJob = (data) => ({
    type: types.CREATE_APPLY_JOB_START,
    payload: data,
});

export const createApplyJobSuccess = (data) => ({
    type: types.CREATE_APPLY_JOB_SUCCESS,
    payload: data,
});

export const createApplyJobError = (error) => ({
    type: types.CREATE_APPLY_JOB_ERROR,
    payload: error,
});
