import * as types from "./actionTypes";

export const getFaqStart = () => ({
    type: types.GET_FAQ_START,
});

export const getFaqSuccess = (faq) => ({
    type: types.GET_FAQ_SUCCESS,
    payload: faq,
});

export const getFaqError = (error) => ({
    type: types.GET_FAQ_ERROR,
    payload: error,
});
