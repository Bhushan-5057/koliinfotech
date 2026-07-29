import * as types from "./actionTypes";

export const getAllOurCultureStart = () => ({
    type: types.GETALL_OUR_CULTURE_START,
});

export const getAllOurCultureSuccess = (cultureData) => ({
    type: types.GETALL_OUR_CULTURE_SUCCESS,
    payload: cultureData,
});

export const getAllOurCultureError = (error) => ({
    type: types.GETALL_OUR_CULTURE_ERROR,
    payload: error,
});
