import * as types from "./actionTypes";

export const getAllOurClientStart = () => ({
  type: types.GETALL_OUR_CLIENT_START,
});

export const getAllOurClientSuccess = (clients) => ({
  type: types.GETALL_OUR_CLIENT_SUCCESS,
  payload: clients,
});

export const getAllOurClientError = (error) => ({
  type: types.GETALL_OUR_CLIENT_ERROR,
  payload: error,
});

export const getSingleClientStart = (id) => ({
  type: types.GET_SINGLE_CLIENT_START,
  payload:id
});

export const getSingleClientSuccess = (Id) => ({
  type: types.GET_SINGLE_CLIENT_SUCCESS,
  payload: Id,
});

export const getSingleClientError = (error) => ({
  type: types.GET_SINGLE_CLIENT_ERROR,
  payload: error,
});
