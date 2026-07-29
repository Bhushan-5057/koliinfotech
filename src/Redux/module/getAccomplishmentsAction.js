import * as types from "./actionTypes";

export const getAccomplishmentsStart = () => ({
    type: types.GET_ACCOMPLISHMENTS_START,
});

export const getAccomplishmentsSuccess = (data) => ({
    type: types.GET_ACCOMPLISHMENTS_SUCCESS,
    payload: data,
});

export const getAccomplishmentsError = (error) => ({
    type: types.GET_ACCOMPLISHMENTS_ERROR,
    payload: error,
});
