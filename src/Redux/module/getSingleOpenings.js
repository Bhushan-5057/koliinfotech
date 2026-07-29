import * as types from "./actionTypes";

export const getSingleOpenings = (Id) => ({
    type: types.GET_SINGLE_OPENINGS,
    payload: Id,
});

export const getSingleOpeningsSuccess = (Id) => ({
    type: types.GET_SINGLE_OPENINGS_SUCCESS,
    payload: Id,
});

export const getSingleOpeningsError = (error) => ({
    type: types.GET_SINGLE_OPENINGS_ERROR,
    payload: error,
});
