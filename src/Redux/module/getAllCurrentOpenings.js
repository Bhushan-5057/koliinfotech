import * as types from "./actionTypes";

export const getAllCurrentOpeningsStart = () => ({
  type: types.GET_ALL_CURRENT_OPENINGS_START,
});

export const getAllCurrentOpeningsSuccess = (CurrentOpenings) => ({
  type: types.GET_ALL_CURRENT_OPENINGS_SUCCESS,
  payload: CurrentOpenings,
});

export const getAllCurrentOpeningsError = (error) => ({
  type: types.GET_ALL_CURRENT_OPENINGS_ERROR,
  payload: error,
});

